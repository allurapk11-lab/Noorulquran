// ====== CHANGE THIS to your WhatsApp number (country code, no + or spaces) ======
const WHATSAPP = "+351932881644";

const T = {
  en: {
    serving:"Serving Students All Euorope", brand_sub:"ACADEMY",
    nav_home:"Home", nav_about:"About Us", nav_courses:"Courses", nav_teachers:"Teachers", nav_reviews:"Reviews", nav_pricing:"Pricing", nav_contact:"Contact Us",
    btn_trial:"📅 Book Free Trial Class", btn_trial2:"Book Free Trial Class", btn_wa:"💬 Chat on WhatsApp",
    h1a:"Learn Quran Online", h1b:"with Tajweed",
    hero_sub:"One-to-One Online Classes for Kids & Adults with Qualified Male & Female Teachers.",
    hb1:"Noorani Qaida to Quran & Tajweed", hb2:"Hifz-ul-Quran & Islamic Studies", hb3:"Flexible Timings for All Countries", hb4:"Safe, Friendly & Interactive Classes",
    ayah_tr:"Read in the name of your Lord who created.",
    st1:"Happy Students", st2:"Qualified Teachers", st3:"Countries", st4:"Support",
    about_t:"About Noor ul Quran Academy",
    about_p1:"Noor ul Quran Academy offers authentic Quran education from the comfort of your home. Our qualified teachers teach with patience, love and proper Tajweed.",
    about_p2:"We welcome children and adults from all over the euorope, with flexible timings, personal attention and monthly progress reports.",
    courses_t:"Our Courses",
    c1:"Noorani Qaida", c1d:"Perfect for beginners of all ages.",
    c2:"Quran Reading", c2d:"Learn to read Quran fluently.",
    c3:"Quran with Tajweed", c3d:"Read Quran with proper Tajweed rules.",
    c4:"Hifz-ul-Quran", c4d:"Memorize Quran with easy & effective methods.",
    c5:"Islamic Studies", c5d:"Learn Islamic values and teachings.",
    c6:"Daily Duas & Kalimas", c6d:"Essential duas and kalimas for kids.",
    why_t:"Why Choose Noor ul Quran Academy?",
    w1:"Qualified Male Teacher", w2:"One-to-One Live Classes", w3:"Safe & Secure Learning Environment",
    w4:"Monthly Progress Reports", w5:"Affordable Fee Packages", w6:"Flexible Timings for All Countries",
    teach_t:"Our Teachers",
    t1:"Qari & Hafiz – 8 years experience", t2:"Tajweed Specialist – Female Teacher", t3:"Hifz Teacher – 8 years experience",
    rev_t:"What Parents & Students Say",
    r1:"\"The teachers are very kind and patient. My son has improved so much in Quran reading. Highly recommended!\"",
    r2:"\"Excellent academy! My daughter is learning Hifz with Tajweed and we are very happy with the progress.\"",
    r3:"\"Best online Quran classes for kids. Teachers are professional and classes are well organized.\"",
    price_t:"Affordable Fee Packages", p1:"3 Days / Week", p2:"5 Days / Week", p3:"Hifz Program", mo:"/month",
    pf1:"30 min per class", pf2:"One-to-One Live", pf3:"Monthly Report", pf4:"45 min per class", popular:"Most Popular",
    cta_t:"Start Your Quran Journey Today!", cta_p:"Book your FREE Trial Class and experience quality Quran education from home.",
    contact_t:"Contact Us", send:"Send on WhatsApp", ph_name:"Your Name", ph_phone:"WhatsApp Number",
    hadith:"The best of you are those who learn the Quran and teach it. (Sahih Bukhari)", rights:"All Rights Reserved.",
    wa_msg:"Assalamu Alaikum! I want to book a free trial class. Name: "
  },
  ur: {
    serving:"دنیا بھر کے طلبہ کے لیے", brand_sub:"اکیڈمی",
    nav_home:"ہوم", nav_about:"ہمارے بارے میں", nav_courses:"کورسز", nav_teachers:"اساتذہ", nav_reviews:"آراء", nav_pricing:"فیس", nav_contact:"رابطہ کریں",
    btn_trial:"📅 مفت ٹرائل کلاس بُک کریں", btn_trial2:"مفت ٹرائل کلاس بُک کریں", btn_wa:"💬 واٹس ایپ پر بات کریں",
    h1a:"آن لائن قرآن سیکھیں", h1b:"تجوید کے ساتھ",
    hero_sub:"بچوں اور بڑوں کے لیے ماہر مرد و خواتین اساتذہ کے ساتھ ون ٹو ون آن لائن کلاسز۔",
    hb1:"نورانی قاعدہ سے قرآن و تجوید تک", hb2:"حفظِ قرآن اور اسلامی علوم", hb3:"تمام ممالک کے لیے لچکدار اوقات", hb4:"محفوظ، دوستانہ اور انٹرایکٹو کلاسز",
    ayah_tr:"پڑھ اپنے رب کے نام سے جس نے پیدا کیا۔",
    st1:"خوش طلبہ", st2:"ماہر اساتذہ", st3:"ممالک", st4:"سپورٹ",
    about_t:"نور القرآن اکیڈمی کے بارے میں",
    about_p1:"نور القرآن اکیڈمی آپ کے گھر بیٹھے مستند قرآنی تعلیم فراہم کرتی ہے۔ ہمارے ماہر اساتذہ صبر، محبت اور درست تجوید کے ساتھ پڑھاتے ہیں۔",
    about_p2:"ہم دنیا بھر کے بچوں اور بڑوں کو لچکدار اوقات، ذاتی توجہ اور ماہانہ پروگریس رپورٹ کے ساتھ خوش آمدید کہتے ہیں۔",
    courses_t:"ہمارے کورسز",
    c1:"نورانی قاعدہ", c1d:"ہر عمر کے مبتدیوں کے لیے بہترین۔",
    c2:"ناظرہ قرآن", c2d:"قرآن روانی سے پڑھنا سیکھیں۔",
    c3:"تجوید کے ساتھ قرآن", c3d:"تجوید کے اصولوں کے ساتھ قرآن پڑھیں۔",
    c4:"حفظِ قرآن", c4d:"آسان اور مؤثر طریقوں سے قرآن حفظ کریں۔",
    c5:"اسلامی علوم", c5d:"اسلامی اقدار اور تعلیمات سیکھیں۔",
    c6:"روزمرہ دعائیں اور کلمے", c6d:"بچوں کے لیے ضروری دعائیں اور کلمے۔",
    why_t:"نور القرآن اکیڈمی ہی کیوں؟",
    w1:"مرد و خواتین اساتذہ دستیاب", w2:"ون ٹو ون لائیو کلاسز", w3:"محفوظ تعلیمی ماحول",
    w4:"ماہانہ پروگریس رپورٹ", w5:"مناسب فیس پیکجز", w6:"تمام ممالک کے لیے لچکدار اوقات",
    teach_t:"ہمارے اساتذہ",
    t1:"قاری و حافظ – 10 سال کا تجربہ", t2:"تجوید کی ماہر – خاتون استاد", t3:"حفظ کے استاد – 8 سال کا تجربہ",
    rev_t:"والدین اور طلبہ کی رائے",
    r1:"\"اساتذہ بہت مہربان اور صابر ہیں۔ میرے بیٹے کی قرآن پڑھائی میں بہت بہتری آئی ہے۔ بہت زیادہ سفارش!\"",
    r2:"\"شاندار اکیڈمی! میری بیٹی تجوید کے ساتھ حفظ کر رہی ہے اور ہم پیش رفت سے بہت خوش ہیں۔\"",
    r3:"\"بچوں کے لیے بہترین آن لائن قرآن کلاسز۔ اساتذہ پیشہ ور اور کلاسز منظم ہیں۔\"",
    price_t:"مناسب فیس پیکجز", p1:"ہفتے میں 3 دن", p2:"ہفتے میں 5 دن", p3:"حفظ پروگرام", mo:"/ماہانہ",
    pf1:"ہر کلاس 30 منٹ", pf2:"ون ٹو ون لائیو", pf3:"ماہانہ رپورٹ", pf4:"ہر کلاس 45 منٹ", popular:"سب سے مقبول",
    cta_t:"آج ہی اپنا قرآنی سفر شروع کریں!", cta_p:"اپنی مفت ٹرائل کلاس بُک کریں اور گھر بیٹھے معیاری قرآنی تعلیم کا تجربہ کریں۔",
    contact_t:"رابطہ کریں", send:"واٹس ایپ پر بھیجیں", ph_name:"آپ کا نام", ph_phone:"واٹس ایپ نمبر",
    hadith:"تم میں سب سے بہتر وہ ہے جو قرآن سیکھے اور سکھائے۔ (صحیح بخاری)", rights:"جملہ حقوق محفوظ ہیں۔",
    wa_msg:"السلام علیکم! میں مفت ٹرائل کلاس بُک کرنا چاہتا/چاہتی ہوں۔ نام: "
  },
  ar: {
    serving:"نخدم الطلاب حول العالم", brand_sub:"أكاديمية",
    nav_home:"الرئيسية", nav_about:"من نحن", nav_courses:"الدورات", nav_teachers:"المعلمون", nav_reviews:"آراء الطلاب", nav_pricing:"الأسعار", nav_contact:"اتصل بنا",
    btn_trial:"📅 احجز حصة تجريبية مجانية", btn_trial2:"احجز حصة تجريبية مجانية", btn_wa:"💬 تواصل عبر واتساب",
    h1a:"تعلّم القرآن أونلاين", h1b:"مع التجويد",
    hero_sub:"دروس فردية عبر الإنترنت للأطفال والكبار مع معلمين ومعلمات مؤهلين.",
    hb1:"من القاعدة النورانية إلى القرآن والتجويد", hb2:"تحفيظ القرآن والدراسات الإسلامية", hb3:"مواعيد مرنة لجميع الدول", hb4:"حصص آمنة وودية وتفاعلية",
    ayah_tr:"اقرأ باسم ربك الذي خلق.",
    st1:"طالب سعيد", st2:"معلم مؤهل", st3:"دولة", st4:"دعم متواصل",
    about_t:"عن أكاديمية نور القرآن",
    about_p1:"تقدّم أكاديمية نور القرآن تعليماً قرآنياً أصيلاً وأنت في منزلك. يعلّم معلمونا المؤهلون بصبر ومحبة وأحكام تجويد صحيحة.",
    about_p2:"نرحّب بالأطفال والكبار من جميع أنحاء العالم مع مواعيد مرنة واهتمام شخصي وتقارير تقدم شهرية.",
    courses_t:"دوراتنا",
    c1:"القاعدة النورانية", c1d:"مثالية للمبتدئين من جميع الأعمار.",
    c2:"قراءة القرآن", c2d:"تعلّم قراءة القرآن بطلاقة.",
    c3:"القرآن مع التجويد", c3d:"اقرأ القرآن بأحكام التجويد الصحيحة.",
    c4:"تحفيظ القرآن", c4d:"احفظ القرآن بطرق سهلة وفعّالة.",
    c5:"الدراسات الإسلامية", c5d:"تعلّم القيم والتعاليم الإسلامية.",
    c6:"الأدعية والكلمات", c6d:"أدعية وكلمات أساسية للأطفال.",
    why_t:"لماذا أكاديمية نور القرآن؟",
    w1:"معلمون ومعلمات متاحون", w2:"حصص مباشرة فردية", w3:"بيئة تعليمية آمنة",
    w4:"تقارير تقدم شهرية", w5:"باقات أسعار مناسبة", w6:"مواعيد مرنة لجميع الدول",
    teach_t:"معلمونا",
    t1:"قارئ وحافظ – خبرة 10 سنوات", t2:"متخصصة في التجويد – معلمة", t3:"معلم تحفيظ – خبرة 8 سنوات",
    rev_t:"ماذا يقول أولياء الأمور والطلاب",
    r1:"\"المعلمون لطفاء وصبورون جداً. تحسّن ابني كثيراً في قراءة القرآن. أنصح بها بشدة!\"",
    r2:"\"أكاديمية ممتازة! ابنتي تحفظ مع التجويد ونحن سعداء جداً بتقدمها.\"",
    r3:"\"أفضل دروس قرآن أونلاين للأطفال. المعلمون محترفون والحصص منظمة.\"",
    price_t:"باقات أسعار مناسبة", p1:"3 أيام / أسبوع", p2:"5 أيام / أسبوع", p3:"برنامج التحفيظ", mo:"/شهرياً",
    pf1:"30 دقيقة للحصة", pf2:"مباشر فردي", pf3:"تقرير شهري", pf4:"45 دقيقة للحصة", popular:"الأكثر طلباً",
    cta_t:"ابدأ رحلتك مع القرآن اليوم!", cta_p:"احجز حصتك التجريبية المجانية وجرّب تعليماً قرآنياً متميزاً من منزلك.",
    contact_t:"اتصل بنا", send:"إرسال عبر واتساب", ph_name:"اسمك", ph_phone:"رقم واتساب",
    hadith:"خيركم من تعلّم القرآن وعلّمه. (صحيح البخاري)", rights:"جميع الحقوق محفوظة.",
    wa_msg:"السلام عليكم! أريد حجز حصة تجريبية مجانية. الاسم: "
  }
};

