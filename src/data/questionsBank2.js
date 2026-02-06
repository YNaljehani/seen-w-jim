// Question bank part 2: Music, History, Science, Gaming, Animals, Arabic, Space, Emirates
export const categories2 = [
  // ==================== 1. MUSIC (موسيقى وفن) ====================
  {
    id: 'music',
    questions: [
      // --- Easy (100) ---
      { id: 'mu_e1', questionText: 'ما هي الآلة الموسيقية التي يُطلق عليها "سيدة الآلات"؟', questionType: 'mcq', correctAnswer: 'البيانو', options: ['البيانو', 'الكمان', 'العود', 'الناي'], difficulty: 'easy', points: 100 },
      { id: 'mu_e2', questionText: 'من هو المطرب المصري الملقب بـ "العندليب الأسمر"؟', questionType: 'mcq', correctAnswer: 'عبد الحليم حافظ', options: ['عبد الحليم حافظ', 'محمد عبد الوهاب', 'فريد الأطرش', 'عمرو دياب'], difficulty: 'easy', points: 100 },
      { id: 'mu_e3', questionText: 'كم عدد أوتار العود العربي التقليدي؟', questionType: 'mcq', correctAnswer: '5 أوتار مزدوجة', options: ['5 أوتار مزدوجة', '4 أوتار مزدوجة', '6 أوتار مزدوجة', '3 أوتار مزدوجة'], difficulty: 'easy', points: 100 },
      { id: 'mu_e4', questionText: 'ما اسم اللوحة الشهيرة التي رسمها ليوناردو دا فينشي وتُعرف بابتسامتها الغامضة؟', questionType: 'mcq', correctAnswer: 'الموناليزا', options: ['الموناليزا', 'العشاء الأخير', 'الصرخة', 'ليلة النجوم'], difficulty: 'easy', points: 100 },
      { id: 'mu_e5', questionText: 'من هي المطربة اللبنانية الملقبة بـ "جارة القمر"؟', questionType: 'mcq', correctAnswer: 'فيروز', options: ['فيروز', 'نجوى كرم', 'ماجدة الرومي', 'صباح'], difficulty: 'easy', points: 100 },
      { id: 'mu_e6', questionText: 'ما هي الآلة الموسيقية التي تُعتبر رمزاً للموسيقى العربية الكلاسيكية؟', questionType: 'mcq', correctAnswer: 'العود', options: ['العود', 'الجيتار', 'البيانو', 'الطبلة'], difficulty: 'easy', points: 100 },
      { id: 'mu_e7', questionText: 'في أي متحف توجد لوحة الموناليزا؟', questionType: 'mcq', correctAnswer: 'متحف اللوفر', options: ['متحف اللوفر', 'المتحف البريطاني', 'متحف الميتروبوليتان', 'متحف الأرميتاج'], difficulty: 'easy', points: 100 },
      { id: 'mu_e8', questionText: 'من هو الفنان المصري الملقب بـ "كوكب الشرق"؟', questionType: 'mcq', correctAnswer: 'أم كلثوم', options: ['أم كلثوم', 'فيروز', 'وردة الجزائرية', 'أسمهان'], difficulty: 'easy', points: 100 },

      // --- Medium (200) ---
      { id: 'mu_m1', questionText: 'من هو مؤلف السيمفونية التاسعة الشهيرة والذي كان أصمّاً عند تأليفها؟', questionType: 'mcq', correctAnswer: 'بيتهوفن', options: ['بيتهوفن', 'موتسارت', 'باخ', 'شوبان'], difficulty: 'medium', points: 200 },
      { id: 'mu_m2', questionText: 'ما هي الآلة الموسيقية التي اشتهر بها عازف الجاز لويس أرمسترونغ؟', questionType: 'mcq', correctAnswer: 'البوق (الترومبيت)', options: ['البوق (الترومبيت)', 'الساكسفون', 'البيانو', 'الكلارينيت'], difficulty: 'medium', points: 200 },
      { id: 'mu_m3', questionText: 'من هو الرسام الهولندي الذي قطع أذنه؟', questionType: 'mcq', correctAnswer: 'فان غوخ', options: ['فان غوخ', 'رامبرانت', 'فيرمير', 'موندريان'], difficulty: 'medium', points: 200 },
      { id: 'mu_m4', questionText: 'ما اسم الموسيقار المصري الملقب بـ "موسيقار الأجيال"؟', questionType: 'mcq', correctAnswer: 'محمد عبد الوهاب', options: ['محمد عبد الوهاب', 'رياض السنباطي', 'بليغ حمدي', 'محمد الموجي'], difficulty: 'medium', points: 200 },
      { id: 'mu_m5', questionText: 'ما هو أعلى صوت نسائي في الغناء الأوبرالي؟', questionType: 'mcq', correctAnswer: 'سوبرانو', options: ['سوبرانو', 'ألتو', 'ميزو سوبرانو', 'كونترالتو'], difficulty: 'medium', points: 200 },
      { id: 'mu_m6', questionText: 'من رسم لوحة "ليلة النجوم" الشهيرة؟', questionType: 'mcq', correctAnswer: 'فان غوخ', options: ['فان غوخ', 'كلود مونيه', 'بابلو بيكاسو', 'سلفادور دالي'], difficulty: 'medium', points: 200 },
      { id: 'mu_m7', questionText: 'ما هي جنسية الموسيقار فريدريك شوبان؟', questionType: 'mcq', correctAnswer: 'بولندي', options: ['بولندي', 'نمساوي', 'ألماني', 'فرنسي'], difficulty: 'medium', points: 200 },
      { id: 'mu_m8', questionText: 'ما اسم الفرقة البريطانية التي ضمت جون لينون وبول مكارتني؟', questionType: 'mcq', correctAnswer: 'البيتلز', options: ['البيتلز', 'رولينغ ستونز', 'كوين', 'بينك فلويد'], difficulty: 'medium', points: 200 },

      // --- Hard (300) ---
      { id: 'mu_h1', questionText: 'ما هو اسم المقام الموسيقي العربي الذي يبدأ من نغمة الراست؟', questionType: 'mcq', correctAnswer: 'مقام الراست', options: ['مقام الراست', 'مقام النهاوند', 'مقام الحجاز', 'مقام البيات'], difficulty: 'hard', points: 300 },
      { id: 'mu_h2', questionText: 'من هو الرسام الإسباني الذي أسس المدرسة التكعيبية مع جورج براك؟', questionType: 'mcq', correctAnswer: 'بابلو بيكاسو', options: ['بابلو بيكاسو', 'سلفادور دالي', 'خوان ميرو', 'فرانشيسكو غويا'], difficulty: 'hard', points: 300 },
      { id: 'mu_h3', questionText: 'ما هي الآلة الموسيقية التي اشتهر بعزفها الموسيقار العراقي منير بشير؟', questionType: 'mcq', correctAnswer: 'العود', options: ['العود', 'القانون', 'الناي', 'الجوزة'], difficulty: 'hard', points: 300 },
      { id: 'mu_h4', questionText: 'ما اسم اللوحة الجدارية الشهيرة التي رسمها مايكل أنجلو على سقف كنيسة سيستينا؟', questionType: 'mcq', correctAnswer: 'خلق آدم', options: ['خلق آدم', 'العشاء الأخير', 'الحساب الأخير', 'مدرسة أثينا'], difficulty: 'hard', points: 300 },
      { id: 'mu_h5', questionText: 'من هو الموسيقار النمساوي الذي لُقّب بـ "أبو السيمفونية"؟', questionType: 'mcq', correctAnswer: 'يوزف هايدن', options: ['يوزف هايدن', 'موتسارت', 'شوبرت', 'شتراوس'], difficulty: 'hard', points: 300 },
      { id: 'mu_h6', questionText: 'ما هو المقام الموسيقي العربي الذي يُستخدم كثيراً في الأذان؟', questionType: 'mcq', correctAnswer: 'مقام الحجاز', options: ['مقام الحجاز', 'مقام الصبا', 'مقام العجم', 'مقام الكرد'], difficulty: 'hard', points: 300 },
      { id: 'mu_h7', questionText: 'من رسم لوحة "الصرخة" الشهيرة؟', questionType: 'mcq', correctAnswer: 'إدفارد مونك', options: ['إدفارد مونك', 'فان غوخ', 'غوستاف كليمت', 'إغون شيله'], difficulty: 'hard', points: 300 },
      { id: 'mu_h8', questionText: 'ما هي أوبرا "عايدة" ومن هو مؤلفها؟', questionType: 'mcq', correctAnswer: 'جوزيبي فيردي', options: ['جوزيبي فيردي', 'جاكومو بوتشيني', 'ريتشارد فاغنر', 'جواكينو روسيني'], difficulty: 'hard', points: 300 },

      // --- Expert (500) ---
      { id: 'mu_x1', questionText: 'في أي عام وُلد الموسيقار النمساوي فولفغانغ أماديوس موتسارت؟', questionType: 'open', correctAnswer: '1756', options: [], difficulty: 'expert', points: 500 },
      { id: 'mu_x2', questionText: 'ما اسم الرسام الذي رسم لوحة "إصرار الذاكرة" التي تتضمن ساعات ذائبة؟', questionType: 'open', correctAnswer: 'سلفادور دالي', options: [], difficulty: 'expert', points: 500 },
      { id: 'mu_x3', questionText: 'ما اسم آلة القانون بالإنجليزية؟', questionType: 'open', correctAnswer: 'Qanun', options: [], difficulty: 'expert', points: 500 },
      { id: 'mu_x4', questionText: 'من هو مؤلف "الفصول الأربعة" في الموسيقى الكلاسيكية؟', questionType: 'open', correctAnswer: 'فيفالدي', options: [], difficulty: 'expert', points: 500 },
      { id: 'mu_x5', questionText: 'ما اسم الفن الياباني التقليدي لطباعة المطبوعات الخشبية الذي أثّر على الانطباعيين الأوروبيين؟', questionType: 'open', correctAnswer: 'أوكييو-إه', options: [], difficulty: 'expert', points: 500 },
      { id: 'mu_x6', questionText: 'كم عدد السيمفونيات التي ألّفها بيتهوفن؟', questionType: 'open', correctAnswer: '9', options: [], difficulty: 'expert', points: 500 },
      { id: 'mu_x7', questionText: 'ما اسم المتحف الذي يوجد في أبوظبي ويحمل اسم متحف فرنسي شهير؟', questionType: 'open', correctAnswer: 'لوفر أبوظبي', options: [], difficulty: 'expert', points: 500 },
      { id: 'mu_x8', questionText: 'من هو الرسام الإيطالي الذي رسم لوحة "مدرسة أثينا" في الفاتيكان؟', questionType: 'open', correctAnswer: 'رافائيل', options: [], difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 2. HISTORY (تاريخ) ====================
  {
    id: 'history',
    questions: [
      // --- Easy (100) ---
      { id: 'hi_e1', questionText: 'في أي سنة هجرية هاجر النبي محمد ﷺ من مكة إلى المدينة؟', questionType: 'mcq', correctAnswer: '1 هـ', options: ['1 هـ', '2 هـ', '3 هـ', '10 هـ'], difficulty: 'easy', points: 100 },
      { id: 'hi_e2', questionText: 'من هو أول خليفة في الإسلام بعد وفاة النبي ﷺ؟', questionType: 'mcq', correctAnswer: 'أبو بكر الصديق', options: ['أبو بكر الصديق', 'عمر بن الخطاب', 'عثمان بن عفان', 'علي بن أبي طالب'], difficulty: 'easy', points: 100 },
      { id: 'hi_e3', questionText: 'ما اسم الحضارة التي بنت الأهرامات في مصر؟', questionType: 'mcq', correctAnswer: 'الحضارة الفرعونية', options: ['الحضارة الفرعونية', 'الحضارة الرومانية', 'الحضارة الإغريقية', 'الحضارة الفارسية'], difficulty: 'easy', points: 100 },
      { id: 'hi_e4', questionText: 'في أي عام انتهت الحرب العالمية الثانية؟', questionType: 'mcq', correctAnswer: '1945', options: ['1945', '1939', '1942', '1950'], difficulty: 'easy', points: 100 },
      { id: 'hi_e5', questionText: 'ما اسم المعركة التي انتصر فيها المسلمون بقيادة صلاح الدين الأيوبي وحرّر القدس؟', questionType: 'mcq', correctAnswer: 'معركة حطين', options: ['معركة حطين', 'معركة اليرموك', 'معركة عين جالوت', 'معركة القادسية'], difficulty: 'easy', points: 100 },
      { id: 'hi_e6', questionText: 'من هو مكتشف قارة أمريكا عام 1492؟', questionType: 'mcq', correctAnswer: 'كريستوفر كولومبوس', options: ['كريستوفر كولومبوس', 'ماجلان', 'فاسكو دا غاما', 'ماركو بولو'], difficulty: 'easy', points: 100 },
      { id: 'hi_e7', questionText: 'ما هو اسم أطول جدار بناه الإنسان في التاريخ؟', questionType: 'mcq', correctAnswer: 'سور الصين العظيم', options: ['سور الصين العظيم', 'جدار هادريان', 'جدار برلين', 'سور مجان'], difficulty: 'easy', points: 100 },
      { id: 'hi_e8', questionText: 'ما اسم الدولة الإسلامية التي حكمت الأندلس؟', questionType: 'mcq', correctAnswer: 'الدولة الأموية', options: ['الدولة الأموية', 'الدولة العباسية', 'الدولة الفاطمية', 'الدولة العثمانية'], difficulty: 'easy', points: 100 },

      // --- Medium (200) ---
      { id: 'hi_m1', questionText: 'من هو القائد المسلم الذي فتح القسطنطينية عام 1453؟', questionType: 'mcq', correctAnswer: 'محمد الفاتح', options: ['محمد الفاتح', 'سليمان القانوني', 'سليم الأول', 'بايزيد الثاني'], difficulty: 'medium', points: 200 },
      { id: 'hi_m2', questionText: 'في أي معركة هزم المغول على يد المماليك عام 1260م؟', questionType: 'mcq', correctAnswer: 'معركة عين جالوت', options: ['معركة عين جالوت', 'معركة حطين', 'معركة ذات الصواري', 'معركة نهاوند'], difficulty: 'medium', points: 200 },
      { id: 'hi_m3', questionText: 'ما هي الثورة التي اندلعت في فرنسا عام 1789؟', questionType: 'mcq', correctAnswer: 'الثورة الفرنسية', options: ['الثورة الفرنسية', 'الثورة الصناعية', 'ثورة البلاشفة', 'الثورة الأمريكية'], difficulty: 'medium', points: 200 },
      { id: 'hi_m4', questionText: 'من هو مؤسس الدولة الأموية؟', questionType: 'mcq', correctAnswer: 'معاوية بن أبي سفيان', options: ['معاوية بن أبي سفيان', 'عبد الملك بن مروان', 'مروان بن الحكم', 'يزيد بن معاوية'], difficulty: 'medium', points: 200 },
      { id: 'hi_m5', questionText: 'ما هو الحدث الذي بدأت به الحرب العالمية الأولى عام 1914؟', questionType: 'mcq', correctAnswer: 'اغتيال ولي عهد النمسا فرانز فرديناند', options: ['اغتيال ولي عهد النمسا فرانز فرديناند', 'غزو بولندا', 'قصف بيرل هاربر', 'سقوط جدار برلين'], difficulty: 'medium', points: 200 },
      { id: 'hi_m6', questionText: 'ما اسم الحضارة القديمة التي نشأت بين نهري دجلة والفرات؟', questionType: 'mcq', correctAnswer: 'حضارة بلاد الرافدين', options: ['حضارة بلاد الرافدين', 'الحضارة الفرعونية', 'حضارة وادي السند', 'الحضارة الصينية'], difficulty: 'medium', points: 200 },
      { id: 'hi_m7', questionText: 'من هو القائد القرطاجي الذي عبر جبال الألب بالفيلة لمحاربة روما؟', questionType: 'mcq', correctAnswer: 'هانيبال', options: ['هانيبال', 'يوليوس قيصر', 'الإسكندر الأكبر', 'سبارتاكوس'], difficulty: 'medium', points: 200 },
      { id: 'hi_m8', questionText: 'في أي مدينة عربية تأسست أول جامعة في العالم؟', questionType: 'mcq', correctAnswer: 'فاس (المغرب)', options: ['فاس (المغرب)', 'بغداد (العراق)', 'القاهرة (مصر)', 'قرطبة (الأندلس)'], difficulty: 'medium', points: 200 },

      // --- Hard (300) ---
      { id: 'hi_h1', questionText: 'ما اسم المعاهدة التي أنهت الحرب العالمية الأولى عام 1919؟', questionType: 'mcq', correctAnswer: 'معاهدة فرساي', options: ['معاهدة فرساي', 'معاهدة وستفاليا', 'معاهدة تورديسيلاس', 'معاهدة لوزان'], difficulty: 'hard', points: 300 },
      { id: 'hi_h2', questionText: 'من هو القائد المسلم الذي فتح بلاد السند (الهند)؟', questionType: 'mcq', correctAnswer: 'محمد بن القاسم الثقفي', options: ['محمد بن القاسم الثقفي', 'طارق بن زياد', 'قتيبة بن مسلم', 'موسى بن نصير'], difficulty: 'hard', points: 300 },
      { id: 'hi_h3', questionText: 'ما اسم العاصمة العباسية التي بناها الخليفة المنصور؟', questionType: 'mcq', correctAnswer: 'بغداد', options: ['بغداد', 'سامراء', 'الكوفة', 'الرقة'], difficulty: 'hard', points: 300 },
      { id: 'hi_h4', questionText: 'في أي عام سقطت غرناطة آخر معاقل المسلمين في الأندلس؟', questionType: 'mcq', correctAnswer: '1492م', options: ['1492م', '1480م', '1500م', '1453م'], difficulty: 'hard', points: 300 },
      { id: 'hi_h5', questionText: 'من هو الفرعون الذي بنى الهرم الأكبر في الجيزة؟', questionType: 'mcq', correctAnswer: 'خوفو', options: ['خوفو', 'خفرع', 'منقرع', 'رمسيس الثاني'], difficulty: 'hard', points: 300 },
      { id: 'hi_h6', questionText: 'ما اسم المعركة البحرية التي انتصر فيها المسلمون على البيزنطيين عام 655م؟', questionType: 'mcq', correctAnswer: 'معركة ذات الصواري', options: ['معركة ذات الصواري', 'معركة أكتيوم', 'معركة ليبانتو', 'معركة سلاميس'], difficulty: 'hard', points: 300 },
      { id: 'hi_h7', questionText: 'من هو مؤسس الدولة العباسية؟', questionType: 'mcq', correctAnswer: 'أبو العباس السفاح', options: ['أبو العباس السفاح', 'أبو جعفر المنصور', 'هارون الرشيد', 'المأمون'], difficulty: 'hard', points: 300 },
      { id: 'hi_h8', questionText: 'ما اسم الاتفاقية السرية بين بريطانيا وفرنسا لتقسيم المشرق العربي عام 1916؟', questionType: 'mcq', correctAnswer: 'اتفاقية سايكس بيكو', options: ['اتفاقية سايكس بيكو', 'وعد بلفور', 'اتفاقية كامب ديفيد', 'معاهدة لوزان'], difficulty: 'hard', points: 300 },

      // --- Expert (500) ---
      { id: 'hi_x1', questionText: 'في أي سنة ميلادية وقعت معركة بدر الكبرى؟', questionType: 'open', correctAnswer: '624', options: [], difficulty: 'expert', points: 500 },
      { id: 'hi_x2', questionText: 'ما اسم القائد المغولي الذي اجتاح بغداد عام 1258م؟', questionType: 'open', correctAnswer: 'هولاكو', options: [], difficulty: 'expert', points: 500 },
      { id: 'hi_x3', questionText: 'في أي عام ميلادي فُتحت مصر بقيادة عمرو بن العاص؟', questionType: 'open', correctAnswer: '641', options: [], difficulty: 'expert', points: 500 },
      { id: 'hi_x4', questionText: 'ما اسم آخر خليفة عباسي في بغداد قبل سقوطها؟', questionType: 'open', correctAnswer: 'المستعصم بالله', options: [], difficulty: 'expert', points: 500 },
      { id: 'hi_x5', questionText: 'كم سنة استمرت حرب المائة عام بين إنجلترا وفرنسا؟', questionType: 'open', correctAnswer: '116', options: [], difficulty: 'expert', points: 500 },
      { id: 'hi_x6', questionText: 'ما اسم أول مدينة بناها المسلمون في مصر؟', questionType: 'open', correctAnswer: 'الفسطاط', options: [], difficulty: 'expert', points: 500 },
      { id: 'hi_x7', questionText: 'من هو القائد المسلم الذي فتح الأندلس عام 711م؟', questionType: 'open', correctAnswer: 'طارق بن زياد', options: [], difficulty: 'expert', points: 500 },
      { id: 'hi_x8', questionText: 'في أي عام وقعت معركة اليرموك التي هزم فيها المسلمون البيزنطيين؟', questionType: 'open', correctAnswer: '636', options: [], difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 3. SCIENCE (علوم) ====================
  {
    id: 'science',
    questions: [
      // --- Easy (100) ---
      { id: 'sc_e1', questionText: 'ما هو الغاز الذي يتنفسه الإنسان للبقاء على قيد الحياة؟', questionType: 'mcq', correctAnswer: 'الأكسجين', options: ['الأكسجين', 'النيتروجين', 'ثاني أكسيد الكربون', 'الهيدروجين'], difficulty: 'easy', points: 100 },
      { id: 'sc_e2', questionText: 'ما هو أكبر عضو في جسم الإنسان؟', questionType: 'mcq', correctAnswer: 'الجلد', options: ['الجلد', 'الكبد', 'الرئة', 'المعدة'], difficulty: 'easy', points: 100 },
      { id: 'sc_e3', questionText: 'ما هو الكوكب الأقرب إلى الشمس؟', questionType: 'mcq', correctAnswer: 'عطارد', options: ['عطارد', 'الزهرة', 'الأرض', 'المريخ'], difficulty: 'easy', points: 100 },
      { id: 'sc_e4', questionText: 'ما هي حالات المادة الثلاث الأساسية؟', questionType: 'mcq', correctAnswer: 'صلبة وسائلة وغازية', options: ['صلبة وسائلة وغازية', 'صلبة وسائلة وبلازما', 'صلبة وغازية وبلازما', 'سائلة وغازية وبلازما'], difficulty: 'easy', points: 100 },
      { id: 'sc_e5', questionText: 'كم عدد عظام جسم الإنسان البالغ؟', questionType: 'mcq', correctAnswer: '206', options: ['206', '208', '300', '180'], difficulty: 'easy', points: 100 },
      { id: 'sc_e6', questionText: 'ما هو العنصر الكيميائي الذي رمزه O؟', questionType: 'mcq', correctAnswer: 'الأكسجين', options: ['الأكسجين', 'الذهب', 'الحديد', 'الأوزميوم'], difficulty: 'easy', points: 100 },
      { id: 'sc_e7', questionText: 'ما الكوكب الذي يُعرف بالكوكب الأحمر؟', questionType: 'mcq', correctAnswer: 'المريخ', options: ['المريخ', 'المشتري', 'زحل', 'الزهرة'], difficulty: 'easy', points: 100 },
      { id: 'sc_e8', questionText: 'ما هي الوحدة الأساسية لقياس درجة الحرارة في النظام المئوي؟', questionType: 'mcq', correctAnswer: 'سلسيوس', options: ['سلسيوس', 'فهرنهايت', 'كلفن', 'رانكين'], difficulty: 'easy', points: 100 },

      // --- Medium (200) ---
      { id: 'sc_m1', questionText: 'ما هي الصيغة الكيميائية للماء؟', questionType: 'mcq', correctAnswer: 'H₂O', options: ['H₂O', 'CO₂', 'NaCl', 'O₂'], difficulty: 'medium', points: 200 },
      { id: 'sc_m2', questionText: 'ما هو العضو المسؤول عن تنقية الدم في جسم الإنسان؟', questionType: 'mcq', correctAnswer: 'الكلية', options: ['الكلية', 'القلب', 'الكبد', 'الرئة'], difficulty: 'medium', points: 200 },
      { id: 'sc_m3', questionText: 'ما هي سرعة الضوء تقريباً في الثانية؟', questionType: 'mcq', correctAnswer: '300,000 كم/ث', options: ['300,000 كم/ث', '150,000 كم/ث', '500,000 كم/ث', '1,000,000 كم/ث'], difficulty: 'medium', points: 200 },
      { id: 'sc_m4', questionText: 'ما هو أصلب معدن طبيعي على وجه الأرض؟', questionType: 'mcq', correctAnswer: 'الألماس', options: ['الألماس', 'الحديد', 'التيتانيوم', 'الكوارتز'], difficulty: 'medium', points: 200 },
      { id: 'sc_m5', questionText: 'ما هو الحمض النووي الذي يحمل المعلومات الوراثية؟', questionType: 'mcq', correctAnswer: 'DNA', options: ['DNA', 'RNA', 'ATP', 'ADP'], difficulty: 'medium', points: 200 },
      { id: 'sc_m6', questionText: 'ما هو العنصر الأكثر وفرة في الكون؟', questionType: 'mcq', correctAnswer: 'الهيدروجين', options: ['الهيدروجين', 'الهيليوم', 'الأكسجين', 'الكربون'], difficulty: 'medium', points: 200 },
      { id: 'sc_m7', questionText: 'كم عدد الكروموسومات في الخلية البشرية الطبيعية؟', questionType: 'mcq', correctAnswer: '46', options: ['46', '44', '48', '23'], difficulty: 'medium', points: 200 },
      { id: 'sc_m8', questionText: 'ما هي القوة التي تُبقي الأقدام على الأرض وتمنعنا من الطيران؟', questionType: 'mcq', correctAnswer: 'الجاذبية', options: ['الجاذبية', 'المغناطيسية', 'الاحتكاك', 'القوة النووية'], difficulty: 'medium', points: 200 },

      // --- Hard (300) ---
      { id: 'sc_h1', questionText: 'ما هو الرقم الهيدروجيني (pH) للماء النقي؟', questionType: 'mcq', correctAnswer: '7', options: ['7', '0', '14', '5'], difficulty: 'hard', points: 300 },
      { id: 'sc_h2', questionText: 'ما هي أصغر وحدة في الكائن الحي تستطيع القيام بجميع وظائف الحياة؟', questionType: 'mcq', correctAnswer: 'الخلية', options: ['الخلية', 'الذرة', 'الجزيء', 'النسيج'], difficulty: 'hard', points: 300 },
      { id: 'sc_h3', questionText: 'ما هو اسم العالم الذي وضع قوانين الحركة الثلاثة؟', questionType: 'mcq', correctAnswer: 'إسحاق نيوتن', options: ['إسحاق نيوتن', 'ألبرت أينشتاين', 'غاليليو غاليلي', 'نيكولا تسلا'], difficulty: 'hard', points: 300 },
      { id: 'sc_h4', questionText: 'ما هو الغاز الذي يُشكّل حوالي 78% من الغلاف الجوي للأرض؟', questionType: 'mcq', correctAnswer: 'النيتروجين', options: ['النيتروجين', 'الأكسجين', 'ثاني أكسيد الكربون', 'الأرغون'], difficulty: 'hard', points: 300 },
      { id: 'sc_h5', questionText: 'ما هو المصطلح العلمي لعملية تحويل النبات ضوء الشمس إلى غذاء؟', questionType: 'mcq', correctAnswer: 'البناء الضوئي', options: ['البناء الضوئي', 'التنفس الخلوي', 'التخمر', 'الانتشار'], difficulty: 'hard', points: 300 },
      { id: 'sc_h6', questionText: 'ما هو العنصر الكيميائي الذي رمزه Fe؟', questionType: 'mcq', correctAnswer: 'الحديد', options: ['الحديد', 'الفلور', 'الفرانسيوم', 'الفيرميوم'], difficulty: 'hard', points: 300 },
      { id: 'sc_h7', questionText: 'ما هي وحدة قياس القوة في النظام الدولي؟', questionType: 'mcq', correctAnswer: 'نيوتن', options: ['نيوتن', 'جول', 'واط', 'باسكال'], difficulty: 'hard', points: 300 },
      { id: 'sc_h8', questionText: 'ما هو اسم الجسيم سالب الشحنة في الذرة؟', questionType: 'mcq', correctAnswer: 'الإلكترون', options: ['الإلكترون', 'البروتون', 'النيوترون', 'الفوتون'], difficulty: 'hard', points: 300 },

      // --- Expert (500) ---
      { id: 'sc_x1', questionText: 'ما هو العدد الذري لعنصر الكربون؟', questionType: 'open', correctAnswer: '6', options: [], difficulty: 'expert', points: 500 },
      { id: 'sc_x2', questionText: 'ما اسم العالم العربي الذي يُعدّ أبا البصريات وألّف كتاب "المناظر"؟', questionType: 'open', correctAnswer: 'ابن الهيثم', options: [], difficulty: 'expert', points: 500 },
      { id: 'sc_x3', questionText: 'كم تبلغ درجة الصفر المطلق بالسلسيوس تقريباً؟', questionType: 'open', correctAnswer: '-273', options: [], difficulty: 'expert', points: 500 },
      { id: 'sc_x4', questionText: 'ما هو الاسم العلمي للإنسان العاقل؟', questionType: 'open', correctAnswer: 'هومو سابينس', options: [], difficulty: 'expert', points: 500 },
      { id: 'sc_x5', questionText: 'ما هي وحدة قياس شدة التيار الكهربائي؟', questionType: 'open', correctAnswer: 'أمبير', options: [], difficulty: 'expert', points: 500 },
      { id: 'sc_x6', questionText: 'كم يبلغ عدد العظام في جسم الطفل حديث الولادة تقريباً؟', questionType: 'open', correctAnswer: '270', options: [], difficulty: 'expert', points: 500 },
      { id: 'sc_x7', questionText: 'ما اسم القوة التي تمسك مكونات نواة الذرة معاً؟', questionType: 'open', correctAnswer: 'القوة النووية الشديدة', options: [], difficulty: 'expert', points: 500 },
      { id: 'sc_x8', questionText: 'ما هو العنصر الكيميائي الذي رمزه Au؟', questionType: 'open', correctAnswer: 'الذهب', options: [], difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 4. GAMING (ألعاب فيديو) ====================
  {
    id: 'gaming',
    questions: [
      // --- Easy (100) ---
      { id: 'ga_e1', questionText: 'ما اسم الشخصية ذات القبعة الحمراء في ألعاب نينتندو؟', questionType: 'mcq', correctAnswer: 'ماريو', options: ['ماريو', 'لويجي', 'وايريو', 'تود'], difficulty: 'easy', points: 100 },
      { id: 'ga_e2', questionText: 'ما هي اللعبة التي يقوم فيها اللاعب ببناء عالم من المكعبات؟', questionType: 'mcq', correctAnswer: 'ماينكرافت', options: ['ماينكرافت', 'روبلوكس', 'فورتنايت', 'تيراريا'], difficulty: 'easy', points: 100 },
      { id: 'ga_e3', questionText: 'ما اسم الشركة اليابانية التي صنعت جهاز بلايستيشن؟', questionType: 'mcq', correctAnswer: 'سوني', options: ['سوني', 'نينتندو', 'مايكروسوفت', 'سيغا'], difficulty: 'easy', points: 100 },
      { id: 'ga_e4', questionText: 'ما اسم اللعبة الشهيرة التي تتضمن إسقاط كتل ملونة وترتيبها؟', questionType: 'mcq', correctAnswer: 'تيتريس', options: ['تيتريس', 'باك مان', 'سبيس إنفيدرز', 'بونغ'], difficulty: 'easy', points: 100 },
      { id: 'ga_e5', questionText: 'في لعبة فورتنايت، ما هو الهدف الرئيسي في طور "باتل رويال"؟', questionType: 'mcq', correctAnswer: 'البقاء كآخر لاعب', options: ['البقاء كآخر لاعب', 'بناء أعلى برج', 'جمع أكبر عدد من الأسلحة', 'إنهاء المهام'], difficulty: 'easy', points: 100 },
      { id: 'ga_e6', questionText: 'ما اسم الجهاز المحمول الشهير من نينتندو الذي يمكن فصل أذرع التحكم؟', questionType: 'mcq', correctAnswer: 'نينتندو سويتش', options: ['نينتندو سويتش', 'نينتندو DS', 'غيم بوي', 'PSP'], difficulty: 'easy', points: 100 },
      { id: 'ga_e7', questionText: 'ما هي اللعبة التي يهرب فيها طائر من أنابيب خضراء؟', questionType: 'mcq', correctAnswer: 'فلابي بيرد', options: ['فلابي بيرد', 'أنغري بيردز', 'كروسي رود', 'سابواي سيرفرز'], difficulty: 'easy', points: 100 },
      { id: 'ga_e8', questionText: 'ما اسم سلسلة الألعاب التي تتضمن صيد مخلوقات تُسمّى "بوكيمون"؟', questionType: 'mcq', correctAnswer: 'بوكيمون', options: ['بوكيمون', 'ديجيمون', 'يوغي أو', 'بيبليد'], difficulty: 'easy', points: 100 },

      // --- Medium (200) ---
      { id: 'ga_m1', questionText: 'ما اسم البطل الرئيسي في سلسلة ألعاب "ذا ليجند أوف زيلدا"؟', questionType: 'mcq', correctAnswer: 'لينك', options: ['لينك', 'زيلدا', 'غانوندورف', 'شيك'], difficulty: 'medium', points: 200 },
      { id: 'ga_m2', questionText: 'في أي عام صدرت لعبة GTA V (جراند ثيفت أوتو 5)؟', questionType: 'mcq', correctAnswer: '2013', options: ['2013', '2011', '2015', '2010'], difficulty: 'medium', points: 200 },
      { id: 'ga_m3', questionText: 'ما اسم استوديو تطوير لعبة "ذا لاست أوف أس"؟', questionType: 'mcq', correctAnswer: 'نوتي دوغ', options: ['نوتي دوغ', 'سانتا مونيكا', 'إنسومنياك', 'بنجي'], difficulty: 'medium', points: 200 },
      { id: 'ga_m4', questionText: 'ما هي اللعبة التي يقاتل فيها اللاعبون كفريق من 5 ضد 5 بشخصيات تُسمى "وكلاء"؟', questionType: 'mcq', correctAnswer: 'فالورانت', options: ['فالورانت', 'أوفرواتش', 'أبيكس ليجندز', 'كاونتر سترايك'], difficulty: 'medium', points: 200 },
      { id: 'ga_m5', questionText: 'ما اسم المحارب الإسبرطي بطل سلسلة "هالو"؟', questionType: 'mcq', correctAnswer: 'ماستر تشيف', options: ['ماستر تشيف', 'ماركوس فينيكس', 'سام فيشر', 'سوليد سنيك'], difficulty: 'medium', points: 200 },
      { id: 'ga_m6', questionText: 'ما هي الشركة المطوّرة للعبة "فورتنايت"؟', questionType: 'mcq', correctAnswer: 'إيبك غيمز', options: ['إيبك غيمز', 'إي أيه', 'أكتيفيجن', 'يوبي سوفت'], difficulty: 'medium', points: 200 },
      { id: 'ga_m7', questionText: 'ما اسم بطل سلسلة ألعاب "غود أوف وور"؟', questionType: 'mcq', correctAnswer: 'كريتوس', options: ['كريتوس', 'أتريوس', 'زيوس', 'آريس'], difficulty: 'medium', points: 200 },
      { id: 'ga_m8', questionText: 'ما هي لعبة كرة القدم الشهيرة من إنتاج شركة EA Sports التي غُيّر اسمها؟', questionType: 'mcq', correctAnswer: 'فيفا (EA FC)', options: ['فيفا (EA FC)', 'بيس (eFootball)', 'فوتبول مانجر', 'روكيت ليغ'], difficulty: 'medium', points: 200 },

      // --- Hard (300) ---
      { id: 'ga_h1', questionText: 'ما اسم أول جهاز بلايستيشن وفي أي عام صدر في اليابان؟', questionType: 'mcq', correctAnswer: 'بلايستيشن 1 عام 1994', options: ['بلايستيشن 1 عام 1994', 'بلايستيشن 1 عام 1996', 'بلايستيشن 1 عام 1992', 'بلايستيشن 1 عام 1998'], difficulty: 'hard', points: 300 },
      { id: 'ga_h2', questionText: 'ما اسم محرك الألعاب الشهير الذي طوّرته إيبك غيمز؟', questionType: 'mcq', correctAnswer: 'أنريل إنجن', options: ['أنريل إنجن', 'يونيتي', 'كراي إنجن', 'فروست بايت'], difficulty: 'hard', points: 300 },
      { id: 'ga_h3', questionText: 'في لعبة ماينكرافت، ما اسم البعد الذي يوجد فيه التنين الأخير (إندر دراغون)؟', questionType: 'mcq', correctAnswer: 'ذي إند', options: ['ذي إند', 'النذر', 'العالم العلوي', 'الأبيس'], difficulty: 'hard', points: 300 },
      { id: 'ga_h4', questionText: 'ما هي اللعبة اليابانية التي تتضمن شخصيات تُقاتل باستخدام أسلحة ضخمة وتُعرف بصعوبتها الشديدة من استوديو فروم سوفتوير؟', questionType: 'mcq', correctAnswer: 'دارك سولز', options: ['دارك سولز', 'نيير أوتوماتا', 'ديفل ماي كراي', 'بايونيتا'], difficulty: 'hard', points: 300 },
      { id: 'ga_h5', questionText: 'ما اسم اللعبة التي صدرت عام 2020 وأحدثت جدلاً بسبب الأخطاء التقنية وكانت تقع في مدينة مستقبلية؟', questionType: 'mcq', correctAnswer: 'سايبربانك 2077', options: ['سايبربانك 2077', 'ووتش دوغز ليجن', 'ديوس إكس', 'ديترويت بيكم هيومن'], difficulty: 'hard', points: 300 },
      { id: 'ga_h6', questionText: 'ما هي أول لعبة باتل رويال حققت شهرة واسعة على الحاسب الشخصي؟', questionType: 'mcq', correctAnswer: 'ببجي (PUBG)', options: ['ببجي (PUBG)', 'فورتنايت', 'H1Z1', 'أبيكس ليجندز'], difficulty: 'hard', points: 300 },
      { id: 'ga_h7', questionText: 'من هو مصمم سلسلة ألعاب "ميتال غير سوليد"؟', questionType: 'mcq', correctAnswer: 'هيديو كوجيما', options: ['هيديو كوجيما', 'شيغيرو مياموتو', 'هيديكي كامييا', 'فوميتو أويدا'], difficulty: 'hard', points: 300 },
      { id: 'ga_h8', questionText: 'ما هو اسم سلسلة الألعاب من ستوديو فروم سوفتوير التي فازت بجائزة لعبة العام 2022؟', questionType: 'mcq', correctAnswer: 'إلدن رينغ', options: ['إلدن رينغ', 'سيكيرو', 'بلادبورن', 'دارك سولز 3'], difficulty: 'hard', points: 300 },

      // --- Expert (500) ---
      { id: 'ga_x1', questionText: 'في أي عام صدرت لعبة "ماينكرافت" رسمياً؟', questionType: 'open', correctAnswer: '2011', options: [], difficulty: 'expert', points: 500 },
      { id: 'ga_x2', questionText: 'ما اسم بطلة سلسلة ألعاب "تومب رايدر"؟', questionType: 'open', correctAnswer: 'لارا كروفت', options: [], difficulty: 'expert', points: 500 },
      { id: 'ga_x3', questionText: 'ما اسم الشركة اليابانية التي طوّرت سلسلة "فاينل فانتسي"؟', questionType: 'open', correctAnswer: 'سكوير إنكس', options: [], difficulty: 'expert', points: 500 },
      { id: 'ga_x4', questionText: 'كم عدد اللاعبين في فريق واحد في لعبة "كاونتر سترايك"؟', questionType: 'open', correctAnswer: '5', options: [], difficulty: 'expert', points: 500 },
      { id: 'ga_x5', questionText: 'ما اسم مبتكر شخصية ماريو وسلسلة زيلدا في نينتندو؟', questionType: 'open', correctAnswer: 'شيغيرو مياموتو', options: [], difficulty: 'expert', points: 500 },
      { id: 'ga_x6', questionText: 'ما هو اسم أول لعبة فيديو في التاريخ يُعتبرها الكثيرون؟', questionType: 'open', correctAnswer: 'بونغ', options: [], difficulty: 'expert', points: 500 },
      { id: 'ga_x7', questionText: 'ما اسم اللعبة المجانية من Riot Games التي تُلعب كفرق 5v5 على خريطة بثلاث حارات؟', questionType: 'open', correctAnswer: 'ليغ أوف ليجندز', options: [], difficulty: 'expert', points: 500 },
      { id: 'ga_x8', questionText: 'في أي عام صدر جهاز إكس بوكس الأول من مايكروسوفت؟', questionType: 'open', correctAnswer: '2001', options: [], difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 5. ANIMALS (حيوانات) ====================
  {
    id: 'animals',
    questions: [
      // --- Easy (100) ---
      { id: 'an_e1', questionText: 'ما هو أسرع حيوان بري في العالم؟', questionType: 'mcq', correctAnswer: 'الفهد', options: ['الفهد', 'الأسد', 'الغزال', 'الحصان'], difficulty: 'easy', points: 100 },
      { id: 'an_e2', questionText: 'ما هو أكبر حيوان على وجه الأرض؟', questionType: 'mcq', correctAnswer: 'الحوت الأزرق', options: ['الحوت الأزرق', 'الفيل الأفريقي', 'الزرافة', 'القرش الحوتي'], difficulty: 'easy', points: 100 },
      { id: 'an_e3', questionText: 'كم عدد أرجل العنكبوت؟', questionType: 'mcq', correctAnswer: '8', options: ['8', '6', '10', '4'], difficulty: 'easy', points: 100 },
      { id: 'an_e4', questionText: 'ما هو الحيوان الذي يُعرف بأنه "ملك الغابة"؟', questionType: 'mcq', correctAnswer: 'الأسد', options: ['الأسد', 'النمر', 'الدب', 'الذئب'], difficulty: 'easy', points: 100 },
      { id: 'an_e5', questionText: 'ما هو الطائر الذي لا يستطيع الطيران ويعيش في القطب الجنوبي؟', questionType: 'mcq', correctAnswer: 'البطريق', options: ['البطريق', 'النعامة', 'الكيوي', 'الديك الرومي'], difficulty: 'easy', points: 100 },
      { id: 'an_e6', questionText: 'ما هو الحيوان الذي يحمل صغاره في جيب على بطنه؟', questionType: 'mcq', correctAnswer: 'الكنغر', options: ['الكنغر', 'الكوالا', 'الباندا', 'الدب القطبي'], difficulty: 'easy', points: 100 },
      { id: 'an_e7', questionText: 'ما اسم صوت القطة؟', questionType: 'mcq', correctAnswer: 'مواء', options: ['مواء', 'نباح', 'زئير', 'صهيل'], difficulty: 'easy', points: 100 },
      { id: 'an_e8', questionText: 'ما هو الحيوان البحري الذي لديه ثمانية أذرع؟', questionType: 'mcq', correctAnswer: 'الأخطبوط', options: ['الأخطبوط', 'الحبار', 'قنديل البحر', 'نجم البحر'], difficulty: 'easy', points: 100 },

      // --- Medium (200) ---
      { id: 'an_m1', questionText: 'ما هو أطول حيوان بري من حيث الارتفاع؟', questionType: 'mcq', correctAnswer: 'الزرافة', options: ['الزرافة', 'الفيل', 'الجمل', 'النعامة'], difficulty: 'medium', points: 200 },
      { id: 'an_m2', questionText: 'ما هو الحيوان الوحيد الذي يستطيع الطيران من الثدييات؟', questionType: 'mcq', correctAnswer: 'الخفاش', options: ['الخفاش', 'السنجاب الطائر', 'الليمور الطائر', 'البوسوم'], difficulty: 'medium', points: 200 },
      { id: 'an_m3', questionText: 'كم قلب للأخطبوط؟', questionType: 'mcq', correctAnswer: '3 قلوب', options: ['3 قلوب', 'قلب واحد', 'قلبان', '4 قلوب'], difficulty: 'medium', points: 200 },
      { id: 'an_m4', questionText: 'ما هو الحيوان الذي يُنتج الحرير الطبيعي؟', questionType: 'mcq', correctAnswer: 'دودة القز', options: ['دودة القز', 'العنكبوت', 'النحلة', 'الفراشة'], difficulty: 'medium', points: 200 },
      { id: 'an_m5', questionText: 'أين يعيش الدب القطبي؟', questionType: 'mcq', correctAnswer: 'القطب الشمالي', options: ['القطب الشمالي', 'القطب الجنوبي', 'سيبيريا فقط', 'كلا القطبين'], difficulty: 'medium', points: 200 },
      { id: 'an_m6', questionText: 'ما هو الحيوان الذي يُغيّر لونه للتمويه؟', questionType: 'mcq', correctAnswer: 'الحرباء', options: ['الحرباء', 'الضفدع', 'الإغوانا', 'الوزغة'], difficulty: 'medium', points: 200 },
      { id: 'an_m7', questionText: 'ما هو أكبر أنواع القروش في العالم؟', questionType: 'mcq', correctAnswer: 'القرش الحوتي', options: ['القرش الحوتي', 'القرش الأبيض الكبير', 'القرش المطرقة', 'القرش الثور'], difficulty: 'medium', points: 200 },
      { id: 'an_m8', questionText: 'ما هو الطائر الأسرع في العالم أثناء الانقضاض؟', questionType: 'mcq', correctAnswer: 'الصقر الشاهين', options: ['الصقر الشاهين', 'النسر الذهبي', 'الشاهين', 'العقاب'], difficulty: 'medium', points: 200 },

      // --- Hard (300) ---
      { id: 'an_h1', questionText: 'كم سنة يمكن أن يعيش سلحفاة غالاباغوس العملاقة تقريباً؟', questionType: 'mcq', correctAnswer: 'أكثر من 100 سنة', options: ['أكثر من 100 سنة', '50 سنة', '70 سنة', '200 سنة'], difficulty: 'hard', points: 300 },
      { id: 'an_h2', questionText: 'ما هو الحيوان الذي ينام واقفاً؟', questionType: 'mcq', correctAnswer: 'الحصان', options: ['الحصان', 'البقرة', 'الزرافة', 'الفيل'], difficulty: 'hard', points: 300 },
      { id: 'an_h3', questionText: 'ما هو السم الذي تُفرزه أسماك الفوغو (السمكة المنتفخة)؟', questionType: 'mcq', correctAnswer: 'تيترودوتوكسين', options: ['تيترودوتوكسين', 'سيانيد', 'بوتولينوم', 'ريسين'], difficulty: 'hard', points: 300 },
      { id: 'an_h4', questionText: 'ما هي الحشرة التي تستطيع حمل 50 ضعف وزنها؟', questionType: 'mcq', correctAnswer: 'النملة', options: ['النملة', 'الخنفساء', 'النحلة', 'الجرادة'], difficulty: 'hard', points: 300 },
      { id: 'an_h5', questionText: 'ما هو الحيوان الذي لديه أعلى ضغط دم بين الثدييات بسبب طول رقبته؟', questionType: 'mcq', correctAnswer: 'الزرافة', options: ['الزرافة', 'الفيل', 'الحوت', 'الحصان'], difficulty: 'hard', points: 300 },
      { id: 'an_h6', questionText: 'ما هو اسم أكبر طائر في العالم من حيث الحجم؟', questionType: 'mcq', correctAnswer: 'النعامة', options: ['النعامة', 'الكندور', 'القطرس', 'النسر'], difficulty: 'hard', points: 300 },
      { id: 'an_h7', questionText: 'ما هو الحيوان البحري الذي يمتلك دماً أزرق اللون؟', questionType: 'mcq', correctAnswer: 'سرطان حدوة الحصان', options: ['سرطان حدوة الحصان', 'الأخطبوط', 'الحبار', 'الكركند'], difficulty: 'hard', points: 300 },
      { id: 'an_h8', questionText: 'ما هو نوع الحيوان الذي يُسمّى "خُلد الماء" ويضع البيض رغم أنه من الثدييات؟', questionType: 'mcq', correctAnswer: 'منقار البط (بلاتيبوس)', options: ['منقار البط (بلاتيبوس)', 'القنفذ الشوكي', 'كسلان الماء', 'ثعلب الماء'], difficulty: 'hard', points: 300 },

      // --- Expert (500) ---
      { id: 'an_x1', questionText: 'كم عدد عيون النحلة؟', questionType: 'open', correctAnswer: '5', options: [], difficulty: 'expert', points: 500 },
      { id: 'an_x2', questionText: 'ما هو الحيوان الذي لا يشرب الماء طوال حياته ويكتفي بالرطوبة من الطعام؟', questionType: 'open', correctAnswer: 'الكوالا', options: [], difficulty: 'expert', points: 500 },
      { id: 'an_x3', questionText: 'كم عدد فقرات رقبة الزرافة؟', questionType: 'open', correctAnswer: '7', options: [], difficulty: 'expert', points: 500 },
      { id: 'an_x4', questionText: 'ما هو الحيوان الذي تمتلك أنثاه حقيبة تُسمّى الجراب لحمل صغارها وهو رمز أستراليا؟', questionType: 'open', correctAnswer: 'الكنغر', options: [], difficulty: 'expert', points: 500 },
      { id: 'an_x5', questionText: 'ما اسم أسرع سمكة في المحيط؟', questionType: 'open', correctAnswer: 'سمكة الشراع', options: [], difficulty: 'expert', points: 500 },
      { id: 'an_x6', questionText: 'كم عدد أنواع النمل المعروفة تقريباً: أقل من 5000، أكثر من 10000، أو أكثر من 20000؟', questionType: 'open', correctAnswer: 'أكثر من 10000', options: [], difficulty: 'expert', points: 500 },
      { id: 'an_x7', questionText: 'ما اسم الحيوان البحري الذي يُعدّ أطول حيوان في العالم ويمكن أن يصل طوله إلى 37 متراً؟', questionType: 'open', correctAnswer: 'قنديل عرف الأسد', options: [], difficulty: 'expert', points: 500 },
      { id: 'an_x8', questionText: 'ما هي الحشرة التي تهاجر آلاف الكيلومترات سنوياً من كندا إلى المكسيك؟', questionType: 'open', correctAnswer: 'فراشة الملك', options: [], difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 6. ARABIC (لغة عربية) ====================
  {
    id: 'arabic',
    questions: [
      // --- Easy (100) ---
      { id: 'ar_e1', questionText: 'كم عدد حروف اللغة العربية؟', questionType: 'mcq', correctAnswer: '28 حرفاً', options: ['28 حرفاً', '26 حرفاً', '30 حرفاً', '29 حرفاً'], difficulty: 'easy', points: 100 },
      { id: 'ar_e2', questionText: 'ما هو جمع كلمة "كتاب"؟', questionType: 'mcq', correctAnswer: 'كُتُب', options: ['كُتُب', 'كتابات', 'كاتبون', 'مكاتب'], difficulty: 'easy', points: 100 },
      { id: 'ar_e3', questionText: 'ما هو ضد كلمة "طويل"؟', questionType: 'mcq', correctAnswer: 'قصير', options: ['قصير', 'عريض', 'صغير', 'نحيف'], difficulty: 'easy', points: 100 },
      { id: 'ar_e4', questionText: 'ما نوع كلمة "جميل" في اللغة العربية؟', questionType: 'mcq', correctAnswer: 'صفة (نعت)', options: ['صفة (نعت)', 'اسم', 'فعل', 'حرف'], difficulty: 'easy', points: 100 },
      { id: 'ar_e5', questionText: 'أكمل المثل العربي: "الصبر مفتاح ..."', questionType: 'mcq', correctAnswer: 'الفرج', options: ['الفرج', 'النجاح', 'السعادة', 'الخير'], difficulty: 'easy', points: 100 },
      { id: 'ar_e6', questionText: 'ما هو الفعل الماضي من "يكتب"؟', questionType: 'mcq', correctAnswer: 'كَتَبَ', options: ['كَتَبَ', 'كاتِب', 'مكتوب', 'اكتُب'], difficulty: 'easy', points: 100 },
      { id: 'ar_e7', questionText: 'ما معنى كلمة "مسجد" في أصلها اللغوي؟', questionType: 'mcq', correctAnswer: 'مكان السجود', options: ['مكان السجود', 'مكان الصلاة', 'مكان العبادة', 'مكان الذكر'], difficulty: 'easy', points: 100 },
      { id: 'ar_e8', questionText: 'ما هي علامة رفع الاسم المفرد؟', questionType: 'mcq', correctAnswer: 'الضمة', options: ['الضمة', 'الفتحة', 'الكسرة', 'السكون'], difficulty: 'easy', points: 100 },

      // --- Medium (200) ---
      { id: 'ar_m1', questionText: 'من هو الشاعر العربي الملقب بـ "أمير الشعراء"؟', questionType: 'mcq', correctAnswer: 'أحمد شوقي', options: ['أحمد شوقي', 'حافظ إبراهيم', 'المتنبي', 'نزار قباني'], difficulty: 'medium', points: 200 },
      { id: 'ar_m2', questionText: 'ما هو إعراب كلمة "الطالبُ" في جملة "جاءَ الطالبُ"؟', questionType: 'mcq', correctAnswer: 'فاعل مرفوع', options: ['فاعل مرفوع', 'مبتدأ مرفوع', 'خبر مرفوع', 'مفعول به منصوب'], difficulty: 'medium', points: 200 },
      { id: 'ar_m3', questionText: 'من هو صاحب معلقة "قفا نبكِ من ذكرى حبيب ومنزل"؟', questionType: 'mcq', correctAnswer: 'امرؤ القيس', options: ['امرؤ القيس', 'طرفة بن العبد', 'زهير بن أبي سلمى', 'عنترة بن شداد'], difficulty: 'medium', points: 200 },
      { id: 'ar_m4', questionText: 'ما هو جمع كلمة "مدير"؟', questionType: 'mcq', correctAnswer: 'مُدراء', options: ['مُدراء', 'مديرون', 'إدارات', 'مدائر'], difficulty: 'medium', points: 200 },
      { id: 'ar_m5', questionText: 'أكمل المثل: "مَن جَدَّ ..."', questionType: 'mcq', correctAnswer: 'وَجَدَ', options: ['وَجَدَ', 'نَجَحَ', 'فازَ', 'حَصَدَ'], difficulty: 'medium', points: 200 },
      { id: 'ar_m6', questionText: 'ما هو البحر الشعري الذي تُكتب عليه معظم الأناشيد؟', questionType: 'mcq', correctAnswer: 'بحر الرجز', options: ['بحر الرجز', 'بحر الطويل', 'بحر الكامل', 'بحر البسيط'], difficulty: 'medium', points: 200 },
      { id: 'ar_m7', questionText: 'ما هي "الأفعال الخمسة" في اللغة العربية؟', questionType: 'mcq', correctAnswer: 'أفعال مضارعة اتصلت بألف الاثنين أو واو الجماعة أو ياء المخاطبة', options: ['أفعال مضارعة اتصلت بألف الاثنين أو واو الجماعة أو ياء المخاطبة', 'الأفعال الماضية الخماسية', 'خمسة أفعال شاذة', 'أفعال المدح والذم'], difficulty: 'medium', points: 200 },
      { id: 'ar_m8', questionText: 'ما معنى كلمة "ديوان" في الأدب العربي؟', questionType: 'mcq', correctAnswer: 'مجموعة أشعار', options: ['مجموعة أشعار', 'قصة طويلة', 'كتاب نثري', 'مقالة أدبية'], difficulty: 'medium', points: 200 },

      // --- Hard (300) ---
      { id: 'ar_h1', questionText: 'من هو صاحب كتاب "الكتاب" في النحو العربي؟', questionType: 'mcq', correctAnswer: 'سيبويه', options: ['سيبويه', 'الخليل بن أحمد', 'ابن مالك', 'الزمخشري'], difficulty: 'hard', points: 300 },
      { id: 'ar_h2', questionText: 'ما هو الشاعر الجاهلي الملقب بـ "الشاعر الفارس"؟', questionType: 'mcq', correctAnswer: 'عنترة بن شداد', options: ['عنترة بن شداد', 'امرؤ القيس', 'الحارث بن حلزة', 'عمرو بن كلثوم'], difficulty: 'hard', points: 300 },
      { id: 'ar_h3', questionText: 'كم عدد المعلقات في الشعر الجاهلي وفق الرواية الأشهر؟', questionType: 'mcq', correctAnswer: '7 معلقات', options: ['7 معلقات', '10 معلقات', '5 معلقات', '12 معلقة'], difficulty: 'hard', points: 300 },
      { id: 'ar_h4', questionText: 'ما هو الحرف الذي يُسمّى "حرف الضاد" وتُعرف العربية بلغة الضاد بسببه؟', questionType: 'mcq', correctAnswer: 'لأن حرف الضاد لا يوجد في لغة أخرى', options: ['لأن حرف الضاد لا يوجد في لغة أخرى', 'لأنه أصعب حرف', 'لأنه أول حرف في القرآن', 'لأنه الحرف الأكثر استخداماً'], difficulty: 'hard', points: 300 },
      { id: 'ar_h5', questionText: 'من هو مؤلف ملحمة "ألف ليلة وليلة"؟', questionType: 'mcq', correctAnswer: 'مؤلف مجهول (عمل جماعي متراكم)', options: ['مؤلف مجهول (عمل جماعي متراكم)', 'الجاحظ', 'ابن المقفع', 'أبو الفرج الأصفهاني'], difficulty: 'hard', points: 300 },
      { id: 'ar_h6', questionText: 'ما هو "التنوين" في اللغة العربية؟', questionType: 'mcq', correctAnswer: 'نون ساكنة تلحق آخر الاسم لفظاً لا كتابةً', options: ['نون ساكنة تلحق آخر الاسم لفظاً لا كتابةً', 'حركة فوق الحرف الأخير', 'تشديد على الحرف', 'مد في آخر الكلمة'], difficulty: 'hard', points: 300 },
      { id: 'ar_h7', questionText: 'من هو الشاعر العباسي صاحب لقب "شاعر الفلاسفة وفيلسوف الشعراء"؟', questionType: 'mcq', correctAnswer: 'أبو العلاء المعري', options: ['أبو العلاء المعري', 'المتنبي', 'أبو تمام', 'البحتري'], difficulty: 'hard', points: 300 },
      { id: 'ar_h8', questionText: 'ما اسم أقدم معجم عربي وضعه الخليل بن أحمد الفراهيدي؟', questionType: 'mcq', correctAnswer: 'معجم العين', options: ['معجم العين', 'لسان العرب', 'القاموس المحيط', 'تاج العروس'], difficulty: 'hard', points: 300 },

      // --- Expert (500) ---
      { id: 'ar_x1', questionText: 'من هو الشاعر العربي الملقب بـ "المتنبي"؟ ما اسمه الحقيقي؟', questionType: 'open', correctAnswer: 'أحمد بن الحسين', options: [], difficulty: 'expert', points: 500 },
      { id: 'ar_x2', questionText: 'كم عدد بحور الشعر العربي التي وضعها الخليل بن أحمد الفراهيدي؟', questionType: 'open', correctAnswer: '15', options: [], difficulty: 'expert', points: 500 },
      { id: 'ar_x3', questionText: 'ما اسم الكتاب الشهير في البلاغة العربية الذي ألّفه عبد القاهر الجرجاني؟', questionType: 'open', correctAnswer: 'دلائل الإعجاز', options: [], difficulty: 'expert', points: 500 },
      { id: 'ar_x4', questionText: 'ما هو المصطلح البلاغي للتعبير عن المعنى بعكسه مثل قول "سَمِعتُ أذناي"؟', questionType: 'open', correctAnswer: 'الإسناد المجازي', options: [], difficulty: 'expert', points: 500 },
      { id: 'ar_x5', questionText: 'من هو مؤلف كتاب "كليلة ودمنة" بالعربية؟', questionType: 'open', correctAnswer: 'ابن المقفع', options: [], difficulty: 'expert', points: 500 },
      { id: 'ar_x6', questionText: 'أكمل بيت المتنبي: "على قَدرِ أهلِ العزمِ تأتي ..."', questionType: 'open', correctAnswer: 'العزائم', options: [], difficulty: 'expert', points: 500 },
      { id: 'ar_x7', questionText: 'من هو مؤلف كتاب "مقدمة ابن خلدون" الشهير في علم الاجتماع؟', questionType: 'open', correctAnswer: 'ابن خلدون', options: [], difficulty: 'expert', points: 500 },
      { id: 'ar_x8', questionText: 'ما اسم البحر الشعري الذي أضافه الأخفش الأوسط إلى بحور الخليل؟', questionType: 'open', correctAnswer: 'المتدارك', options: [], difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 7. SPACE (فضاء) ====================
  {
    id: 'space',
    questions: [
      // --- Easy (100) ---
      { id: 'spc_e1', questionText: 'كم عدد كواكب المجموعة الشمسية؟', questionType: 'mcq', correctAnswer: '8 كواكب', options: ['8 كواكب', '9 كواكب', '7 كواكب', '10 كواكب'], difficulty: 'easy', points: 100 },
      { id: 'spc_e2', questionText: 'ما هو أقرب نجم إلى كوكب الأرض؟', questionType: 'mcq', correctAnswer: 'الشمس', options: ['الشمس', 'بروكسيما سنتوري', 'سيريوس', 'ألفا سنتوري'], difficulty: 'easy', points: 100 },
      { id: 'spc_e3', questionText: 'ما هو أكبر كوكب في المجموعة الشمسية؟', questionType: 'mcq', correctAnswer: 'المشتري', options: ['المشتري', 'زحل', 'نبتون', 'أورانوس'], difficulty: 'easy', points: 100 },
      { id: 'spc_e4', questionText: 'ما هو اسم القمر الصناعي الأول الذي أُطلق إلى الفضاء؟', questionType: 'mcq', correctAnswer: 'سبوتنيك', options: ['سبوتنيك', 'أبولو', 'فوستوك', 'إكسبلورر'], difficulty: 'easy', points: 100 },
      { id: 'spc_e5', questionText: 'ما هو لون كوكب المريخ كما يظهر من الفضاء؟', questionType: 'mcq', correctAnswer: 'أحمر', options: ['أحمر', 'أزرق', 'أخضر', 'بنّي'], difficulty: 'easy', points: 100 },
      { id: 'spc_e6', questionText: 'ما اسم المجرة التي نعيش فيها؟', questionType: 'mcq', correctAnswer: 'درب التبانة', options: ['درب التبانة', 'أندروميدا', 'المرأة المسلسلة', 'سحابة ماجلان'], difficulty: 'easy', points: 100 },
      { id: 'spc_e7', questionText: 'كم يستغرق دوران الأرض حول نفسها؟', questionType: 'mcq', correctAnswer: '24 ساعة', options: ['24 ساعة', '12 ساعة', '365 يوماً', '30 يوماً'], difficulty: 'easy', points: 100 },
      { id: 'spc_e8', questionText: 'ما هو الكوكب المشهور بحلقاته الجميلة؟', questionType: 'mcq', correctAnswer: 'زحل', options: ['زحل', 'المشتري', 'أورانوس', 'نبتون'], difficulty: 'easy', points: 100 },

      // --- Medium (200) ---
      { id: 'spc_m1', questionText: 'من هو أول إنسان صعد إلى الفضاء؟', questionType: 'mcq', correctAnswer: 'يوري غاغارين', options: ['يوري غاغارين', 'نيل أرمسترونغ', 'ألان شيبرد', 'جون غلين'], difficulty: 'medium', points: 200 },
      { id: 'spc_m2', questionText: 'في أي عام هبط أول إنسان على سطح القمر؟', questionType: 'mcq', correctAnswer: '1969', options: ['1969', '1967', '1971', '1965'], difficulty: 'medium', points: 200 },
      { id: 'spc_m3', questionText: 'ما اسم وكالة الفضاء الأمريكية؟', questionType: 'mcq', correctAnswer: 'ناسا (NASA)', options: ['ناسا (NASA)', 'إيسا (ESA)', 'روسكوسموس', 'جاكسا (JAXA)'], difficulty: 'medium', points: 200 },
      { id: 'spc_m4', questionText: 'ما هو اسم التلسكوب الفضائي الذي أُطلق عام 1990 ويدور حول الأرض؟', questionType: 'mcq', correctAnswer: 'هابل', options: ['هابل', 'جيمس ويب', 'كبلر', 'سبيتزر'], difficulty: 'medium', points: 200 },
      { id: 'spc_m5', questionText: 'ما اسم أول رائد فضاء عربي؟', questionType: 'mcq', correctAnswer: 'الأمير سلطان بن سلمان', options: ['الأمير سلطان بن سلمان', 'هزاع المنصوري', 'محمد فارس', 'سلطان النيادي'], difficulty: 'medium', points: 200 },
      { id: 'spc_m6', questionText: 'كم يبعد القمر عن الأرض تقريباً؟', questionType: 'mcq', correctAnswer: '384,000 كم', options: ['384,000 كم', '150,000 كم', '500,000 كم', '1,000,000 كم'], difficulty: 'medium', points: 200 },
      { id: 'spc_m7', questionText: 'ما هو اسم محطة الفضاء الدولية بالإنجليزية؟', questionType: 'mcq', correctAnswer: 'ISS', options: ['ISS', 'MIR', 'Skylab', 'Tiangong'], difficulty: 'medium', points: 200 },
      { id: 'spc_m8', questionText: 'ما هو الكوكب الذي يدور حول نفسه بشكل معاكس لبقية الكواكب؟', questionType: 'mcq', correctAnswer: 'الزهرة', options: ['الزهرة', 'أورانوس', 'نبتون', 'عطارد'], difficulty: 'medium', points: 200 },

      // --- Hard (300) ---
      { id: 'spc_h1', questionText: 'ما هو اسم أول مسبار إماراتي وصل إلى المريخ؟', questionType: 'mcq', correctAnswer: 'مسبار الأمل', options: ['مسبار الأمل', 'مسبار خليفة', 'مسبار زايد', 'مسبار الثريا'], difficulty: 'hard', points: 300 },
      { id: 'spc_h2', questionText: 'ما هو الثقب الأسود؟', questionType: 'mcq', correctAnswer: 'منطقة في الفضاء ذات جاذبية هائلة لا يفلت منها حتى الضوء', options: ['منطقة في الفضاء ذات جاذبية هائلة لا يفلت منها حتى الضوء', 'نجم ميت بارد', 'ثقب حقيقي في نسيج الفضاء', 'كوكب مظلم جداً'], difficulty: 'hard', points: 300 },
      { id: 'spc_h3', questionText: 'ما اسم التلسكوب الفضائي الذي أُطلق عام 2021 ويُعدّ خليفة هابل؟', questionType: 'mcq', correctAnswer: 'جيمس ويب', options: ['جيمس ويب', 'كبلر', 'سبيتزر', 'تشاندرا'], difficulty: 'hard', points: 300 },
      { id: 'spc_h4', questionText: 'ما اسم أول مركبة فضائية هبطت على سطح المريخ بنجاح عام 1976؟', questionType: 'mcq', correctAnswer: 'فايكنغ 1', options: ['فايكنغ 1', 'مارينر 4', 'سبيريت', 'كيوريوسيتي'], difficulty: 'hard', points: 300 },
      { id: 'spc_h5', questionText: 'ما هي السنة الضوئية؟', questionType: 'mcq', correctAnswer: 'المسافة التي يقطعها الضوء في سنة واحدة', options: ['المسافة التي يقطعها الضوء في سنة واحدة', 'الزمن الذي يستغرقه الضوء للوصول للأرض', 'سرعة الضوء مضروبة في سنة', 'وحدة لقياس عمر النجوم'], difficulty: 'hard', points: 300 },
      { id: 'spc_h6', questionText: 'كم عدد أقمار كوكب المشتري المعروفة تقريباً؟', questionType: 'mcq', correctAnswer: 'أكثر من 90 قمراً', options: ['أكثر من 90 قمراً', '16 قمراً', '4 أقمار', '50 قمراً'], difficulty: 'hard', points: 300 },
      { id: 'spc_h7', questionText: 'ما اسم البرنامج الفضائي الذي أوصل الإنسان إلى القمر؟', questionType: 'mcq', correctAnswer: 'برنامج أبولو', options: ['برنامج أبولو', 'برنامج جيميني', 'برنامج ميركوري', 'برنامج أرتميس'], difficulty: 'hard', points: 300 },
      { id: 'spc_h8', questionText: 'ما هو الكوكب القزم الذي كان يُعدّ الكوكب التاسع في المجموعة الشمسية؟', questionType: 'mcq', correctAnswer: 'بلوتو', options: ['بلوتو', 'إيريس', 'سيريس', 'هاوميا'], difficulty: 'hard', points: 300 },

      // --- Expert (500) ---
      { id: 'spc_x1', questionText: 'في أي عام أُطلق مسبار الأمل الإماراتي إلى المريخ؟', questionType: 'open', correctAnswer: '2020', options: [], difficulty: 'expert', points: 500 },
      { id: 'spc_x2', questionText: 'ما اسم أول رائد فضاء إماراتي وصل إلى محطة الفضاء الدولية؟', questionType: 'open', correctAnswer: 'هزاع المنصوري', options: [], difficulty: 'expert', points: 500 },
      { id: 'spc_x3', questionText: 'كم تبلغ المسافة بين الأرض والشمس تقريباً بملايين الكيلومترات؟', questionType: 'open', correctAnswer: '150', options: [], difficulty: 'expert', points: 500 },
      { id: 'spc_x4', questionText: 'ما اسم أول امرأة صعدت إلى الفضاء؟', questionType: 'open', correctAnswer: 'فالنتينا تيريشكوفا', options: [], difficulty: 'expert', points: 500 },
      { id: 'spc_x5', questionText: 'كم يستغرق الضوء للوصول من الشمس إلى الأرض تقريباً بالدقائق؟', questionType: 'open', correctAnswer: '8 دقائق', options: [], difficulty: 'expert', points: 500 },
      { id: 'spc_x6', questionText: 'ما اسم رائد الفضاء الإماراتي الذي قضى أطول مهمة عربية في الفضاء عام 2023؟', questionType: 'open', correctAnswer: 'سلطان النيادي', options: [], difficulty: 'expert', points: 500 },
      { id: 'spc_x7', questionText: 'ما هو اسم أبعد كوكب عن الشمس في المجموعة الشمسية؟', questionType: 'open', correctAnswer: 'نبتون', options: [], difficulty: 'expert', points: 500 },
      { id: 'spc_x8', questionText: 'ما هو اسم المركبة الفضائية التي حملت أبولو 11 إلى القمر؟', questionType: 'open', correctAnswer: 'ساتورن 5', options: [], difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 8. EMIRATES (إماراتي) ====================
  {
    id: 'emirates',
    questions: [
      // --- Easy (100) ---
      { id: 'uae_e1', questionText: 'ما هو عدد الإمارات التي تتكون منها دولة الإمارات العربية المتحدة؟', questionType: 'mcq', correctAnswer: '7 إمارات', options: ['7 إمارات', '6 إمارات', '8 إمارات', '5 إمارات'], difficulty: 'easy', points: 100 },
      { id: 'uae_e2', questionText: 'من هو مؤسس دولة الإمارات العربية المتحدة؟', questionType: 'mcq', correctAnswer: 'الشيخ زايد بن سلطان آل نهيان', options: ['الشيخ زايد بن سلطان آل نهيان', 'الشيخ راشد بن سعيد آل مكتوم', 'الشيخ صقر بن محمد القاسمي', 'الشيخ خالد بن محمد الشرقي'], difficulty: 'easy', points: 100 },
      { id: 'uae_e3', questionText: 'ما هي عاصمة دولة الإمارات العربية المتحدة؟', questionType: 'mcq', correctAnswer: 'أبوظبي', options: ['أبوظبي', 'دبي', 'الشارقة', 'العين'], difficulty: 'easy', points: 100 },
      { id: 'uae_e4', questionText: 'ما اسم أعلى مبنى في العالم الموجود في دبي؟', questionType: 'mcq', correctAnswer: 'برج خليفة', options: ['برج خليفة', 'برج العرب', 'برج الاتحاد', 'أبراج الإمارات'], difficulty: 'easy', points: 100 },
      { id: 'uae_e5', questionText: 'ما هو العلم الذي يتكون من أربعة ألوان: أحمر وأخضر وأبيض وأسود؟', questionType: 'mcq', correctAnswer: 'علم الإمارات', options: ['علم الإمارات', 'علم الكويت', 'علم الأردن', 'علم السودان'], difficulty: 'easy', points: 100 },
      { id: 'uae_e6', questionText: 'في أي يوم يُحتفل باليوم الوطني لدولة الإمارات؟', questionType: 'mcq', correctAnswer: '2 ديسمبر', options: ['2 ديسمبر', '1 يناير', '25 فبراير', '23 سبتمبر'], difficulty: 'easy', points: 100 },
      { id: 'uae_e7', questionText: 'ما هي العملة الرسمية لدولة الإمارات؟', questionType: 'mcq', correctAnswer: 'الدرهم الإماراتي', options: ['الدرهم الإماراتي', 'الريال', 'الدينار', 'الجنيه'], difficulty: 'easy', points: 100 },
      { id: 'uae_e8', questionText: 'ما اسم المسجد الكبير في أبوظبي الذي يُعدّ من أجمل المساجد في العالم؟', questionType: 'mcq', correctAnswer: 'مسجد الشيخ زايد الكبير', options: ['مسجد الشيخ زايد الكبير', 'مسجد الفاتح', 'المسجد الأزرق', 'مسجد الحرام'], difficulty: 'easy', points: 100 },

      // --- Medium (200) ---
      { id: 'uae_m1', questionText: 'في أي عام تأسست دولة الإمارات العربية المتحدة؟', questionType: 'mcq', correctAnswer: '1971', options: ['1971', '1970', '1972', '1969'], difficulty: 'medium', points: 200 },
      { id: 'uae_m2', questionText: 'ما هي الإمارة الأكبر مساحة في الدولة؟', questionType: 'mcq', correctAnswer: 'أبوظبي', options: ['أبوظبي', 'دبي', 'الشارقة', 'رأس الخيمة'], difficulty: 'medium', points: 200 },
      { id: 'uae_m3', questionText: 'ما اسم جزيرة السعديات الشهيرة في أبوظبي التي تضم متاحف عالمية؟', questionType: 'mcq', correctAnswer: 'جزيرة السعديات', options: ['جزيرة السعديات', 'جزيرة ياس', 'جزيرة المارية', 'جزيرة الريم'], difficulty: 'medium', points: 200 },
      { id: 'uae_m4', questionText: 'ما هو اسم مشروع الطاقة النووية السلمية في الإمارات؟', questionType: 'mcq', correctAnswer: 'محطة براكة', options: ['محطة براكة', 'محطة الظفرة', 'محطة مصدر', 'محطة نور'], difficulty: 'medium', points: 200 },
      { id: 'uae_m5', questionText: 'ما اسم شركة الطيران الوطنية لإمارة أبوظبي؟', questionType: 'mcq', correctAnswer: 'الاتحاد للطيران', options: ['الاتحاد للطيران', 'طيران الإمارات', 'فلاي دبي', 'العربية للطيران'], difficulty: 'medium', points: 200 },
      { id: 'uae_m6', questionText: 'ما هي الإمارة المعروفة بلقب "مدينة المتاحف" والاهتمام بالثقافة؟', questionType: 'mcq', correctAnswer: 'الشارقة', options: ['الشارقة', 'دبي', 'أبوظبي', 'عجمان'], difficulty: 'medium', points: 200 },
      { id: 'uae_m7', questionText: 'ما اسم الجزيرة الاصطناعية الشهيرة في دبي على شكل نخلة؟', questionType: 'mcq', correctAnswer: 'نخلة جميرا', options: ['نخلة جميرا', 'نخلة ديرة', 'جزيرة العالم', 'جزيرة بلوواترز'], difficulty: 'medium', points: 200 },
      { id: 'uae_m8', questionText: 'من هو رئيس دولة الإمارات الحالي؟', questionType: 'mcq', correctAnswer: 'الشيخ محمد بن زايد آل نهيان', options: ['الشيخ محمد بن زايد آل نهيان', 'الشيخ محمد بن راشد آل مكتوم', 'الشيخ خليفة بن زايد آل نهيان', 'الشيخ سلطان بن محمد القاسمي'], difficulty: 'medium', points: 200 },

      // --- Hard (300) ---
      { id: 'uae_h1', questionText: 'في أي عام أقيم معرض إكسبو 2020 دبي فعلياً؟', questionType: 'mcq', correctAnswer: '2021-2022', options: ['2021-2022', '2020-2021', '2019-2020', '2022-2023'], difficulty: 'hard', points: 300 },
      { id: 'uae_h2', questionText: 'ما هو شعار معرض إكسبو 2020 دبي؟', questionType: 'mcq', correctAnswer: 'تواصل العقول وصنع المستقبل', options: ['تواصل العقول وصنع المستقبل', 'معاً نحو المستقبل', 'الابتكار والإلهام', 'عالم واحد مستقبل واحد'], difficulty: 'hard', points: 300 },
      { id: 'uae_h3', questionText: 'ما اسم أول قمر صناعي إماراتي تم إطلاقه؟', questionType: 'mcq', correctAnswer: 'الثريا 1', options: ['الثريا 1', 'خليفة سات', 'دبي سات 1', 'نايف 1'], difficulty: 'hard', points: 300 },
      { id: 'uae_h4', questionText: 'ما هو اسم مشروع مدينة مصدر في أبوظبي؟', questionType: 'mcq', correctAnswer: 'مدينة مستدامة تعتمد على الطاقة المتجددة', options: ['مدينة مستدامة تعتمد على الطاقة المتجددة', 'مدينة ترفيهية سياحية', 'مدينة صناعية ثقيلة', 'مدينة تكنولوجيا المعلومات'], difficulty: 'hard', points: 300 },
      { id: 'uae_h5', questionText: 'كم يبلغ ارتفاع برج خليفة تقريباً؟', questionType: 'mcq', correctAnswer: '828 متراً', options: ['828 متراً', '750 متراً', '900 متراً', '680 متراً'], difficulty: 'hard', points: 300 },
      { id: 'uae_h6', questionText: 'ما اسم الهيئة المسؤولة عن برنامج الفضاء الإماراتي؟', questionType: 'mcq', correctAnswer: 'وكالة الإمارات للفضاء', options: ['وكالة الإمارات للفضاء', 'مركز محمد بن راشد للفضاء', 'هيئة الفضاء الإماراتية', 'مؤسسة الإمارات للعلوم'], difficulty: 'hard', points: 300 },
      { id: 'uae_h7', questionText: 'ما هي أول إمارة اكتُشف فيها النفط في الإمارات؟', questionType: 'mcq', correctAnswer: 'أبوظبي', options: ['أبوظبي', 'دبي', 'الشارقة', 'رأس الخيمة'], difficulty: 'hard', points: 300 },
      { id: 'uae_h8', questionText: 'ما اسم المشروع الإماراتي لاستكشاف كوكب المريخ بمستوطنة بشرية بحلول 2117؟', questionType: 'mcq', correctAnswer: 'مشروع المريخ 2117', options: ['مشروع المريخ 2117', 'مشروع الأمل 2117', 'مشروع زايد للمريخ', 'مشروع الفضاء 2100'], difficulty: 'hard', points: 300 },

      // --- Expert (500) ---
      { id: 'uae_x1', questionText: 'في أي يوم وشهر وسنة تأسست دولة الإمارات رسمياً؟', questionType: 'open', correctAnswer: '2 ديسمبر 1971', options: [], difficulty: 'expert', points: 500 },
      { id: 'uae_x2', questionText: 'كم عدد طوابق برج خليفة؟', questionType: 'open', correctAnswer: '163', options: [], difficulty: 'expert', points: 500 },
      { id: 'uae_x3', questionText: 'ما هو اسم أول مسجد بُني في منطقة الإمارات ويقع في الفجيرة؟', questionType: 'open', correctAnswer: 'مسجد البدية', options: [], difficulty: 'expert', points: 500 },
      { id: 'uae_x4', questionText: 'ما اسم الجائزة الإماراتية الشهيرة التي تُمنح للإنجازات الإنسانية عالمياً؟', questionType: 'open', correctAnswer: 'جائزة زايد للأخوة الإنسانية', options: [], difficulty: 'expert', points: 500 },
      { id: 'uae_x5', questionText: 'ما اسم أقدم مدرسة نظامية في الإمارات التي تأسست في الشارقة؟', questionType: 'open', correctAnswer: 'المدرسة القاسمية', options: [], difficulty: 'expert', points: 500 },
      { id: 'uae_x6', questionText: 'في أي عام اكتُشف النفط لأول مرة في أبوظبي؟', questionType: 'open', correctAnswer: '1958', options: [], difficulty: 'expert', points: 500 },
      { id: 'uae_x7', questionText: 'ما اسم الإمارة التي انضمت كآخر إمارة إلى الاتحاد في فبراير 1972؟', questionType: 'open', correctAnswer: 'رأس الخيمة', options: [], difficulty: 'expert', points: 500 },
      { id: 'uae_x8', questionText: 'ما هو اسم المهرجان السنوي الشهير للتراث في أبوظبي الذي يحتفي بتقاليد البدو؟', questionType: 'open', correctAnswer: 'مهرجان الظفرة', options: [], difficulty: 'expert', points: 500 },
    ],
  },
]
