// Supabase Edge Function for AI Question Generation
// Uses Google Gemini to generate Arabic trivia questions
// With fallback to pre-generated questions if API fails

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface GenerateRequest {
  categoryId: string
  categoryName: string
  difficulty: 'easy' | 'medium' | 'hard' | 'expert'
  count: number
  questionType?: 'mcq' | 'open'
}

interface Question {
  questionText: string
  questionType: 'mcq' | 'open'
  correctAnswer: string
  options?: string[]
  difficulty: string
  points: number
}

const difficultyPoints: Record<string, number> = {
  easy: 100,
  medium: 200,
  hard: 300,
  expert: 500
}

// Fallback questions when AI is unavailable (organized by category keywords)
const fallbackQuestions: Record<string, Question[]> = {
  'رياضة': [
    { questionText: 'كم عدد اللاعبين في فريق كرة القدم؟', questionType: 'mcq', correctAnswer: '11 لاعباً', options: ['9 لاعبين', '10 لاعبين', '11 لاعباً', '12 لاعباً'], difficulty: 'easy', points: 100 },
    { questionText: 'في أي عام أقيمت أول بطولة كأس عالم لكرة القدم؟', questionType: 'mcq', correctAnswer: '1930', options: ['1928', '1930', '1934', '1950'], difficulty: 'medium', points: 200 },
    { questionText: 'ما هي الدولة التي فازت بأكبر عدد من بطولات كأس العالم؟', questionType: 'mcq', correctAnswer: 'البرازيل', options: ['ألمانيا', 'إيطاليا', 'البرازيل', 'الأرجنتين'], difficulty: 'medium', points: 200 },
    { questionText: 'كم مرة فازت البرازيل بكأس العالم؟', questionType: 'mcq', correctAnswer: '5 مرات', options: ['3 مرات', '4 مرات', '5 مرات', '6 مرات'], difficulty: 'hard', points: 300 },
  ],
  'جغرافيا': [
    { questionText: 'ما هي عاصمة اليابان؟', questionType: 'mcq', correctAnswer: 'طوكيو', options: ['أوساكا', 'طوكيو', 'كيوتو', 'هيروشيما'], difficulty: 'easy', points: 100 },
    { questionText: 'ما هو أطول نهر في العالم؟', questionType: 'mcq', correctAnswer: 'نهر النيل', options: ['نهر الأمازون', 'نهر النيل', 'نهر المسيسيبي', 'نهر اليانغتسي'], difficulty: 'medium', points: 200 },
    { questionText: 'كم عدد قارات العالم؟', questionType: 'mcq', correctAnswer: '7 قارات', options: ['5 قارات', '6 قارات', '7 قارات', '8 قارات'], difficulty: 'easy', points: 100 },
    { questionText: 'ما هي أصغر دولة في العالم؟', questionType: 'mcq', correctAnswer: 'الفاتيكان', options: ['موناكو', 'الفاتيكان', 'سان مارينو', 'مالطا'], difficulty: 'medium', points: 200 },
  ],
  'تاريخ': [
    { questionText: 'في أي عام تم فتح مكة؟', questionType: 'mcq', correctAnswer: '8 هجري', options: ['6 هجري', '7 هجري', '8 هجري', '9 هجري'], difficulty: 'medium', points: 200 },
    { questionText: 'من هو مؤسس الدولة الأموية؟', questionType: 'mcq', correctAnswer: 'معاوية بن أبي سفيان', options: ['عبدالملك بن مروان', 'معاوية بن أبي سفيان', 'يزيد بن معاوية', 'مروان بن الحكم'], difficulty: 'medium', points: 200 },
    { questionText: 'متى سقطت الأندلس؟', questionType: 'mcq', correctAnswer: '1492م', options: ['1453م', '1492م', '1517م', '1588م'], difficulty: 'hard', points: 300 },
    { questionText: 'من بنى الأهرامات في مصر؟', questionType: 'mcq', correctAnswer: 'الفراعنة', options: ['الرومان', 'الفراعنة', 'اليونانيون', 'العرب'], difficulty: 'easy', points: 100 },
  ],
  'علوم': [
    { questionText: 'ما هو الرمز الكيميائي للماء؟', questionType: 'mcq', correctAnswer: 'H2O', options: ['CO2', 'H2O', 'O2', 'NaCl'], difficulty: 'easy', points: 100 },
    { questionText: 'كم عدد كواكب المجموعة الشمسية؟', questionType: 'mcq', correctAnswer: '8 كواكب', options: ['7 كواكب', '8 كواكب', '9 كواكب', '10 كواكب'], difficulty: 'easy', points: 100 },
    { questionText: 'ما هي أصغر وحدة في الكائن الحي؟', questionType: 'mcq', correctAnswer: 'الخلية', options: ['الذرة', 'الخلية', 'النسيج', 'العضو'], difficulty: 'easy', points: 100 },
    { questionText: 'ما هو أقرب كوكب للشمس؟', questionType: 'mcq', correctAnswer: 'عطارد', options: ['الزهرة', 'عطارد', 'الأرض', 'المريخ'], difficulty: 'medium', points: 200 },
  ],
  'إسلاميات': [
    { questionText: 'كم عدد سور القرآن الكريم؟', questionType: 'mcq', correctAnswer: '114 سورة', options: ['110 سورة', '112 سورة', '114 سورة', '116 سورة'], difficulty: 'easy', points: 100 },
    { questionText: 'ما هي أطول سورة في القرآن الكريم؟', questionType: 'mcq', correctAnswer: 'سورة البقرة', options: ['سورة آل عمران', 'سورة البقرة', 'سورة النساء', 'سورة المائدة'], difficulty: 'easy', points: 100 },
    { questionText: 'كم عدد أركان الإسلام؟', questionType: 'mcq', correctAnswer: '5 أركان', options: ['4 أركان', '5 أركان', '6 أركان', '7 أركان'], difficulty: 'easy', points: 100 },
    { questionText: 'ما هي أول آية نزلت في القرآن الكريم؟', questionType: 'mcq', correctAnswer: 'اقرأ', options: ['بسم الله', 'الحمد لله', 'اقرأ', 'قل هو الله أحد'], difficulty: 'medium', points: 200 },
  ],
  'تقنية': [
    { questionText: 'من هو مؤسس شركة مايكروسوفت؟', questionType: 'mcq', correctAnswer: 'بيل غيتس', options: ['ستيف جوبز', 'بيل غيتس', 'مارك زوكربيرغ', 'إيلون ماسك'], difficulty: 'easy', points: 100 },
    { questionText: 'ما هي لغة البرمجة الأكثر استخداماً في تطوير الويب؟', questionType: 'mcq', correctAnswer: 'JavaScript', options: ['Python', 'JavaScript', 'Java', 'C++'], difficulty: 'medium', points: 200 },
    { questionText: 'في أي عام تأسست شركة Apple؟', questionType: 'mcq', correctAnswer: '1976', options: ['1974', '1976', '1980', '1984'], difficulty: 'hard', points: 300 },
    { questionText: 'ما اسم نظام التشغيل الخاص بهواتف iPhone؟', questionType: 'mcq', correctAnswer: 'iOS', options: ['Android', 'iOS', 'Windows', 'macOS'], difficulty: 'easy', points: 100 },
  ],
  'أفلام': [
    { questionText: 'ما هو أول فيلم رسوم متحركة من ديزني؟', questionType: 'mcq', correctAnswer: 'سنو وايت', options: ['سندريلا', 'سنو وايت', 'بامبي', 'بينوكيو'], difficulty: 'medium', points: 200 },
    { questionText: 'من أخرج فيلم Titanic؟', questionType: 'mcq', correctAnswer: 'جيمس كاميرون', options: ['ستيفن سبيلبرغ', 'جيمس كاميرون', 'كريستوفر نولان', 'مارتن سكورسيزي'], difficulty: 'medium', points: 200 },
    { questionText: 'كم عدد أفلام Harry Potter؟', questionType: 'mcq', correctAnswer: '8 أفلام', options: ['6 أفلام', '7 أفلام', '8 أفلام', '9 أفلام'], difficulty: 'easy', points: 100 },
  ],
  'سعودي': [
    { questionText: 'ما هي عاصمة المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: 'الرياض', options: ['جدة', 'الرياض', 'مكة', 'الدمام'], difficulty: 'easy', points: 100 },
    { questionText: 'متى تأسست المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: '1932', options: ['1920', '1925', '1932', '1945'], difficulty: 'medium', points: 200 },
    { questionText: 'ما هو اسم المؤسس الملك؟', questionType: 'mcq', correctAnswer: 'عبدالعزيز آل سعود', options: ['فيصل آل سعود', 'عبدالعزيز آل سعود', 'سعود آل سعود', 'خالد آل سعود'], difficulty: 'easy', points: 100 },
  ],
  'كويتي': [
    { questionText: 'متى استقلت دولة الكويت؟', questionType: 'mcq', correctAnswer: '1961', options: ['1958', '1961', '1963', '1965'], difficulty: 'medium', points: 200 },
    { questionText: 'ما هي عملة الكويت؟', questionType: 'mcq', correctAnswer: 'الدينار الكويتي', options: ['الريال', 'الدينار الكويتي', 'الدرهم', 'الجنيه'], difficulty: 'easy', points: 100 },
  ],
  'default': [
    { questionText: 'ما هي عاصمة المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: 'الرياض', options: ['جدة', 'الرياض', 'مكة', 'الدمام'], difficulty: 'easy', points: 100 },
    { questionText: 'كم عدد ألوان قوس قزح؟', questionType: 'mcq', correctAnswer: '7 ألوان', options: ['5 ألوان', '6 ألوان', '7 ألوان', '8 ألوان'], difficulty: 'easy', points: 100 },
    { questionText: 'ما هو أكبر محيط في العالم؟', questionType: 'mcq', correctAnswer: 'المحيط الهادئ', options: ['المحيط الأطلسي', 'المحيط الهادئ', 'المحيط الهندي', 'المحيط المتجمد'], difficulty: 'medium', points: 200 },
    { questionText: 'ما هو الحيوان الأسرع في العالم؟', questionType: 'mcq', correctAnswer: 'الفهد', options: ['الأسد', 'الفهد', 'النمر', 'الحصان'], difficulty: 'easy', points: 100 },
    { questionText: 'كم عدد أيام السنة الكبيسة؟', questionType: 'mcq', correctAnswer: '366 يوم', options: ['364 يوم', '365 يوم', '366 يوم', '367 يوم'], difficulty: 'easy', points: 100 },
    { questionText: 'ما هي أكبر دولة عربية مساحة؟', questionType: 'mcq', correctAnswer: 'الجزائر', options: ['السعودية', 'الجزائر', 'السودان', 'ليبيا'], difficulty: 'medium', points: 200 },
  ]
}

// Get fallback questions based on category name
function getFallbackQuestions(categoryName: string, difficulty: string, count: number): Question[] {
  let questions: Question[] = []

  // Check each category key
  for (const [key, qs] of Object.entries(fallbackQuestions)) {
    if (key !== 'default' && categoryName.includes(key)) {
      questions = [...questions, ...qs]
    }
  }

  // If no specific match, use default
  if (questions.length === 0) {
    questions = fallbackQuestions['default']
  }

  // Filter by difficulty if possible
  const filteredByDifficulty = questions.filter(q => q.difficulty === difficulty)
  const pool = filteredByDifficulty.length > 0 ? filteredByDifficulty : questions

  // Shuffle and return requested count
  const shuffled = pool.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  // Store request data early so we can use it in fallback
  let requestData: GenerateRequest = {
    categoryId: 'fallback',
    categoryName: 'عام',
    difficulty: 'medium',
    count: 1
  }

  try {
    // Parse request body
    requestData = await req.json() as GenerateRequest
    const { categoryId, categoryName, difficulty = 'medium', count = 1, questionType } = requestData

    if (!categoryId || !categoryName) {
      throw new Error('categoryId and categoryName are required')
    }

    const geminiKey = Deno.env.get('GEMINI_API_KEY')

    // If no API key, go straight to fallback
    if (!geminiKey) {
      console.log('No GEMINI_API_KEY configured, using fallback')
      throw new Error('GEMINI_API_KEY not configured')
    }

    const typeInstruction = questionType === 'open'
      ? 'السؤال يجب أن يكون من نوع "open" (إجابة مفتوحة قصيرة)'
      : questionType === 'mcq'
        ? 'السؤال يجب أن يكون من نوع "mcq" (اختيار من متعدد) مع 4 خيارات'
        : 'اختر نوع السؤال المناسب: "mcq" للاختيار من متعدد أو "open" للإجابة المفتوحة'

    const prompt = `أنت مساعد لإنشاء أسئلة ثقافية عربية للعبة سين وجيم.

أنشئ ${count} سؤال/أسئلة في فئة "${categoryName}" بمستوى صعوبة "${difficulty}".

المتطلبات:
- السؤال باللغة العربية الفصحى
- ${typeInstruction}
- إذا كان اختيار من متعدد، قدم 4 خيارات متنوعة وواقعية
- تأكد من صحة المعلومات
- الإجابة يجب أن تكون واضحة وصحيحة
- تجنب الأسئلة الغامضة أو المثيرة للجدل

مستويات الصعوبة:
- easy: أسئلة سهلة يعرفها معظم الناس
- medium: أسئلة متوسطة تتطلب بعض المعرفة
- hard: أسئلة صعبة للمثقفين
- expert: أسئلة للخبراء فقط

أرجع JSON فقط بالتنسيق التالي (بدون أي نص إضافي):
{
  "questions": [
    {
      "questionText": "نص السؤال هنا؟",
      "questionType": "mcq",
      "correctAnswer": "الإجابة الصحيحة",
      "options": ["خيار 1", "خيار 2", "خيار 3", "خيار 4"],
      "difficulty": "${difficulty}",
      "points": ${difficultyPoints[difficulty] || 200}
    }
  ]
}

ملاحظة: إذا كان نوع السؤال "open"، لا تضف حقل "options".`

    // Call Gemini API - using gemini-1.5-flash (most widely available)
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          }
        })
      }
    )

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text()
      console.error('Gemini API error:', geminiResponse.status, errorText)
      throw new Error(`Gemini API error: ${geminiResponse.status}`)
    }

    const geminiData = await geminiResponse.json()

    // Extract text from Gemini response
    const textContent = geminiData.candidates?.[0]?.content?.parts?.[0]?.text
    if (!textContent) {
      throw new Error('No text response from Gemini')
    }

    // Parse the JSON response
    let parsedResponse
    try {
      const jsonMatch = textContent.match(/\{[\s\S]*\}/)
      if (!jsonMatch) {
        throw new Error('No JSON found in response')
      }
      parsedResponse = JSON.parse(jsonMatch[0])
    } catch (parseError) {
      console.error('Failed to parse Gemini response:', textContent)
      throw new Error('Failed to parse Gemini response as JSON')
    }

    // Validate and transform questions
    const questions: Question[] = parsedResponse.questions.map((q: Question) => ({
      questionText: q.questionText,
      questionType: q.questionType,
      correctAnswer: q.correctAnswer,
      options: q.questionType === 'mcq' ? q.options : undefined,
      difficulty: q.difficulty || difficulty,
      points: q.points || difficultyPoints[difficulty] || 200,
      categoryId,
      isAiGenerated: true
    }))

    return new Response(
      JSON.stringify({ questions }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    )
  } catch (error) {
    console.error('Error generating questions:', error)
    console.log('Using fallback questions for:', requestData.categoryName)

    // Use fallback questions instead of returning error
    const fallbackQs = getFallbackQuestions(
      requestData.categoryName,
      requestData.difficulty,
      requestData.count
    )

    const questions = fallbackQs.map(q => ({
      ...q,
      categoryId: requestData.categoryId,
      isAiGenerated: false,
      isFallback: true
    }))

    // Return success with fallback questions and a warning
    return new Response(
      JSON.stringify({
        questions,
        warning: 'تم استخدام أسئلة احتياطية - AI غير متاح حالياً',
        originalError: error.message
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    )
  }
})