let current = localStorage.getItem("lang") || "en";

function setLang(l){
  current = l;
  localStorage.setItem("lang", l);
  const d = T[l];
  document.documentElement.lang = l;
  document.documentElement.dir = (l === "en") ? "ltr" : "rtl";
  document.body.className = l;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.dataset.i18n;
    if(d[k] !== undefined) el.textContent = d[k];
  });
  document.querySelectorAll("[data-ph]").forEach(el=>{
    el.placeholder = d[el.dataset.ph];
  });
  document.querySelectorAll(".lang button").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === l);
  });
}

document.querySelectorAll(".lang button").forEach(b=>{
  b.addEventListener("click", ()=> setLang(b.dataset.lang));
});

// mobile menu
const nav = document.getElementById("nav");
document.getElementById("burger").addEventListener("click", ()=> nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=> a.addEventListener("click", ()=> nav.classList.remove("open")));

// form -> WhatsApp
document.getElementById("form").addEventListener("submit", e=>{
  e.preventDefault();
  const name = document.getElementById("fname").value.trim();
  const phone = document.getElementById("fphone").value.trim();
  const msg = T[current].wa_msg + name + " | " + phone;
  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank");
});

// update all WhatsApp links with your number
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a=> a.href = "https://wa.me/" + WHATSAPP);

setLang(current);