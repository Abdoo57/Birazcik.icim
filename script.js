
const passwordScreen = document.getElementById('password-screen');
const giftContent = document.getElementById('gift-content');
const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');
const textDisplay = document.getElementById('text-display');

const correctPassword = "5757";

const texts = [
`السينما مالي
وتبقى الحيرة بكل مرة اشوفج بيها
وين اباوع؟
عينج؟ تنسيني كلامي
شفنج؟ تجيب لعقلي افكار شيطانية
خدودج؟ تخليني اعنقج واكرصهن
شفمج؟ يجيني شعور اريد ابوسه
حواجبج؟ الاثار؟
حتى حبوب وجهج احبهن
حياتج حيرة
لهل سبب هو اكثر منظر اريد اشاهده بحياتي.`,

`bir kara kasin bir kara gozuun Degier dunya malina.`,

`My slime
جزئي المفضل ولعبة اصابعي الجميلة
من خليتي خدج وتحسستي خدي
جان شعوري انو بس رددت الزمن
يوكف
وهيچ مثلا ابوس فد المليار خلية الي بخدج
خليه خليه`,

`My strawberry🔥`,

`ال O2 مالي
عطر متشبع بجلدج وبهدومج ودا اطيبه لجسمي
اتنفس عطرج بالقدر الي اريدج تكونين بداخلي
لحد ما بعد رئتي متسحب هوا تقفل
يعني اتمنى كلج تكونين عطر بالنسبة الي حتى ادخله بيه
بس تبقى هل خاصية بس العطر يوفرها
جلدج❤️`,

`عشقي من الدنيا
ما اكول غير بس bana ellerini ver
شعوري : تحفة فنية وعمل هندسي عظيم
بهيج شي صغيروني وكيوت وينكطر ويخليني
اگركز واعضعص
كلشي مر عليها
انجرحت بيوم من الايام
ومسحت الدموع مرة
وصبغت مرة
واشتغلت
وكتبت
ولزمت كومة امور حلوة ومومو حلوة
واثار القصص العاشتها ايدج كاهن موجودات بايدج
وعورات واثار
كلها دتصرخ اريد احب واحب`,

`❗ملاحظة: تم دمجه بالكامل مع مربع ellerin — لا يوجد له نص مستقل الآن.`,

`❗قيد الإعداد أو مدموج مؤقتًا`,

`My music, my laugh, my beat ❤️`,

`ضحكتج صارت مرجع لتوازني
من تضيع افكاري أو تضوج روحي
ارجع اتذكر ضحكتج وأوزن كلشي`,

`الشي الي يحسسني انت ماي بيبي الصغيرونة
وهلشي يخليني اكرطج
انت بعيوني م عندج شي مال كبار
كلشي ما اطفال
ف كلشي بيج ينكطر من جوا ليفوك
شعوري من مدتي عليه
مستحيل اكدر اوصفه
بس جان شي يستحق اسكت...`,

`Sacini dok sineme
لعنتي المستقبلية
والفايلوم مالتي حتى انام بالمستقبل
ممنوع تلازمي بعدين
اني اشوردة الح
واني امشطة الح
واني انشفة الح`
];

function checkPassword() {
  if (passwordInput.value === correctPassword) {
    passwordScreen.style.display = 'none';
    giftContent.style.display = 'block';
  } else {
    errorMessage.textContent = "رمز خاطئ! حاول مرة أخرى.";
  }
}

function showText(index) {
  textDisplay.textContent = texts[index];
}
