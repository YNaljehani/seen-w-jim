// Default categories and questions for the game
// Each category has multiple questions per difficulty for variety
// The game randomly picks one question per point value each game

export const defaultCategories = [
  {
    id: 'sports',
    name: 'رياضة',
    nameEn: 'Sports',
    icon: '⚽',
    questions: [
      // Easy (100)
      { id: 'sp1a', questionText: 'ما هي المدة الرسمية لمباراة كرة القدم؟', questionType: 'mcq', correctAnswer: '90 دقيقة', options: ['60 دقيقة', '80 دقيقة', '90 دقيقة', '120 دقيقة'], difficulty: 'easy', points: 100 },
      { id: 'sp1b', questionText: 'كم عدد اللاعبين في فريق كرة القدم؟', questionType: 'mcq', correctAnswer: '11 لاعب', options: ['9 لاعبين', '10 لاعبين', '11 لاعب', '12 لاعب'], difficulty: 'easy', points: 100 },
      { id: 'sp1c', questionText: 'ما هي الرياضة التي تستخدم فيها مضرب وكرة صفراء صغيرة؟', questionType: 'mcq', correctAnswer: 'التنس', options: ['كرة الريشة', 'التنس', 'الاسكواش', 'تنس الطاولة'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'sp2a', questionText: 'أين أقيمت أول بطولة كأس عالم لكرة القدم عام 1930؟', questionType: 'mcq', correctAnswer: 'الأوروغواي', options: ['البرازيل', 'الأوروغواي', 'إيطاليا', 'فرنسا'], difficulty: 'medium', points: 200 },
      { id: 'sp2b', questionText: 'من هو هداف كأس العالم 2022 في قطر؟', questionType: 'mcq', correctAnswer: 'كيليان مبابي', options: ['كيليان مبابي', 'ليونيل ميسي', 'أوليفييه جيرو', 'جوليان ألفاريز'], difficulty: 'medium', points: 200 },
      { id: 'sp2c', questionText: 'كم عدد الأشواط في مباراة كرة السلة وفق قوانين NBA؟', questionType: 'mcq', correctAnswer: '4 أشواط', options: ['2 شوطين', '3 أشواط', '4 أشواط', '5 أشواط'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'sp3a', questionText: 'من هو اللاعب الوحيد الذي فاز بكأس العالم ثلاث مرات؟', questionType: 'mcq', correctAnswer: 'بيليه', options: ['مارادونا', 'بيليه', 'رونالدو', 'زيدان'], difficulty: 'hard', points: 300 },
      { id: 'sp3b', questionText: 'ما هو النادي الذي فاز بأكبر عدد من بطولات دوري أبطال أوروبا؟', questionType: 'mcq', correctAnswer: 'ريال مدريد', options: ['ريال مدريد', 'ميلان', 'ليفربول', 'بايرن ميونخ'], difficulty: 'hard', points: 300 },
      { id: 'sp3c', questionText: 'في أي رياضة يُستخدم مصطلح "إيس" (Ace)؟', questionType: 'mcq', correctAnswer: 'التنس', options: ['كرة القدم', 'التنس', 'كرة السلة', 'السباحة'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'sp4a', questionText: 'كم يبلغ طول ملعب كرة السلة بالمتر حسب قوانين FIBA؟', questionType: 'open', correctAnswer: '28', difficulty: 'expert', points: 500 },
      { id: 'sp4b', questionText: 'في أي عام فاز المنتخب السعودي على الأرجنتين في كأس العالم؟', questionType: 'open', correctAnswer: '2022', difficulty: 'expert', points: 500 },
      { id: 'sp4c', questionText: 'كم مرة فازت البرازيل بكأس العالم لكرة القدم؟', questionType: 'open', correctAnswer: '5', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'movies',
    name: 'أفلام وسينما',
    nameEn: 'Movies',
    icon: '🎬',
    questions: [
      // Easy (100)
      { id: 'mv1a', questionText: 'ما هو اسم السمكة في فيلم "البحث عن نيمو"؟', questionType: 'mcq', correctAnswer: 'نيمو', options: ['دوري', 'نيمو', 'مارلن', 'جيل'], difficulty: 'easy', points: 100 },
      { id: 'mv1b', questionText: 'من هو بطل فيلم "تايتانيك"؟', questionType: 'mcq', correctAnswer: 'ليوناردو دي كابريو', options: ['براد بيت', 'ليوناردو دي كابريو', 'توم كروز', 'جوني ديب'], difficulty: 'easy', points: 100 },
      { id: 'mv1c', questionText: 'ما اسم الأسد في فيلم ديزني "الأسد الملك"؟', questionType: 'mcq', correctAnswer: 'سيمبا', options: ['موفاسا', 'سيمبا', 'سكار', 'نالا'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'mv2a', questionText: 'من هو المخرج الذي أخرج فيلم "Inception"؟', questionType: 'mcq', correctAnswer: 'كريستوفر نولان', options: ['ستيفن سبيلبرغ', 'كريستوفر نولان', 'جيمس كاميرون', 'ريدلي سكوت'], difficulty: 'medium', points: 200 },
      { id: 'mv2b', questionText: 'ما هو أول فيلم رسوم متحركة طويل من ديزني؟', questionType: 'mcq', correctAnswer: 'سنو وايت والأقزام السبعة', options: ['سنو وايت والأقزام السبعة', 'بينوكيو', 'فانتازيا', 'دمبو'], difficulty: 'medium', points: 200 },
      { id: 'mv2c', questionText: 'من أخرج فيلم "تايتانيك"؟', questionType: 'mcq', correctAnswer: 'جيمس كاميرون', options: ['ستيفن سبيلبرغ', 'جيمس كاميرون', 'كريستوفر نولان', 'مارتن سكورسيزي'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'mv3a', questionText: 'كم عدد أفلام سلسلة "هاري بوتر"؟', questionType: 'mcq', correctAnswer: '8 أفلام', options: ['6 أفلام', '7 أفلام', '8 أفلام', '9 أفلام'], difficulty: 'hard', points: 300 },
      { id: 'mv3b', questionText: 'من هو مخرج فيلم "الأب الروحي"؟', questionType: 'mcq', correctAnswer: 'فرانسيس فورد كوبولا', options: ['فرانسيس فورد كوبولا', 'مارتن سكورسيزي', 'ستيفن سبيلبرغ', 'كوينتن تارانتينو'], difficulty: 'hard', points: 300 },
      { id: 'mv3c', questionText: 'ما هو الفيلم الذي فاز بأوسكار أفضل فيلم عام 2020؟', questionType: 'mcq', correctAnswer: 'طفيلي (Parasite)', options: ['1917', 'طفيلي (Parasite)', 'جوكر', 'ذات مرة في هوليوود'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'mv4a', questionText: 'في أي عام صدر أول فيلم ناطق في تاريخ السينما "مغني الجاز"؟', questionType: 'open', correctAnswer: '1927', difficulty: 'expert', points: 500 },
      { id: 'mv4b', questionText: 'ما هو الفيلم الأعلى إيرادات في تاريخ السينما؟', questionType: 'open', correctAnswer: 'أفاتار', difficulty: 'expert', points: 500 },
      { id: 'mv4c', questionText: 'كم عدد أفلام سلسلة "جيمس بوند" الرسمية حتى فيلم "لا وقت للموت"؟', questionType: 'open', correctAnswer: '25', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'geography',
    name: 'جغرافيا',
    nameEn: 'Geography',
    icon: '🌍',
    questions: [
      // Easy (100)
      { id: 'geo1a', questionText: 'ما هو أطول نهر في العالم؟', questionType: 'mcq', correctAnswer: 'نهر النيل', options: ['نهر الأمازون', 'نهر النيل', 'نهر المسيسيبي', 'نهر اليانغتسي'], difficulty: 'easy', points: 100 },
      { id: 'geo1b', questionText: 'ما هي أكبر قارة في العالم؟', questionType: 'mcq', correctAnswer: 'آسيا', options: ['أفريقيا', 'آسيا', 'أوروبا', 'أمريكا الشمالية'], difficulty: 'easy', points: 100 },
      { id: 'geo1c', questionText: 'ما هي عاصمة فرنسا؟', questionType: 'mcq', correctAnswer: 'باريس', options: ['لندن', 'باريس', 'روما', 'مدريد'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'geo2a', questionText: 'ما هي أصغر دولة في العالم من حيث المساحة؟', questionType: 'mcq', correctAnswer: 'الفاتيكان', options: ['موناكو', 'الفاتيكان', 'سان مارينو', 'ليختنشتاين'], difficulty: 'medium', points: 200 },
      { id: 'geo2b', questionText: 'ما هي عاصمة أستراليا؟', questionType: 'mcq', correctAnswer: 'كانبيرا', options: ['سيدني', 'ملبورن', 'كانبيرا', 'بريزبن'], difficulty: 'medium', points: 200 },
      { id: 'geo2c', questionText: 'ما هي أعلى قمة جبلية في العالم؟', questionType: 'mcq', correctAnswer: 'إيفرست', options: ['كي تو', 'إيفرست', 'كانغشنجونغا', 'مون بلان'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'geo3a', questionText: 'ما هو البحر الذي يفصل بين أوروبا وأفريقيا؟', questionType: 'mcq', correctAnswer: 'البحر الأبيض المتوسط', options: ['البحر الأحمر', 'البحر الأبيض المتوسط', 'بحر العرب', 'البحر الأسود'], difficulty: 'hard', points: 300 },
      { id: 'geo3b', questionText: 'ما هي أكبر دولة عربية من حيث المساحة؟', questionType: 'mcq', correctAnswer: 'الجزائر', options: ['السعودية', 'الجزائر', 'السودان', 'ليبيا'], difficulty: 'hard', points: 300 },
      { id: 'geo3c', questionText: 'ما هي الدولة الوحيدة التي تقع في قارتين؟', questionType: 'mcq', correctAnswer: 'تركيا', options: ['روسيا', 'تركيا', 'مصر', 'إندونيسيا'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'geo4a', questionText: 'كم عدد الدول العربية؟', questionType: 'open', correctAnswer: '22', difficulty: 'expert', points: 500 },
      { id: 'geo4b', questionText: 'كم عدد قارات العالم؟', questionType: 'open', correctAnswer: '7', difficulty: 'expert', points: 500 },
      { id: 'geo4c', questionText: 'كم دولة في قارة أفريقيا؟', questionType: 'open', correctAnswer: '54', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'islamic',
    name: 'إسلاميات',
    nameEn: 'Islamic',
    icon: '🕌',
    questions: [
      // Easy (100)
      { id: 'is1a', questionText: 'ما هو أول ركن من أركان الإسلام؟', questionType: 'mcq', correctAnswer: 'الشهادتان', options: ['الصلاة', 'الشهادتان', 'الصيام', 'الزكاة'], difficulty: 'easy', points: 100 },
      { id: 'is1b', questionText: 'كم عدد أركان الإسلام؟', questionType: 'mcq', correctAnswer: '5 أركان', options: ['4 أركان', '5 أركان', '6 أركان', '7 أركان'], difficulty: 'easy', points: 100 },
      { id: 'is1c', questionText: 'ما هو الشهر الذي يصوم فيه المسلمون؟', questionType: 'mcq', correctAnswer: 'رمضان', options: ['شعبان', 'رمضان', 'شوال', 'محرم'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'is2a', questionText: 'كم عدد سور القرآن الكريم؟', questionType: 'mcq', correctAnswer: '114 سورة', options: ['110 سورة', '112 سورة', '114 سورة', '116 سورة'], difficulty: 'medium', points: 200 },
      { id: 'is2b', questionText: 'ما هي أطول سورة في القرآن الكريم؟', questionType: 'mcq', correctAnswer: 'سورة البقرة', options: ['سورة آل عمران', 'سورة البقرة', 'سورة النساء', 'سورة المائدة'], difficulty: 'medium', points: 200 },
      { id: 'is2c', questionText: 'ما هي أول آية نزلت في القرآن الكريم؟', questionType: 'mcq', correctAnswer: 'اقرأ باسم ربك الذي خلق', options: ['بسم الله الرحمن الرحيم', 'اقرأ باسم ربك الذي خلق', 'الحمد لله رب العالمين', 'قل هو الله أحد'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'is3a', questionText: 'من هو أول مؤذن في الإسلام؟', questionType: 'mcq', correctAnswer: 'بلال بن رباح', options: ['عبدالله بن مسعود', 'بلال بن رباح', 'عمار بن ياسر', 'سلمان الفارسي'], difficulty: 'hard', points: 300 },
      { id: 'is3b', questionText: 'كم عدد الأنبياء المذكورين في القرآن الكريم؟', questionType: 'mcq', correctAnswer: '25 نبياً', options: ['24 نبياً', '25 نبياً', '26 نبياً', '23 نبياً'], difficulty: 'hard', points: 300 },
      { id: 'is3c', questionText: 'ما هي السورة التي تُسمى "قلب القرآن"؟', questionType: 'mcq', correctAnswer: 'سورة يس', options: ['سورة الرحمن', 'سورة يس', 'سورة الملك', 'سورة الكهف'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'is4a', questionText: 'كم عدد أجزاء القرآن الكريم؟', questionType: 'open', correctAnswer: '30', difficulty: 'expert', points: 500 },
      { id: 'is4b', questionText: 'كم مرة ذُكر اسم النبي محمد ﷺ في القرآن الكريم؟', questionType: 'open', correctAnswer: '4', difficulty: 'expert', points: 500 },
      { id: 'is4c', questionText: 'كم عدد آيات سورة البقرة؟', questionType: 'open', correctAnswer: '286', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'technology',
    name: 'تقنية',
    nameEn: 'Technology',
    icon: '💻',
    questions: [
      // Easy (100)
      { id: 'tech1a', questionText: 'ما هو اسم محرك البحث الأشهر في العالم؟', questionType: 'mcq', correctAnswer: 'جوجل', options: ['ياهو', 'جوجل', 'بينغ', 'بايدو'], difficulty: 'easy', points: 100 },
      { id: 'tech1b', questionText: 'ما هو اسم نظام تشغيل هواتف آيفون؟', questionType: 'mcq', correctAnswer: 'iOS', options: ['Android', 'iOS', 'Windows', 'Linux'], difficulty: 'easy', points: 100 },
      { id: 'tech1c', questionText: 'ما هو تطبيق التواصل الأشهر ذو الأيقونة الخضراء؟', questionType: 'mcq', correctAnswer: 'واتساب', options: ['تيليجرام', 'واتساب', 'سناب شات', 'لاين'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'tech2a', questionText: 'في أي عام تأسست شركة أبل؟', questionType: 'mcq', correctAnswer: '1976', options: ['1974', '1976', '1978', '1980'], difficulty: 'medium', points: 200 },
      { id: 'tech2b', questionText: 'من هو مؤسس شركة مايكروسوفت؟', questionType: 'mcq', correctAnswer: 'بيل غيتس', options: ['ستيف جوبز', 'بيل غيتس', 'مارك زوكربيرغ', 'إيلون ماسك'], difficulty: 'medium', points: 200 },
      { id: 'tech2c', questionText: 'ما هو اسم أشهر موقع لمشاركة الفيديوهات؟', questionType: 'mcq', correctAnswer: 'يوتيوب', options: ['فيميو', 'يوتيوب', 'ديلي موشن', 'تويتش'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'tech3a', questionText: 'ما هي لغة البرمجة التي طورها جيمس غوسلينغ عام 1995؟', questionType: 'mcq', correctAnswer: 'جافا', options: ['بايثون', 'جافا', 'سي بلس بلس', 'روبي'], difficulty: 'hard', points: 300 },
      { id: 'tech3b', questionText: 'في أي عام تم إطلاق أول آيفون؟', questionType: 'mcq', correctAnswer: '2007', options: ['2005', '2006', '2007', '2008'], difficulty: 'hard', points: 300 },
      { id: 'tech3c', questionText: 'ما هو اسم الذكاء الاصطناعي الذي طورته شركة OpenAI؟', questionType: 'mcq', correctAnswer: 'ChatGPT', options: ['Siri', 'ChatGPT', 'Alexa', 'Cortana'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'tech4a', questionText: 'ما هو اختصار "HTML"؟', questionType: 'open', correctAnswer: 'HyperText Markup Language', difficulty: 'expert', points: 500 },
      { id: 'tech4b', questionText: 'ما هو اسم أول موقع ويب في التاريخ؟', questionType: 'open', correctAnswer: 'info.cern.ch', difficulty: 'expert', points: 500 },
      { id: 'tech4c', questionText: 'في أي عام تأسس موقع فيسبوك؟', questionType: 'open', correctAnswer: '2004', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'saudi',
    name: 'سعودي',
    nameEn: 'Saudi Arabia',
    icon: '🇸🇦',
    questions: [
      // Easy (100)
      { id: 'sa1a', questionText: 'ما هي أكبر مدينة في السعودية من حيث عدد السكان؟', questionType: 'mcq', correctAnswer: 'الرياض', options: ['جدة', 'الرياض', 'مكة المكرمة', 'الدمام'], difficulty: 'easy', points: 100 },
      { id: 'sa1b', questionText: 'ما هي عاصمة المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: 'الرياض', options: ['جدة', 'الرياض', 'مكة المكرمة', 'المدينة المنورة'], difficulty: 'easy', points: 100 },
      { id: 'sa1c', questionText: 'ما لون علم المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: 'أخضر', options: ['أحمر', 'أخضر', 'أبيض', 'أزرق'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'sa2a', questionText: 'ما اسم المؤسس الأول للدولة السعودية الأولى؟', questionType: 'mcq', correctAnswer: 'محمد بن سعود', options: ['عبدالعزيز بن محمد', 'محمد بن سعود', 'تركي بن عبدالله', 'فيصل بن تركي'], difficulty: 'medium', points: 200 },
      { id: 'sa2b', questionText: 'في أي عام تم توحيد المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: '1932', options: ['1930', '1932', '1934', '1928'], difficulty: 'medium', points: 200 },
      { id: 'sa2c', questionText: 'ما هو اسم رؤية التحول الوطني للمملكة؟', questionType: 'mcq', correctAnswer: 'رؤية 2030', options: ['رؤية 2020', 'رؤية 2025', 'رؤية 2030', 'رؤية 2040'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'sa3a', questionText: 'كم عدد مناطق المملكة العربية السعودية الإدارية؟', questionType: 'mcq', correctAnswer: '13 منطقة', options: ['11 منطقة', '12 منطقة', '13 منطقة', '14 منطقة'], difficulty: 'hard', points: 300 },
      { id: 'sa3b', questionText: 'في أي مدينة يقع مشروع نيوم؟', questionType: 'mcq', correctAnswer: 'تبوك', options: ['الرياض', 'جدة', 'تبوك', 'الدمام'], difficulty: 'hard', points: 300 },
      { id: 'sa3c', questionText: 'ما هو أطول برج في السعودية؟', questionType: 'mcq', correctAnswer: 'برج الساعة في مكة', options: ['برج المملكة', 'برج الفيصلية', 'برج الساعة في مكة', 'برج رافال'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'sa4a', questionText: 'كم يبلغ ارتفاع برج الساعة في مكة المكرمة بالمتر تقريباً؟', questionType: 'open', correctAnswer: '601', difficulty: 'expert', points: 500 },
      { id: 'sa4b', questionText: 'كم يبلغ طول مشروع "ذا لاين" بالكيلومترات؟', questionType: 'open', correctAnswer: '170', difficulty: 'expert', points: 500 },
      { id: 'sa4c', questionText: 'في أي عام ميلادي تأسست الدولة السعودية الأولى؟', questionType: 'open', correctAnswer: '1744', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'kuwait',
    name: 'كويتي',
    nameEn: 'Kuwait',
    icon: '🇰🇼',
    questions: [
      // Easy (100)
      { id: 'kw1a', questionText: 'ما هو اسم أشهر معلم سياحي في الكويت؟', questionType: 'mcq', correctAnswer: 'أبراج الكويت', options: ['برج التحرير', 'أبراج الكويت', 'برج الحمراء', 'المباركية'], difficulty: 'easy', points: 100 },
      { id: 'kw1b', questionText: 'ما هو اسم عملة الكويت؟', questionType: 'mcq', correctAnswer: 'الدينار الكويتي', options: ['الريال', 'الدينار الكويتي', 'الدرهم', 'الجنيه'], difficulty: 'easy', points: 100 },
      { id: 'kw1c', questionText: 'على أي خليج تطل دولة الكويت؟', questionType: 'mcq', correctAnswer: 'الخليج العربي', options: ['البحر الأحمر', 'الخليج العربي', 'بحر العرب', 'البحر المتوسط'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'kw2a', questionText: 'ما هو اسم البرلمان الكويتي؟', questionType: 'mcq', correctAnswer: 'مجلس الأمة', options: ['مجلس الشورى', 'مجلس الأمة', 'مجلس النواب', 'المجلس الوطني'], difficulty: 'medium', points: 200 },
      { id: 'kw2b', questionText: 'في أي عام استقلت الكويت؟', questionType: 'mcq', correctAnswer: '1961', options: ['1959', '1961', '1963', '1965'], difficulty: 'medium', points: 200 },
      { id: 'kw2c', questionText: 'ما هو أشهر سوق شعبي في الكويت؟', questionType: 'mcq', correctAnswer: 'سوق المباركية', options: ['سوق الحريم', 'سوق المباركية', 'سوق الصفاة', 'سوق القناعات'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'kw3a', questionText: 'في أي عام تم تحرير الكويت من الغزو العراقي؟', questionType: 'mcq', correctAnswer: '1991', options: ['1990', '1991', '1992', '1993'], difficulty: 'hard', points: 300 },
      { id: 'kw3b', questionText: 'كم عدد محافظات الكويت؟', questionType: 'mcq', correctAnswer: '6 محافظات', options: ['5 محافظات', '6 محافظات', '7 محافظات', '4 محافظات'], difficulty: 'hard', points: 300 },
      { id: 'kw3c', questionText: 'ما اسم أول حاكم لدولة الكويت من آل الصباح؟', questionType: 'mcq', correctAnswer: 'صباح الأول', options: ['مبارك الكبير', 'صباح الأول', 'جابر الأول', 'عبدالله الأول'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'kw4a', questionText: 'كم عدد أعضاء مجلس الأمة الكويتي المنتخبين؟', questionType: 'open', correctAnswer: '50', difficulty: 'expert', points: 500 },
      { id: 'kw4b', questionText: 'ما هو الاسم القديم للكويت؟', questionType: 'open', correctAnswer: 'القرين', difficulty: 'expert', points: 500 },
      { id: 'kw4c', questionText: 'في أي عام اكتُشف النفط لأول مرة في الكويت؟', questionType: 'open', correctAnswer: '1938', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'music',
    name: 'موسيقى وفن',
    nameEn: 'Music & Art',
    icon: '🎵',
    questions: [
      // Easy (100)
      { id: 'mu1a', questionText: 'من هي المغنية اللبنانية الملقبة بـ "جارة القمر"؟', questionType: 'mcq', correctAnswer: 'فيروز', options: ['نجوى كرم', 'فيروز', 'ماجدة الرومي', 'صباح'], difficulty: 'easy', points: 100 },
      { id: 'mu1b', questionText: 'من هي الملقبة بـ "كوكب الشرق"؟', questionType: 'mcq', correctAnswer: 'أم كلثوم', options: ['فيروز', 'أم كلثوم', 'وردة الجزائرية', 'صباح'], difficulty: 'easy', points: 100 },
      { id: 'mu1c', questionText: 'ما هي الآلة الموسيقية ذات المفاتيح البيضاء والسوداء؟', questionType: 'mcq', correctAnswer: 'البيانو', options: ['الغيتار', 'البيانو', 'الكمان', 'العود'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'mu2a', questionText: 'من هو الملحن الذي لُقب بـ "موسيقار الأجيال"؟', questionType: 'mcq', correctAnswer: 'محمد عبدالوهاب', options: ['رياض السنباطي', 'محمد عبدالوهاب', 'بليغ حمدي', 'فريد الأطرش'], difficulty: 'medium', points: 200 },
      { id: 'mu2b', questionText: 'من هو الفنان السعودي الملقب بـ "فنان العرب"؟', questionType: 'mcq', correctAnswer: 'محمد عبده', options: ['طلال مداح', 'محمد عبده', 'عبدالمجيد عبدالله', 'راشد الماجد'], difficulty: 'medium', points: 200 },
      { id: 'mu2c', questionText: 'ما هي جنسية المغني الراحل فريد الأطرش؟', questionType: 'mcq', correctAnswer: 'سوري', options: ['لبناني', 'سوري', 'مصري', 'فلسطيني'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'mu3a', questionText: 'من هو الرسام الذي رسم لوحة "الموناليزا"؟', questionType: 'mcq', correctAnswer: 'ليوناردو دافنشي', options: ['مايكل أنجلو', 'ليوناردو دافنشي', 'رافائيل', 'بوتيتشيلي'], difficulty: 'hard', points: 300 },
      { id: 'mu3b', questionText: 'من هو مؤلف السيمفونية التاسعة الشهيرة؟', questionType: 'mcq', correctAnswer: 'بيتهوفن', options: ['موزارت', 'باخ', 'بيتهوفن', 'شوبان'], difficulty: 'hard', points: 300 },
      { id: 'mu3c', questionText: 'في أي متحف توجد لوحة "الموناليزا"؟', questionType: 'mcq', correctAnswer: 'متحف اللوفر', options: ['المتحف البريطاني', 'متحف اللوفر', 'متحف الفاتيكان', 'متحف المتروبوليتان'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'mu4a', questionText: 'كم عدد أوتار آلة العود التقليدية (أوتار مزدوجة)؟', questionType: 'open', correctAnswer: '11', difficulty: 'expert', points: 500 },
      { id: 'mu4b', questionText: 'كم عدد السيمفونيات التي ألفها بيتهوفن؟', questionType: 'open', correctAnswer: '9', difficulty: 'expert', points: 500 },
      { id: 'mu4c', questionText: 'في أي عام توفيت أم كلثوم؟', questionType: 'open', correctAnswer: '1975', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'history',
    name: 'تاريخ',
    nameEn: 'History',
    icon: '📜',
    questions: [
      // Easy (100)
      { id: 'hi1a', questionText: 'في أي مدينة وُلد النبي محمد ﷺ؟', questionType: 'mcq', correctAnswer: 'مكة المكرمة', options: ['المدينة المنورة', 'مكة المكرمة', 'الطائف', 'جدة'], difficulty: 'easy', points: 100 },
      { id: 'hi1b', questionText: 'من هو أول رئيس للولايات المتحدة الأمريكية؟', questionType: 'mcq', correctAnswer: 'جورج واشنطن', options: ['أبراهام لينكولن', 'جورج واشنطن', 'توماس جيفرسون', 'جون آدمز'], difficulty: 'easy', points: 100 },
      { id: 'hi1c', questionText: 'ما هي الحضارة التي بنت الأهرامات في مصر؟', questionType: 'mcq', correctAnswer: 'الحضارة الفرعونية', options: ['الحضارة الرومانية', 'الحضارة الفرعونية', 'الحضارة اليونانية', 'الحضارة الفارسية'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'hi2a', questionText: 'من هو القائد المسلم الذي فتح القسطنطينية؟', questionType: 'mcq', correctAnswer: 'محمد الفاتح', options: ['صلاح الدين', 'محمد الفاتح', 'طارق بن زياد', 'خالد بن الوليد'], difficulty: 'medium', points: 200 },
      { id: 'hi2b', questionText: 'من هو القائد المسلم الذي فتح بلاد الأندلس عام 711م؟', questionType: 'mcq', correctAnswer: 'طارق بن زياد', options: ['خالد بن الوليد', 'طارق بن زياد', 'موسى بن نصير', 'عقبة بن نافع'], difficulty: 'medium', points: 200 },
      { id: 'hi2c', questionText: 'من هو صلاح الدين الأيوبي؟ ماذا حرر؟', questionType: 'mcq', correctAnswer: 'حرر القدس', options: ['حرر مكة', 'حرر القدس', 'حرر بغداد', 'حرر دمشق'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'hi3a', questionText: 'متى وقعت الحرب العالمية الأولى؟', questionType: 'mcq', correctAnswer: '1914-1918', options: ['1912-1916', '1914-1918', '1916-1920', '1910-1914'], difficulty: 'hard', points: 300 },
      { id: 'hi3b', questionText: 'من هو مؤسس الدولة الأموية؟', questionType: 'mcq', correctAnswer: 'معاوية بن أبي سفيان', options: ['عبدالملك بن مروان', 'معاوية بن أبي سفيان', 'يزيد بن معاوية', 'مروان بن الحكم'], difficulty: 'hard', points: 300 },
      { id: 'hi3c', questionText: 'ما هو اسم المعركة التي انتصر فيها المسلمون على الفرس؟', questionType: 'mcq', correctAnswer: 'القادسية', options: ['اليرموك', 'القادسية', 'حطين', 'عين جالوت'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'hi4a', questionText: 'في أي عام هجري وقعت غزوة بدر الكبرى؟', questionType: 'open', correctAnswer: '2', difficulty: 'expert', points: 500 },
      { id: 'hi4b', questionText: 'في أي عام سقطت الأندلس (غرناطة)؟', questionType: 'open', correctAnswer: '1492', difficulty: 'expert', points: 500 },
      { id: 'hi4c', questionText: 'في أي عام ميلادي فُتحت القسطنطينية؟', questionType: 'open', correctAnswer: '1453', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'food',
    name: 'طعام ومطبخ',
    nameEn: 'Food & Cuisine',
    icon: '🍽️',
    questions: [
      // Easy (100)
      { id: 'fo1a', questionText: 'ما هو المكون الرئيسي في طبق الحمص؟', questionType: 'mcq', correctAnswer: 'الحمص (الحبوب)', options: ['الفول', 'الحمص (الحبوب)', 'العدس', 'الفاصوليا'], difficulty: 'easy', points: 100 },
      { id: 'fo1b', questionText: 'من أي بلد نشأت البيتزا؟', questionType: 'mcq', correctAnswer: 'إيطاليا', options: ['أمريكا', 'إيطاليا', 'فرنسا', 'اليونان'], difficulty: 'easy', points: 100 },
      { id: 'fo1c', questionText: 'ما هو المشروب الذي يُصنع من حبوب البن؟', questionType: 'mcq', correctAnswer: 'القهوة', options: ['الشاي', 'القهوة', 'الكاكاو', 'الحليب'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'fo2a', questionText: 'من أي بلد نشأ طبق "السوشي"؟', questionType: 'mcq', correctAnswer: 'اليابان', options: ['الصين', 'اليابان', 'كوريا', 'تايلاند'], difficulty: 'medium', points: 200 },
      { id: 'fo2b', questionText: 'ما هي الأكلة الوطنية في السعودية؟', questionType: 'mcq', correctAnswer: 'الكبسة', options: ['المندي', 'الكبسة', 'المظبي', 'الجريش'], difficulty: 'medium', points: 200 },
      { id: 'fo2c', questionText: 'ما هي الفاكهة المعروفة بـ "ملكة الفواكه"؟', questionType: 'mcq', correctAnswer: 'المانجو', options: ['التفاح', 'المانجو', 'الفراولة', 'البرتقال'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'fo3a', questionText: 'ما هو المشروب الذي يُصنع من تخمير أوراق "كاميليا سينينسيس"؟', questionType: 'mcq', correctAnswer: 'الشاي', options: ['القهوة', 'الشاي', 'الكاكاو', 'المتة'], difficulty: 'hard', points: 300 },
      { id: 'fo3b', questionText: 'ما هي التوابل الأكثر تكلفة في العالم؟', questionType: 'mcq', correctAnswer: 'الزعفران', options: ['الفانيليا', 'الزعفران', 'القرفة', 'الهيل'], difficulty: 'hard', points: 300 },
      { id: 'fo3c', questionText: 'ما هو الطبق الإيطالي المصنوع من العجين المسلوق؟', questionType: 'mcq', correctAnswer: 'الباستا', options: ['البيتزا', 'الباستا', 'الريزوتو', 'البروشيتا'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'fo4a', questionText: 'ما هو البلد الأكثر إنتاجاً للبن في العالم؟', questionType: 'open', correctAnswer: 'البرازيل', difficulty: 'expert', points: 500 },
      { id: 'fo4b', questionText: 'ما هو اسم الطبق الكويتي المصنوع من الأرز واللحم والبصل؟', questionType: 'open', correctAnswer: 'مجبوس', difficulty: 'expert', points: 500 },
      { id: 'fo4c', questionText: 'كم درجة مئوية تغلي فيها المياه عند مستوى سطح البحر؟', questionType: 'open', correctAnswer: '100', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'science',
    name: 'علوم',
    nameEn: 'Science',
    icon: '🔬',
    questions: [
      // Easy (100)
      { id: 'sc1a', questionText: 'ما هو الغاز الذي يتنفسه الإنسان؟', questionType: 'mcq', correctAnswer: 'الأكسجين', options: ['النيتروجين', 'الأكسجين', 'ثاني أكسيد الكربون', 'الهيدروجين'], difficulty: 'easy', points: 100 },
      { id: 'sc1b', questionText: 'ما هو الرمز الكيميائي للماء؟', questionType: 'mcq', correctAnswer: 'H2O', options: ['CO2', 'H2O', 'O2', 'NaCl'], difficulty: 'easy', points: 100 },
      { id: 'sc1c', questionText: 'ما هو الكوكب الذي نعيش عليه؟', questionType: 'mcq', correctAnswer: 'الأرض', options: ['المريخ', 'الأرض', 'الزهرة', 'المشتري'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'sc2a', questionText: 'ما هو العنصر الأكثر وفرة في القشرة الأرضية؟', questionType: 'mcq', correctAnswer: 'الأكسجين', options: ['الحديد', 'الأكسجين', 'السيليكون', 'الألمنيوم'], difficulty: 'medium', points: 200 },
      { id: 'sc2b', questionText: 'ما هو أكبر كوكب في المجموعة الشمسية؟', questionType: 'mcq', correctAnswer: 'المشتري', options: ['زحل', 'المشتري', 'أورانوس', 'نبتون'], difficulty: 'medium', points: 200 },
      { id: 'sc2c', questionText: 'ما هو أصلب معدن طبيعي على وجه الأرض؟', questionType: 'mcq', correctAnswer: 'الألماس', options: ['الحديد', 'الألماس', 'الذهب', 'التيتانيوم'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'sc3a', questionText: 'من هو العالم الذي وضع قوانين الحركة الثلاثة؟', questionType: 'mcq', correctAnswer: 'إسحاق نيوتن', options: ['ألبرت أينشتاين', 'إسحاق نيوتن', 'غاليليو غاليلي', 'نيكولا تسلا'], difficulty: 'hard', points: 300 },
      { id: 'sc3b', questionText: 'كم عدد عظام جسم الإنسان البالغ؟', questionType: 'mcq', correctAnswer: '206 عظمة', options: ['196 عظمة', '206 عظمة', '216 عظمة', '186 عظمة'], difficulty: 'hard', points: 300 },
      { id: 'sc3c', questionText: 'ما هو العنصر الكيميائي الذي رمزه "Fe"؟', questionType: 'mcq', correctAnswer: 'الحديد', options: ['الفلور', 'الحديد', 'الفسفور', 'الفرنسيوم'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'sc4a', questionText: 'كم تبلغ سرعة الضوء بالكيلومتر في الثانية تقريباً؟', questionType: 'open', correctAnswer: '300000', difficulty: 'expert', points: 500 },
      { id: 'sc4b', questionText: 'كم يبلغ عدد الكروموسومات في الخلية البشرية؟', questionType: 'open', correctAnswer: '46', difficulty: 'expert', points: 500 },
      { id: 'sc4c', questionText: 'ما هو العدد الذري للكربون؟', questionType: 'open', correctAnswer: '6', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'gaming',
    name: 'ألعاب فيديو',
    nameEn: 'Video Games',
    icon: '🎮',
    questions: [
      // Easy (100)
      { id: 'ga1a', questionText: 'ما اسم الشخصية ذات الشارب في لعبة "سوبر ماريو"؟', questionType: 'mcq', correctAnswer: 'ماريو', options: ['لويجي', 'ماريو', 'وايريو', 'تود'], difficulty: 'easy', points: 100 },
      { id: 'ga1b', questionText: 'من هي الشركة المصنعة لجهاز بلايستيشن؟', questionType: 'mcq', correctAnswer: 'سوني', options: ['مايكروسوفت', 'نينتندو', 'سوني', 'سيجا'], difficulty: 'easy', points: 100 },
      { id: 'ga1c', questionText: 'ما هو اسم اللعبة التي تبني فيها عوالم من المكعبات؟', questionType: 'mcq', correctAnswer: 'ماينكرافت', options: ['روبلوكس', 'ماينكرافت', 'تيراريا', 'ليغو وورلدز'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'ga2a', questionText: 'ما هي لعبة الباتل رويال التي أصدرتها Epic Games عام 2017؟', questionType: 'mcq', correctAnswer: 'فورتنايت', options: ['ببجي', 'فورتنايت', 'أيبكس ليجندز', 'كول أوف ديوتي وارزون'], difficulty: 'medium', points: 200 },
      { id: 'ga2b', questionText: 'ما اسم لعبة كرة القدم الشهيرة من EA Sports؟', questionType: 'mcq', correctAnswer: 'FC (فيفا سابقاً)', options: ['PES', 'FC (فيفا سابقاً)', 'Football Manager', 'Rocket League'], difficulty: 'medium', points: 200 },
      { id: 'ga2c', questionText: 'ما هو اسم جهاز نينتندو المحمول الذي يمكن وصله بالتلفزيون؟', questionType: 'mcq', correctAnswer: 'نينتندو سويتش', options: ['نينتندو DS', 'نينتندو سويتش', 'نينتندو وي', 'جيم بوي'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'ga3a', questionText: 'من هي الشركة المطورة للعبة "إلدن رينغ"؟', questionType: 'mcq', correctAnswer: 'فروم سوفتوير', options: ['نينتندو', 'فروم سوفتوير', 'روكستار', 'يوبيسوفت'], difficulty: 'hard', points: 300 },
      { id: 'ga3b', questionText: 'في أي عام صدرت لعبة GTA V؟', questionType: 'mcq', correctAnswer: '2013', options: ['2011', '2012', '2013', '2014'], difficulty: 'hard', points: 300 },
      { id: 'ga3c', questionText: 'ما اسم بطل لعبة "God of War" الأحدث؟', questionType: 'mcq', correctAnswer: 'كريتوس', options: ['كريتوس', 'أتريوس', 'ثور', 'أودين'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'ga4a', questionText: 'ما هو اسم عالم لعبة "زيلدا: نفَس البرية"؟', questionType: 'open', correctAnswer: 'هايرول', difficulty: 'expert', points: 500 },
      { id: 'ga4b', questionText: 'ما هو اسم بطل لعبة "ذا ويتشر"؟', questionType: 'open', correctAnswer: 'جيرالت', difficulty: 'expert', points: 500 },
      { id: 'ga4c', questionText: 'في أي عام صدرت لعبة ماينكرافت رسمياً؟', questionType: 'open', correctAnswer: '2011', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'animals',
    name: 'حيوانات',
    nameEn: 'Animals',
    icon: '🦁',
    questions: [
      // Easy (100)
      { id: 'an1a', questionText: 'ما هو أطول حيوان بري في العالم؟', questionType: 'mcq', correctAnswer: 'الزرافة', options: ['الفيل', 'الزرافة', 'الجمل', 'النعامة'], difficulty: 'easy', points: 100 },
      { id: 'an1b', questionText: 'ما هو أسرع حيوان في العالم؟', questionType: 'mcq', correctAnswer: 'الفهد', options: ['الأسد', 'الفهد', 'النمر', 'الحصان'], difficulty: 'easy', points: 100 },
      { id: 'an1c', questionText: 'ما هو الحيوان الملقب بـ "ملك الغابة"؟', questionType: 'mcq', correctAnswer: 'الأسد', options: ['النمر', 'الأسد', 'الفهد', 'الدب'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'an2a', questionText: 'ما هو الحيوان الوحيد الذي لا يستطيع القفز؟', questionType: 'mcq', correctAnswer: 'الفيل', options: ['فرس النهر', 'الفيل', 'وحيد القرن', 'الخنزير'], difficulty: 'medium', points: 200 },
      { id: 'an2b', questionText: 'ما هو أكبر حيوان على وجه الأرض؟', questionType: 'mcq', correctAnswer: 'الحوت الأزرق', options: ['الفيل', 'الحوت الأزرق', 'الزرافة', 'وحيد القرن'], difficulty: 'medium', points: 200 },
      { id: 'an2c', questionText: 'كم رجل للعنكبوت؟', questionType: 'mcq', correctAnswer: '8 أرجل', options: ['6 أرجل', '8 أرجل', '10 أرجل', '12 رجل'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'an3a', questionText: 'ما هو الطائر الوحيد الذي يستطيع الطيران للخلف؟', questionType: 'mcq', correctAnswer: 'الطائر الطنان', options: ['النسر', 'الطائر الطنان', 'البطريق', 'الصقر'], difficulty: 'hard', points: 300 },
      { id: 'an3b', questionText: 'كم قلب للأخطبوط؟', questionType: 'mcq', correctAnswer: '3 قلوب', options: ['قلب واحد', 'قلبان', '3 قلوب', '4 قلوب'], difficulty: 'hard', points: 300 },
      { id: 'an3c', questionText: 'ما هو الحيوان الذي يملك أقوى فك في المملكة الحيوانية؟', questionType: 'mcq', correctAnswer: 'التمساح', options: ['الأسد', 'التمساح', 'الضبع', 'القرش'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'an4a', questionText: 'كم عدد أرجل العنكبوت؟', questionType: 'open', correctAnswer: '8', difficulty: 'expert', points: 500 },
      { id: 'an4b', questionText: 'كم عدد أسنان القرش الأبيض تقريباً؟', questionType: 'open', correctAnswer: '300', difficulty: 'expert', points: 500 },
      { id: 'an4c', questionText: 'كم لتر دم يضخ قلب الحوت الأزرق في النبضة الواحدة تقريباً؟', questionType: 'open', correctAnswer: '220', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'arabic',
    name: 'لغة عربية',
    nameEn: 'Arabic Language',
    icon: '📖',
    questions: [
      // Easy (100)
      { id: 'ar1a', questionText: 'ما هو أول حرف في الأبجدية العربية؟', questionType: 'mcq', correctAnswer: 'الألف', options: ['الباء', 'الألف', 'الهمزة', 'التاء'], difficulty: 'easy', points: 100 },
      { id: 'ar1b', questionText: 'كم عدد حروف اللغة العربية؟', questionType: 'mcq', correctAnswer: '28 حرفاً', options: ['26 حرفاً', '28 حرفاً', '30 حرفاً', '32 حرفاً'], difficulty: 'easy', points: 100 },
      { id: 'ar1c', questionText: 'ما هو عكس كلمة "كبير"؟', questionType: 'mcq', correctAnswer: 'صغير', options: ['طويل', 'صغير', 'قصير', 'ضعيف'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'ar2a', questionText: 'ما هو مرادف كلمة "شجاع"؟', questionType: 'mcq', correctAnswer: 'مقدام', options: ['حكيم', 'مقدام', 'صبور', 'كريم'], difficulty: 'medium', points: 200 },
      { id: 'ar2b', questionText: 'ما هو جمع كلمة "كتاب"؟', questionType: 'mcq', correctAnswer: 'كتب', options: ['كتابات', 'كتب', 'كتابين', 'مكاتب'], difficulty: 'medium', points: 200 },
      { id: 'ar2c', questionText: 'ما هو المفرد من كلمة "علماء"؟', questionType: 'mcq', correctAnswer: 'عالِم', options: ['علم', 'عالِم', 'معلم', 'متعلم'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'ar3a', questionText: 'من هو الشاعر الذي لُقب بـ "أمير الشعراء"؟', questionType: 'mcq', correctAnswer: 'أحمد شوقي', options: ['المتنبي', 'أحمد شوقي', 'حافظ إبراهيم', 'نزار قباني'], difficulty: 'hard', points: 300 },
      { id: 'ar3b', questionText: 'من هو مؤلف كتاب "مقدمة ابن خلدون"؟', questionType: 'mcq', correctAnswer: 'ابن خلدون', options: ['ابن سينا', 'ابن خلدون', 'الجاحظ', 'ابن بطوطة'], difficulty: 'hard', points: 300 },
      { id: 'ar3c', questionText: 'ما هو البحر الشعري الذي استخدمه امرؤ القيس في معلقته؟', questionType: 'mcq', correctAnswer: 'الطويل', options: ['الكامل', 'الطويل', 'البسيط', 'الوافر'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'ar4a', questionText: 'ما هو جمع كلمة "مريض" جمع مذكر سالم؟', questionType: 'open', correctAnswer: 'مريضون', difficulty: 'expert', points: 500 },
      { id: 'ar4b', questionText: 'ما هي أطول كلمة في القرآن الكريم؟', questionType: 'open', correctAnswer: 'فأسقيناكموه', difficulty: 'expert', points: 500 },
      { id: 'ar4c', questionText: 'من هو الشاعر الملقب بـ "شاعر الحكمة"؟', questionType: 'open', correctAnswer: 'المتنبي', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'space',
    name: 'فضاء',
    nameEn: 'Space',
    icon: '🚀',
    questions: [
      // Easy (100)
      { id: 'spc1a', questionText: 'ما هو الكوكب الملقب بـ "الكوكب الأحمر"؟', questionType: 'mcq', correctAnswer: 'المريخ', options: ['المشتري', 'المريخ', 'زحل', 'الزهرة'], difficulty: 'easy', points: 100 },
      { id: 'spc1b', questionText: 'ما هو أقرب كوكب للشمس؟', questionType: 'mcq', correctAnswer: 'عطارد', options: ['الزهرة', 'عطارد', 'المريخ', 'الأرض'], difficulty: 'easy', points: 100 },
      { id: 'spc1c', questionText: 'ما هو النجم الأقرب إلى كوكب الأرض؟', questionType: 'mcq', correctAnswer: 'الشمس', options: ['القمر', 'الشمس', 'سيريوس', 'بروكسيما'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'spc2a', questionText: 'ما اسم المجرة التي يقع فيها كوكب الأرض؟', questionType: 'mcq', correctAnswer: 'درب التبانة', options: ['المرأة المسلسلة', 'درب التبانة', 'سحابة ماجلان', 'مجرة المثلث'], difficulty: 'medium', points: 200 },
      { id: 'spc2b', questionText: 'من هو أول رائد فضاء عربي؟', questionType: 'mcq', correctAnswer: 'الأمير سلطان بن سلمان', options: ['هزاع المنصوري', 'الأمير سلطان بن سلمان', 'محمد فارس', 'سلطان النيادي'], difficulty: 'medium', points: 200 },
      { id: 'spc2c', questionText: 'ما هو الكوكب المحاط بحلقات مشهورة؟', questionType: 'mcq', correctAnswer: 'زحل', options: ['المشتري', 'زحل', 'أورانوس', 'نبتون'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'spc3a', questionText: 'من هو أول إنسان سافر إلى الفضاء؟', questionType: 'mcq', correctAnswer: 'يوري غاغارين', options: ['نيل أرمسترونغ', 'يوري غاغارين', 'بز ألدرين', 'جون غلين'], difficulty: 'hard', points: 300 },
      { id: 'spc3b', questionText: 'ما اسم المسبار الإماراتي الذي وصل المريخ عام 2021؟', questionType: 'mcq', correctAnswer: 'مسبار الأمل', options: ['مسبار النور', 'مسبار الأمل', 'مسبار زايد', 'مسبار الاتحاد'], difficulty: 'hard', points: 300 },
      { id: 'spc3c', questionText: 'ما هو أبعد كوكب عن الشمس في المجموعة الشمسية؟', questionType: 'mcq', correctAnswer: 'نبتون', options: ['أورانوس', 'نبتون', 'بلوتو', 'زحل'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'spc4a', questionText: 'كم كوكباً في المجموعة الشمسية بعد تصنيف بلوتو ككوكب قزم؟', questionType: 'open', correctAnswer: '8', difficulty: 'expert', points: 500 },
      { id: 'spc4b', questionText: 'في أي سنة هبط أول إنسان على سطح القمر؟', questionType: 'open', correctAnswer: '1969', difficulty: 'expert', points: 500 },
      { id: 'spc4c', questionText: 'كم يبعد القمر عن الأرض بالكيلومتر تقريباً (بالآلاف)؟', questionType: 'open', correctAnswer: '384000', difficulty: 'expert', points: 500 },
    ]
  },
  {
    id: 'emirates',
    name: 'إماراتي',
    nameEn: 'UAE',
    icon: '🇦🇪',
    questions: [
      // Easy (100)
      { id: 'uae1a', questionText: 'ما هي عاصمة دولة الإمارات العربية المتحدة؟', questionType: 'mcq', correctAnswer: 'أبوظبي', options: ['دبي', 'أبوظبي', 'الشارقة', 'عجمان'], difficulty: 'easy', points: 100 },
      { id: 'uae1b', questionText: 'كم عدد الإمارات في دولة الإمارات؟', questionType: 'mcq', correctAnswer: '7 إمارات', options: ['5 إمارات', '6 إمارات', '7 إمارات', '8 إمارات'], difficulty: 'easy', points: 100 },
      { id: 'uae1c', questionText: 'ما هي العملة الرسمية لدولة الإمارات؟', questionType: 'mcq', correctAnswer: 'الدرهم الإماراتي', options: ['الريال', 'الدينار', 'الدرهم الإماراتي', 'الجنيه'], difficulty: 'easy', points: 100 },
      // Medium (200)
      { id: 'uae2a', questionText: 'ما هو اسم مسبار الفضاء الإماراتي الذي وصل المريخ عام 2021؟', questionType: 'mcq', correctAnswer: 'مسبار الأمل', options: ['مسبار النور', 'مسبار الأمل', 'مسبار زايد', 'مسبار الاتحاد'], difficulty: 'medium', points: 200 },
      { id: 'uae2b', questionText: 'من هو مؤسس دولة الإمارات العربية المتحدة؟', questionType: 'mcq', correctAnswer: 'الشيخ زايد بن سلطان', options: ['الشيخ راشد بن سعيد', 'الشيخ زايد بن سلطان', 'الشيخ خليفة بن زايد', 'الشيخ محمد بن راشد'], difficulty: 'medium', points: 200 },
      { id: 'uae2c', questionText: 'ما هو أشهر مبنى في دبي؟', questionType: 'mcq', correctAnswer: 'برج خليفة', options: ['برج العرب', 'برج خليفة', 'برج الإمارات', 'أتلانتس'], difficulty: 'medium', points: 200 },
      // Hard (300)
      { id: 'uae3a', questionText: 'ما هي أكبر إمارة في دولة الإمارات من حيث المساحة؟', questionType: 'mcq', correctAnswer: 'أبوظبي', options: ['دبي', 'أبوظبي', 'الشارقة', 'رأس الخيمة'], difficulty: 'hard', points: 300 },
      { id: 'uae3b', questionText: 'ما اسم أول رائد فضاء إماراتي؟', questionType: 'mcq', correctAnswer: 'هزاع المنصوري', options: ['هزاع المنصوري', 'سلطان النيادي', 'محمد الملا', 'أحمد المنصوري'], difficulty: 'hard', points: 300 },
      { id: 'uae3c', questionText: 'ما هو اسم الجزيرة الثقافية الشهيرة في أبوظبي؟', questionType: 'mcq', correctAnswer: 'جزيرة السعديات', options: ['جزيرة ياس', 'جزيرة السعديات', 'جزيرة الريم', 'جزيرة المارية'], difficulty: 'hard', points: 300 },
      // Expert (500)
      { id: 'uae4a', questionText: 'كم يبلغ ارتفاع برج خليفة بالمتر تقريباً؟', questionType: 'open', correctAnswer: '828', difficulty: 'expert', points: 500 },
      { id: 'uae4b', questionText: 'في أي سنة تأسست دولة الإمارات العربية المتحدة؟', questionType: 'open', correctAnswer: '1971', difficulty: 'expert', points: 500 },
      { id: 'uae4c', questionText: 'كم عدد الجزر التي تملكها الإمارات تقريباً؟', questionType: 'open', correctAnswer: '200', difficulty: 'expert', points: 500 },
    ]
  }
]

// Function to get questions for selected categories (not used in new flow but kept for compatibility)
export function getQuestionsForCategories(categoryIds, categories) {
  const questions = []

  categoryIds.forEach(catId => {
    const category = categories.find(c => c.id === catId)
    if (category) {
      category.questions.forEach(q => {
        questions.push({
          ...q,
          categoryId: catId,
          categoryName: category.name,
          categoryIcon: category.icon
        })
      })
    }
  })

  return shuffleArray(questions)
}

// Fisher-Yates shuffle
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
