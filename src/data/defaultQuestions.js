// Default categories and questions for the game
// Each category has exactly 4 questions: 100, 200, 300, 500 points

export const defaultCategories = [
  {
    id: 'sports',
    name: 'رياضة',
    nameEn: 'Sports',
    icon: '⚽',
    questions: [
      {
        id: 'sp1',
        questionText: 'كم عدد اللاعبين في فريق كرة القدم؟',
        questionType: 'mcq',
        correctAnswer: '11 لاعب',
        options: ['9 لاعبين', '10 لاعبين', '11 لاعب', '12 لاعب'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sp2',
        questionText: 'من هو هداف كأس العالم 2022 في قطر؟',
        questionType: 'mcq',
        correctAnswer: 'كيليان مبابي',
        options: ['كيليان مبابي', 'ليونيل ميسي', 'أوليفييه جيرو', 'جوليان ألفاريز'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sp3',
        questionText: 'ما هو النادي الذي فاز بأكبر عدد من بطولات دوري أبطال أوروبا؟',
        questionType: 'mcq',
        correctAnswer: 'ريال مدريد',
        options: ['ريال مدريد', 'ميلان', 'ليفربول', 'بايرن ميونخ'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'sp4',
        questionText: 'في أي عام فاز المنتخب السعودي على الأرجنتين في كأس العالم؟',
        questionType: 'open',
        correctAnswer: '2022',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'movies',
    name: 'أفلام وسينما',
    nameEn: 'Movies',
    icon: '🎬',
    questions: [
      {
        id: 'mv1',
        questionText: 'من هو بطل فيلم "تايتانيك"؟',
        questionType: 'mcq',
        correctAnswer: 'ليوناردو دي كابريو',
        options: ['براد بيت', 'ليوناردو دي كابريو', 'توم كروز', 'جوني ديب'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'mv2',
        questionText: 'ما هو أول فيلم رسوم متحركة من ديزني؟',
        questionType: 'mcq',
        correctAnswer: 'سنو وايت والأقزام السبعة',
        options: ['سنو وايت والأقزام السبعة', 'بينوكيو', 'فانتازيا', 'دمبو'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'mv3',
        questionText: 'من هو مخرج فيلم "الأب الروحي"؟',
        questionType: 'mcq',
        correctAnswer: 'فرانسيس فورد كوبولا',
        options: ['فرانسيس فورد كوبولا', 'مارتن سكورسيزي', 'ستيفن سبيلبرغ', 'كوينتن تارانتينو'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'mv4',
        questionText: 'ما هو الفيلم الأعلى إيرادات في تاريخ السينما؟',
        questionType: 'open',
        correctAnswer: 'أفاتار',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'geography',
    name: 'جغرافيا',
    nameEn: 'Geography',
    icon: '🌍',
    questions: [
      {
        id: 'geo1',
        questionText: 'ما هي أكبر قارة في العالم؟',
        questionType: 'mcq',
        correctAnswer: 'آسيا',
        options: ['أفريقيا', 'آسيا', 'أوروبا', 'أمريكا الشمالية'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'geo2',
        questionText: 'ما هي عاصمة أستراليا؟',
        questionType: 'mcq',
        correctAnswer: 'كانبيرا',
        options: ['سيدني', 'ملبورن', 'كانبيرا', 'بريزبن'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'geo3',
        questionText: 'ما هي أكبر دولة عربية من حيث المساحة؟',
        questionType: 'mcq',
        correctAnswer: 'الجزائر',
        options: ['السعودية', 'الجزائر', 'السودان', 'ليبيا'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'geo4',
        questionText: 'كم عدد الدول العربية؟',
        questionType: 'open',
        correctAnswer: '22',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'islamic',
    name: 'إسلاميات',
    nameEn: 'Islamic',
    icon: '🕌',
    questions: [
      {
        id: 'is1',
        questionText: 'كم عدد أركان الإسلام؟',
        questionType: 'mcq',
        correctAnswer: '5 أركان',
        options: ['4 أركان', '5 أركان', '6 أركان', '7 أركان'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'is2',
        questionText: 'ما هي أطول سورة في القرآن الكريم؟',
        questionType: 'mcq',
        correctAnswer: 'سورة البقرة',
        options: ['سورة آل عمران', 'سورة البقرة', 'سورة النساء', 'سورة المائدة'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'is3',
        questionText: 'كم عدد الأنبياء المذكورين في القرآن الكريم؟',
        questionType: 'mcq',
        correctAnswer: '25 نبياً',
        options: ['24 نبياً', '25 نبياً', '26 نبياً', '23 نبياً'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'is4',
        questionText: 'كم مرة ذُكر اسم النبي محمد ﷺ في القرآن الكريم؟',
        questionType: 'open',
        correctAnswer: '4',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'technology',
    name: 'تقنية',
    nameEn: 'Technology',
    icon: '💻',
    questions: [
      {
        id: 'tech1',
        questionText: 'ما هو اسم نظام تشغيل هواتف آيفون؟',
        questionType: 'mcq',
        correctAnswer: 'iOS',
        options: ['Android', 'iOS', 'Windows', 'Linux'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'tech2',
        questionText: 'من هو مؤسس شركة مايكروسوفت؟',
        questionType: 'mcq',
        correctAnswer: 'بيل غيتس',
        options: ['ستيف جوبز', 'بيل غيتس', 'مارك زوكربيرغ', 'إيلون ماسك'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'tech3',
        questionText: 'في أي عام تم إطلاق أول آيفون؟',
        questionType: 'mcq',
        correctAnswer: '2007',
        options: ['2005', '2006', '2007', '2008'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'tech4',
        questionText: 'ما هو اسم أول موقع ويب في التاريخ؟',
        questionType: 'open',
        correctAnswer: 'info.cern.ch',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'saudi',
    name: 'سعودي',
    nameEn: 'Saudi Arabia',
    icon: '🇸🇦',
    questions: [
      {
        id: 'sa1',
        questionText: 'ما هي عاصمة المملكة العربية السعودية؟',
        questionType: 'mcq',
        correctAnswer: 'الرياض',
        options: ['جدة', 'الرياض', 'مكة المكرمة', 'الدمام'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sa2',
        questionText: 'في أي عام تم توحيد المملكة العربية السعودية؟',
        questionType: 'mcq',
        correctAnswer: '1932',
        options: ['1930', '1932', '1934', '1928'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sa3',
        questionText: 'كم عدد مناطق المملكة العربية السعودية الإدارية؟',
        questionType: 'mcq',
        correctAnswer: '13 منطقة',
        options: ['11 منطقة', '12 منطقة', '13 منطقة', '14 منطقة'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'sa4',
        questionText: 'كم يبلغ طول مشروع "ذا لاين" بالكيلومترات؟',
        questionType: 'open',
        correctAnswer: '170',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'kuwait',
    name: 'كويتي',
    nameEn: 'Kuwait',
    icon: '🇰🇼',
    questions: [
      {
        id: 'kw1',
        questionText: 'ما هو اسم عملة الكويت؟',
        questionType: 'mcq',
        correctAnswer: 'الدينار الكويتي',
        options: ['الريال', 'الدينار الكويتي', 'الدرهم', 'الجنيه'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'kw2',
        questionText: 'في أي عام استقلت الكويت؟',
        questionType: 'mcq',
        correctAnswer: '1961',
        options: ['1959', '1961', '1963', '1965'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'kw3',
        questionText: 'كم عدد محافظات الكويت؟',
        questionType: 'mcq',
        correctAnswer: '6 محافظات',
        options: ['5 محافظات', '6 محافظات', '7 محافظات', '4 محافظات'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'kw4',
        questionText: 'ما هو الاسم القديم للكويت؟',
        questionType: 'open',
        correctAnswer: 'القرين',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'music',
    name: 'موسيقى وفن',
    nameEn: 'Music & Art',
    icon: '🎵',
    questions: [
      {
        id: 'mu1',
        questionText: 'من هو ملقب بـ "كوكب الشرق"؟',
        questionType: 'mcq',
        correctAnswer: 'أم كلثوم',
        options: ['فيروز', 'أم كلثوم', 'وردة الجزائرية', 'صباح'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'mu2',
        questionText: 'من هو الفنان السعودي الملقب بـ "فنان العرب"؟',
        questionType: 'mcq',
        correctAnswer: 'محمد عبده',
        options: ['طلال مداح', 'محمد عبده', 'عبدالمجيد عبدالله', 'راشد الماجد'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'mu3',
        questionText: 'من هو مؤلف السيمفونية التاسعة الشهيرة؟',
        questionType: 'mcq',
        correctAnswer: 'بيتهوفن',
        options: ['موزارت', 'باخ', 'بيتهوفن', 'شوبان'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'mu4',
        questionText: 'كم عدد السيمفونيات التي ألفها بيتهوفن؟',
        questionType: 'open',
        correctAnswer: '9',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'history',
    name: 'تاريخ',
    nameEn: 'History',
    icon: '📜',
    questions: [
      {
        id: 'hi1',
        questionText: 'من هو أول رئيس للولايات المتحدة الأمريكية؟',
        questionType: 'mcq',
        correctAnswer: 'جورج واشنطن',
        options: ['أبراهام لينكولن', 'جورج واشنطن', 'توماس جيفرسون', 'جون آدمز'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'hi2',
        questionText: 'من هو القائد المسلم الذي فتح القسطنطينية؟',
        questionType: 'mcq',
        correctAnswer: 'محمد الفاتح',
        options: ['صلاح الدين', 'محمد الفاتح', 'طارق بن زياد', 'خالد بن الوليد'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'hi3',
        questionText: 'متى وقعت الحرب العالمية الأولى؟',
        questionType: 'mcq',
        correctAnswer: '1914-1918',
        options: ['1912-1916', '1914-1918', '1916-1920', '1910-1914'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'hi4',
        questionText: 'في أي عام سقطت الأندلس (غرناطة)؟',
        questionType: 'open',
        correctAnswer: '1492',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'food',
    name: 'طعام ومطبخ',
    nameEn: 'Food & Cuisine',
    icon: '🍽️',
    questions: [
      {
        id: 'fo1',
        questionText: 'من أي بلد نشأت البيتزا؟',
        questionType: 'mcq',
        correctAnswer: 'إيطاليا',
        options: ['أمريكا', 'إيطاليا', 'فرنسا', 'اليونان'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'fo2',
        questionText: 'ما هي الأكلة الوطنية في السعودية؟',
        questionType: 'mcq',
        correctAnswer: 'الكبسة',
        options: ['المندي', 'الكبسة', 'المظبي', 'الجريش'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'fo3',
        questionText: 'ما هو اسم الطبق الياباني المكون من الأرز والسمك النيء؟',
        questionType: 'mcq',
        correctAnswer: 'سوشي',
        options: ['رامن', 'سوشي', 'تيمبورا', 'أودون'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'fo4',
        questionText: 'ما هي التوابل الأكثر تكلفة في العالم؟',
        questionType: 'open',
        correctAnswer: 'الزعفران',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'science',
    name: 'علوم',
    nameEn: 'Science',
    icon: '🔬',
    questions: [
      {
        id: 'sc1',
        questionText: 'ما هو الرمز الكيميائي للماء؟',
        questionType: 'mcq',
        correctAnswer: 'H2O',
        options: ['CO2', 'H2O', 'O2', 'NaCl'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sc2',
        questionText: 'ما هو أكبر كوكب في المجموعة الشمسية؟',
        questionType: 'mcq',
        correctAnswer: 'المشتري',
        options: ['زحل', 'المشتري', 'أورانوس', 'نبتون'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sc3',
        questionText: 'كم عدد عظام جسم الإنسان البالغ؟',
        questionType: 'mcq',
        correctAnswer: '206 عظمة',
        options: ['196 عظمة', '206 عظمة', '216 عظمة', '186 عظمة'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'sc4',
        questionText: 'كم يبلغ عدد الكروموسومات في الخلية البشرية؟',
        questionType: 'open',
        correctAnswer: '46',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'gaming',
    name: 'ألعاب فيديو',
    nameEn: 'Video Games',
    icon: '🎮',
    questions: [
      {
        id: 'ga1',
        questionText: 'من هي الشركة المصنعة لجهاز بلايستيشن؟',
        questionType: 'mcq',
        correctAnswer: 'سوني',
        options: ['مايكروسوفت', 'نينتندو', 'سوني', 'سيجا'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'ga2',
        questionText: 'ما اسم لعبة البقاء الشهيرة التي تحتوي على "كريبر"؟',
        questionType: 'mcq',
        correctAnswer: 'ماينكرافت',
        options: ['فورتنايت', 'ماينكرافت', 'روبلوكس', 'تيراريا'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'ga3',
        questionText: 'في أي عام صدرت لعبة GTA V؟',
        questionType: 'mcq',
        correctAnswer: '2013',
        options: ['2011', '2012', '2013', '2014'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'ga4',
        questionText: 'ما هو اسم بطل لعبة "ذا ويتشر"؟',
        questionType: 'open',
        correctAnswer: 'جيرالت',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'animals',
    name: 'حيوانات',
    nameEn: 'Animals',
    icon: '🦁',
    questions: [
      {
        id: 'an1',
        questionText: 'ما هو أسرع حيوان في العالم؟',
        questionType: 'mcq',
        correctAnswer: 'الفهد',
        options: ['الأسد', 'الفهد', 'النمر', 'الحصان'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'an2',
        questionText: 'ما هو أكبر حيوان على وجه الأرض؟',
        questionType: 'mcq',
        correctAnswer: 'الحوت الأزرق',
        options: ['الفيل', 'الحوت الأزرق', 'الزرافة', 'وحيد القرن'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'an3',
        questionText: 'كم قلب للأخطبوط؟',
        questionType: 'mcq',
        correctAnswer: '3 قلوب',
        options: ['قلب واحد', 'قلبان', '3 قلوب', '4 قلوب'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'an4',
        questionText: 'كم سنة يمكن أن يعيش السلحفاة البحرية؟',
        questionType: 'open',
        correctAnswer: '150',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'arabic',
    name: 'لغة عربية',
    nameEn: 'Arabic Language',
    icon: '📖',
    questions: [
      {
        id: 'ar1',
        questionText: 'كم عدد حروف اللغة العربية؟',
        questionType: 'mcq',
        correctAnswer: '28 حرفاً',
        options: ['26 حرفاً', '28 حرفاً', '30 حرفاً', '32 حرفاً'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'ar2',
        questionText: 'ما هو جمع كلمة "كتاب"؟',
        questionType: 'mcq',
        correctAnswer: 'كتب',
        options: ['كتابات', 'كتب', 'كتابين', 'مكاتب'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'ar3',
        questionText: 'من هو مؤلف كتاب "ألف ليلة وليلة"؟',
        questionType: 'mcq',
        correctAnswer: 'غير معروف',
        options: ['ابن المقفع', 'الجاحظ', 'غير معروف', 'المتنبي'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'ar4',
        questionText: 'ما هو أطول كلمة في اللغة العربية؟',
        questionType: 'open',
        correctAnswer: 'فأسقيناكموه',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'space',
    name: 'فضاء',
    nameEn: 'Space',
    icon: '🚀',
    questions: [
      {
        id: 'sp1',
        questionText: 'ما هو أقرب كوكب للشمس؟',
        questionType: 'mcq',
        correctAnswer: 'عطارد',
        options: ['الزهرة', 'عطارد', 'المريخ', 'الأرض'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sp2',
        questionText: 'من هو أول رائد فضاء عربي؟',
        questionType: 'mcq',
        correctAnswer: 'الأمير سلطان بن سلمان',
        options: ['هزاع المنصوري', 'الأمير سلطان بن سلمان', 'محمد فارس', 'سلطان النيادي'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sp3',
        questionText: 'كم يبلغ عدد أقمار كوكب المشتري تقريباً؟',
        questionType: 'mcq',
        correctAnswer: '95 قمراً',
        options: ['16 قمراً', '53 قمراً', '79 قمراً', '95 قمراً'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'sp4',
        questionText: 'في أي سنة هبط أول إنسان على سطح القمر؟',
        questionType: 'open',
        correctAnswer: '1969',
        difficulty: 'expert',
        points: 500
      }
    ]
  },
  {
    id: 'emirates',
    name: 'إماراتي',
    nameEn: 'UAE',
    icon: '🇦🇪',
    questions: [
      {
        id: 'uae1',
        questionText: 'كم عدد الإمارات في دولة الإمارات؟',
        questionType: 'mcq',
        correctAnswer: '7 إمارات',
        options: ['5 إمارات', '6 إمارات', '7 إمارات', '8 إمارات'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'uae2',
        questionText: 'من هو مؤسس دولة الإمارات العربية المتحدة؟',
        questionType: 'mcq',
        correctAnswer: 'الشيخ زايد بن سلطان',
        options: ['الشيخ راشد بن سعيد', 'الشيخ زايد بن سلطان', 'الشيخ خليفة بن زايد', 'الشيخ محمد بن راشد'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'uae3',
        questionText: 'ما هو أعلى مبنى في العالم الموجود في دبي؟',
        questionType: 'mcq',
        correctAnswer: 'برج خليفة',
        options: ['برج العرب', 'برج خليفة', 'برج الإمارات', 'برج المملكة'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'uae4',
        questionText: 'في أي سنة تأسست دولة الإمارات العربية المتحدة؟',
        questionType: 'open',
        correctAnswer: '1971',
        difficulty: 'expert',
        points: 500
      }
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
