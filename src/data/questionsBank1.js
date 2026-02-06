// Question bank part 1: Sports, Movies, Geography, Islamic, Technology, Saudi, Kuwait, Food
export const categories1 = [
  // ==================== 1. SPORTS (رياضة) ====================
  {
    id: 'sports',
    questions: [
      // --- Easy (100 points) ---
      { id: 'sp_e1', questionText: 'كم عدد اللاعبين في فريق كرة القدم داخل الملعب؟', questionType: 'mcq', correctAnswer: '11', options: ['9', '10', '11', '12'], difficulty: 'easy', points: 100 },
      { id: 'sp_e2', questionText: 'في أي رياضة يُستخدم مصطلح "سلام دانك"؟', questionType: 'mcq', correctAnswer: 'كرة السلة', options: ['كرة القدم', 'كرة السلة', 'كرة الطائرة', 'كرة اليد'], difficulty: 'easy', points: 100 },
      { id: 'sp_e3', questionText: 'كم شوطاً في مباراة كرة القدم؟', questionType: 'mcq', correctAnswer: 'شوطان', options: ['شوط واحد', 'شوطان', 'ثلاثة أشواط', 'أربعة أشواط'], difficulty: 'easy', points: 100 },
      { id: 'sp_e4', questionText: 'ما لون البطاقة التي تعني طرد اللاعب في كرة القدم؟', questionType: 'mcq', correctAnswer: 'أحمر', options: ['أصفر', 'أحمر', 'أخضر', 'أزرق'], difficulty: 'easy', points: 100 },
      { id: 'sp_e5', questionText: 'أين أُقيمت أول بطولة كأس عالم لكرة القدم عام 1930؟', questionType: 'mcq', correctAnswer: 'الأوروغواي', options: ['البرازيل', 'الأوروغواي', 'إيطاليا', 'فرنسا'], difficulty: 'easy', points: 100 },
      { id: 'sp_e6', questionText: 'كم تستغرق مدة الشوط الواحد في كرة القدم؟', questionType: 'mcq', correctAnswer: '45 دقيقة', options: ['30 دقيقة', '40 دقيقة', '45 دقيقة', '50 دقيقة'], difficulty: 'easy', points: 100 },
      { id: 'sp_e7', questionText: 'ما هي الرياضة التي يُطلق عليها "اللعبة الجميلة"؟', questionType: 'mcq', correctAnswer: 'كرة القدم', options: ['كرة القدم', 'التنس', 'الكريكيت', 'السباحة'], difficulty: 'easy', points: 100 },
      { id: 'sp_e8', questionText: 'كم عدد الحلقات في شعار الأولمبياد؟', questionType: 'mcq', correctAnswer: '5', options: ['3', '4', '5', '6'], difficulty: 'easy', points: 100 },

      // --- Medium (200 points) ---
      { id: 'sp_m1', questionText: 'من هو هداف كأس العالم 2022 في قطر؟', questionType: 'mcq', correctAnswer: 'كيليان مبابي', options: ['ليونيل ميسي', 'كيليان مبابي', 'أوليفييه جيرو', 'جوليان ألفاريز'], difficulty: 'medium', points: 200 },
      { id: 'sp_m2', questionText: 'ما هو النادي الأكثر فوزاً بدوري أبطال أوروبا؟', questionType: 'mcq', correctAnswer: 'ريال مدريد', options: ['برشلونة', 'ريال مدريد', 'أي سي ميلان', 'ليفربول'], difficulty: 'medium', points: 200 },
      { id: 'sp_m3', questionText: 'كم مرة فازت البرازيل بكأس العالم لكرة القدم؟', questionType: 'mcq', correctAnswer: '5 مرات', options: ['3 مرات', '4 مرات', '5 مرات', '6 مرات'], difficulty: 'medium', points: 200 },
      { id: 'sp_m4', questionText: 'في أي مدينة تُقام بطولة ويمبلدون للتنس؟', questionType: 'mcq', correctAnswer: 'لندن', options: ['باريس', 'لندن', 'نيويورك', 'ملبورن'], difficulty: 'medium', points: 200 },
      { id: 'sp_m5', questionText: 'ما اسم الدوري السعودي للمحترفين حالياً؟', questionType: 'mcq', correctAnswer: 'دوري روشن', options: ['دوري جميل', 'دوري روشن', 'دوري الأمير محمد بن سلمان', 'دوري موبايلي'], difficulty: 'medium', points: 200 },
      { id: 'sp_m6', questionText: 'من هو اللاعب الملقب بـ "الظاهرة"؟', questionType: 'mcq', correctAnswer: 'رونالدو البرازيلي', options: ['زين الدين زيدان', 'رونالدو البرازيلي', 'رونالدينيو', 'ريفالدو'], difficulty: 'medium', points: 200 },
      { id: 'sp_m7', questionText: 'كم يبلغ طول ملعب السباحة الأولمبي؟', questionType: 'mcq', correctAnswer: '50 متراً', options: ['25 متراً', '50 متراً', '75 متراً', '100 متر'], difficulty: 'medium', points: 200 },
      { id: 'sp_m8', questionText: 'ما هو المنتخب العربي الذي وصل لنصف نهائي كأس العالم 2022؟', questionType: 'mcq', correctAnswer: 'المغرب', options: ['السعودية', 'تونس', 'المغرب', 'قطر'], difficulty: 'medium', points: 200 },

      // --- Hard (300 points) ---
      { id: 'sp_h1', questionText: 'من هو أول لاعب عربي يفوز بجائزة الكرة الذهبية (البالون دور) للشباب؟', questionType: 'mcq', correctAnswer: 'لم يفز بها لاعب عربي', options: ['محمد صلاح', 'رياض محرز', 'لم يفز بها لاعب عربي', 'سامي الجابر'], difficulty: 'hard', points: 300 },
      { id: 'sp_h2', questionText: 'في أي عام فاز نادي الهلال السعودي بدوري أبطال آسيا للمرة الرابعة؟', questionType: 'mcq', correctAnswer: '2021', options: ['2019', '2020', '2021', '2022'], difficulty: 'hard', points: 300 },
      { id: 'sp_h3', questionText: 'كم ميدالية ذهبية أولمبية حصل عليها السباح مايكل فيلبس؟', questionType: 'mcq', correctAnswer: '23', options: ['18', '21', '23', '25'], difficulty: 'hard', points: 300 },
      { id: 'sp_h4', questionText: 'ما هو الرقم القياسي العالمي لسباق 100 متر للرجال الذي سجله يوسين بولت؟', questionType: 'mcq', correctAnswer: '9.58 ثانية', options: ['9.48 ثانية', '9.58 ثانية', '9.63 ثانية', '9.72 ثانية'], difficulty: 'hard', points: 300 },
      { id: 'sp_h5', questionText: 'من هو أول لاعب كرة قدم يسجل في خمس نسخ متتالية من كأس العالم؟', questionType: 'mcq', correctAnswer: 'كريستيانو رونالدو', options: ['ليونيل ميسي', 'كريستيانو رونالدو', 'ميروسلاف كلوزه', 'بيليه'], difficulty: 'hard', points: 300 },
      { id: 'sp_h6', questionText: 'في أي دورة أولمبية شاركت المرأة السعودية لأول مرة؟', questionType: 'mcq', correctAnswer: 'لندن 2012', options: ['بكين 2008', 'لندن 2012', 'ريو 2016', 'طوكيو 2020'], difficulty: 'hard', points: 300 },
      { id: 'sp_h7', questionText: 'ما هو أقدم نادي كرة قدم في العالم لا يزال قائماً؟', questionType: 'mcq', correctAnswer: 'شيفيلد', options: ['نوتس كاونتي', 'شيفيلد', 'أستون فيلا', 'بلاكبيرن روفرز'], difficulty: 'hard', points: 300 },
      { id: 'sp_h8', questionText: 'كم عدد البطولات الكبرى (غراند سلام) التي فاز بها رافاييل نادال؟', questionType: 'mcq', correctAnswer: '22', options: ['20', '21', '22', '23'], difficulty: 'hard', points: 300 },

      // --- Expert (500 points) ---
      { id: 'sp_x1', questionText: 'في أي عام أُقيمت أول دورة ألعاب أولمبية حديثة في أثينا؟', questionType: 'open', correctAnswer: '1896', difficulty: 'expert', points: 500 },
      { id: 'sp_x2', questionText: 'من هو هداف المنتخب السعودي التاريخي في تصفيات كأس العالم والبطولات الرسمية؟', questionType: 'open', correctAnswer: 'ماجد عبدالله', difficulty: 'expert', points: 500 },
      { id: 'sp_x3', questionText: 'كم هدفاً سجل الألماني ميروسلاف كلوزه في تاريخ كأس العالم ليصبح الهداف التاريخي؟', questionType: 'open', correctAnswer: '16', difficulty: 'expert', points: 500 },
      { id: 'sp_x4', questionText: 'ما اسم الملعب الذي أُقيمت فيه نهائي كأس العالم 2022 في قطر؟', questionType: 'open', correctAnswer: 'استاد لوسيل', difficulty: 'expert', points: 500 },
      { id: 'sp_x5', questionText: 'من هو أول سباح عربي يحقق ميدالية أولمبية في السباحة عام 2000؟', questionType: 'open', correctAnswer: 'عيسى العدوي', difficulty: 'expert', points: 500 },
      { id: 'sp_x6', questionText: 'كم مرة استضافت اليابان دورة الألعاب الأولمبية الصيفية حتى عام 2021؟', questionType: 'open', correctAnswer: '2', difficulty: 'expert', points: 500 },
      { id: 'sp_x7', questionText: 'في أي عام انضمت المملكة العربية السعودية إلى الاتحاد الدولي لكرة القدم (فيفا)؟', questionType: 'open', correctAnswer: '1956', difficulty: 'expert', points: 500 },
      { id: 'sp_x8', questionText: 'ما هي أول دولة عربية تستضيف كأس العالم لكرة القدم؟', questionType: 'open', correctAnswer: 'قطر', difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 2. MOVIES (أفلام وسينما) ====================
  {
    id: 'movies',
    questions: [
      // --- Easy (100 points) ---
      { id: 'mv_e1', questionText: 'ما هو اسم الأسد في فيلم ديزني "الأسد الملك"؟', questionType: 'mcq', correctAnswer: 'سيمبا', options: ['موفاسا', 'سيمبا', 'سكار', 'رافيكي'], difficulty: 'easy', points: 100 },
      { id: 'mv_e2', questionText: 'ما اسم البطل الخارق الذي يرتدي بدلة حديدية في أفلام مارفل؟', questionType: 'mcq', correctAnswer: 'آيرون مان', options: ['كابتن أمريكا', 'آيرون مان', 'ثور', 'سبايدرمان'], difficulty: 'easy', points: 100 },
      { id: 'mv_e3', questionText: 'في أي فيلم ديزني تظهر أميرة اسمها "إلسا"؟', questionType: 'mcq', correctAnswer: 'فروزن', options: ['موانا', 'فروزن', 'ربانزل', 'الجميلة والوحش'], difficulty: 'easy', points: 100 },
      { id: 'mv_e4', questionText: 'ما اسم السمكة الصغيرة في فيلم "البحث عن نيمو"؟', questionType: 'mcq', correctAnswer: 'نيمو', options: ['دوري', 'نيمو', 'مارلن', 'جيل'], difficulty: 'easy', points: 100 },
      { id: 'mv_e5', questionText: 'من هو الممثل الذي لعب دور جاك في فيلم "تايتانيك"؟', questionType: 'mcq', correctAnswer: 'ليوناردو دي كابريو', options: ['براد بيت', 'ليوناردو دي كابريو', 'توم كروز', 'جوني ديب'], difficulty: 'easy', points: 100 },
      { id: 'mv_e6', questionText: 'ما هو لون البطل الخارق "هالك" عندما يغضب؟', questionType: 'mcq', correctAnswer: 'أخضر', options: ['أحمر', 'أزرق', 'أخضر', 'أصفر'], difficulty: 'easy', points: 100 },
      { id: 'mv_e7', questionText: 'ما اسم الفيلم العربي الشهير للنجم عادل إمام الذي يدور حول الإرهاب؟', questionType: 'mcq', correctAnswer: 'الإرهابي', options: ['الإرهابي', 'عمارة يعقوبيان', 'اللمبي', 'زهايمر'], difficulty: 'easy', points: 100 },
      { id: 'mv_e8', questionText: 'في أي فيلم تظهر شخصية "وودي" رعاة البقر؟', questionType: 'mcq', correctAnswer: 'حكاية لعبة', options: ['حكاية لعبة', 'شركة المرعبين', 'أبطال خارقون', 'رحلة البالونات'], difficulty: 'easy', points: 100 },

      // --- Medium (200 points) ---
      { id: 'mv_m1', questionText: 'من هو مخرج فيلم "التايتانيك" و"أفاتار"؟', questionType: 'mcq', correctAnswer: 'جيمس كاميرون', options: ['ستيفن سبيلبرغ', 'جيمس كاميرون', 'كريستوفر نولان', 'مارتن سكورسيزي'], difficulty: 'medium', points: 200 },
      { id: 'mv_m2', questionText: 'ما هو أول فيلم رسوم متحركة طويل أنتجته ديزني؟', questionType: 'mcq', correctAnswer: 'سنو وايت والأقزام السبعة', options: ['سندريلا', 'سنو وايت والأقزام السبعة', 'بينوكيو', 'فانتازيا'], difficulty: 'medium', points: 200 },
      { id: 'mv_m3', questionText: 'كم عدد أفلام سلسلة "هاري بوتر"؟', questionType: 'mcq', correctAnswer: '8', options: ['6', '7', '8', '9'], difficulty: 'medium', points: 200 },
      { id: 'mv_m4', questionText: 'من هو الممثل الذي جسد شخصية "الجوكر" في فيلم "فارس الظلام" عام 2008؟', questionType: 'mcq', correctAnswer: 'هيث ليدجر', options: ['جاك نيكلسون', 'هيث ليدجر', 'واكين فينيكس', 'جاريد ليتو'], difficulty: 'medium', points: 200 },
      { id: 'mv_m5', questionText: 'ما اسم الفيلم المصري الذي رُشح لجائزة أوسكار أفضل فيلم أجنبي عام 2022؟', questionType: 'mcq', correctAnswer: 'ريش', options: ['الممر', 'ريش', 'كازابلانكا', 'الفيل الأزرق'], difficulty: 'medium', points: 200 },
      { id: 'mv_m6', questionText: 'من هو المخرج الذي أخرج ثلاثية "سيد الخواتم"؟', questionType: 'mcq', correctAnswer: 'بيتر جاكسون', options: ['ريدلي سكوت', 'بيتر جاكسون', 'جورج لوكاس', 'تيم بيرتون'], difficulty: 'medium', points: 200 },
      { id: 'mv_m7', questionText: 'ما هي أول جائزة أوسكار للرسوم المتحركة فاز بها فيلم من إنتاج بيكسار؟', questionType: 'mcq', correctAnswer: 'البحث عن نيمو', options: ['حكاية لعبة', 'البحث عن نيمو', 'شركة المرعبين', 'أبطال خارقون'], difficulty: 'medium', points: 200 },
      { id: 'mv_m8', questionText: 'في أي عام صدر أول فيلم من سلسلة "حرب النجوم"؟', questionType: 'mcq', correctAnswer: '1977', options: ['1975', '1977', '1980', '1983'], difficulty: 'medium', points: 200 },

      // --- Hard (300 points) ---
      { id: 'mv_h1', questionText: 'من هو أكثر ممثل فوزاً بجائزة أوسكار أفضل ممثل في التاريخ؟', questionType: 'mcq', correctAnswer: 'دانيال داي-لويس', options: ['جاك نيكلسون', 'دانيال داي-لويس', 'توم هانكس', 'مارلون براندو'], difficulty: 'hard', points: 300 },
      { id: 'mv_h2', questionText: 'ما هو أول فيلم عربي يفوز بالسعفة الذهبية في مهرجان كان؟', questionType: 'mcq', correctAnswer: 'وقائع سنين الجمر', options: ['وقائع سنين الجمر', 'الرسالة', 'عمر المختار', 'باب الحارة'], difficulty: 'hard', points: 300 },
      { id: 'mv_h3', questionText: 'كم فيلماً أخرج المخرج الراحل يوسف شاهين تقريباً خلال مسيرته؟', questionType: 'mcq', correctAnswer: 'أكثر من 40 فيلماً', options: ['أكثر من 20 فيلماً', 'أكثر من 30 فيلماً', 'أكثر من 40 فيلماً', 'أكثر من 50 فيلماً'], difficulty: 'hard', points: 300 },
      { id: 'mv_h4', questionText: 'ما اسم أول فيلم في عالم مارفل السينمائي (MCU)؟', questionType: 'mcq', correctAnswer: 'آيرون مان (2008)', options: ['كابتن أمريكا (2011)', 'آيرون مان (2008)', 'هالك المذهل (2008)', 'ثور (2011)'], difficulty: 'hard', points: 300 },
      { id: 'mv_h5', questionText: 'من هو المخرج الذي فاز بأوسكار أفضل إخراج عن فيلم "الشكل المائي" عام 2018؟', questionType: 'mcq', correctAnswer: 'غييرمو ديل تورو', options: ['ألفونسو كوارون', 'غييرمو ديل تورو', 'أليخاندرو إيناريتو', 'دينيس فيلنوف'], difficulty: 'hard', points: 300 },
      { id: 'mv_h6', questionText: 'ما هو الفيلم الذي حقق أعلى إيرادات في تاريخ السينما عالمياً؟', questionType: 'mcq', correctAnswer: 'أفاتار', options: ['أفنجرز: نهاية اللعبة', 'أفاتار', 'تايتانيك', 'حرب النجوم: القوة تستيقظ'], difficulty: 'hard', points: 300 },
      { id: 'mv_h7', questionText: 'في أي فيلم ظهرت عبارة "أنا سأعود" (I\'ll be back) لأول مرة؟', questionType: 'mcq', correctAnswer: 'المبيد (ترمينيتور) 1984', options: ['المفترس 1987', 'المبيد (ترمينيتور) 1984', 'كوماندو 1985', 'التذكر الكلي 1990'], difficulty: 'hard', points: 300 },
      { id: 'mv_h8', questionText: 'من هو الممثل المصري الذي شارك في فيلم هوليوودي "المريخي" (The Martian)؟', questionType: 'mcq', correctAnswer: 'لم يشارك ممثل مصري', options: ['عمر الشريف', 'خالد النبوي', 'لم يشارك ممثل مصري', 'أحمد حلمي'], difficulty: 'hard', points: 300 },

      // --- Expert (500 points) ---
      { id: 'mv_x1', questionText: 'في أي عام صدر فيلم "الأب الروحي" (The Godfather) للمخرج فرانسيس فورد كوبولا؟', questionType: 'open', correctAnswer: '1972', difficulty: 'expert', points: 500 },
      { id: 'mv_x2', questionText: 'من هو المخرج المصري الذي أخرج فيلم "باب الحديد" عام 1958؟', questionType: 'open', correctAnswer: 'يوسف شاهين', difficulty: 'expert', points: 500 },
      { id: 'mv_x3', questionText: 'ما اسم الممثل الذي جسد دور "ثانوس" في أفلام مارفل؟', questionType: 'open', correctAnswer: 'جوش برولين', difficulty: 'expert', points: 500 },
      { id: 'mv_x4', questionText: 'كم جائزة أوسكار فاز بها فيلم "تايتانيك" عام 1998؟', questionType: 'open', correctAnswer: '11', difficulty: 'expert', points: 500 },
      { id: 'mv_x5', questionText: 'من هو مخرج فيلم "الرسالة" عن قصة الإسلام الذي صدر عام 1976؟', questionType: 'open', correctAnswer: 'مصطفى العقاد', difficulty: 'expert', points: 500 },
      { id: 'mv_x6', questionText: 'ما اسم أول فيلم سعودي يُعرض في صالات السينما بعد رفع الحظر عام 2018؟', questionType: 'open', correctAnswer: 'بلاك بانثر', difficulty: 'expert', points: 500 },
      { id: 'mv_x7', questionText: 'من هو الممثل الذي فاز بأوسكار أفضل ممثل عن فيلم "الجوكر" عام 2020؟', questionType: 'open', correctAnswer: 'واكين فينيكس', difficulty: 'expert', points: 500 },
      { id: 'mv_x8', questionText: 'ما اسم المخرج الذي أخرج فيلم "أوبنهايمر" الفائز بأوسكار 2024؟', questionType: 'open', correctAnswer: 'كريستوفر نولان', difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 3. GEOGRAPHY (جغرافيا) ====================
  {
    id: 'geography',
    questions: [
      // --- Easy (100 points) ---
      { id: 'geo_e1', questionText: 'ما هي أكبر قارة في العالم من حيث المساحة؟', questionType: 'mcq', correctAnswer: 'آسيا', options: ['أفريقيا', 'آسيا', 'أوروبا', 'أمريكا الشمالية'], difficulty: 'easy', points: 100 },
      { id: 'geo_e2', questionText: 'ما هي عاصمة مصر؟', questionType: 'mcq', correctAnswer: 'القاهرة', options: ['الإسكندرية', 'القاهرة', 'الأقصر', 'أسوان'], difficulty: 'easy', points: 100 },
      { id: 'geo_e3', questionText: 'ما هو أطول نهر في العالم؟', questionType: 'mcq', correctAnswer: 'نهر النيل', options: ['نهر الأمازون', 'نهر النيل', 'نهر المسيسيبي', 'نهر اليانغتسي'], difficulty: 'easy', points: 100 },
      { id: 'geo_e4', questionText: 'في أي قارة تقع البرازيل؟', questionType: 'mcq', correctAnswer: 'أمريكا الجنوبية', options: ['أمريكا الشمالية', 'أمريكا الجنوبية', 'أفريقيا', 'أوروبا'], difficulty: 'easy', points: 100 },
      { id: 'geo_e5', questionText: 'ما هي أكبر صحراء في العالم؟', questionType: 'mcq', correctAnswer: 'الصحراء الكبرى', options: ['صحراء الربع الخالي', 'الصحراء الكبرى', 'صحراء جوبي', 'صحراء كالاهاري'], difficulty: 'easy', points: 100 },
      { id: 'geo_e6', questionText: 'كم عدد قارات العالم؟', questionType: 'mcq', correctAnswer: '7', options: ['5', '6', '7', '8'], difficulty: 'easy', points: 100 },
      { id: 'geo_e7', questionText: 'ما هو أكبر محيط في العالم؟', questionType: 'mcq', correctAnswer: 'المحيط الهادئ', options: ['المحيط الأطلسي', 'المحيط الهادئ', 'المحيط الهندي', 'المحيط المتجمد الشمالي'], difficulty: 'easy', points: 100 },
      { id: 'geo_e8', questionText: 'ما هي عاصمة فرنسا؟', questionType: 'mcq', correctAnswer: 'باريس', options: ['ليون', 'مارسيليا', 'باريس', 'نيس'], difficulty: 'easy', points: 100 },

      // --- Medium (200 points) ---
      { id: 'geo_m1', questionText: 'ما هو أعلى جبل في العالم؟', questionType: 'mcq', correctAnswer: 'جبل إيفرست', options: ['جبل كي 2', 'جبل إيفرست', 'جبل كلمنجارو', 'جبل مون بلان'], difficulty: 'medium', points: 200 },
      { id: 'geo_m2', questionText: 'ما هي أصغر دولة في العالم من حيث المساحة؟', questionType: 'mcq', correctAnswer: 'الفاتيكان', options: ['موناكو', 'الفاتيكان', 'سان مارينو', 'ليختنشتاين'], difficulty: 'medium', points: 200 },
      { id: 'geo_m3', questionText: 'في أي دولة يقع جبل كلمنجارو؟', questionType: 'mcq', correctAnswer: 'تنزانيا', options: ['كينيا', 'تنزانيا', 'إثيوبيا', 'أوغندا'], difficulty: 'medium', points: 200 },
      { id: 'geo_m4', questionText: 'ما هي العاصمة الإدارية لدولة الإمارات العربية المتحدة؟', questionType: 'mcq', correctAnswer: 'أبوظبي', options: ['دبي', 'أبوظبي', 'الشارقة', 'العين'], difficulty: 'medium', points: 200 },
      { id: 'geo_m5', questionText: 'أي بحر يفصل بين قارتي أوروبا وأفريقيا؟', questionType: 'mcq', correctAnswer: 'البحر الأبيض المتوسط', options: ['البحر الأحمر', 'البحر الأبيض المتوسط', 'بحر العرب', 'بحر الشمال'], difficulty: 'medium', points: 200 },
      { id: 'geo_m6', questionText: 'ما هي الدولة العربية الأكبر مساحة؟', questionType: 'mcq', correctAnswer: 'الجزائر', options: ['السعودية', 'الجزائر', 'السودان', 'ليبيا'], difficulty: 'medium', points: 200 },
      { id: 'geo_m7', questionText: 'في أي دولة يصب نهر النيل؟', questionType: 'mcq', correctAnswer: 'مصر', options: ['السودان', 'مصر', 'إثيوبيا', 'أوغندا'], difficulty: 'medium', points: 200 },
      { id: 'geo_m8', questionText: 'ما هو البحر الذي لا تعيش فيه الأسماك بسبب ملوحته العالية؟', questionType: 'mcq', correctAnswer: 'البحر الميت', options: ['البحر الأحمر', 'البحر الميت', 'بحر قزوين', 'بحر آرال'], difficulty: 'medium', points: 200 },

      // --- Hard (300 points) ---
      { id: 'geo_h1', questionText: 'ما هي عاصمة أستراليا؟', questionType: 'mcq', correctAnswer: 'كانبرا', options: ['سيدني', 'ملبورن', 'كانبرا', 'بريزبن'], difficulty: 'hard', points: 300 },
      { id: 'geo_h2', questionText: 'ما هو أطول نهر في الوطن العربي بعد نهر النيل؟', questionType: 'mcq', correctAnswer: 'نهر الفرات', options: ['نهر دجلة', 'نهر الفرات', 'نهر الأردن', 'نهر العاصي'], difficulty: 'hard', points: 300 },
      { id: 'geo_h3', questionText: 'ما هو عدد الدول التي ليس لها سواحل بحرية في أفريقيا؟', questionType: 'mcq', correctAnswer: '16 دولة', options: ['10 دول', '13 دولة', '16 دولة', '19 دولة'], difficulty: 'hard', points: 300 },
      { id: 'geo_h4', questionText: 'أين يقع مضيق هرمز؟', questionType: 'mcq', correctAnswer: 'بين عُمان وإيران', options: ['بين اليمن وجيبوتي', 'بين عُمان وإيران', 'بين مصر والسعودية', 'بين تركيا واليونان'], difficulty: 'hard', points: 300 },
      { id: 'geo_h5', questionText: 'ما هي أعلى قمة في الوطن العربي؟', questionType: 'mcq', correctAnswer: 'جبل طوبقال في المغرب', options: ['جبل شمس في عُمان', 'جبل طوبقال في المغرب', 'جبل النبي شعيب في اليمن', 'جبل لبنان'], difficulty: 'hard', points: 300 },
      { id: 'geo_h6', questionText: 'ما هي الدولة الوحيدة التي يمر بها خط الاستواء ومدار السرطان؟', questionType: 'mcq', correctAnswer: 'البرازيل', options: ['الهند', 'البرازيل', 'إندونيسيا', 'المكسيك'], difficulty: 'hard', points: 300 },
      { id: 'geo_h7', questionText: 'ما اسم المضيق الذي يفصل بين أوروبا وأفريقيا؟', questionType: 'mcq', correctAnswer: 'مضيق جبل طارق', options: ['مضيق البوسفور', 'مضيق جبل طارق', 'مضيق باب المندب', 'مضيق الدردنيل'], difficulty: 'hard', points: 300 },
      { id: 'geo_h8', questionText: 'كم دولة تشترك في حدود برية مع الصين؟', questionType: 'mcq', correctAnswer: '14 دولة', options: ['10 دول', '12 دولة', '14 دولة', '16 دولة'], difficulty: 'hard', points: 300 },

      // --- Expert (500 points) ---
      { id: 'geo_x1', questionText: 'ما هي عاصمة ميانمار (بورما)؟', questionType: 'open', correctAnswer: 'نايبيداو', difficulty: 'expert', points: 500 },
      { id: 'geo_x2', questionText: 'كم يبلغ عمق أعمق نقطة في المحيطات (خندق ماريانا) بالكيلومتر تقريباً؟', questionType: 'open', correctAnswer: '11', difficulty: 'expert', points: 500 },
      { id: 'geo_x3', questionText: 'ما هي أكبر جزيرة في العالم؟', questionType: 'open', correctAnswer: 'غرينلاند', difficulty: 'expert', points: 500 },
      { id: 'geo_x4', questionText: 'ما هي الدولة العربية الوحيدة التي يمر بها خط الاستواء؟', questionType: 'open', correctAnswer: 'الصومال', difficulty: 'expert', points: 500 },
      { id: 'geo_x5', questionText: 'ما اسم أطول سلسلة جبلية في العالم؟', questionType: 'open', correctAnswer: 'جبال الأنديز', difficulty: 'expert', points: 500 },
      { id: 'geo_x6', questionText: 'ما هي عاصمة كازاخستان؟', questionType: 'open', correctAnswer: 'أستانا', difficulty: 'expert', points: 500 },
      { id: 'geo_x7', questionText: 'كم عدد الدول العربية الأعضاء في جامعة الدول العربية؟', questionType: 'open', correctAnswer: '22', difficulty: 'expert', points: 500 },
      { id: 'geo_x8', questionText: 'ما هو أكبر بحر مغلق في العالم؟', questionType: 'open', correctAnswer: 'بحر قزوين', difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 4. ISLAMIC (إسلاميات) ====================
  {
    id: 'islamic',
    questions: [
      // --- Easy (100 points) ---
      { id: 'is_e1', questionText: 'كم عدد أركان الإسلام؟', questionType: 'mcq', correctAnswer: '5', options: ['3', '4', '5', '6'], difficulty: 'easy', points: 100 },
      { id: 'is_e2', questionText: 'ما هي أطول سورة في القرآن الكريم؟', questionType: 'mcq', correctAnswer: 'سورة البقرة', options: ['سورة آل عمران', 'سورة البقرة', 'سورة النساء', 'سورة المائدة'], difficulty: 'easy', points: 100 },
      { id: 'is_e3', questionText: 'كم عدد الصلوات المفروضة في اليوم؟', questionType: 'mcq', correctAnswer: '5', options: ['3', '4', '5', '6'], difficulty: 'easy', points: 100 },
      { id: 'is_e4', questionText: 'في أي شهر هجري يصوم المسلمون؟', questionType: 'mcq', correctAnswer: 'رمضان', options: ['شعبان', 'رمضان', 'شوال', 'ذو الحجة'], difficulty: 'easy', points: 100 },
      { id: 'is_e5', questionText: 'من هو خاتم الأنبياء والمرسلين؟', questionType: 'mcq', correctAnswer: 'محمد صلى الله عليه وسلم', options: ['عيسى عليه السلام', 'موسى عليه السلام', 'محمد صلى الله عليه وسلم', 'إبراهيم عليه السلام'], difficulty: 'easy', points: 100 },
      { id: 'is_e6', questionText: 'ما هو الكتاب المقدس عند المسلمين؟', questionType: 'mcq', correctAnswer: 'القرآن الكريم', options: ['التوراة', 'الإنجيل', 'القرآن الكريم', 'الزبور'], difficulty: 'easy', points: 100 },
      { id: 'is_e7', questionText: 'ما هي الكعبة المشرفة وأين تقع؟', questionType: 'mcq', correctAnswer: 'بيت الله الحرام في مكة المكرمة', options: ['مسجد في المدينة المنورة', 'بيت الله الحرام في مكة المكرمة', 'مسجد في القدس', 'مسجد في الطائف'], difficulty: 'easy', points: 100 },
      { id: 'is_e8', questionText: 'ما هو أول ركن من أركان الإسلام؟', questionType: 'mcq', correctAnswer: 'الشهادتان', options: ['الصلاة', 'الشهادتان', 'الصيام', 'الزكاة'], difficulty: 'easy', points: 100 },

      // --- Medium (200 points) ---
      { id: 'is_m1', questionText: 'كم عدد سور القرآن الكريم؟', questionType: 'mcq', correctAnswer: '114', options: ['110', '112', '114', '116'], difficulty: 'medium', points: 200 },
      { id: 'is_m2', questionText: 'من هو أول مؤذن في الإسلام؟', questionType: 'mcq', correctAnswer: 'بلال بن رباح', options: ['عبدالله بن مسعود', 'بلال بن رباح', 'أبو هريرة', 'سلمان الفارسي'], difficulty: 'medium', points: 200 },
      { id: 'is_m3', questionText: 'ما اسم غزوة المسلمين الأولى؟', questionType: 'mcq', correctAnswer: 'غزوة بدر', options: ['غزوة أحد', 'غزوة بدر', 'غزوة الخندق', 'غزوة حنين'], difficulty: 'medium', points: 200 },
      { id: 'is_m4', questionText: 'كم عدد الأنبياء المذكورين في القرآن الكريم؟', questionType: 'mcq', correctAnswer: '25', options: ['20', '23', '25', '28'], difficulty: 'medium', points: 200 },
      { id: 'is_m5', questionText: 'ما هي السورة التي تُسمى "قلب القرآن"؟', questionType: 'mcq', correctAnswer: 'سورة يس', options: ['سورة الرحمن', 'سورة يس', 'سورة الملك', 'سورة الكهف'], difficulty: 'medium', points: 200 },
      { id: 'is_m6', questionText: 'من هو النبي الذي ابتلعه الحوت؟', questionType: 'mcq', correctAnswer: 'يونس عليه السلام', options: ['نوح عليه السلام', 'يونس عليه السلام', 'أيوب عليه السلام', 'إلياس عليه السلام'], difficulty: 'medium', points: 200 },
      { id: 'is_m7', questionText: 'ما هو ثاني الحرمين الشريفين؟', questionType: 'mcq', correctAnswer: 'المسجد النبوي', options: ['المسجد الأقصى', 'المسجد النبوي', 'مسجد قباء', 'مسجد القبلتين'], difficulty: 'medium', points: 200 },
      { id: 'is_m8', questionText: 'في أي عام هجري كانت الهجرة النبوية من مكة إلى المدينة؟', questionType: 'mcq', correctAnswer: 'العام الأول هجري', options: ['العام الأول هجري', 'العام الثاني هجري', 'العام الثالث هجري', 'العام الخامس هجري'], difficulty: 'medium', points: 200 },

      // --- Hard (300 points) ---
      { id: 'is_h1', questionText: 'ما هي أول آية نزلت من القرآن الكريم؟', questionType: 'mcq', correctAnswer: 'اقرأ باسم ربك الذي خلق', options: ['بسم الله الرحمن الرحيم', 'اقرأ باسم ربك الذي خلق', 'الحمد لله رب العالمين', 'يا أيها المدثر'], difficulty: 'hard', points: 300 },
      { id: 'is_h2', questionText: 'كم عاماً استمرت الدعوة السرية في مكة؟', questionType: 'mcq', correctAnswer: '3 سنوات', options: ['سنة واحدة', 'سنتان', '3 سنوات', '5 سنوات'], difficulty: 'hard', points: 300 },
      { id: 'is_h3', questionText: 'من هو الصحابي الملقب بـ "سيف الله المسلول"؟', questionType: 'mcq', correctAnswer: 'خالد بن الوليد', options: ['علي بن أبي طالب', 'خالد بن الوليد', 'حمزة بن عبدالمطلب', 'الزبير بن العوام'], difficulty: 'hard', points: 300 },
      { id: 'is_h4', questionText: 'ما هو عدد أجزاء القرآن الكريم؟', questionType: 'mcq', correctAnswer: '30 جزءاً', options: ['20 جزءاً', '25 جزءاً', '30 جزءاً', '35 جزءاً'], difficulty: 'hard', points: 300 },
      { id: 'is_h5', questionText: 'من هو النبي الذي بنى الكعبة مع ابنه إسماعيل عليهما السلام؟', questionType: 'mcq', correctAnswer: 'إبراهيم عليه السلام', options: ['آدم عليه السلام', 'نوح عليه السلام', 'إبراهيم عليه السلام', 'داود عليه السلام'], difficulty: 'hard', points: 300 },
      { id: 'is_h6', questionText: 'ما اسم أم المؤمنين التي كانت أول زوجة للنبي محمد صلى الله عليه وسلم؟', questionType: 'mcq', correctAnswer: 'خديجة بنت خويلد', options: ['عائشة بنت أبي بكر', 'خديجة بنت خويلد', 'حفصة بنت عمر', 'أم سلمة'], difficulty: 'hard', points: 300 },
      { id: 'is_h7', questionText: 'في أي سورة وردت آية الكرسي؟', questionType: 'mcq', correctAnswer: 'سورة البقرة', options: ['سورة آل عمران', 'سورة البقرة', 'سورة النساء', 'سورة المائدة'], difficulty: 'hard', points: 300 },
      { id: 'is_h8', questionText: 'من هو أول خليفة في الإسلام بعد وفاة النبي صلى الله عليه وسلم؟', questionType: 'mcq', correctAnswer: 'أبو بكر الصديق', options: ['عمر بن الخطاب', 'أبو بكر الصديق', 'عثمان بن عفان', 'علي بن أبي طالب'], difficulty: 'hard', points: 300 },

      // --- Expert (500 points) ---
      { id: 'is_x1', questionText: 'كم عدد آيات سورة البقرة؟', questionType: 'open', correctAnswer: '286', difficulty: 'expert', points: 500 },
      { id: 'is_x2', questionText: 'ما اسم الصحابي الذي جمع القرآن الكريم في عهد أبي بكر الصديق؟', questionType: 'open', correctAnswer: 'زيد بن ثابت', difficulty: 'expert', points: 500 },
      { id: 'is_x3', questionText: 'كم سنة عاش النبي محمد صلى الله عليه وسلم؟', questionType: 'open', correctAnswer: '63', difficulty: 'expert', points: 500 },
      { id: 'is_x4', questionText: 'ما اسم السورة التي لم تبدأ بالبسملة؟', questionType: 'open', correctAnswer: 'سورة التوبة', difficulty: 'expert', points: 500 },
      { id: 'is_x5', questionText: 'في أي عام ميلادي وُلد النبي محمد صلى الله عليه وسلم؟', questionType: 'open', correctAnswer: '571', difficulty: 'expert', points: 500 },
      { id: 'is_x6', questionText: 'ما هي آخر سورة نزلت كاملة في القرآن الكريم؟', questionType: 'open', correctAnswer: 'سورة النصر', difficulty: 'expert', points: 500 },
      { id: 'is_x7', questionText: 'كم عدد أسماء الله الحسنى المذكورة في الحديث الشريف؟', questionType: 'open', correctAnswer: '99', difficulty: 'expert', points: 500 },
      { id: 'is_x8', questionText: 'من هو الصحابي الملقب بـ "حبر الأمة"؟', questionType: 'open', correctAnswer: 'عبدالله بن عباس', difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 5. TECHNOLOGY (تقنية) ====================
  {
    id: 'technology',
    questions: [
      // --- Easy (100 points) ---
      { id: 'tech_e1', questionText: 'ما هو اسم نظام التشغيل الذي تطوره شركة أبل للآيفون؟', questionType: 'mcq', correctAnswer: 'iOS', options: ['أندرويد', 'iOS', 'ويندوز', 'لينكس'], difficulty: 'easy', points: 100 },
      { id: 'tech_e2', questionText: 'ما هو أشهر موقع لمشاركة الفيديوهات على الإنترنت؟', questionType: 'mcq', correctAnswer: 'يوتيوب', options: ['فيسبوك', 'يوتيوب', 'تيك توك', 'إنستغرام'], difficulty: 'easy', points: 100 },
      { id: 'tech_e3', questionText: 'ما اسم الشركة التي صنعت هاتف "غالاكسي"؟', questionType: 'mcq', correctAnswer: 'سامسونغ', options: ['أبل', 'سامسونغ', 'هواوي', 'نوكيا'], difficulty: 'easy', points: 100 },
      { id: 'tech_e4', questionText: 'ما هو محرك البحث الأشهر على الإنترنت؟', questionType: 'mcq', correctAnswer: 'غوغل', options: ['بينغ', 'غوغل', 'ياهو', 'دك دك غو'], difficulty: 'easy', points: 100 },
      { id: 'tech_e5', questionText: 'ما اسم تطبيق التواصل الذي يستخدم أيقونة خضراء وسماعة هاتف؟', questionType: 'mcq', correctAnswer: 'واتساب', options: ['تلغرام', 'واتساب', 'سيغنال', 'لاين'], difficulty: 'easy', points: 100 },
      { id: 'tech_e6', questionText: 'ما هو الاختصار "Wi-Fi"؟', questionType: 'mcq', correctAnswer: 'شبكة لاسلكية للاتصال بالإنترنت', options: ['نوع من الكابلات', 'شبكة لاسلكية للاتصال بالإنترنت', 'برنامج حاسوب', 'جهاز إلكتروني'], difficulty: 'easy', points: 100 },
      { id: 'tech_e7', questionText: 'ما اسم منصة التواصل الاجتماعي التي يُرمز لها بحرف "X"؟', questionType: 'mcq', correctAnswer: 'تويتر (إكس)', options: ['فيسبوك', 'تويتر (إكس)', 'سناب شات', 'ريديت'], difficulty: 'easy', points: 100 },
      { id: 'tech_e8', questionText: 'ما هو اسم المساعد الصوتي من أبل؟', questionType: 'mcq', correctAnswer: 'سيري', options: ['أليكسا', 'سيري', 'غوغل أسيستنت', 'كورتانا'], difficulty: 'easy', points: 100 },

      // --- Medium (200 points) ---
      { id: 'tech_m1', questionText: 'من هو مؤسس شركة مايكروسوفت؟', questionType: 'mcq', correctAnswer: 'بيل غيتس', options: ['ستيف جوبز', 'بيل غيتس', 'مارك زوكربيرغ', 'إيلون ماسك'], difficulty: 'medium', points: 200 },
      { id: 'tech_m2', questionText: 'في أي عام تم إطلاق أول آيفون؟', questionType: 'mcq', correctAnswer: '2007', options: ['2005', '2006', '2007', '2008'], difficulty: 'medium', points: 200 },
      { id: 'tech_m3', questionText: 'ما هي لغة البرمجة الأكثر استخداماً لتطوير مواقع الويب؟', questionType: 'mcq', correctAnswer: 'جافاسكريبت', options: ['بايثون', 'جافاسكريبت', 'سي++', 'جافا'], difficulty: 'medium', points: 200 },
      { id: 'tech_m4', questionText: 'ما اسم الشركة المطورة لتطبيق "إنستغرام"؟', questionType: 'mcq', correctAnswer: 'ميتا (فيسبوك سابقاً)', options: ['غوغل', 'ميتا (فيسبوك سابقاً)', 'تويتر', 'سناب'], difficulty: 'medium', points: 200 },
      { id: 'tech_m5', questionText: 'ما هو "الذكاء الاصطناعي" باللغة الإنجليزية؟', questionType: 'mcq', correctAnswer: 'Artificial Intelligence', options: ['Advanced Information', 'Artificial Intelligence', 'Automated Integration', 'Applied Innovation'], difficulty: 'medium', points: 200 },
      { id: 'tech_m6', questionText: 'ما اسم أول شبكة تواصل اجتماعي حققت شهرة واسعة؟', questionType: 'mcq', correctAnswer: 'ماي سبيس', options: ['فيسبوك', 'ماي سبيس', 'فريندستر', 'هاي فايف'], difficulty: 'medium', points: 200 },
      { id: 'tech_m7', questionText: 'ما هو نظام التشغيل المفتوح المصدر الأشهر للهواتف الذكية؟', questionType: 'mcq', correctAnswer: 'أندرويد', options: ['أندرويد', 'iOS', 'ويندوز فون', 'بلاك بيري'], difficulty: 'medium', points: 200 },
      { id: 'tech_m8', questionText: 'ما اسم الشركة المصنعة لمعالجات "Core i7"؟', questionType: 'mcq', correctAnswer: 'إنتل', options: ['إنتل', 'AMD', 'كوالكوم', 'إنفيديا'], difficulty: 'medium', points: 200 },

      // --- Hard (300 points) ---
      { id: 'tech_h1', questionText: 'في أي عام تأسست شركة غوغل؟', questionType: 'mcq', correctAnswer: '1998', options: ['1996', '1997', '1998', '2000'], difficulty: 'hard', points: 300 },
      { id: 'tech_h2', questionText: 'ما هي لغة البرمجة التي طورتها شركة أبل لتطبيقات iOS؟', questionType: 'mcq', correctAnswer: 'سويفت (Swift)', options: ['أوبجكتف سي', 'سويفت (Swift)', 'كوتلن', 'دارت'], difficulty: 'hard', points: 300 },
      { id: 'tech_h3', questionText: 'من هو مؤسس شركة أمازون؟', questionType: 'mcq', correctAnswer: 'جيف بيزوس', options: ['إيلون ماسك', 'جيف بيزوس', 'لاري بيج', 'جاك ما'], difficulty: 'hard', points: 300 },
      { id: 'tech_h4', questionText: 'ما اسم أول روبوت محادثة بالذكاء الاصطناعي أطلقته شركة OpenAI؟', questionType: 'mcq', correctAnswer: 'ChatGPT', options: ['Bard', 'ChatGPT', 'Copilot', 'Claude'], difficulty: 'hard', points: 300 },
      { id: 'tech_h5', questionText: 'ما هو البلوك تشين (Blockchain)؟', questionType: 'mcq', correctAnswer: 'سجل رقمي لامركزي للمعاملات', options: ['عملة رقمية', 'سجل رقمي لامركزي للمعاملات', 'برنامج لتعدين البيتكوين', 'شبكة اجتماعية مشفرة'], difficulty: 'hard', points: 300 },
      { id: 'tech_h6', questionText: 'من هو مؤسس تطبيق تلغرام؟', questionType: 'mcq', correctAnswer: 'بافل دوروف', options: ['مارك زوكربيرغ', 'بافل دوروف', 'جان كوم', 'إيفان شبيغل'], difficulty: 'hard', points: 300 },
      { id: 'tech_h7', questionText: 'ما اسم أول لغة برمجة عالية المستوى في التاريخ؟', questionType: 'mcq', correctAnswer: 'فورتران (Fortran)', options: ['كوبول (COBOL)', 'فورتران (Fortran)', 'بيسك (BASIC)', 'سي (C)'], difficulty: 'hard', points: 300 },
      { id: 'tech_h8', questionText: 'ما هو الاسم السابق لشركة "ميتا"؟', questionType: 'mcq', correctAnswer: 'فيسبوك', options: ['غوغل', 'فيسبوك', 'تويتر', 'سناب شات'], difficulty: 'hard', points: 300 },

      // --- Expert (500 points) ---
      { id: 'tech_x1', questionText: 'في أي عام أُطلق موقع فيسبوك لأول مرة؟', questionType: 'open', correctAnswer: '2004', difficulty: 'expert', points: 500 },
      { id: 'tech_x2', questionText: 'من هو مخترع شبكة الويب العالمية (World Wide Web)؟', questionType: 'open', correctAnswer: 'تيم بيرنرز لي', difficulty: 'expert', points: 500 },
      { id: 'tech_x3', questionText: 'ما هو اسم أول حاسوب إلكتروني رقمي في التاريخ؟', questionType: 'open', correctAnswer: 'إنياك', difficulty: 'expert', points: 500 },
      { id: 'tech_x4', questionText: 'في أي عام تأسست شركة أبل؟', questionType: 'open', correctAnswer: '1976', difficulty: 'expert', points: 500 },
      { id: 'tech_x5', questionText: 'ما اسم العملة الرقمية المشفرة الأولى في العالم؟', questionType: 'open', correctAnswer: 'بيتكوين', difficulty: 'expert', points: 500 },
      { id: 'tech_x6', questionText: 'من هو مؤسس شركة تسلا وسبيس إكس؟', questionType: 'open', correctAnswer: 'إيلون ماسك', difficulty: 'expert', points: 500 },
      { id: 'tech_x7', questionText: 'ما اسم نظام التشغيل الذي أنشأه لينوس تورفالدز عام 1991؟', questionType: 'open', correctAnswer: 'لينكس', difficulty: 'expert', points: 500 },
      { id: 'tech_x8', questionText: 'كم بت في البايت الواحد؟', questionType: 'open', correctAnswer: '8', difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 6. SAUDI (سعودي) ====================
  {
    id: 'saudi',
    questions: [
      // --- Easy (100 points) ---
      { id: 'sa_e1', questionText: 'ما هي عاصمة المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: 'الرياض', options: ['جدة', 'الرياض', 'مكة المكرمة', 'الدمام'], difficulty: 'easy', points: 100 },
      { id: 'sa_e2', questionText: 'ما هو العلم السعودي وما لونه الأساسي؟', questionType: 'mcq', correctAnswer: 'أخضر عليه الشهادتان وسيف', options: ['أبيض وأخضر', 'أخضر عليه الشهادتان وسيف', 'أخضر عليه نخلة فقط', 'أبيض عليه سيفان'], difficulty: 'easy', points: 100 },
      { id: 'sa_e3', questionText: 'في أي يوم يُحتفل باليوم الوطني السعودي؟', questionType: 'mcq', correctAnswer: '23 سبتمبر', options: ['21 سبتمبر', '23 سبتمبر', '25 سبتمبر', '1 أكتوبر'], difficulty: 'easy', points: 100 },
      { id: 'sa_e4', questionText: 'ما اسم أطول برج في المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: 'برج جدة (المملكة)', options: ['برج الفيصلية', 'برج جدة (المملكة)', 'برج رافال', 'أبراج البيت'], difficulty: 'easy', points: 100 },
      { id: 'sa_e5', questionText: 'ما هي المدينة السعودية التي تضم المسجد الحرام؟', questionType: 'mcq', correctAnswer: 'مكة المكرمة', options: ['المدينة المنورة', 'مكة المكرمة', 'الطائف', 'جدة'], difficulty: 'easy', points: 100 },
      { id: 'sa_e6', questionText: 'ما هو اسم مؤسس المملكة العربية السعودية الحديثة؟', questionType: 'mcq', correctAnswer: 'الملك عبدالعزيز بن عبدالرحمن آل سعود', options: ['الملك فيصل بن عبدالعزيز', 'الملك عبدالعزيز بن عبدالرحمن آل سعود', 'الملك سعود بن عبدالعزيز', 'الملك خالد بن عبدالعزيز'], difficulty: 'easy', points: 100 },
      { id: 'sa_e7', questionText: 'ما هي العملة الرسمية في المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: 'الريال السعودي', options: ['الدرهم', 'الريال السعودي', 'الدينار', 'الجنيه'], difficulty: 'easy', points: 100 },
      { id: 'sa_e8', questionText: 'ما هو أكبر نادي كرة قدم في السعودية من حيث الجماهير؟', questionType: 'mcq', correctAnswer: 'الهلال', options: ['الأهلي', 'الهلال', 'النصر', 'الاتحاد'], difficulty: 'easy', points: 100 },

      // --- Medium (200 points) ---
      { id: 'sa_m1', questionText: 'في أي عام تم توحيد المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: '1932', options: ['1920', '1925', '1932', '1938'], difficulty: 'medium', points: 200 },
      { id: 'sa_m2', questionText: 'ما اسم المشروع السعودي الضخم على ساحل البحر الأحمر؟', questionType: 'mcq', correctAnswer: 'نيوم', options: ['القدية', 'نيوم', 'أمالا', 'ذا لاين'], difficulty: 'medium', points: 200 },
      { id: 'sa_m3', questionText: 'ما هو اسم رؤية التحول الاقتصادي السعودية؟', questionType: 'mcq', correctAnswer: 'رؤية 2030', options: ['رؤية 2020', 'رؤية 2025', 'رؤية 2030', 'رؤية 2040'], difficulty: 'medium', points: 200 },
      { id: 'sa_m4', questionText: 'من هو ولي العهد السعودي الحالي؟', questionType: 'mcq', correctAnswer: 'الأمير محمد بن سلمان', options: ['الأمير محمد بن نايف', 'الأمير محمد بن سلمان', 'الأمير خالد بن سلمان', 'الأمير عبدالعزيز بن سلمان'], difficulty: 'medium', points: 200 },
      { id: 'sa_m5', questionText: 'ما هي أكبر صحراء في المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: 'صحراء الربع الخالي', options: ['صحراء النفود الكبير', 'صحراء الربع الخالي', 'صحراء الدهناء', 'صحراء الصمان'], difficulty: 'medium', points: 200 },
      { id: 'sa_m6', questionText: 'ما هو اسم المنطقة الشرقية المشهورة بالنفط في السعودية؟', questionType: 'mcq', correctAnswer: 'الظهران والدمام', options: ['تبوك', 'الظهران والدمام', 'أبها', 'حائل'], difficulty: 'medium', points: 200 },
      { id: 'sa_m7', questionText: 'ما هو موسم الترفيه السعودي الذي يُقام في الرياض سنوياً؟', questionType: 'mcq', correctAnswer: 'موسم الرياض', options: ['موسم جدة', 'موسم الرياض', 'موسم الشرقية', 'موسم الطائف'], difficulty: 'medium', points: 200 },
      { id: 'sa_m8', questionText: 'كم عدد مناطق المملكة العربية السعودية الإدارية؟', questionType: 'mcq', correctAnswer: '13 منطقة', options: ['10 مناطق', '11 منطقة', '13 منطقة', '15 منطقة'], difficulty: 'medium', points: 200 },

      // --- Hard (300 points) ---
      { id: 'sa_h1', questionText: 'في أي عام اكتُشف النفط تجارياً في المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: '1938', options: ['1932', '1935', '1938', '1942'], difficulty: 'hard', points: 300 },
      { id: 'sa_h2', questionText: 'ما اسم أول جامعة تأسست في المملكة العربية السعودية؟', questionType: 'mcq', correctAnswer: 'جامعة أم القرى', options: ['جامعة الملك سعود', 'جامعة أم القرى', 'جامعة الملك فهد للبترول', 'الجامعة الإسلامية'], difficulty: 'hard', points: 300 },
      { id: 'sa_h3', questionText: 'ما هو المشروع المعماري في نيوم الذي يمتد بطول 170 كم على شكل خط مستقيم؟', questionType: 'mcq', correctAnswer: 'ذا لاين', options: ['أوكساجون', 'ذا لاين', 'تروجينا', 'سندالة'], difficulty: 'hard', points: 300 },
      { id: 'sa_h4', questionText: 'من هو الملك السعودي الملقب بـ "ملك الإنسانية"؟', questionType: 'mcq', correctAnswer: 'الملك سلمان بن عبدالعزيز', options: ['الملك فيصل', 'الملك فهد', 'الملك عبدالله', 'الملك سلمان بن عبدالعزيز'], difficulty: 'hard', points: 300 },
      { id: 'sa_h5', questionText: 'ما هي أقدم مدينة سعودية مأهولة بالسكان؟', questionType: 'mcq', correctAnswer: 'الأحساء', options: ['مكة المكرمة', 'المدينة المنورة', 'الأحساء', 'تيماء'], difficulty: 'hard', points: 300 },
      { id: 'sa_h6', questionText: 'ما اسم موقع التراث العالمي لليونسكو في شمال غرب السعودية؟', questionType: 'mcq', correctAnswer: 'مدائن صالح (الحجر)', options: ['الدرعية التاريخية', 'مدائن صالح (الحجر)', 'جدة التاريخية', 'الفاو'], difficulty: 'hard', points: 300 },
      { id: 'sa_h7', questionText: 'في أي عام استضافت السعودية سباق فورمولا 1 لأول مرة؟', questionType: 'mcq', correctAnswer: '2021', options: ['2019', '2020', '2021', '2022'], difficulty: 'hard', points: 300 },
      { id: 'sa_h8', questionText: 'ما اسم شركة النفط السعودية الوطنية؟', questionType: 'mcq', correctAnswer: 'أرامكو السعودية', options: ['سابك', 'أرامكو السعودية', 'بترومين', 'معادن'], difficulty: 'hard', points: 300 },

      // --- Expert (500 points) ---
      { id: 'sa_x1', questionText: 'في أي عام استعاد الملك عبدالعزيز مدينة الرياض؟', questionType: 'open', correctAnswer: '1902', difficulty: 'expert', points: 500 },
      { id: 'sa_x2', questionText: 'كم عدد ملوك المملكة العربية السعودية حتى الملك سلمان بن عبدالعزيز؟', questionType: 'open', correctAnswer: '7', difficulty: 'expert', points: 500 },
      { id: 'sa_x3', questionText: 'ما اسم أول قمر صناعي سعودي أُطلق إلى الفضاء؟', questionType: 'open', correctAnswer: 'سات 1', difficulty: 'expert', points: 500 },
      { id: 'sa_x4', questionText: 'ما هو ارتفاع أبراج البيت في مكة المكرمة بالمتر تقريباً؟', questionType: 'open', correctAnswer: '601', difficulty: 'expert', points: 500 },
      { id: 'sa_x5', questionText: 'ما اسم أول رائدة فضاء سعودية؟', questionType: 'open', correctAnswer: 'ريانة برناوي', difficulty: 'expert', points: 500 },
      { id: 'sa_x6', questionText: 'في أي عام سُمح للمرأة السعودية بقيادة السيارة رسمياً؟', questionType: 'open', correctAnswer: '2018', difficulty: 'expert', points: 500 },
      { id: 'sa_x7', questionText: 'ما اسم البحر الذي يحد المملكة العربية السعودية من الغرب؟', questionType: 'open', correctAnswer: 'البحر الأحمر', difficulty: 'expert', points: 500 },
      { id: 'sa_x8', questionText: 'في أي عام تم إدراج أسهم أرامكو في السوق المالية السعودية (تداول)؟', questionType: 'open', correctAnswer: '2019', difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 7. KUWAIT (كويتي) ====================
  {
    id: 'kuwait',
    questions: [
      // --- Easy (100 points) ---
      { id: 'kw_e1', questionText: 'ما هي عاصمة دولة الكويت؟', questionType: 'mcq', correctAnswer: 'مدينة الكويت', options: ['الجهراء', 'مدينة الكويت', 'حولي', 'الأحمدي'], difficulty: 'easy', points: 100 },
      { id: 'kw_e2', questionText: 'ما هي العملة الرسمية لدولة الكويت؟', questionType: 'mcq', correctAnswer: 'الدينار الكويتي', options: ['الريال', 'الدرهم', 'الدينار الكويتي', 'الجنيه'], difficulty: 'easy', points: 100 },
      { id: 'kw_e3', questionText: 'ما هو أشهر معلم معماري في الكويت؟', questionType: 'mcq', correctAnswer: 'أبراج الكويت', options: ['برج التحرير', 'أبراج الكويت', 'برج الحمراء', 'المباركية'], difficulty: 'easy', points: 100 },
      { id: 'kw_e4', questionText: 'على أي خليج تطل دولة الكويت؟', questionType: 'mcq', correctAnswer: 'الخليج العربي', options: ['خليج عدن', 'الخليج العربي', 'خليج عُمان', 'البحر الأحمر'], difficulty: 'easy', points: 100 },
      { id: 'kw_e5', questionText: 'ما هي ألوان العلم الكويتي؟', questionType: 'mcq', correctAnswer: 'أخضر وأبيض وأحمر وأسود', options: ['أخضر وأبيض فقط', 'أخضر وأبيض وأحمر وأسود', 'أحمر وأبيض وأسود', 'أزرق وأبيض وأحمر'], difficulty: 'easy', points: 100 },
      { id: 'kw_e6', questionText: 'ما هو اسم السوق الشعبي الشهير في الكويت؟', questionType: 'mcq', correctAnswer: 'سوق المباركية', options: ['سوق واقف', 'سوق المباركية', 'سوق الحراج', 'سوق الصفاة'], difficulty: 'easy', points: 100 },
      { id: 'kw_e7', questionText: 'ما هو نظام الحكم في الكويت؟', questionType: 'mcq', correctAnswer: 'إمارة دستورية', options: ['جمهورية', 'إمارة دستورية', 'ملكية مطلقة', 'اتحاد فيدرالي'], difficulty: 'easy', points: 100 },
      { id: 'kw_e8', questionText: 'ما هو المورد الاقتصادي الأساسي لدولة الكويت؟', questionType: 'mcq', correctAnswer: 'النفط', options: ['السياحة', 'الزراعة', 'النفط', 'الصيد'], difficulty: 'easy', points: 100 },

      // --- Medium (200 points) ---
      { id: 'kw_m1', questionText: 'في أي عام حصلت الكويت على استقلالها من بريطانيا؟', questionType: 'mcq', correctAnswer: '1961', options: ['1951', '1956', '1961', '1965'], difficulty: 'medium', points: 200 },
      { id: 'kw_m2', questionText: 'من هو أول أمير لدولة الكويت بعد الاستقلال؟', questionType: 'mcq', correctAnswer: 'الشيخ عبدالله السالم الصباح', options: ['الشيخ أحمد الجابر الصباح', 'الشيخ عبدالله السالم الصباح', 'الشيخ صباح السالم الصباح', 'الشيخ جابر الأحمد الصباح'], difficulty: 'medium', points: 200 },
      { id: 'kw_m3', questionText: 'ما اسم أكبر جزيرة كويتية؟', questionType: 'mcq', correctAnswer: 'جزيرة بوبيان', options: ['جزيرة فيلكا', 'جزيرة بوبيان', 'جزيرة وربة', 'جزيرة كبر'], difficulty: 'medium', points: 200 },
      { id: 'kw_m4', questionText: 'في أي عام تم تحرير الكويت من الغزو العراقي؟', questionType: 'mcq', correctAnswer: '1991', options: ['1990', '1991', '1992', '1993'], difficulty: 'medium', points: 200 },
      { id: 'kw_m5', questionText: 'ما اسم البرلمان الكويتي؟', questionType: 'mcq', correctAnswer: 'مجلس الأمة', options: ['مجلس الشورى', 'مجلس الأمة', 'مجلس النواب', 'المجلس الوطني'], difficulty: 'medium', points: 200 },
      { id: 'kw_m6', questionText: 'ما هي الأكلة الكويتية الشعبية المصنوعة من الأرز واللحم؟', questionType: 'mcq', correctAnswer: 'المجبوس', options: ['الهريس', 'المجبوس', 'الثريد', 'القوزي'], difficulty: 'medium', points: 200 },
      { id: 'kw_m7', questionText: 'كم عدد أعضاء مجلس الأمة الكويتي المنتخبين؟', questionType: 'mcq', correctAnswer: '50 عضواً', options: ['30 عضواً', '40 عضواً', '50 عضواً', '60 عضواً'], difficulty: 'medium', points: 200 },
      { id: 'kw_m8', questionText: 'في أي شهر يُحتفل بالعيد الوطني الكويتي؟', questionType: 'mcq', correctAnswer: 'فبراير', options: ['يناير', 'فبراير', 'مارس', 'يونيو'], difficulty: 'medium', points: 200 },

      // --- Hard (300 points) ---
      { id: 'kw_h1', questionText: 'في أي عام صدر أول دستور لدولة الكويت؟', questionType: 'mcq', correctAnswer: '1962', options: ['1960', '1961', '1962', '1965'], difficulty: 'hard', points: 300 },
      { id: 'kw_h2', questionText: 'ما اسم الجزيرة الكويتية التي تحتوي على آثار تاريخية يونانية؟', questionType: 'mcq', correctAnswer: 'جزيرة فيلكا', options: ['جزيرة بوبيان', 'جزيرة فيلكا', 'جزيرة وربة', 'جزيرة أم المرادم'], difficulty: 'hard', points: 300 },
      { id: 'kw_h3', questionText: 'ما هو اسم أول حقل نفطي اكتُشف في الكويت؟', questionType: 'mcq', correctAnswer: 'حقل برقان', options: ['حقل الأحمدي', 'حقل برقان', 'حقل الروضتين', 'حقل المقوع'], difficulty: 'hard', points: 300 },
      { id: 'kw_h4', questionText: 'من هو الأمير الكويتي الملقب بـ "أمير القلوب"؟', questionType: 'mcq', correctAnswer: 'الشيخ صباح الأحمد الجابر الصباح', options: ['الشيخ جابر الأحمد الصباح', 'الشيخ صباح الأحمد الجابر الصباح', 'الشيخ سعد العبدالله الصباح', 'الشيخ نواف الأحمد الصباح'], difficulty: 'hard', points: 300 },
      { id: 'kw_h5', questionText: 'ما هو تاريخ الغزو العراقي للكويت؟', questionType: 'mcq', correctAnswer: '2 أغسطس 1990', options: ['15 يوليو 1990', '2 أغسطس 1990', '17 سبتمبر 1990', '26 فبراير 1991'], difficulty: 'hard', points: 300 },
      { id: 'kw_h6', questionText: 'ما اسم أطول برج في الكويت؟', questionType: 'mcq', correctAnswer: 'برج الحمراء', options: ['أبراج الكويت', 'برج الحمراء', 'برج التحرير', 'برج الراية'], difficulty: 'hard', points: 300 },
      { id: 'kw_h7', questionText: 'ما هو الاسم القديم الذي عُرفت به الكويت؟', questionType: 'mcq', correctAnswer: 'القرين', options: ['الحصن', 'القرين', 'الجزيرة', 'الديرة'], difficulty: 'hard', points: 300 },
      { id: 'kw_h8', questionText: 'في أي عام تأسست جامعة الكويت؟', questionType: 'mcq', correctAnswer: '1966', options: ['1961', '1963', '1966', '1970'], difficulty: 'hard', points: 300 },

      // --- Expert (500 points) ---
      { id: 'kw_x1', questionText: 'في أي عام بدأ تصدير النفط الكويتي لأول مرة؟', questionType: 'open', correctAnswer: '1946', difficulty: 'expert', points: 500 },
      { id: 'kw_x2', questionText: 'من هو مؤسس إمارة الكويت من آل الصباح؟', questionType: 'open', correctAnswer: 'صباح الأول', difficulty: 'expert', points: 500 },
      { id: 'kw_x3', questionText: 'كم عدد المحافظات في دولة الكويت؟', questionType: 'open', correctAnswer: '6', difficulty: 'expert', points: 500 },
      { id: 'kw_x4', questionText: 'ما هو اسم المخرج الكويتي الذي أخرج فيلم "بس يا بحر" عام 1972؟', questionType: 'open', correctAnswer: 'خالد الصديق', difficulty: 'expert', points: 500 },
      { id: 'kw_x5', questionText: 'ما هو اسم سور الكويت الثالث الذي بُني عام 1920؟', questionType: 'open', correctAnswer: 'سور الكويت الثالث', difficulty: 'expert', points: 500 },
      { id: 'kw_x6', questionText: 'ما اسم أول صحيفة كويتية صدرت عام 1928؟', questionType: 'open', correctAnswer: 'مجلة الكويت', difficulty: 'expert', points: 500 },
      { id: 'kw_x7', questionText: 'في أي عام أُنشئ صندوق الكويت للتنمية الاقتصادية العربية؟', questionType: 'open', correctAnswer: '1961', difficulty: 'expert', points: 500 },
      { id: 'kw_x8', questionText: 'ما اسم المعركة البحرية الشهيرة التي خاضها الكويتيون عام 1783؟', questionType: 'open', correctAnswer: 'معركة الرقة', difficulty: 'expert', points: 500 },
    ],
  },

  // ==================== 8. FOOD (طعام ومطبخ) ====================
  {
    id: 'food',
    questions: [
      // --- Easy (100 points) ---
      { id: 'fo_e1', questionText: 'ما هي الأكلة الإيطالية الأشهر المصنوعة من العجين والصلصة والجبن؟', questionType: 'mcq', correctAnswer: 'البيتزا', options: ['الباستا', 'البيتزا', 'اللازانيا', 'الريزوتو'], difficulty: 'easy', points: 100 },
      { id: 'fo_e2', questionText: 'من أي حيوان نحصل على الحليب الأكثر استهلاكاً في العالم؟', questionType: 'mcq', correctAnswer: 'البقرة', options: ['الماعز', 'البقرة', 'الجاموس', 'الغنم'], difficulty: 'easy', points: 100 },
      { id: 'fo_e3', questionText: 'ما هو المكون الرئيسي في طبق الكبسة السعودية؟', questionType: 'mcq', correctAnswer: 'الأرز واللحم', options: ['المكرونة واللحم', 'الأرز واللحم', 'الخبز والدجاج', 'البرغل واللحم'], difficulty: 'easy', points: 100 },
      { id: 'fo_e4', questionText: 'ما هي الفاكهة المعروفة بلقب "ملكة الفواكه"؟', questionType: 'mcq', correctAnswer: 'المانجو', options: ['التفاح', 'المانجو', 'الموز', 'الفراولة'], difficulty: 'easy', points: 100 },
      { id: 'fo_e5', questionText: 'ما اسم المشروب الساخن المصنوع من أوراق نبات الشاي؟', questionType: 'mcq', correctAnswer: 'الشاي', options: ['القهوة', 'الشاي', 'الكاكاو', 'النعناع'], difficulty: 'easy', points: 100 },
      { id: 'fo_e6', questionText: 'ما هو الطعام الأساسي في اليابان؟', questionType: 'mcq', correctAnswer: 'الأرز', options: ['المكرونة', 'الأرز', 'الخبز', 'البطاطس'], difficulty: 'easy', points: 100 },
      { id: 'fo_e7', questionText: 'ما اسم الطبق المصري المكون من الفول المدمس؟', questionType: 'mcq', correctAnswer: 'الفول', options: ['الكشري', 'الفول', 'الطعمية', 'الملوخية'], difficulty: 'easy', points: 100 },
      { id: 'fo_e8', questionText: 'من أي دولة نشأت أكلة "السوشي"؟', questionType: 'mcq', correctAnswer: 'اليابان', options: ['الصين', 'اليابان', 'كوريا', 'تايلاند'], difficulty: 'easy', points: 100 },

      // --- Medium (200 points) ---
      { id: 'fo_m1', questionText: 'ما هو التوابل الأغلى ثمناً في العالم؟', questionType: 'mcq', correctAnswer: 'الزعفران', options: ['الفانيلا', 'الزعفران', 'الهيل', 'القرفة'], difficulty: 'medium', points: 200 },
      { id: 'fo_m2', questionText: 'من أي دولة نشأت أكلة "الكبسة"؟', questionType: 'mcq', correctAnswer: 'المملكة العربية السعودية', options: ['اليمن', 'المملكة العربية السعودية', 'العراق', 'مصر'], difficulty: 'medium', points: 200 },
      { id: 'fo_m3', questionText: 'ما هو المكون الأساسي في صنع الشوكولاتة؟', questionType: 'mcq', correctAnswer: 'الكاكاو', options: ['القهوة', 'الكاكاو', 'الحليب', 'السكر'], difficulty: 'medium', points: 200 },
      { id: 'fo_m4', questionText: 'ما اسم الطبق اللبناني المصنوع من البرغل واللحم النيء؟', questionType: 'mcq', correctAnswer: 'الكبة النية', options: ['التبولة', 'الكبة النية', 'الفتوش', 'الحمص'], difficulty: 'medium', points: 200 },
      { id: 'fo_m5', questionText: 'ما هي الدولة الأكثر إنتاجاً للبن (القهوة) في العالم؟', questionType: 'mcq', correctAnswer: 'البرازيل', options: ['كولومبيا', 'البرازيل', 'إثيوبيا', 'فيتنام'], difficulty: 'medium', points: 200 },
      { id: 'fo_m6', questionText: 'ما هو الطبق الهندي الشهير المكون من العدس والتوابل؟', questionType: 'mcq', correctAnswer: 'الدال', options: ['البرياني', 'الدال', 'التكا', 'الكاري'], difficulty: 'medium', points: 200 },
      { id: 'fo_m7', questionText: 'ما هي المادة التي تُعطي الفلفل الحار طعمه اللاذع؟', questionType: 'mcq', correctAnswer: 'الكابسيسين', options: ['الكافيين', 'الكابسيسين', 'الكركمين', 'البيبرين'], difficulty: 'medium', points: 200 },
      { id: 'fo_m8', questionText: 'ما اسم الخبز الرقيق الشهير في المطبخ المكسيكي؟', questionType: 'mcq', correctAnswer: 'التورتيا', options: ['النان', 'التورتيا', 'البيتا', 'الفوكاتشا'], difficulty: 'medium', points: 200 },

      // --- Hard (300 points) ---
      { id: 'fo_h1', questionText: 'ما هي الدولة التي اخترعت طبق "الباييلا"؟', questionType: 'mcq', correctAnswer: 'إسبانيا', options: ['إيطاليا', 'إسبانيا', 'البرتغال', 'المكسيك'], difficulty: 'hard', points: 300 },
      { id: 'fo_h2', questionText: 'ما هو الطبق الوطني في المغرب؟', questionType: 'mcq', correctAnswer: 'الكسكس', options: ['الطاجين', 'الكسكس', 'الحريرة', 'البسطيلة'], difficulty: 'hard', points: 300 },
      { id: 'fo_h3', questionText: 'ما هي "الأومامي" في عالم الطعام؟', questionType: 'mcq', correctAnswer: 'الطعم الخامس (اللذيذ/المالح)', options: ['نوع من التوابل', 'الطعم الخامس (اللذيذ/المالح)', 'طريقة طبخ يابانية', 'نوع من الأرز'], difficulty: 'hard', points: 300 },
      { id: 'fo_h4', questionText: 'من أي دولة نشأت أكلة "الفلافل" حسب أغلب المؤرخين؟', questionType: 'mcq', correctAnswer: 'مصر', options: ['فلسطين', 'مصر', 'لبنان', 'سوريا'], difficulty: 'hard', points: 300 },
      { id: 'fo_h5', questionText: 'ما هو الجبن الإيطالي المصنوع من حليب الجاموس ويُستخدم في البيتزا؟', questionType: 'mcq', correctAnswer: 'الموزاريلا', options: ['البارميزان', 'الموزاريلا', 'الريكوتا', 'الغورغونزولا'], difficulty: 'hard', points: 300 },
      { id: 'fo_h6', questionText: 'ما هو الطبق الكويتي التقليدي المصنوع من القمح واللحم المهروس؟', questionType: 'mcq', correctAnswer: 'الهريس', options: ['المجبوس', 'الهريس', 'المطبق', 'الغبقة'], difficulty: 'hard', points: 300 },
      { id: 'fo_h7', questionText: 'ما اسم الصلصة اليابانية المصنوعة من فول الصويا المخمر؟', questionType: 'mcq', correctAnswer: 'صلصة الصويا', options: ['الواسابي', 'صلصة الصويا', 'الميرين', 'الميسو'], difficulty: 'hard', points: 300 },
      { id: 'fo_h8', questionText: 'ما هو الفرق بين القهوة العربية والقهوة التركية من حيث الإضافات؟', questionType: 'mcq', correctAnswer: 'العربية بالهيل والتركية بدونه', options: ['لا فرق بينهما', 'العربية بالهيل والتركية بدونه', 'التركية بالزعفران والعربية بدونه', 'العربية بالسكر والتركية بدونه'], difficulty: 'hard', points: 300 },

      // --- Expert (500 points) ---
      { id: 'fo_x1', questionText: 'ما هو اسم الطبق الفرنسي الشهير المكون من حساء البصل المغطى بالجبن؟', questionType: 'open', correctAnswer: 'حساء البصل الفرنسي', difficulty: 'expert', points: 500 },
      { id: 'fo_x2', questionText: 'من أي دولة أصل حبوب البن (القهوة) في الأصل؟', questionType: 'open', correctAnswer: 'إثيوبيا', difficulty: 'expert', points: 500 },
      { id: 'fo_x3', questionText: 'ما اسم الطبق الياباني المكون من أرز مع خل وسمك نيء فوقه؟', questionType: 'open', correctAnswer: 'السوشي', difficulty: 'expert', points: 500 },
      { id: 'fo_x4', questionText: 'ما هي الفاكهة التي تُعرف بأنها الأكثر رائحة نفاذة في العالم؟', questionType: 'open', correctAnswer: 'الدوريان', difficulty: 'expert', points: 500 },
      { id: 'fo_x5', questionText: 'ما اسم التوابل الذي يُستخرج من ميسم زهرة الزعفران وما لونه؟', questionType: 'open', correctAnswer: 'الزعفران', difficulty: 'expert', points: 500 },
      { id: 'fo_x6', questionText: 'ما هو اسم الطبق الإماراتي المكون من خبز رقيق مع بيض ولحم؟', questionType: 'open', correctAnswer: 'الجباب', difficulty: 'expert', points: 500 },
      { id: 'fo_x7', questionText: 'ما اسم المشروب العربي التقليدي المصنوع من التمر المنقوع في الماء؟', questionType: 'open', correctAnswer: 'النبيذ أو الجلاب', difficulty: 'expert', points: 500 },
      { id: 'fo_x8', questionText: 'ما هو الاسم العلمي للفلفل الأشد حرارة في العالم "كارولاينا ريبر"؟', questionType: 'open', correctAnswer: 'كارولاينا ريبر', difficulty: 'expert', points: 500 },
    ],
  },
];
