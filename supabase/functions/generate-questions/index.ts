// Supabase Edge Function for AI Question Generation
// Uses Google Gemini to generate Arabic trivia questions

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

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const geminiKey = Deno.env.get('GEMINI_API_KEY')
    if (!geminiKey) {
      throw new Error('GEMINI_API_KEY not configured')
    }

    const { categoryId, categoryName, difficulty = 'medium', count = 1, questionType } = await req.json() as GenerateRequest

    if (!categoryId || !categoryName) {
      throw new Error('categoryId and categoryName are required')
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

    // Call Gemini API
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
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
      console.error('Gemini API error:', errorText)
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
      // Try to extract JSON from the response (in case there's extra text)
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
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    )
  }
})
