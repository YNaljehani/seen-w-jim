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
        questionText: 'ما هي المدة الرسمية لمباراة كرة القدم؟',
        questionType: 'mcq',
        correctAnswer: '90 دقيقة',
        options: ['60 دقيقة', '80 دقيقة', '90 دقيقة', '120 دقيقة'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sp2',
        questionText: 'أين أقيمت أول بطولة كأس عالم لكرة القدم عام 1930؟',
        questionType: 'mcq',
        correctAnswer: 'الأوروغواي',
        options: ['البرازيل', 'الأوروغواي', 'إيطاليا', 'فرنسا'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sp3',
        questionText: 'من هو اللاعب الوحيد الذي فاز بكأس العالم ثلاث مرات؟',
        questionType: 'mcq',
        correctAnswer: 'بيليه',
        options: ['مارادونا', 'بيليه', 'رونالدو', 'زيدان'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'sp4',
        questionText: 'كم يبلغ طول ملعب كرة السلة بالمتر حسب قوانين الاتحاد الدولي (FIBA)؟',
        questionType: 'open',
        correctAnswer: '28',
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
        questionText: 'ما هو اسم السمكة في فيلم "البحث عن نيمو"؟',
        questionType: 'mcq',
        correctAnswer: 'نيمو',
        options: ['دوري', 'نيمو', 'مارلن', 'جيل'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'mv2',
        questionText: 'من هو المخرج الذي أخرج فيلم "Inception" (استهلال)؟',
        questionType: 'mcq',
        correctAnswer: 'كريستوفر نولان',
        options: ['ستيفن سبيلبرغ', 'كريستوفر نولان', 'جيمس كاميرون', 'ريدلي سكوت'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'mv3',
        questionText: 'كم عدد أفلام سلسلة "هاري بوتر"؟',
        questionType: 'mcq',
        correctAnswer: '8 أفلام',
        options: ['6 أفلام', '7 أفلام', '8 أفلام', '9 أفلام'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'mv4',
        questionText: 'في أي عام صدر أول فيلم ناطق في تاريخ السينما "مغني الجاز"؟',
        questionType: 'open',
        correctAnswer: '1927',
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
        questionText: 'ما هو أطول نهر في العالم؟',
        questionType: 'mcq',
        correctAnswer: 'نهر النيل',
        options: ['نهر الأمازون', 'نهر النيل', 'نهر المسيسيبي', 'نهر اليانغتسي'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'geo2',
        questionText: 'ما هي أصغر دولة في العالم من حيث المساحة؟',
        questionType: 'mcq',
        correctAnswer: 'الفاتيكان',
        options: ['موناكو', 'الفاتيكان', 'سان مارينو', 'ليختنشتاين'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'geo3',
        questionText: 'ما هو البحر الذي يفصل بين قارتي أوروبا وأفريقيا؟',
        questionType: 'mcq',
        correctAnswer: 'البحر الأبيض المتوسط',
        options: ['البحر الأحمر', 'البحر الأبيض المتوسط', 'بحر العرب', 'البحر الأسود'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'geo4',
        questionText: 'كم عدد قارات العالم؟',
        questionType: 'open',
        correctAnswer: '7',
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
        questionText: 'ما هو أول ركن من أركان الإسلام؟',
        questionType: 'mcq',
        correctAnswer: 'الشهادتان',
        options: ['الصلاة', 'الشهادتان', 'الصيام', 'الزكاة'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'is2',
        questionText: 'كم عدد سور القرآن الكريم؟',
        questionType: 'mcq',
        correctAnswer: '114 سورة',
        options: ['110 سورة', '112 سورة', '114 سورة', '116 سورة'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'is3',
        questionText: 'من هو أول مؤذن في الإسلام؟',
        questionType: 'mcq',
        correctAnswer: 'بلال بن رباح',
        options: ['عبدالله بن مسعود', 'بلال بن رباح', 'عمار بن ياسر', 'سلمان الفارسي'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'is4',
        questionText: 'كم عدد أجزاء القرآن الكريم؟',
        questionType: 'open',
        correctAnswer: '30',
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
        questionText: 'ما هو اسم محرك البحث الأشهر في العالم؟',
        questionType: 'mcq',
        correctAnswer: 'جوجل',
        options: ['ياهو', 'جوجل', 'بينغ', 'بايدو'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'tech2',
        questionText: 'في أي عام تأسست شركة أبل؟',
        questionType: 'mcq',
        correctAnswer: '1976',
        options: ['1974', '1976', '1978', '1980'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'tech3',
        questionText: 'ما هي لغة البرمجة التي طورها جيمس غوسلينغ عام 1995؟',
        questionType: 'mcq',
        correctAnswer: 'جافا',
        options: ['بايثون', 'جافا', 'سي بلس بلس', 'روبي'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'tech4',
        questionText: 'ما هو اختصار "HTML"؟',
        questionType: 'open',
        correctAnswer: 'HyperText Markup Language',
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
        questionText: 'ما هي أكبر مدينة في السعودية من حيث عدد السكان؟',
        questionType: 'mcq',
        correctAnswer: 'الرياض',
        options: ['جدة', 'الرياض', 'مكة المكرمة', 'الدمام'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sa2',
        questionText: 'ما اسم المؤسس الأول للدولة السعودية الأولى؟',
        questionType: 'mcq',
        correctAnswer: 'محمد بن سعود',
        options: ['عبدالعزيز بن محمد', 'محمد بن سعود', 'تركي بن عبدالله', 'فيصل بن تركي'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sa3',
        questionText: 'في أي عام أقيمت أول بطولة دوري كرة القدم السعودي؟',
        questionType: 'mcq',
        correctAnswer: '1976',
        options: ['1972', '1974', '1976', '1978'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'sa4',
        questionText: 'كم يبلغ ارتفاع برج الساعة في مكة المكرمة بالمتر تقريباً؟',
        questionType: 'open',
        correctAnswer: '601',
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
        questionText: 'ما هو اسم أشهر أبراج الكويت الثلاثة؟',
        questionType: 'mcq',
        correctAnswer: 'أبراج الكويت',
        options: ['أبراج الحمراء', 'أبراج الكويت', 'برج التحرير', 'أبراج الشعب'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'kw2',
        questionText: 'ما هو اسم البرلمان الكويتي؟',
        questionType: 'mcq',
        correctAnswer: 'مجلس الأمة',
        options: ['مجلس الشورى', 'مجلس الأمة', 'مجلس النواب', 'المجلس الوطني'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'kw3',
        questionText: 'في أي عام تم تحرير الكويت من الغزو العراقي؟',
        questionType: 'mcq',
        correctAnswer: '1991',
        options: ['1990', '1991', '1992', '1993'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'kw4',
        questionText: 'كم عدد أعضاء مجلس الأمة الكويتي المنتخبين؟',
        questionType: 'open',
        correctAnswer: '50',
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
        questionText: 'من هي المغنية اللبنانية الملقبة بـ "جارة القمر"؟',
        questionType: 'mcq',
        correctAnswer: 'فيروز',
        options: ['نجوى كرم', 'فيروز', 'ماجدة الرومي', 'صباح'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'mu2',
        questionText: 'من هو الملحن الذي لُقب بـ "موسيقار الأجيال"؟',
        questionType: 'mcq',
        correctAnswer: 'محمد عبدالوهاب',
        options: ['رياض السنباطي', 'محمد عبدالوهاب', 'بليغ حمدي', 'فريد الأطرش'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'mu3',
        questionText: 'من هو الرسام الذي رسم لوحة "الموناليزا"؟',
        questionType: 'mcq',
        correctAnswer: 'ليوناردو دافنشي',
        options: ['مايكل أنجلو', 'ليوناردو دافنشي', 'رافائيل', 'بوتيتشيلي'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'mu4',
        questionText: 'كم عدد أوتار آلة العود التقليدية (أوتار مزدوجة)؟',
        questionType: 'open',
        correctAnswer: '11',
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
        questionText: 'في أي مدينة وُلد النبي محمد ﷺ؟',
        questionType: 'mcq',
        correctAnswer: 'مكة المكرمة',
        options: ['المدينة المنورة', 'مكة المكرمة', 'الطائف', 'جدة'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'hi2',
        questionText: 'ما هي الحضارة التي بنت الأهرامات في مصر؟',
        questionType: 'mcq',
        correctAnswer: 'الحضارة الفرعونية',
        options: ['الحضارة الرومانية', 'الحضارة الفرعونية', 'الحضارة اليونانية', 'الحضارة الفارسية'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'hi3',
        questionText: 'من هو القائد المسلم الذي فتح بلاد الأندلس عام 711م؟',
        questionType: 'mcq',
        correctAnswer: 'طارق بن زياد',
        options: ['خالد بن الوليد', 'طارق بن زياد', 'موسى بن نصير', 'عقبة بن نافع'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'hi4',
        questionText: 'في أي عام هجري وقعت غزوة بدر الكبرى؟',
        questionType: 'open',
        correctAnswer: '2',
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
        questionText: 'ما هو المكون الرئيسي في طبق الحمص؟',
        questionType: 'mcq',
        correctAnswer: 'الحمص (الحبوب)',
        options: ['الفول', 'الحمص (الحبوب)', 'العدس', 'الفاصوليا'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'fo2',
        questionText: 'من أي بلد نشأ طبق "السوشي" الأصلي؟',
        questionType: 'mcq',
        correctAnswer: 'اليابان',
        options: ['الصين', 'اليابان', 'كوريا', 'تايلاند'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'fo3',
        questionText: 'ما هو المشروب الذي يُصنع من تخمير أوراق شجرة "كاميليا سينينسيس"؟',
        questionType: 'mcq',
        correctAnswer: 'الشاي',
        options: ['القهوة', 'الشاي', 'الكاكاو', 'المتة'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'fo4',
        questionText: 'ما هو الاسم العلمي لفاكهة الموز؟',
        questionType: 'open',
        correctAnswer: 'موسى',
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
        questionText: 'ما هو الغاز الذي يتنفسه الإنسان؟',
        questionType: 'mcq',
        correctAnswer: 'الأكسجين',
        options: ['النيتروجين', 'الأكسجين', 'ثاني أكسيد الكربون', 'الهيدروجين'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sc2',
        questionText: 'ما هو العنصر الأكثر وفرة في القشرة الأرضية؟',
        questionType: 'mcq',
        correctAnswer: 'الأكسجين',
        options: ['الحديد', 'الأكسجين', 'السيليكون', 'الألمنيوم'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sc3',
        questionText: 'من هو العالم الذي وضع قوانين الحركة الثلاثة؟',
        questionType: 'mcq',
        correctAnswer: 'إسحاق نيوتن',
        options: ['ألبرت أينشتاين', 'إسحاق نيوتن', 'غاليليو غاليلي', 'نيكولا تسلا'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'sc4',
        questionText: 'كم تبلغ سرعة الضوء بالكيلومتر في الثانية تقريباً؟',
        questionType: 'open',
        correctAnswer: '300000',
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
        questionText: 'ما اسم الشخصية ذات الشارب في لعبة "سوبر ماريو"؟',
        questionType: 'mcq',
        correctAnswer: 'ماريو',
        options: ['لويجي', 'ماريو', 'وايريو', 'تود'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'ga2',
        questionText: 'ما هي لعبة الباتل رويال التي أصدرتها Epic Games عام 2017؟',
        questionType: 'mcq',
        correctAnswer: 'فورتنايت',
        options: ['ببجي', 'فورتنايت', 'أيبكس ليجندز', 'كول أوف ديوتي وارزون'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'ga3',
        questionText: 'من هي الشركة المطورة للعبة "إلدن رينغ"؟',
        questionType: 'mcq',
        correctAnswer: 'فروم سوفتوير',
        options: ['نينتندو', 'فروم سوفتوير', 'روكستار', 'يوبيسوفت'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'ga4',
        questionText: 'ما هو اسم المنطقة المفتوحة في لعبة "زيلدا: نفَس البرية"؟',
        questionType: 'open',
        correctAnswer: 'هايرول',
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
        questionText: 'ما هو أطول حيوان بري في العالم؟',
        questionType: 'mcq',
        correctAnswer: 'الزرافة',
        options: ['الفيل', 'الزرافة', 'الجمل', 'النعامة'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'an2',
        questionText: 'ما هو الحيوان الوحيد الذي لا يستطيع القفز؟',
        questionType: 'mcq',
        correctAnswer: 'الفيل',
        options: ['فرس النهر', 'الفيل', 'وحيد القرن', 'الخنزير'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'an3',
        questionText: 'ما هو الطائر الوحيد الذي يستطيع الطيران للخلف؟',
        questionType: 'mcq',
        correctAnswer: 'الطائر الطنان',
        options: ['النسر', 'الطائر الطنان', 'البطريق', 'الصقر'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'an4',
        questionText: 'كم عدد أرجل العنكبوت؟',
        questionType: 'open',
        correctAnswer: '8',
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
        questionText: 'ما هو أول حرف في الأبجدية العربية؟',
        questionType: 'mcq',
        correctAnswer: 'الألف',
        options: ['الباء', 'الألف', 'الهمزة', 'التاء'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'ar2',
        questionText: 'ما هو مرادف كلمة "شجاع" في اللغة العربية؟',
        questionType: 'mcq',
        correctAnswer: 'مقدام',
        options: ['حكيم', 'مقدام', 'صبور', 'كريم'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'ar3',
        questionText: 'من هو الشاعر الذي لُقب بـ "أمير الشعراء"؟',
        questionType: 'mcq',
        correctAnswer: 'أحمد شوقي',
        options: ['المتنبي', 'أحمد شوقي', 'حافظ إبراهيم', 'نزار قباني'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'ar4',
        questionText: 'ما هو جمع كلمة "مريض" جمع مذكر سالم؟',
        questionType: 'open',
        correctAnswer: 'مريضون',
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
        id: 'spc1',
        questionText: 'ما هو الكوكب الملقب بـ "الكوكب الأحمر"؟',
        questionType: 'mcq',
        correctAnswer: 'المريخ',
        options: ['المشتري', 'المريخ', 'زحل', 'الزهرة'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'spc2',
        questionText: 'ما اسم المجرة التي يقع فيها كوكب الأرض؟',
        questionType: 'mcq',
        correctAnswer: 'درب التبانة',
        options: ['المرأة المسلسلة', 'درب التبانة', 'سحابة ماجلان', 'مجرة المثلث'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'spc3',
        questionText: 'من هو أول إنسان سافر إلى الفضاء؟',
        questionType: 'mcq',
        correctAnswer: 'يوري غاغارين',
        options: ['نيل أرمسترونغ', 'يوري غاغارين', 'بز ألدرين', 'جون غلين'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'spc4',
        questionText: 'كم كوكباً في المجموعة الشمسية بعد تصنيف بلوتو ككوكب قزم؟',
        questionType: 'open',
        correctAnswer: '8',
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
        questionText: 'ما هي عاصمة دولة الإمارات العربية المتحدة؟',
        questionType: 'mcq',
        correctAnswer: 'أبوظبي',
        options: ['دبي', 'أبوظبي', 'الشارقة', 'عجمان'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'uae2',
        questionText: 'ما هو اسم مسبار الفضاء الإماراتي الذي وصل المريخ عام 2021؟',
        questionType: 'mcq',
        correctAnswer: 'مسبار الأمل',
        options: ['مسبار النور', 'مسبار الأمل', 'مسبار زايد', 'مسبار الاتحاد'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'uae3',
        questionText: 'ما هي أكبر إمارة في دولة الإمارات من حيث المساحة؟',
        questionType: 'mcq',
        correctAnswer: 'أبوظبي',
        options: ['دبي', 'أبوظبي', 'الشارقة', 'رأس الخيمة'],
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'uae4',
        questionText: 'كم يبلغ ارتفاع برج خليفة بالمتر تقريباً؟',
        questionType: 'open',
        correctAnswer: '828',
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
