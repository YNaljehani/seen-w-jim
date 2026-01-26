// Default categories and questions for the game
export const defaultCategories = [
  {
    id: 'sports',
    name: 'رياضة',
    nameEn: 'Sports',
    icon: '⚽',
    questions: [
      {
        id: 'sp1',
        questionText: 'من هو هداف كأس العالم 2022 في قطر؟',
        questionType: 'mcq',
        correctAnswer: 'كيليان مبابي',
        options: ['كيليان مبابي', 'ليونيل ميسي', 'أوليفييه جيرو', 'جوليان ألفاريز'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sp2',
        questionText: 'كم مرة فاز المنتخب البرازيلي بكأس العالم؟',
        questionType: 'mcq',
        correctAnswer: '5 مرات',
        options: ['4 مرات', '5 مرات', '6 مرات', '3 مرات'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sp3',
        questionText: 'ما هو النادي الذي فاز بأكبر عدد من بطولات دوري أبطال أوروبا؟',
        questionType: 'mcq',
        correctAnswer: 'ريال مدريد',
        options: ['ريال مدريد', 'ميلان', 'ليفربول', 'برشلونة'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sp4',
        questionText: 'في أي عام أقيمت أول بطولة كأس العالم؟',
        questionType: 'mcq',
        correctAnswer: '1930',
        options: ['1928', '1930', '1934', '1926'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sp5',
        questionText: 'من هو اللاعب الوحيد الذي سجل في 4 نهائيات كأس عالم مختلفة؟',
        questionType: 'open',
        correctAnswer: 'فافا',
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'sp6',
        questionText: 'كم هدفاً سجل كريستيانو رونالدو في مسيرته الدولية مع البرتغال حتى 2024؟',
        questionType: 'open',
        correctAnswer: '130',
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
        questionText: 'ما هو الفيلم الذي حصل على أكثر جوائز أوسكار في التاريخ؟',
        questionType: 'mcq',
        correctAnswer: 'تايتانيك / سيد الخواتم',
        options: ['تايتانيك / سيد الخواتم', 'بن هور', 'غاندي', 'فورست غامب'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'mv2',
        questionText: 'من هو مخرج فيلم "الأب الروحي"؟',
        questionType: 'mcq',
        correctAnswer: 'فرانسيس فورد كوبولا',
        options: ['فرانسيس فورد كوبولا', 'مارتن سكورسيزي', 'ستيفن سبيلبرغ', 'كوينتن تارانتينو'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'mv3',
        questionText: 'ما هو أول فيلم رسوم متحركة من ديزني؟',
        questionType: 'mcq',
        correctAnswer: 'سنو وايت والأقزام السبعة',
        options: ['سنو وايت والأقزام السبعة', 'بينوكيو', 'فانتازيا', 'دمبو'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'mv4',
        questionText: 'كم عدد أفلام سلسلة "هاري بوتر"؟',
        questionType: 'mcq',
        correctAnswer: '8 أفلام',
        options: ['7 أفلام', '8 أفلام', '9 أفلام', '6 أفلام'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'mv5',
        questionText: 'ما هو أول فيلم عربي رُشح لجائزة الأوسكار؟',
        questionType: 'open',
        correctAnswer: 'باب الحديد',
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'mv6',
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
        questionText: 'ما هي عاصمة أستراليا؟',
        questionType: 'mcq',
        correctAnswer: 'كانبيرا',
        options: ['سيدني', 'ملبورن', 'كانبيرا', 'بريزبن'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'geo2',
        questionText: 'ما هو أطول نهر في العالم؟',
        questionType: 'mcq',
        correctAnswer: 'نهر النيل',
        options: ['نهر الأمازون', 'نهر النيل', 'نهر المسيسيبي', 'نهر اليانغتسي'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'geo3',
        questionText: 'كم عدد دول مجلس التعاون الخليجي؟',
        questionType: 'mcq',
        correctAnswer: '6 دول',
        options: ['5 دول', '6 دول', '7 دول', '8 دول'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'geo4',
        questionText: 'ما هي أكبر دولة عربية من حيث المساحة؟',
        questionType: 'mcq',
        correctAnswer: 'الجزائر',
        options: ['السعودية', 'الجزائر', 'السودان', 'ليبيا'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'geo5',
        questionText: 'ما هي أصغر دولة في العالم من حيث المساحة؟',
        questionType: 'open',
        correctAnswer: 'الفاتيكان',
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'geo6',
        questionText: 'كم يبلغ عدد الدول التي ليس لها منفذ بحري في العالم؟',
        questionType: 'open',
        correctAnswer: '44',
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
        questionText: 'كم عدد سور القرآن الكريم؟',
        questionType: 'mcq',
        correctAnswer: '114 سورة',
        options: ['112 سورة', '114 سورة', '116 سورة', '110 سورة'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'is2',
        questionText: 'ما هي أطول سورة في القرآن الكريم؟',
        questionType: 'mcq',
        correctAnswer: 'سورة البقرة',
        options: ['سورة آل عمران', 'سورة البقرة', 'سورة النساء', 'سورة المائدة'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'is3',
        questionText: 'في أي عام هاجر النبي محمد ﷺ من مكة إلى المدينة؟',
        questionType: 'mcq',
        correctAnswer: '622 م',
        options: ['620 م', '622 م', '624 م', '618 م'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'is4',
        questionText: 'كم عدد الأنبياء المذكورين في القرآن الكريم؟',
        questionType: 'mcq',
        correctAnswer: '25 نبياً',
        options: ['24 نبياً', '25 نبياً', '26 نبياً', '23 نبياً'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'is5',
        questionText: 'ما هي السورة التي تُلقب بـ "قلب القرآن"؟',
        questionType: 'open',
        correctAnswer: 'سورة يس',
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'is6',
        questionText: 'كم مرة ذُكر اسم النبي محمد ﷺ في القرآن الكريم؟',
        questionType: 'open',
        correctAnswer: '4 مرات',
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
        questionText: 'من هو مؤسس شركة مايكروسوفت؟',
        questionType: 'mcq',
        correctAnswer: 'بيل غيتس',
        options: ['ستيف جوبز', 'بيل غيتس', 'مارك زوكربيرغ', 'جيف بيزوس'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'tech2',
        questionText: 'في أي عام تم إطلاق أول آيفون؟',
        questionType: 'mcq',
        correctAnswer: '2007',
        options: ['2005', '2006', '2007', '2008'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'tech3',
        questionText: 'ما هي لغة البرمجة التي أنشأها جيمس غوسلينغ؟',
        questionType: 'mcq',
        correctAnswer: 'جافا',
        options: ['بايثون', 'جافا', 'C++', 'روبي'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'tech4',
        questionText: 'ما هو اسم الذكاء الاصطناعي الذي طورته شركة OpenAI؟',
        questionType: 'mcq',
        correctAnswer: 'ChatGPT',
        options: ['Siri', 'Alexa', 'ChatGPT', 'Cortana'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'tech5',
        questionText: 'ما هو اسم أول موقع ويب في التاريخ؟',
        questionType: 'open',
        correctAnswer: 'info.cern.ch',
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'tech6',
        questionText: 'في أي عام تأسست شركة أنثروبيك (Anthropic) المطورة لـ Claude؟',
        questionType: 'open',
        correctAnswer: '2021',
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
        questionText: 'في أي عام تم توحيد المملكة العربية السعودية؟',
        questionType: 'mcq',
        correctAnswer: '1932',
        options: ['1930', '1932', '1934', '1928'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sa2',
        questionText: 'ما هي أكبر مدينة في المملكة العربية السعودية من حيث عدد السكان؟',
        questionType: 'mcq',
        correctAnswer: 'الرياض',
        options: ['جدة', 'الرياض', 'مكة المكرمة', 'الدمام'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sa3',
        questionText: 'ما هو اسم المشروع السياحي الضخم على ساحل البحر الأحمر؟',
        questionType: 'mcq',
        correctAnswer: 'نيوم',
        options: ['القدية', 'نيوم', 'أمالا', 'ذا لاين'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sa4',
        questionText: 'كم عدد مناطق المملكة العربية السعودية الإدارية؟',
        questionType: 'mcq',
        correctAnswer: '13 منطقة',
        options: ['11 منطقة', '12 منطقة', '13 منطقة', '14 منطقة'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sa5',
        questionText: 'ما هو اسم رؤية المملكة الاقتصادية؟',
        questionType: 'open',
        correctAnswer: 'رؤية 2030',
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'sa6',
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
        questionText: 'في أي عام استقلت الكويت؟',
        questionType: 'mcq',
        correctAnswer: '1961',
        options: ['1959', '1961', '1963', '1965'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'kw2',
        questionText: 'ما هو اسم أشهر برج في الكويت؟',
        questionType: 'mcq',
        correctAnswer: 'أبراج الكويت',
        options: ['برج التحرير', 'أبراج الكويت', 'برج الحمراء', 'برج الصالحية'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'kw3',
        questionText: 'كم عدد محافظات الكويت؟',
        questionType: 'mcq',
        correctAnswer: '6 محافظات',
        options: ['5 محافظات', '6 محافظات', '7 محافظات', '4 محافظات'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'kw4',
        questionText: 'ما هو الاسم القديم للكويت؟',
        questionType: 'mcq',
        correctAnswer: 'القرين',
        options: ['الكوت', 'القرين', 'الفاو', 'الجهراء'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'kw5',
        questionText: 'من هو مؤسس الكويت الحديثة؟',
        questionType: 'open',
        correctAnswer: 'صباح الأول',
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'kw6',
        questionText: 'في أي عام تأسس البنك المركزي الكويتي؟',
        questionType: 'open',
        correctAnswer: '1968',
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
        questionText: 'من هو مؤلف السيمفونية التاسعة الشهيرة؟',
        questionType: 'mcq',
        correctAnswer: 'بيتهوفن',
        options: ['موزارت', 'باخ', 'بيتهوفن', 'شوبان'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'mu3',
        questionText: 'ما هي جنسية المغني العالمي إد شيران؟',
        questionType: 'mcq',
        correctAnswer: 'بريطاني',
        options: ['أمريكي', 'بريطاني', 'أيرلندي', 'كندي'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'mu4',
        questionText: 'من هو الفنان السعودي الملقب بـ "فنان العرب"؟',
        questionType: 'mcq',
        correctAnswer: 'محمد عبده',
        options: ['طلال مداح', 'محمد عبده', 'عبدالمجيد عبدالله', 'راشد الماجد'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'mu5',
        questionText: 'ما هو اسم أول ألبوم لفرقة البيتلز؟',
        questionType: 'open',
        correctAnswer: 'Please Please Me',
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'mu6',
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
        questionText: 'متى وقعت الحرب العالمية الأولى؟',
        questionType: 'mcq',
        correctAnswer: '1914-1918',
        options: ['1912-1916', '1914-1918', '1916-1920', '1910-1914'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'hi2',
        questionText: 'من هو القائد المسلم الذي فتح القسطنطينية؟',
        questionType: 'mcq',
        correctAnswer: 'محمد الفاتح',
        options: ['صلاح الدين', 'محمد الفاتح', 'طارق بن زياد', 'خالد بن الوليد'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'hi3',
        questionText: 'في أي قرن بُنيت أهرامات الجيزة؟',
        questionType: 'mcq',
        correctAnswer: 'القرن 26 قبل الميلاد',
        options: ['القرن 20 قبل الميلاد', 'القرن 26 قبل الميلاد', 'القرن 30 قبل الميلاد', 'القرن 15 قبل الميلاد'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'hi4',
        questionText: 'من هو مؤسس الدولة الأموية؟',
        questionType: 'mcq',
        correctAnswer: 'معاوية بن أبي سفيان',
        options: ['عبد الملك بن مروان', 'معاوية بن أبي سفيان', 'يزيد بن معاوية', 'مروان بن الحكم'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'hi5',
        questionText: 'في أي عام سقطت الأندلس (غرناطة)؟',
        questionType: 'open',
        correctAnswer: '1492',
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'hi6',
        questionText: 'كم عاماً استمرت الدولة العباسية؟',
        questionType: 'open',
        correctAnswer: '508',
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
        questionText: 'ما هي الأكلة الوطنية في السعودية؟',
        questionType: 'mcq',
        correctAnswer: 'الكبسة',
        options: ['المندي', 'الكبسة', 'المظبي', 'الجريش'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'fo2',
        questionText: 'من أي بلد نشأت البيتزا؟',
        questionType: 'mcq',
        correctAnswer: 'إيطاليا',
        options: ['أمريكا', 'إيطاليا', 'فرنسا', 'اليونان'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'fo3',
        questionText: 'ما هو المكون الأساسي في طبق الحمص؟',
        questionType: 'mcq',
        correctAnswer: 'حمص الشام',
        options: ['العدس', 'حمص الشام', 'الفول', 'الفاصوليا'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'fo4',
        questionText: 'ما هو اسم الطبق الياباني المكون من الأرز والسمك النيء؟',
        questionType: 'mcq',
        correctAnswer: 'سوشي',
        options: ['رامن', 'سوشي', 'تيمبورا', 'أودون'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'fo5',
        questionText: 'ما هي التوابل الأكثر تكلفة في العالم؟',
        questionType: 'open',
        correctAnswer: 'الزعفران',
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'fo6',
        questionText: 'كم درجة مئوية يغلي فيها الماء على مستوى سطح البحر؟',
        questionType: 'open',
        correctAnswer: '100',
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
        questionText: 'ما هو أكبر كوكب في المجموعة الشمسية؟',
        questionType: 'mcq',
        correctAnswer: 'المشتري',
        options: ['زحل', 'المشتري', 'أورانوس', 'نبتون'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sc2',
        questionText: 'ما هو الرمز الكيميائي للذهب؟',
        questionType: 'mcq',
        correctAnswer: 'Au',
        options: ['Ag', 'Au', 'Go', 'Gd'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'sc3',
        questionText: 'كم عدد عظام جسم الإنسان البالغ؟',
        questionType: 'mcq',
        correctAnswer: '206 عظمة',
        options: ['196 عظمة', '206 عظمة', '216 عظمة', '186 عظمة'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sc4',
        questionText: 'ما هي سرعة الضوء تقريباً؟',
        questionType: 'mcq',
        correctAnswer: '300,000 كم/ث',
        options: ['150,000 كم/ث', '300,000 كم/ث', '500,000 كم/ث', '200,000 كم/ث'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'sc5',
        questionText: 'من هو العالم الذي اكتشف البنسلين؟',
        questionType: 'open',
        correctAnswer: 'ألكسندر فلمنج',
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'sc6',
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
        questionText: 'ما هي اللعبة التي تحتوي على شخصية "ماريو"؟',
        questionType: 'mcq',
        correctAnswer: 'سوبر ماريو',
        options: ['سونيك', 'سوبر ماريو', 'زيلدا', 'بوكيمون'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'ga2',
        questionText: 'من هي الشركة المصنعة لجهاز بلايستيشن؟',
        questionType: 'mcq',
        correctAnswer: 'سوني',
        options: ['مايكروسوفت', 'نينتندو', 'سوني', 'سيجا'],
        difficulty: 'easy',
        points: 100
      },
      {
        id: 'ga3',
        questionText: 'ما اسم لعبة البقاء الشهيرة التي تحتوي على "كريبر"؟',
        questionType: 'mcq',
        correctAnswer: 'ماينكرافت',
        options: ['فورتنايت', 'ماينكرافت', 'روبلوكس', 'تيراريا'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'ga4',
        questionText: 'في أي عام صدرت لعبة GTA V؟',
        questionType: 'mcq',
        correctAnswer: '2013',
        options: ['2011', '2012', '2013', '2014'],
        difficulty: 'medium',
        points: 200
      },
      {
        id: 'ga5',
        questionText: 'ما هو اسم بطل لعبة "ذا ويتشر"؟',
        questionType: 'open',
        correctAnswer: 'جيرالت',
        difficulty: 'hard',
        points: 300
      },
      {
        id: 'ga6',
        questionText: 'كم نسخة بيعت من لعبة ماينكرافت حتى 2024؟',
        questionType: 'open',
        correctAnswer: '300 مليون',
        difficulty: 'expert',
        points: 500
      }
    ]
  }
]

// Function to get questions for selected categories
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

  // Shuffle questions
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
