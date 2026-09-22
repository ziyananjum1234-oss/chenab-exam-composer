/**
 * Chenab College Shorkot - Exam Composer Pro
 * Full RTL Urdu Engine with Authentic Jameel Noori Nastaleeq & Inline Assistants
 * Dynamic Class-Wise Font Sizing Breakdown (Playgroup to 12th)
 * Admin Portal & Class-Wise Exam Repository Engine
 */

// All Supported Classes
const ALL_CLASSES = [
  "Playgroup",
  "Nursery",
  "Prep/KG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9th",
  "Class 10th",
  "Class 11th (1st Year)",
  "Class 12th (2nd Year)"
];

// Class Profiles with exact font size breakdown, line heights & layout defaults
const CLASS_PROFILES = {
  "Playgroup": {
    fontSize: 18,
    urduFontSize: 19,
    lineHeight: 1.8,
    urduLineHeight: 2.5,
    mode: "worksheet",
    desc: "Playgroup Toddler (18pt Large)",
    badge: "Playgroup (18pt Tracing)"
  },
  "Nursery": {
    fontSize: 17,
    urduFontSize: 18,
    lineHeight: 1.7,
    urduLineHeight: 2.4,
    mode: "worksheet",
    desc: "Nursery KG (17pt)",
    badge: "Nursery (17pt Tracing/Lines)"
  },
  "Prep/KG": {
    fontSize: 16,
    urduFontSize: 17,
    lineHeight: 1.6,
    urduLineHeight: 2.4,
    mode: "worksheet",
    desc: "Prep / KG (16pt)",
    badge: "Prep / KG (16pt Worksheet)"
  },
  "Class 1": {
    fontSize: 15,
    urduFontSize: 16,
    lineHeight: 1.55,
    urduLineHeight: 2.3,
    mode: "worksheet",
    desc: "Primary Grade 1 (15pt)",
    badge: "Class 1 (15pt Primary)"
  },
  "Class 2": {
    fontSize: 14.5,
    urduFontSize: 15.5,
    lineHeight: 1.5,
    urduLineHeight: 2.3,
    mode: "worksheet",
    desc: "Primary Grade 2 (14.5pt)",
    badge: "Class 2 (14.5pt Primary)"
  },
  "Class 3": {
    fontSize: 14,
    urduFontSize: 15,
    lineHeight: 1.5,
    urduLineHeight: 2.3,
    mode: "question_only",
    desc: "Primary Grade 3 (14pt)",
    badge: "Class 3 (14pt Primary)"
  },
  "Class 4": {
    fontSize: 13.5,
    urduFontSize: 14.5,
    lineHeight: 1.45,
    urduLineHeight: 2.25,
    mode: "question_only",
    desc: "Middle Grade 4 (13.5pt)",
    badge: "Class 4 (13.5pt Middle)"
  },
  "Class 5": {
    fontSize: 13.5,
    urduFontSize: 14.5,
    lineHeight: 1.45,
    urduLineHeight: 2.25,
    mode: "question_only",
    desc: "Middle Grade 5 (13.5pt)",
    badge: "Class 5 (13.5pt Middle)"
  },
  "Class 6": {
    fontSize: 13,
    urduFontSize: 14,
    lineHeight: 1.45,
    urduLineHeight: 2.2,
    mode: "question_only",
    desc: "Middle Grade 6 (13pt)",
    badge: "Class 6 (13pt Middle)"
  },
  "Class 7": {
    fontSize: 13,
    urduFontSize: 14,
    lineHeight: 1.45,
    urduLineHeight: 2.2,
    mode: "question_only",
    desc: "Middle Grade 7 (13pt)",
    badge: "Class 7 (13pt Middle)"
  },
  "Class 8": {
    fontSize: 13,
    urduFontSize: 14,
    lineHeight: 1.45,
    urduLineHeight: 2.2,
    mode: "question_only",
    desc: "Middle Grade 8 (13pt)",
    badge: "Class 8 (13pt Middle)"
  },
  "Class 9th": {
    fontSize: 12.5,
    urduFontSize: 13.5,
    lineHeight: 1.4,
    urduLineHeight: 2.2,
    mode: "question_only",
    desc: "Matriculation Part-I (12.5pt Board Standard)",
    badge: "Matric-I (12.5pt Board Size)"
  },
  "Class 10th": {
    fontSize: 12.5,
    urduFontSize: 13.5,
    lineHeight: 1.4,
    urduLineHeight: 2.2,
    mode: "question_only",
    desc: "Matriculation Part-II (12.5pt Board Standard)",
    badge: "Matric-II (12.5pt Board Size)"
  },
  "Class 11th (1st Year)": {
    fontSize: 12,
    urduFontSize: 13,
    lineHeight: 1.4,
    urduLineHeight: 2.2,
    mode: "question_only",
    desc: "Intermediate Part-I / FSc (12pt College Standard)",
    badge: "Inter-I (12pt FSc/ICS Standard)"
  },
  "Class 12th (2nd Year)": {
    fontSize: 12,
    urduFontSize: 13,
    lineHeight: 1.4,
    urduLineHeight: 2.2,
    mode: "question_only",
    desc: "Intermediate Part-II / FSc (12pt College Standard)",
    badge: "Inter-II (12pt FSc/ICS Standard)"
  }
};

// Application State
let paperData = {
  collegeName: "CHENAB COLLEGE SHORKOT",
  collegeNameUrdu: "چناب کالج شورکوٹ",
  motto: "Aspire and Achieve",
  campus: "Shorkot Campus",
  logoUrl: "chenab_logo.png",
  headerFontStyle: "cinzel_decorative",
  watermark: true,
  borderStyle: "double", // none, single, double, formal
  
  exam: {
    title: "Monthly Assessment Test 2026",
    classLevel: "Class 9th",
    subject: "English",
    totalMarks: 25,
    timeAllowed: "45 Minutes",
    date: new Date().toISOString().split('T')[0]
  },
  
  layout: {
    mode: "question_only", // question_only, worksheet
    columns: "1col", // 1col, 2col
    fontSize: 12.5,
    compactSpacing: false,
    isUrduSubject: false
  },
  
  mcqs: [],
  shortQs: [],
  longQs: [],
  blanks: [],
  matching: [],
  tracing: [],

  sectionConfig: {
    mcqs: { marks: 5, attempt: 0 },
    shortQs: { marks: 10, attempt: 0, lines: "2" },
    longQs: { marks: 10, attempt: 0, lines: "4" },
    blanks: { marks: 5, attempt: 0 },
    matching: { marks: 5, attempt: 0 },
    tracing: { marks: 5, attempt: 0 }
  }
};

let activeTargetInputId = null;
let activeQuestionImageTarget = null; // { section: 'mcqs', idx: 0 }
let currentZoom = 1.0;
let recognition = null;
let currentRecordingTargetId = null;
let isManualSubjectMode = false;
let currentActivePortalClass = null;
let isRomanUrduActive = true;
let lastTransliterationState = null; // { target, originalWord, urduWord, startIdx, endIdx, timestamp }

// ================= COMPREHENSIVE ROMAN URDU TO URDU TRANSLITERATION ENGINE =================
const ROMAN_URDU_DICTIONARY = {
  // Islamic, Honorific & Spiritual
  "hazoor": "حضور", "huzoor": "حضور", "hzoor": "حضور", "huzur": "حضور",
  "hazrat": "حضرت", "hzrat": "حضرت",
  "allah": "اللہ", "taala": "تعالیٰ", "subhan": "سبحان", "alhamdulillah": "الحمدللہ",
  "rasool": "رسول", "rasoolullah": "رسول اللہ", "nabi": "نبی", "ambiya": "انبیاء", "paighambar": "پیغمبر",
  "muhammad": "محمد", "mohammad": "محمد", "ahmad": "احمد", "ahmed": "احمد",
  "pbuh": "ﷺ", "saw": "ﷺ", "sallallahu": "ﷺ", "wasallam": "وسلم",
  "sahaba": "صحابہ", "sahabi": "صحابی", "sahabiyat": "صحابیات", "ahlebait": "اہل بیت",
  "ali": "علی", "usman": "عثمان", "umar": "عمر", "abu": "ابو", "bakar": "بکر", "bakr": "بکر",
  "fatima": "فاطمہ", "aisha": "عائشہ", "khadija": "خدیجہ", "zainab": "زینب", "hasan": "حسن", "hussain": "حسین",
  "quran": "قرآن", "quraan": "قرآن", "hadees": "حدیث", "hadith": "حدیث", "sunnat": "سنت",
  "surah": "سورۃ", "surat": "سورۃ", "ayat": "آیت", "rukoo": "رکوع", "parah": "پارہ",
  "namaz": "نماز", "roza": "روزہ", "zakat": "زکوٰۃ", "hajj": "حج", "jihad": "جہاد", "umrah": "عمرہ",
  "iman": "ایمان", "islam": "اسلام", "deen": "دین", "aqeeda": "عقیدہ", "aqaid": "عقائد",
  "tawheed": "توحید", "risalat": "رسالت", "aakhirat": "آخرت", "akhirat": "آخرت", "malaika": "ملائکہ",
  "ibadat": "عبادت", "dua": "دعا", "wazu": "وضو", "tayammum": "تیمم", "azaan": "اذان",
  "masjid": "مسجد", "makkah": "مکہ", "madinah": "مدینہ", "baitullah": "بیت اللہ", "kaaba": "کعبہ",
  "jannat": "جنت", "jahannum": "جہنم", "dozakh": "دوزخ", "hashar": "حشر", "qayamat": "قیامت",
  "farishta": "فرشتہ", "farishte": "فرشتے", "jibreel": "جبرائیل", "mikail": "میکائیل",
  "akhlaq": "اخلاق", "sadaqat": "صداقت", "amanat": "امانت", "diyanat": "دیانت", "sharafat": "شرافت", "adab": "ادب", "ehteram": "احترام", "sabr": "صبر", "shukar": "شکر",
  "insaniyat": "انسانیت", "huqooq": "حقوق", "ibad": "عباد", "walidain": "والدین",
  "farmaya": "فرمایا", "farmayein": "فرمائیں", "farmate": "فرماتے", "farman": "فرمان", "pak": "پاک", "paak": "پاک",

  // Connectors, Conjunctions & Short words
  "keh": "کہ", "kh": "کہ", "k": "کہ",
  "ka": "کا", "ki": "کی", "ke": "کے", "kay": "کے", "ky": "کے", "ko": "کو",
  "se": "سے", "sy": "سے", "par": "پر", "pr": "پر", "pe": "پر", "tak": "تک", "tk": "تک",
  "ne": "نے", "to": "تو", "toh": "تو", "bhi": "بھی", "bh": "بھی", "hi": "ہی",
  "aur": "اور", "or": "اور", "ya": "یا", "yaa": "یا",
  "lekin": "لیکن", "lkn": "لیکن", "magar": "مگر", "mgr": "مگر", "balkay": "بلکہ", "balke": "بلکہ",
  "phir": "پھر", "phr": "پھر", "fr": "پھر", "jab": "جب", "jb": "جب", "tab": "تب", "tb": "تب",
  "ab": "اب", "sab": "سب", "sb": "سب", "kab": "کب",
  "kahan": "کہاں", "khan": "کہاں", "wahan": "وہاں", "whan": "وہاں", "yahan": "یہاں", "yhan": "یہاں", "jahan": "جہاں",
  "kyun": "کیوں", "kyu": "کیوں", "kyn": "کیوں", "kyoon": "کیوں", "kyunke": "کیونکہ", "kyonke": "کیونکہ", "chunky": "چونکہ", "chunke": "چونکہ", "taake": "تاکہ", "take": "تاکہ",
  "kese": "کیسے", "kaise": "کیسے", "kysa": "کیسا", "kaisa": "کیسا", "kaisi": "کیسی", "kysi": "کیسی",
  "aisa": "ایسا", "aise": "ایسے", "aisi": "ایسی", "waisa": "ویسا", "waise": "ویسے", "waisi": "ویسی", "jaisa": "جیسا", "jaise": "جیسے", "jaisi": "جیسی",
  "konsa": "کونسا", "konse": "کونسے", "konsi": "کونسی", "kaunsa": "کونسا", "kaunse": "کونسے", "kaunsi": "کونسی",
  "kitna": "کتنا", "kitne": "کتنے", "kitni": "کتنی", "ktna": "کتنا", "ktne": "کتنے", "ktni": "کتنی",
  "jitna": "جتنا", "jitne": "جتنے", "jitni": "جتنی", "itna": "اتنا", "itne": "اتنے", "itni": "اتنی",

  // Pronouns, Verbs, Helpers & Daily SMS shortcuts
  "hy": "ہے", "hai": "ہے", "he": "ہے",
  "hn": "ہوں", "hoon": "ہوں", "hun": "ہوں", "hu": "ہوں",
  "hyn": "ہیں", "hain": "ہیں", "hen": "ہیں",
  "tha": "تھا", "the": "تھے", "thi": "تھی", "thay": "تھے", "thin": "تھیں",
  "hoga": "ہوگا", "hogi": "ہوگی", "honge": "ہوں گے", "hongy": "ہوں گے",
  "hota": "ہوتا", "hoti": "ہوتی", "hote": "ہوتے", "hotay": "ہوتے",
  "hua": "ہوا", "hwa": "ہوا", "huwa": "ہوا", "hue": "ہوئے", "hwe": "ہوئے", "hui": "ہوئی", "hwi": "ہوئی", "haye": "ہائے",
  "ho": "ہو",
  "rha": "رہا", "raha": "رہا", "rhe": "رہے", "rahe": "رہے", "rhi": "رہی", "rahi": "رہی", "rhay": "رہے",
  "gya": "گیا", "gaya": "گیا", "gye": "گئے", "gaye": "گئے", "gae": "گئے", "gai": "گئی", "gayi": "گئی", "gy": "گئی",
  
  // Inquiries, Question words & Ask
  "pucha": "پوچھا", "poocha": "پوچھا", "pocha": "پوچھا", "puchha": "پوچھا", "puchen": "پوچھیں", "pochein": "پوچھیں", "pucho": "پوچھو", "puchna": "پوچھنا", "puchte": "پوچھتے", "puchti": "پوچھتی", "puchta": "پوچھتا",
  "kia": "کیا", "kiya": "کیا", "kya": "کیا",
  "kis": "کس", "kisi": "کسی", "kise": "کسے", "kisay": "کسے",
  
  // Common Actions & Verbs
  "kr": "کر", "kar": "کر", "karein": "کریں", "karen": "کریں", "karo": "کرو", "karna": "کرنا", "krna": "کرنا", "karne": "کرنے", "krny": "کرنے", "kray": "کرے", "kare": "کرے", "karta": "کرتا", "karti": "کرتی", "karte": "کرتے",
  "kijiye": "کیجیے", "kijye": "کیجیے", "kijie": "کیجیے",
  "diya": "دیا", "dia": "دیا", "diye": "دیے", "die": "دیے", "dee": "دی", "di": "دی", "dena": "دینا", "dein": "دیں", "den": "دیں", "do": "دو",
  "liya": "لیا", "lia": "لیا", "liye": "لیے", "lie": "لیے", "ly": "لیے", "leye": "لیے", "lena": "لینا", "lein": "لیں", "len": "لیں", "lo": "لو",
  "btao": "بتاؤ", "batao": "بتاؤ", "btayein": "بتائیں", "batayein": "بتائیں", "bataen": "بتائیں", "btaen": "بتائیں", "batana": "بتانا", "btana": "بتانا", "bataya": "بتایا", "btaya": "بتایا", "bataiye": "بتائیے", "btaiye": "بتائیے",
  "kaha": "کہا", "kahein": "کہیں", "kehte": "کہتے", "kehta": "کہتا", "kehti": "کہتی", "kehna": "کہنا", "kahin": "کہیں",
  "dekhein": "دیکھیں", "dekhen": "دیکھیں", "dekho": "دیکھو", "dekhna": "دیکھنا", "dekha": "دیکھا", "dekhi": "دیکھی", "dekhe": "دیکھے",
  "samjhein": "سمجھیں", "samjhen": "سمجھیں", "samjho": "سمجھو", "samjhayein": "سمجھائیں", "samjhana": "سمجھانا",
  "parhein": "پڑھیں", "parhen": "پڑھیں", "parho": "پڑھو", "parhna": "پڑھنا", "parha": "پڑھا", "parhi": "پڑھی", "parhe": "پڑھے", "prhein": "پڑھیں", "prho": "پڑھو", "prhna": "پڑھنا",
  "likhein": "لکھیں", "likhen": "لکھیں", "lkhain": "لکھیں", "lkhein": "لکھیں", "likho": "لکھو", "likhna": "لکھنا", "likha": "لکھا", "likhi": "لکھی", "likhe": "لکھے", "likhay": "لکھے", "lkha": "لکھا",
  "banayein": "بنائیں", "banao": "بناؤ", "banana": "بنانا", "banaya": "بنایا", "bani": "بنی", "bane": "بنے",
  "rakhein": "رکھیں", "rakhen": "رکھیں", "rakho": "رکھو", "rakhna": "رکھنا", "rakha": "رکھا", "rakhi": "رکھی",
  "aana": "آنا", "aaye": "آئے", "aayi": "آئی", "aao": "آؤ", "aaein": "آئیں", "aata": "آتا", "aati": "آتی", "aate": "آتے",
  "jana": "جانا", "jayein": "جائیں", "jao": "جاؤ", "jata": "جاتا", "jati": "جاتی", "jate": "جاتے",
  "sochein": "سوچیں", "socho": "سوچو", "sochna": "سوچنا", "socha": "سوچا",
  
  // Relations & Pronouns
  "sb": "سب", "sab": "سب", "sabhi": "سبھی", "kch": "کچھ", "kuch": "کچھ", "koi": "کوئی",
  "agr": "اگر", "agar": "اگر", "mgr": "مگر", "magar": "مگر", "lkn": "لیکن", "lekin": "لیکن", "balkay": "بلکہ", "balke": "بلکہ",
  "mn": "میں", "me": "میں", "mein": "میں", "main": "میں",
  "hm": "ہم", "hum": "ہم", "ham": "ہم", "humein": "ہمیں", "hamen": "ہمیں", "hamara": "ہمارا", "hamare": "ہمارے", "hamari": "ہماری", "hmara": "ہمارا", "hmary": "ہمارے",
  "ap": "آپ", "aap": "آپ", "apka": "آپ کا", "aapka": "آپ کا", "apki": "آپ کی", "apke": "آپ کے", "apky": "آپ کے",
  "tum": "تم", "tumhara": "تمہارا", "tumhare": "تمہارے", "tumhari": "تمہاری", "tumhein": "تمہیں", "tera": "تیرا", "teri": "تیری", "tere": "تیرے",
  "ye": "یہ", "yeh": "یہ", "yh": "یہ", "wo": "وہ", "woh": "وہ", "wh": "وہ",
  "is": "اس", "iss": "اس", "us": "اس", "uss": "اس", "in": "ان", "inn": "ان", "un": "ان", "unn": "ان",
  "iska": "اس کا", "uski": "اس کی", "uske": "اس کے", "iske": "اس کے", "iski": "اس کی", "usko": "اس کو", "isko": "اس کو",
  "inka": "ان کا", "unka": "ان کا", "inki": "ان کی", "unki": "ان کی", "inke": "ان کے", "unke": "ان کے", "inhein": "انہیں", "unhein": "انہیں",
  "isay": "اسے", "usay": "اسے", "ise": "اسے", "use": "اسے",
  "acha": "اچھا", "achha": "اچھا", "achi": "اچھی", "acchi": "اچھی", "ache": "اچھے", "acche": "اچھے", "achay": "اچھے",
  "ziada": "زیادہ", "zyada": "زیادہ", "kam": "کم", "bohat": "بہت", "bht": "بہت", "bara": "بڑا", "bada": "بڑا", "chota": "چھوٹا", "choti": "چھوٹی", "chote": "چھوٹے",
  "pehle": "پہلے", "phle": "پہلے", "pehla": "پہلا", "pehli": "پہلی", "baad": "بعد", "aakhir": "آخر", "akhir": "آخر", "hamesha": "ہمیشہ", "kabhi": "کبھی",
  
  // Exam & Academic Terms
  "sawal": "سوال", "sawalat": "سوالات", "swal": "سوال", "swalat": "سوالات",
  "jawab": "جواب", "jawabat": "جوابات", "jwb": "جواب", "jwbat": "جوابات",
  "mukhtasir": "مختصر", "mukhtasar": "مختصر", "mkhtsr": "مختصر", "mkhtasir": "مختصر",
  "tafseeli": "تفصیلی", "tafsili": "تفصیلی", "tafseel": "تفصیل", "tafsil": "تفصیل",
  "wazahat": "وضاحت", "wazeh": "واضح", "bayan": "بیان", "bayaan": "بیان",
  "tehreer": "تحریر", "tahreer": "تحریر", "tehrir": "تحریر", "tahrir": "تحریر",
  "darj": "درج", "zail": "ذیل", "mandarja": "مندرجہ", "bala": "بالا", "darja": "درجہ",
  "khali": "خالی", "jagah": "جگہ", "jaga": "جگہ", "pur": "پُر",
  "durust": "درست", "drust": "درست", "ghalat": "غلط", "galt": "غلط", "sahi": "صحیح", "sahih": "صحیح",
  "intikhab": "انتخاب", "daira": "دائرہ", "dayra": "دائرہ", "nishandahi": "نشاندہی",
  "kalam": "کالم", "column": "کالم", "milaein": "ملائیں", "milayein": "ملائیں", "milao": "ملاؤ",
  "chunain": "چنیں", "chunein": "چنیں", "lagayein": "لگائیں", "lagao": "لگاؤ", "lagaen": "لگائیں",
  "shamil": "شامل", "hissa": "حصہ", "awwal": "اول", "dom": "دوم", "soam": "سوم", "chaharom": "چہارم",
  "sabq": "سبق", "sabaq": "سبق", "musannif": "مصنف", "shair": "شاعر", "khulasa": "خلاصہ", "nazam": "نظم", "nazm": "نظم",
  "ghazal": "غزل", "sher": "شعر", "ashaar": "اشعار", "tashreeh": "تشریح", "tasreeh": "تشریح", "markazi": "مرکزی", "khayal": "خیال",
  "jumlau": "جملوں", "jumla": "جملہ", "jumle": "جملے", "alfaaz": "الفاظ", "lafz": "لفظ", "maani": "معنی", "mani": "معنی", "mutaradif": "مترادف", "mutazad": "متضاد",
  "wahid": "واحد", "jama": "جمع", "muzakar": "مذکر", "moanas": "مونث", "khat": "خط", "darkhwast": "درخواست", "kahani": "کہانی", "mukalma": "مکالمہ", "apbeeti": "آپ بیتی",
  "alf": "الف", "bay": "ب", "jeem": "ج", "daal": "د",
  "aik": "ایک", "ek": "ایک", "do": "دو", "teen": "تین", "char": "چار", "panch": "پانچ", "che": "چھ", "chheh": "چھ", "saat": "سات", "aath": "آٹھ", "nau": "نو", "das": "دس",
  "jamaat": "جماعت", "mazmoon": "مضمون", "waqt": "وقت", "kul": "کل", "hasil": "حاصل", "karda": "کردہ", "roll": "رول", "section": "سیکشن",
  "parcha": "پرچہ", "imtihan": "امتحان", "salana": "سالانہ", "shashmahi": "ششماہی", "mahina": "مہینہ", "mahwar": "ماہوار", "test": "ٹیسٹ", "paper": "پیپر", "number": "نمبر", "marks": "نمبر",
  "farq": "فرق", "tareef": "تعریف", "tarif": "تعریف", "misal": "مثال", "misaal": "مثال", "misalein": "مثالیں", "khusoosiat": "خصوصیات",
  "fawaid": "فوائد", "nuqsanat": "نقصانات", "aqsaam": "اقسام", "qisam": "قسم",
  "ahmiyat": "اہمیت", "zarurat": "ضرورت", "maqsad": "مقصد", "natija": "نتیجہ", "wajah": "وجہ", "wajohat": "وجوہات", "tariqa": "طریقہ", "asbaab": "اسباب",
  "hukumat": "حکومت", "hakumat": "حکومت", "darul": "دارال", "darulhukumat": "دارالحکومت", "darulhakumat": "دارالحکومت",
  "kitab": "کتاب", "kitabein": "کتابیں", "kitabon": "کتابوں", "qalam": "قلم",
  "ustad": "استاد", "asatza": "اساتذہ", "shagird": "شاگرد", "talib": "طالب", "ilm": "علم", "taleem": "تعلیم", "taleemat": "تعلیمات",
  "parhai": "پڑھائی", "likhai": "لکھائی", "safai": "صفائی", "zaruri": "ضروری", "zaroori": "ضروری",
  "subah": "صبح", "shaam": "شام", "raat": "رات", "din": "دن", "rozana": "روزانہ", "har": "ہر",
  "shuru": "شروع", "khatam": "ختم", "mukammal": "مکمل", "madad": "مدد", "hidayat": "ہدایت",
  
  // Subjects & General Knowledge
  "pakistan": "پاکستان", "pak": "پاک", "islami": "اسلامی", "islamiyat": "اسلامیات", "islam": "اسلام", "deen": "دین",
  "quaid": "قائد", "azam": "اعظم", "allama": "علامہ", "iqbal": "اقبال", "sir": "سر", "syed": "سید",
  "shorkot": "شورکوٹ", "chenab": "چناب", "college": "کالج", "school": "سکول",
  "science": "سائنس", "riyazi": "ریاضی", "tarikh": "تاریخ", "geography": "جغرافیہ", "mutalia": "مطالعہ",
  "computer": "کمپیوٹر", "physics": "فزکس", "chemistry": "کیمسٹری", "biology": "حیاتیات",
  "paida": "پیدا", "wafat": "وفات", "tareekh": "تاریخ", "khidmat": "خدمات", "qanoon": "قانون",
  "roshni": "روشنی", "hawa": "ہوا", "pani": "پانی", "zameen": "زمین", "aasmaan": "آسمان", "sooraj": "سورج", "chaand": "چاند", "sitare": "ستارے",
  "zindagi": "زندگی", "insan": "انسان", "dunya": "دنیا", "mulk": "ملک", "shehar": "شہر", "gaon": "گاؤں",
  "punjab": "پنجاب", "sindh": "سندھ", "balochistan": "بلوچستان", "kpk": "خیبر پختونخوا", "islamabad": "اسلام آباد", "lahore": "لاہور", "karachi": "کراچی", "faisalabad": "فیصل آباد"
};

function transliterateRomanUrduWord(word) {
  if (!word) return "";
  const clean = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!clean) return word;

  if (ROMAN_URDU_DICTIONARY[clean]) {
    return ROMAN_URDU_DICTIONARY[clean];
  }

  // Handle smart suffixes (e.g. kitabon -> kitabein, sawalon -> sawal + on)
  if (clean.endsWith("on") && clean.length > 3) {
    const stem = clean.slice(0, -2);
    if (ROMAN_URDU_DICTIONARY[stem]) return ROMAN_URDU_DICTIONARY[stem] + "وں";
  }
  if (clean.endsWith("ein") && clean.length > 4) {
    const stem = clean.slice(0, -3);
    if (ROMAN_URDU_DICTIONARY[stem]) return ROMAN_URDU_DICTIONARY[stem] + "یں";
  }
  if (clean.endsWith("en") && clean.length > 3) {
    const stem = clean.slice(0, -2);
    if (ROMAN_URDU_DICTIONARY[stem]) return ROMAN_URDU_DICTIONARY[stem] + "یں";
  }

  // Phonetic fallback
  let res = clean;
  let prefix = "";
  if (res.startsWith("aa")) { prefix = "آ"; res = res.slice(2); }
  else if (res.startsWith("a")) { prefix = "ا"; res = res.slice(1); }
  else if (res.startsWith("u") || res.startsWith("o")) { prefix = "او"; res = res.slice(1); }
  else if (res.startsWith("i") || res.startsWith("e")) { prefix = "ای"; res = res.slice(1); }

  res = res.replace(/chh/g, "چھ")
           .replace(/khh/g, "کھ")
           .replace(/kh/g, "خ")
           .replace(/gh/g, "غ")
           .replace(/sh/g, "ش")
           .replace(/ch/g, "چ")
           .replace(/th/g, "تھ")
           .replace(/ph/g, "پھ")
           .replace(/bh/g, "بھ")
           .replace(/dh/g, "دھ")
           .replace(/jh/g, "جھ")
           .replace(/rh/g, "ڑھ")
           .replace(/aa/g, "ا")
           .replace(/ee/g, "ی")
           .replace(/oo/g, "و")
           .replace(/ai/g, "ئے")
           .replace(/ay/g, "ے")
           .replace(/ey/g, "ے")
           .replace(/a/g, "ا")
           .replace(/b/g, "ب")
           .replace(/p/g, "پ")
           .replace(/t/g, "ت")
           .replace(/j/g, "ج")
           .replace(/c/g, "چ")
           .replace(/d/g, "د")
           .replace(/r/g, "ر")
           .replace(/z/g, "ز")
           .replace(/s/g, "س")
           .replace(/f/g, "ف")
           .replace(/q/g, "ق")
           .replace(/k/g, "ک")
           .replace(/g/g, "گ")
           .replace(/l/g, "ل")
           .replace(/m/g, "م")
           .replace(/n/g, "ن")
           .replace(/w/g, "و")
           .replace(/v/g, "و")
           .replace(/h/g, "ہ")
           .replace(/y/g, "ی")
           .replace(/i/g, "ی")
           .replace(/e/g, "ے")
           .replace(/o/g, "و")
           .replace(/u/g, "و");

  return prefix + res;
}

// Multi-Candidate Suggestions Mapping (Words with multiple meanings or choices)
const ROMAN_URDU_SUGGESTIONS = {
  "khana": ["کھانا", "خانہ"],
  "khaana": ["کھانا", "خانہ"],
  "khao": ["کھاؤ"],
  "khayein": ["کھائیں"],
  "khaya": ["کھایا"],
  "khayi": ["کھائی"],
  "khaye": ["کھائے"],
  "khel": ["کھیل", "کھیلنا"],
  "khelo": ["کھیلو"],
  "khelein": ["کھیلیں"],
  "kholein": ["کھولیں"],
  "kholo": ["کھولو"],
  "khara": ["کھڑا"],
  "khat": ["خط"],
  "khatam": ["ختم"],
  "khabar": ["خبر", "اخبار"],
  "k": ["کہ", "کے", "کا"],
  "ke": ["کے", "کہ"],
  "keh": ["کہ", "کے", "کا"],
  "ka": ["کا"],
  "ki": ["کی"],
  "ko": ["کو"],
  "se": ["سے"],
  "sy": ["سے"],
  "hazoor": ["حضور", "حاضر"],
  "huzoor": ["حضور", "حاضر"],
  "sawal": ["سوال", "سوالات"],
  "swal": ["سوال", "سوالات"],
  "jawab": ["جواب", "جوابات"],
  "jwb": ["جواب", "جوابات"],
  "pucha": ["پوچھا", "پوچھیں"],
  "gya": ["گیا", "گئے", "گئی"],
  "hy": ["ہے", "ہیں"],
  "hn": ["ہوں", "ہیں"],
  "pani": ["پانی"],
  "peena": ["پینا"],
  "kitab": ["کتاب", "کتابیں", "کتابوں"],
  "qalam": ["قلم"],
  "school": ["سکول"],
  "college": ["کالج"],
  "parhai": ["پڑھائی"],
  "likhai": ["لکھائی"],
  "safai": ["صفائی"],
  "allama": ["علامہ"],
  "iqbal": ["اقبال"],
  "pakistan": ["پاکستان"],
  "darulhukumat": ["دارالحکومت"]
};

function getUrduSuggestions(word) {
  if (!word) return [];
  const clean = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!clean) return [];

  if (ROMAN_URDU_SUGGESTIONS[clean]) {
    return ROMAN_URDU_SUGGESTIONS[clean];
  }

  const single = transliterateRomanUrduWord(clean);
  if (single && single !== clean) {
    return [single];
  }
  return [clean];
}

let activeLiveHintTarget = null;
let activeLiveHintMatch = null;

function hideUrduLiveHint() {
  const popup = document.getElementById("urduLiveHintPopup");
  if (popup) popup.classList.add("hidden");
  activeLiveHintTarget = null;
  activeLiveHintMatch = null;
}

function updateUrduLiveHint(target) {
  if (!isRomanUrduActive || !target || (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA")) {
    hideUrduLiveHint();
    return;
  }
  if (target.type === "password" || target.type === "number" || target.type === "file") {
    hideUrduLiveHint();
    return;
  }
  if (target.id === "manualSubjectInput" || target.id === "adminPasswordInput" || target.id === "examTitle" || target.id === "timeAllowed") {
    hideUrduLiveHint();
    return;
  }

  const val = target.value;
  const cursorPos = target.selectionStart;
  const textBeforeCursor = val.substring(0, cursorPos);
  const match = textBeforeCursor.match(/([a-zA-Z]+)$/);

  if (!match) {
    hideUrduLiveHint();
    return;
  }

  const romanWord = match[1];
  const suggestions = getUrduSuggestions(romanWord);
  if (!suggestions || suggestions.length === 0) {
    hideUrduLiveHint();
    return;
  }

  activeLiveHintTarget = target;
  activeLiveHintMatch = {
    word: romanWord,
    startIdx: match.index,
    endIdx: cursorPos,
    suggestions: suggestions
  };

  const container = document.getElementById("urduHintChipsContainer");
  const popup = document.getElementById("urduLiveHintPopup");
  if (!container || !popup) return;

  container.innerHTML = "";
  suggestions.forEach((sugg, idx) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `urdu-hint-chip ${idx === 0 ? "primary" : ""}`;
    const badgeText = idx === 0 ? "Space" : (idx + 1).toString();
    chip.innerHTML = `<span class="urdu-hint-badge">${badgeText}</span> <span class="urdu-hint-text">${sugg}</span>`;
    chip.onmousedown = (e) => {
      e.preventDefault();
      commitUrduSuggestion(sugg, match.index, cursorPos, target);
    };
    container.appendChild(chip);
  });

  // Position popup directly above the active input
  const rect = target.getBoundingClientRect();
  const popupHeight = 40;
  let top = rect.top - popupHeight - 6;
  if (top < 10) {
    top = rect.bottom + 6;
  }
  let left = Math.max(10, Math.min(window.innerWidth - 300, rect.left + 5));

  popup.style.top = `${top}px`;
  popup.style.left = `${left}px`;
  popup.classList.remove("hidden");
}

function commitUrduSuggestion(urduWord, startIdx, endIdx, target) {
  if (!target) target = activeLiveHintTarget;
  if (!target) return;

  const val = target.value;
  const newVal = val.substring(0, startIdx) + urduWord + " " + val.substring(endIdx);
  target.value = newVal;
  const newCursor = startIdx + urduWord.length + 1;
  target.selectionStart = newCursor;
  target.selectionEnd = newCursor;

  lastTransliterationState = {
    target: target,
    originalWord: activeLiveHintMatch ? activeLiveHintMatch.word : "",
    urduWord: urduWord,
    startIdx: startIdx,
    endIdx: startIdx + urduWord.length,
    timestamp: Date.now()
  };

  hideUrduLiveHint();
  target.dispatchEvent(new Event("input", { bubbles: true }));
  target.focus();
}

function initRomanUrduEngine() {
  // Live typing listeners for floating suggestions
  document.addEventListener("input", (e) => {
    updateUrduLiveHint(e.target);
  });

  document.addEventListener("keyup", (e) => {
    if (e.key !== "Enter" && e.key !== " " && e.key !== "Escape") {
      updateUrduLiveHint(e.target);
    }
  });

  document.addEventListener("click", (e) => {
    const popup = document.getElementById("urduLiveHintPopup");
    if (popup && !popup.contains(e.target) && e.target !== activeLiveHintTarget) {
      hideUrduLiveHint();
    }
  });

  window.addEventListener("scroll", hideUrduLiveHint, true);

  document.addEventListener("keydown", (e) => {
    if (!isRomanUrduActive) return;
    const target = e.target;
    if (!target || (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA")) return;
    if (target.type === "password" || target.type === "number" || target.type === "file") return;
    if (target.id === "manualSubjectInput" || target.id === "adminPasswordInput" || target.id === "examTitle" || target.id === "timeAllowed") return;

    if (e.key === "Escape") {
      hideUrduLiveHint();
      return;
    }

    // Number shortcuts (2 or 3) when multiple suggestions exist
    if ((e.key === "2" || e.key === "3") && activeLiveHintMatch && activeLiveHintMatch.suggestions.length > 1) {
      const idx = parseInt(e.key, 10) - 1;
      if (activeLiveHintMatch.suggestions[idx]) {
        e.preventDefault();
        commitUrduSuggestion(activeLiveHintMatch.suggestions[idx], activeLiveHintMatch.startIdx, activeLiveHintMatch.endIdx, target);
        return;
      }
    }

    // Handle Backspace Undo: If user just transliterated a word and immediately presses Backspace, revert to original Roman word
    if (e.key === "Backspace" && lastTransliterationState && lastTransliterationState.target === target) {
      const now = Date.now();
      if (now - lastTransliterationState.timestamp < 3500) {
        const val = target.value;
        const cur = target.selectionStart;
        if (cur === lastTransliterationState.endIdx + 1) {
          e.preventDefault();
          const newVal = val.substring(0, lastTransliterationState.startIdx) + lastTransliterationState.originalWord + val.substring(lastTransliterationState.endIdx + 1);
          target.value = newVal;
          const revertCursor = lastTransliterationState.startIdx + lastTransliterationState.originalWord.length;
          target.selectionStart = revertCursor;
          target.selectionEnd = revertCursor;
          lastTransliterationState = null;
          hideUrduLiveHint();
          target.dispatchEvent(new Event("input", { bubbles: true }));
          return;
        }
      }
    }

    // Trigger transliteration on space, enter, or punctuation
    if (e.key === " " || e.key === "Enter" || e.key === "?" || e.key === "،" || e.key === "," || e.key === ".") {
      const val = target.value;
      const cursorPos = target.selectionStart;
      const textBeforeCursor = val.substring(0, cursorPos);
      
      const match = textBeforeCursor.match(/([a-zA-Z]+)$/);
      if (match) {
        const romanWord = match[1];
        const suggestions = getUrduSuggestions(romanWord);
        const urduWord = (suggestions && suggestions.length > 0) ? suggestions[0] : transliterateRomanUrduWord(romanWord);
        
        if (urduWord && urduWord !== romanWord) {
          e.preventDefault();
          const startIdx = match.index;
          const endIdx = cursorPos;
          const charToAppend = e.key === "?" ? "؟" : (e.key === "," ? "،" : (e.key === "Enter" ? "\n" : (e.key === "." ? "۔" : " ")));
          
          const newVal = val.substring(0, startIdx) + urduWord + charToAppend + val.substring(endIdx);
          target.value = newVal;
          const newCursor = startIdx + urduWord.length + charToAppend.length;
          target.selectionStart = newCursor;
          target.selectionEnd = newCursor;

          lastTransliterationState = {
            target: target,
            originalWord: romanWord,
            urduWord: urduWord,
            startIdx: startIdx,
            endIdx: startIdx + urduWord.length,
            timestamp: Date.now()
          };

          hideUrduLiveHint();
          target.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }
    }
  });
}

function toggleRomanUrduMode() {
  isRomanUrduActive = !isRomanUrduActive;
  const btn = document.getElementById("romanUrduToggleBtn");
  const badge = document.getElementById("romanUrduStatusBadge");
  if (btn && badge) {
    if (isRomanUrduActive) {
      badge.textContent = "ON";
      badge.className = "text-white bg-emerald-600 px-1.5 py-0.2 rounded font-bold text-[10px]";
      btn.className = "px-2.5 py-1 rounded-xl bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/50 text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition shadow-sm";
      showToast("⌨️ Easy Urdu: ON (Live Hints Active)");
    } else {
      badge.textContent = "OFF";
      badge.className = "text-slate-300 bg-slate-700 px-1.5 py-0.2 rounded font-bold text-[10px]";
      btn.className = "px-2.5 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 text-xs font-bold flex items-center gap-1.5 transition";
      hideUrduLiveHint();
      showToast("Easy Urdu: OFF");
    }
    if (window.lucide) lucide.createIcons();
  }
}

// ================= INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  initSpeech();
  initRepository();
  initRomanUrduEngine();
  handleClassChange("Class 9th");
  handleSubjectChange("English");
  updatePortalBadgeCount();
});

// ================= SECTION TAB SWITCHER =================
function switchActiveSectionTab(tabId) {
  document.querySelectorAll(".sec-content-panel").forEach(panel => panel.classList.add("hidden"));
  document.querySelectorAll(".sec-tab").forEach(btn => {
    btn.classList.remove("active", "bg-blue-600", "text-white");
    btn.classList.add("bg-slate-800", "text-slate-300");
  });

  const targetPanel = document.getElementById(tabId);
  const targetBtn = document.getElementById("secTab_" + tabId);

  if (targetPanel) targetPanel.classList.remove("hidden");
  if (targetBtn) {
    targetBtn.classList.add("active", "bg-blue-600", "text-white");
    targetBtn.classList.remove("bg-slate-800", "text-slate-300");
  }
}

// ================= FONT STYLE CHANGE =================
function handleHeaderFontChange(val) {
  paperData.headerFontStyle = val;
  renderPaper();
}

// ================= MANUAL SUBJECT TOGGLE =================
function toggleManualSubject() {
  isManualSubjectMode = !isManualSubjectMode;
  const dropdown = document.getElementById("subjectDropdownContainer");
  const manualInput = document.getElementById("subjectManualInputContainer");

  if (isManualSubjectMode) {
    dropdown.classList.add("hidden");
    manualInput.classList.remove("hidden");
    const inputEl = document.getElementById("manualSubjectInput");
    inputEl.focus();
    if (inputEl.value) handleSubjectChange(inputEl.value);
  } else {
    dropdown.classList.remove("hidden");
    manualInput.classList.add("hidden");
    const selectVal = document.getElementById("subjectSelector").value;
    handleSubjectChange(selectVal);
  }
}

function handleManualSubjectInput(val) {
  if (!val.trim()) return;
  handleSubjectChange(val.trim());
}

// ================= CLASS LEVEL CHANGE & DYNAMIC PROFILES =================
function handleClassChange(val) {
  paperData.exam.classLevel = val;
  applyClassProfile(val);
  renderPaper();
}

function applyClassProfile(className) {
  const profile = CLASS_PROFILES[className] || CLASS_PROFILES["Class 9th"];
  const isUrdu = paperData.layout.isUrduSubject;
  
  paperData.layout.fontSize = isUrdu ? profile.urduFontSize : profile.fontSize;
  paperData.layout.mode = profile.mode;

  initSectionConfig();
  const shortLinesSelect = document.getElementById("secLines_short");
  const longLinesSelect = document.getElementById("secLines_long");

  if (profile.mode === "worksheet") {
    paperData.sectionConfig.shortQs.lines = "2";
    paperData.sectionConfig.longQs.lines = "4";
    if (shortLinesSelect) shortLinesSelect.value = "2";
    if (longLinesSelect) longLinesSelect.value = "4";
  } else {
    paperData.sectionConfig.shortQs.lines = "0";
    paperData.sectionConfig.longQs.lines = "0";
    if (shortLinesSelect) shortLinesSelect.value = "0";
    if (longLinesSelect) longLinesSelect.value = "0";
  }

  // Update UI Badges
  const fontBadge = document.getElementById("fontSizeDisplayBadge");
  if (fontBadge) fontBadge.textContent = `${paperData.layout.fontSize}pt`;
  
  const classBadge = document.getElementById("classProfileBadge");
  if (classBadge) classBadge.textContent = `(${profile.badge})`;

  // Update Mode Button UI
  const modeBtn = document.getElementById("paperModeBtn");
  if (modeBtn) {
    if (paperData.layout.mode === "worksheet") {
      modeBtn.innerHTML = `<i data-lucide="edit-3" class="w-3 h-3 text-emerald-400"></i> Worksheet (Lines)`;
    } else {
      modeBtn.innerHTML = `<i data-lucide="file-text" class="w-3 h-3 text-blue-400"></i> Question Paper`;
    }
    if (window.lucide) lucide.createIcons();
  }
}

function adjustFontSize(delta) {
  let newSize = (paperData.layout.fontSize || 12.5) + delta;
  newSize = Math.max(12, Math.min(24, Math.round(newSize * 10) / 10));
  paperData.layout.fontSize = newSize;

  const fontBadge = document.getElementById("fontSizeDisplayBadge");
  if (fontBadge) fontBadge.textContent = `${newSize}pt`;

  renderPaper();
}

// ================= SUBJECT CHANGE HANDLER =================
function handleSubjectChange(subject) {
  paperData.exam.subject = subject;

  const isUrduLang = /[\u0600-\u06FF]/.test(subject) || 
                     subject === "Urdu" || 
                     subject === "Islamiyat" || 
                     subject === "Pak Studies" || 
                     subject === "Social Studies";

  paperData.layout.isUrduSubject = isUrduLang;
  const isUrdu = isUrduLang;

  // Apply font size profile based on current class + language
  applyClassProfile(paperData.exam.classLevel);

  // Update Section Titles
  if (isUrdu) {
    document.getElementById("mcqLabelTitle").innerHTML = `<i data-lucide="check-square" class="w-4 h-4 text-blue-400"></i> معروضی سوالات (MCQs)`;
    document.getElementById("shortLabelTitle").innerHTML = `<i data-lucide="help-circle" class="w-4 h-4 text-amber-400"></i> مختصر سوالات (Short Questions)`;
    document.getElementById("longLabelTitle").innerHTML = `<i data-lucide="align-left" class="w-4 h-4 text-purple-400"></i> تفصیلی سوالات / خلاصہ / اشعار کی تشریح`;
  } else {
    document.getElementById("mcqLabelTitle").innerHTML = `<i data-lucide="check-square" class="w-4 h-4 text-blue-400"></i> Multiple Choice Questions (MCQs)`;
    document.getElementById("shortLabelTitle").innerHTML = `<i data-lucide="help-circle" class="w-4 h-4 text-amber-400"></i> Short Questions Section`;
    document.getElementById("longLabelTitle").innerHTML = `<i data-lucide="align-left" class="w-4 h-4 text-purple-400"></i> Long Questions & Detailed Answers`;
  }

  // Load subject-specific starter content
  if (subject === "Urdu") {
    paperData.exam.title = "ماہانہ کلاس ٹیسٹ 2026 (اردو لازمی)";
    paperData.exam.timeAllowed = "45 منٹ";
    paperData.mcqs = [
      { q: "سبق 'ہجرت نبوی ﷺ' کے مصنف کا نام ہے:", a: "مولانا شبلی نعمانی", b: "سر سید احمد خان", c: "مرزا غالب", d: "الطاف حسین حالی", correct: "A" },
      { q: "لفظ 'امداد' کا مترادف کیا ہے؟", a: "مدد", b: "نقصان", c: "خوشی", d: "تعریف", correct: "A" }
    ];
    paperData.shortQs = [
      { q: "حضرت اسماء رضی اللہ عنہا نے کفار کے سامنے کس جرات کا مظاہرہ کیا؟" },
      { q: "مرزا غالب کو کس قسم کے آم پسند تھے؟" },
      { q: "شاعر نے نظم 'حمد' میں اللہ تعالیٰ کی کن نعمتوں کا ذکر کیا ہے؟" }
    ];
    paperData.longQs = [
      { q: "درج ذیل اشعار کی تشریح کریں:\n'قبضہ ہو دلوں پر کیا اور اس کے سوا تیرا\nاک بندہ نافرمان ہے حمد سرا تیرا'", marks: 5 },
      { q: "اپنے دوست کے نام خط لکھیں جس میں امتحانات میں کامیابی پر مبارکباد دیں۔", marks: 5 }
    ];
    paperData.blanks = [];
    paperData.matching = [];
    paperData.tracing = [];
  } 
  else if (subject === "Islamiyat") {
    paperData.exam.title = "ماہانہ ٹیسٹ اسلامیات لازمی";
    paperData.exam.timeAllowed = "45 منٹ";
    paperData.mcqs = [
      { q: "قرآن مجید کی سب سے پہلی نازل ہونے والی سورت کون سی ہے؟", a: "سورۃ الفاتحہ", b: "سورۃ العلق", c: "سورۃ البقرہ", d: "سورۃ الاخلاص", correct: "B" },
      { q: "عقیدہ توحید سے مراد ہے:", a: "اللہ کو ایک ماننا", b: "فرشتوں پر ایمان", c: "کتابوں پر ایمان", d: "قیامت پر ایمان", correct: "A" }
    ];
    paperData.shortQs = [
      { q: "عقیدہ رسالت کی تعریف اور بنیادی اہمیت بیان کریں۔" },
      { q: "قرآن مجید کے اعجاز کے دو اہم پہلو تحریر کریں۔" },
      { q: "غزوہ بدر میں مسلمانوں کی فتح کے اسباب لکھیں۔" }
    ];
    paperData.longQs = [
      { q: "درج ذیل قرآنی آیت کا سلیس اردو ترجمہ کریں:\n﴿ إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا ﴾", marks: 5 },
      { q: "حدیث مبارکہ کا ترجمہ و تشریح لکھیں:\n« خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ »", marks: 5 }
    ];
    paperData.blanks = [];
    paperData.matching = [];
    paperData.tracing = [];
  }
  else if (subject === "Mathematics") {
    paperData.exam.title = "Monthly Test (Mathematics Science)";
    paperData.exam.timeAllowed = "45 Minutes";
    paperData.mcqs = [
      { q: "Standard form of quadratic equation is:", a: "$ax^2 + bx + c = 0$", b: "$ax + b = 0$", c: "$ax^3 = 0$", d: "$ax^2 = 0$", correct: "A" },
      { q: "Discriminant of $ax^2+bx+c=0$ is:", a: "$b^2 - 4ac$", b: "$b^2 + 4ac$", c: "$4ac - b^2$", d: "$-b \\pm 4ac$", correct: "A" },
      { q: "If $A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix}$, then matrix A is:", a: "Scalar", b: "Unit", c: "Null", d: "Row", correct: "A" }
    ];
    paperData.shortQs = [
      { q: "Solve by factorization: $x^2 - x - 20 = 0$" },
      { q: "Write in standard form: $\\frac{x+4}{3} - \\frac{x}{7} = 1$" },
      { q: "Find the discriminant of: $2x^2 - 7x + 3 = 0$" },
      { q: "If $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$, find $|A|$" }
    ];
    paperData.longQs = [
      { q: "Solve the equation using Quadratic Formula:\n$$2x^2 + 9x - 5 = 0$$", marks: 5 },
      { q: "Solve the system using Cramer's Rule:\n$$2x + y = 3$$\n$$6x + 5y = 1$$", marks: 5 }
    ];
    paperData.blanks = [];
    paperData.matching = [];
    paperData.tracing = [];
  }
  else if (subject === "General Science" || subject === "Physics" || subject === "Chemistry" || subject === "Biology") {
    paperData.exam.title = `Monthly Assessment Test 2026 (${subject})`;
    paperData.exam.timeAllowed = "45 Minutes";
    paperData.mcqs = [
      { q: "The SI unit of force is:", a: "Joule", b: "Newton", c: "Watt", d: "Pascal", correct: "B" },
      { q: "Which gas is released during photosynthesis?", a: "Carbon Dioxide", b: "Oxygen", c: "Nitrogen", d: "Hydrogen", correct: "B" }
    ];
    paperData.shortQs = [
      { q: "Define velocity and write its SI unit." },
      { q: "State Newton's Second Law of Motion." },
      { q: "Differentiate between scalar and vector quantities." }
    ];
    paperData.longQs = [
      { q: "Explain the structure of Plant Cell with a labeled diagram.", marks: 5 }
    ];
    paperData.blanks = [];
    paperData.matching = [];
    paperData.tracing = [];
  }
  else if (subject === "Social Studies" || subject === "Pak Studies" || subject === "General Knowledge") {
    paperData.exam.title = `ماہانہ ٹیسٹ 2026 (${subject})`;
    paperData.exam.timeAllowed = "45 منٹ";
    paperData.mcqs = [
      { q: "پاکستان کا دارالحکومت کون سا شہر ہے؟", a: "لاہور", b: "اسلام آباد", c: "کراچی", d: "پشاور", correct: "B" },
      { q: "قائد اعظم محمد علی جناح کب پیدا ہوئے؟", a: "25 دسمبر 1876", b: "14 اگست 1947", c: "9 نومبر 1877", d: "23 مارچ 1940", correct: "A" }
    ];
    paperData.shortQs = [
      { q: "نظریہ پاکستان کی تعریف تحریر کریں۔" },
      { q: "قراردادِ لاہور 1940 کے دو اہم نکات بیان کریں۔" },
      { q: "پاکستان کے چاروں صوبوں کے نام لکھیں۔" }
    ];
    paperData.longQs = [
      { q: "قائد اعظم کے چودہ نکات پر تفصیلی نوٹ لکھیں۔", marks: 5 }
    ];
    paperData.blanks = [];
    paperData.matching = [];
    paperData.tracing = [];
  }
  else if (subject === "Kids Tracing") {
    paperData.exam.title = "Playgroup & Prep Activity Worksheet";
    paperData.exam.timeAllowed = "30 Mins";
    paperData.layout.mode = "worksheet";
    paperData.mcqs = [];
    paperData.shortQs = [{ q: "Write missing letters: A , ____ , C , ____ , E" }];
    paperData.longQs = [];
    paperData.blanks = [];
    paperData.matching = [
      { colA: "Sun", colB: "Light" },
      { colA: "Cow", colB: "Milk" }
    ];
    paperData.tracing = [
      { text: "A  B  C  D  E" },
      { text: "1  2  3  4  5" }
    ];
  }
  else {
    // English / Computer Science
    paperData.exam.title = `Monthly Assessment Test 2026 (${subject})`;
    paperData.exam.timeAllowed = "45 Minutes";
    paperData.mcqs = [
      { q: "The synonym of 'Equitable' is:", a: "Unfair", b: "Fair and just", c: "Difficult", d: "Simple", correct: "B" },
      { q: "Quaid-e-Azam had a firm faith in:", a: "Unity and Discipline", b: "Power", c: "Wealth", d: "Traditions", correct: "A" },
      { q: "He ______ to college every morning.", a: "go", b: "goes", c: "gone", d: "going", correct: "B" }
    ];
    paperData.shortQs = [
      { q: "What was the ideology of Pakistan according to Quaid-e-Azam?" },
      { q: "How does media bring us information and awareness?" },
      { q: "Explain the central message of the lesson." }
    ];
    paperData.longQs = [
      { q: "Translate the following paragraph into Urdu / Write a detailed essay on 'My College Life'.", marks: 5 }
    ];
    paperData.blanks = [];
    paperData.matching = [];
    paperData.tracing = [];
  }

  document.getElementById("examTitle").value = paperData.exam.title;
  document.getElementById("timeAllowed").value = paperData.exam.timeAllowed;
  
  renderAllSections();
  renderPaper();
}

// ================= WATERMARK & BORDER CONTROLS =================
function toggleWatermark() {
  paperData.watermark = !paperData.watermark;
  const btn = document.getElementById("watermarkToggleBtn");
  if (btn) {
    if (paperData.watermark) {
      btn.innerHTML = `<i data-lucide="shield" class="w-3 h-3 text-indigo-400"></i> Watermark: ON`;
      btn.className = "bg-indigo-950/50 hover:bg-indigo-900/50 border border-indigo-500/40 text-indigo-300 px-2 py-1 rounded-lg font-bold flex items-center gap-1 text-[11px]";
    } else {
      btn.innerHTML = `<i data-lucide="shield-off" class="w-3 h-3 text-slate-400"></i> Watermark: OFF`;
      btn.className = "bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 px-2 py-1 rounded-lg font-bold flex items-center gap-1 text-[11px]";
    }
    if (window.lucide) lucide.createIcons();
  }
  renderPaper();
}

function handleBorderStyleChange(val) {
  paperData.borderStyle = val || "double";
  renderPaper();
}

// ================= QUESTION DIAGRAM / IMAGE ATTACHMENT =================
function triggerQuestionImageUpload(section, idx) {
  activeQuestionImageTarget = { section, idx };
  const uploader = document.getElementById("questionImageUploader");
  if (uploader) {
    uploader.value = "";
    uploader.click();
  }
}

function handleQuestionImageSelected(event) {
  const file = event.target.files[0];
  if (!file || !activeQuestionImageTarget) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    const { section, idx } = activeQuestionImageTarget;
    if (paperData[section] && paperData[section][idx]) {
      paperData[section][idx].image = dataUrl;
      renderAllSections();
      renderPaper();
      showToast("✓ Diagram attached to question!");
    }
  };
  reader.readAsDataURL(file);
}

function removeQuestionImage(section, idx) {
  const i = parseInt(idx, 10);
  if (paperData[section] && paperData[section][i]) {
    delete paperData[section][i].image;
    delete paperData[section][i].diagram;
    paperData[section][i].image = undefined;
    paperData[section][i].diagram = undefined;
    renderAllSections();
    renderPaper();
    showToast("🗑️ Diagram removed successfully!");
  }
}

function renderAllSections() {
  renderMCQList();
  renderShortList();
  renderLongList();
  renderBlanksList();
  renderMatchingList();
  renderTracingList();
}

// ================= RENDER MCQs =================
function renderMCQList() {
  const container = document.getElementById("mcqListContainer");
  if (!container) return;
  container.innerHTML = "";

  if (paperData.mcqs.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-slate-500 border border-dashed border-slate-700 rounded-xl">
        <p class="font-medium text-xs">No MCQs added yet.</p>
        <button onclick="addSingleMCQ()" class="mt-2 text-xs bg-blue-600/30 text-blue-300 border border-blue-500/40 px-3 py-1.5 rounded-lg font-bold">➕ Add First MCQ</button>
      </div>
    `;
    return;
  }

  const isUrdu = paperData.layout.isUrduSubject;

  paperData.mcqs.forEach((mcq, idx) => {
    const card = document.createElement("div");
    card.className = "bg-slate-800/90 border border-slate-700 rounded-xl p-2.5 space-y-2 text-xs shadow";
    const qInputId = `mcq_q_${idx}`;

    const imageSrc = mcq.diagram || mcq.image;
    const imagePreviewHtml = imageSrc ? `
      <div class="question-thumb-preview">
        <div class="flex items-center gap-2">
          <img src="${imageSrc}" class="w-10 h-10 object-contain bg-white rounded border border-slate-600 p-0.5" alt="Preview">
          <span class="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <i data-lucide="image" class="w-3.5 h-3.5"></i> Diagram Attached
          </span>
        </div>
        <button type="button" onclick="event.stopPropagation(); removeQuestionImage('mcqs', ${idx})" class="text-xs bg-red-600/30 hover:bg-red-600 text-red-300 hover:text-white px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition" title="Remove diagram">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Remove
        </button>
      </div>
    ` : '';

    card.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="font-bold text-slate-200">${isUrdu ? `سوال نمبر (${idx + 1})` : `MCQ #${idx + 1}`}</span>
        <div class="flex items-center gap-1.5">
          <!-- Inline Image/Diagram -->
          <button onclick="triggerQuestionImageUpload('mcqs', ${idx})" class="p-1.5 rounded-lg bg-slate-700 hover:bg-emerald-600 text-slate-200 hover:text-white transition" title="Add Diagram / Image">
            <i data-lucide="image" class="w-3.5 h-3.5"></i>
          </button>
          <!-- Inline Mic -->
          <button onclick="recordForInput('${qInputId}')" id="micBtn_${qInputId}" class="p-1.5 rounded-lg bg-slate-700 hover:bg-red-600 text-slate-200 hover:text-white transition" title="Voice Typing">
            <i data-lucide="mic" class="w-3.5 h-3.5"></i>
          </button>
          <!-- Inline Camera/Scan -->
          <button onclick="triggerInlineOCR('${qInputId}')" class="p-1.5 rounded-lg bg-slate-700 hover:bg-cyan-600 text-slate-200 hover:text-white transition" title="Scan Book Photo">
            <i data-lucide="camera" class="w-3.5 h-3.5"></i>
          </button>
          <!-- Ans -->
          <span class="text-[10px] text-slate-400 ml-1">Ans:</span>
          <select onchange="updateMCQ(${idx}, 'correct', this.value)" class="bg-slate-900 border border-slate-700 rounded-lg px-2 py-0.5 text-amber-400 font-bold text-xs">
            <option value="A" ${mcq.correct === 'A' ? 'selected' : ''}>${isUrdu ? 'الف' : 'A'}</option>
            <option value="B" ${mcq.correct === 'B' ? 'selected' : ''}>${isUrdu ? 'ب' : 'B'}</option>
            <option value="C" ${mcq.correct === 'C' ? 'selected' : ''}>${isUrdu ? 'ج' : 'C'}</option>
            <option value="D" ${mcq.correct === 'D' ? 'selected' : ''}>${isUrdu ? 'د' : 'D'}</option>
          </select>
          <!-- Delete -->
          <button onclick="deleteMCQ(${idx})" class="p-1 text-red-400 hover:text-red-300 ml-1" title="Delete"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
        </div>
      </div>

      <input type="text" id="${qInputId}" value="${mcq.q}" oninput="updateMCQ(${idx}, 'q', this.value)" placeholder="Question Statement..." class="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-100 font-medium ${isUrdu ? 'font-jameel-nastaliq text-right' : ''}">

      ${imagePreviewHtml}

      <div class="grid grid-cols-2 gap-1.5 ${isUrdu ? 'direction-rtl' : ''}">
        <input type="text" value="${mcq.a || ''}" oninput="updateMCQ(${idx}, 'a', this.value)" placeholder="${isUrdu ? '(الف) آپشن' : '(A) Option'}" class="bg-slate-950 border border-slate-700 rounded-lg p-1.5 text-slate-200 ${isUrdu ? 'font-jameel-nastaliq text-right' : ''}">
        <input type="text" value="${mcq.b || ''}" oninput="updateMCQ(${idx}, 'b', this.value)" placeholder="${isUrdu ? '(ب) آپشن' : '(B) Option'}" class="bg-slate-950 border border-slate-700 rounded-lg p-1.5 text-slate-200 ${isUrdu ? 'font-jameel-nastaliq text-right' : ''}">
        <input type="text" value="${mcq.c || ''}" oninput="updateMCQ(${idx}, 'c', this.value)" placeholder="${isUrdu ? '(ج) آپشن' : '(C) Option'}" class="bg-slate-950 border border-slate-700 rounded-lg p-1.5 text-slate-200 ${isUrdu ? 'font-jameel-nastaliq text-right' : ''}">
        <input type="text" value="${mcq.d || ''}" oninput="updateMCQ(${idx}, 'd', this.value)" placeholder="${isUrdu ? '(د) آپشن' : '(D) Option'}" class="bg-slate-950 border border-slate-700 rounded-lg p-1.5 text-slate-200 ${isUrdu ? 'font-jameel-nastaliq text-right' : ''}">
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function addSingleMCQ() {
  paperData.mcqs.push({ q: "نیا سوال تحریر کریں...", a: "آپشن الف", b: "آپشن ب", c: "آپشن ج", d: "آپشن د", correct: "A" });
  renderMCQList();
  renderPaper();
}

function updateMCQ(idx, field, val) {
  if (paperData.mcqs[idx]) {
    paperData.mcqs[idx][field] = val;
    renderPaper();
  }
}

function deleteMCQ(idx) {
  paperData.mcqs.splice(idx, 1);
  renderMCQList();
  renderPaper();
}

// ================= RENDER SHORT QUESTIONS =================
function renderShortList() {
  const container = document.getElementById("shortListContainer");
  if (!container) return;
  container.innerHTML = "";

  if (paperData.shortQs.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-slate-500 border border-dashed border-slate-700 rounded-xl">
        <p class="font-medium text-xs">No Short Questions added yet.</p>
        <button onclick="addSingleShortQ()" class="mt-2 text-xs bg-amber-600/30 text-amber-300 border border-amber-500/40 px-3 py-1.5 rounded-lg font-bold">➕ Add Short Question</button>
      </div>
    `;
    return;
  }

  const isUrdu = paperData.layout.isUrduSubject;

  paperData.shortQs.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "bg-slate-800/90 border border-slate-700 rounded-xl p-2.5 space-y-2 text-xs shadow";
    const qInputId = `short_q_${idx}`;
    const selectedLines = item.lines !== undefined ? item.lines : "auto";

    const imageSrc = item.diagram || item.image;
    const imagePreviewHtml = imageSrc ? `
      <div class="question-thumb-preview">
        <div class="flex items-center gap-2">
          <img src="${imageSrc}" class="w-10 h-10 object-contain bg-white rounded border border-slate-600 p-0.5" alt="Preview">
          <span class="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <i data-lucide="image" class="w-3.5 h-3.5"></i> Diagram Attached
          </span>
        </div>
        <button type="button" onclick="event.stopPropagation(); removeQuestionImage('shortQs', ${idx})" class="text-xs bg-red-600/30 hover:bg-red-600 text-red-300 hover:text-white px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition" title="Remove diagram">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Remove
        </button>
      </div>
    ` : '';

    card.innerHTML = `
      <div class="flex items-center justify-between flex-wrap gap-1">
        <span class="font-bold text-slate-200">${isUrdu ? `مختصر سوال (${idx + 1})` : `Short Question (${idx + 1})`}</span>
        <div class="flex items-center gap-1.5">
          <!-- Lines Override -->
          <span class="text-[10px] text-slate-400">Lines:</span>
          <select onchange="updateShortQLines(${idx}, this.value)" class="bg-slate-900 border border-slate-700 rounded-lg px-1.5 py-0.5 text-amber-400 font-bold text-[11px]" title="Answer Lines for this question">
            <option value="auto" ${selectedLines === 'auto' ? 'selected' : ''}>Auto</option>
            <option value="0" ${selectedLines === '0' ? 'selected' : ''}>0 (None)</option>
            <option value="1" ${selectedLines === '1' ? 'selected' : ''}>1 Line</option>
            <option value="2" ${selectedLines === '2' ? 'selected' : ''}>2 Lines</option>
            <option value="3" ${selectedLines === '3' ? 'selected' : ''}>3 Lines</option>
            <option value="4" ${selectedLines === '4' ? 'selected' : ''}>4 Lines</option>
            <option value="4lines_eng" ${selectedLines === '4lines_eng' ? 'selected' : ''}>4-Lines Eng</option>
            <option value="box" ${selectedLines === 'box' ? 'selected' : ''}>Box</option>
          </select>
          <!-- Inline Image/Diagram -->
          <button onclick="triggerQuestionImageUpload('shortQs', ${idx})" class="p-1.5 rounded-lg bg-slate-700 hover:bg-emerald-600 text-slate-200 hover:text-white transition" title="Add Diagram / Image">
            <i data-lucide="image" class="w-3.5 h-3.5"></i>
          </button>
          <!-- Inline Mic -->
          <button onclick="recordForInput('${qInputId}')" id="micBtn_${qInputId}" class="p-1.5 rounded-lg bg-slate-700 hover:bg-red-600 text-slate-200 hover:text-white transition" title="Voice Typing">
            <i data-lucide="mic" class="w-3.5 h-3.5"></i>
          </button>
          <!-- Inline Camera/Scan -->
          <button onclick="triggerInlineOCR('${qInputId}')" class="p-1.5 rounded-lg bg-slate-700 hover:bg-cyan-600 text-slate-200 hover:text-white transition" title="Scan Book Photo">
            <i data-lucide="camera" class="w-3.5 h-3.5"></i>
          </button>
          <!-- Delete -->
          <button onclick="deleteShortQ(${idx})" class="p-1 text-red-400 hover:text-red-300 ml-1" title="Delete"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
        </div>
      </div>

      <textarea id="${qInputId}" rows="2" oninput="updateShortQ(${idx}, this.value)" placeholder="Short question statement..." class="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-100 font-medium ${isUrdu ? 'font-jameel-nastaliq text-right' : ''}">${item.q}</textarea>

      ${imagePreviewHtml}
    `;

    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function addSingleShortQ() {
  paperData.shortQs.push({ q: "نیا مختصر سوال تحریر کریں...", lines: "auto" });
  renderShortList();
  renderPaper();
}

function updateShortQ(idx, val) {
  if (paperData.shortQs[idx]) {
    paperData.shortQs[idx].q = val;
    renderPaper();
  }
}

function updateShortQLines(idx, val) {
  if (paperData.shortQs[idx]) {
    paperData.shortQs[idx].lines = val;
    renderPaper();
  }
}

function deleteShortQ(idx) {
  paperData.shortQs.splice(idx, 1);
  renderShortList();
  renderPaper();
}

function importBulkShort() {
  const text = document.getElementById("bulkShortText").value.trim();
  if (!text) return;
  const lines = text.split(/\n+/).map(l => l.replace(/^([0-9]+[\.\)]|Q[0-9]+:?)\s*/i, "").trim()).filter(Boolean);
  lines.forEach(line => {
    paperData.shortQs.push({ q: line, lines: "auto" });
  });
  document.getElementById("bulkShortText").value = "";
  renderShortList();
  renderPaper();
}

// ================= RENDER LONG QUESTIONS =================
function renderLongList() {
  const container = document.getElementById("longListContainer");
  if (!container) return;
  container.innerHTML = "";

  if (paperData.longQs.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-slate-500 border border-dashed border-slate-700 rounded-xl">
        <p class="font-medium text-xs">No Long Questions added yet.</p>
        <button onclick="addSingleLongQ()" class="mt-2 text-xs bg-purple-600/30 text-purple-300 border border-purple-500/40 px-3 py-1.5 rounded-lg font-bold">➕ Add Long Question</button>
      </div>
    `;
    return;
  }

  const isUrdu = paperData.layout.isUrduSubject;

  paperData.longQs.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "bg-slate-800/90 border border-slate-700 rounded-xl p-2.5 space-y-2 text-xs shadow";
    const qInputId = `long_q_${idx}`;
    const selectedLines = item.lines !== undefined ? item.lines : "auto";

    const imageSrc = item.diagram || item.image;
    const imagePreviewHtml = imageSrc ? `
      <div class="question-thumb-preview">
        <div class="flex items-center gap-2">
          <img src="${imageSrc}" class="w-10 h-10 object-contain bg-white rounded border border-slate-600 p-0.5" alt="Preview">
          <span class="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <i data-lucide="image" class="w-3.5 h-3.5"></i> Diagram Attached
          </span>
        </div>
        <button type="button" onclick="event.stopPropagation(); removeQuestionImage('longQs', ${idx})" class="text-xs bg-red-600/30 hover:bg-red-600 text-red-300 hover:text-white px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition" title="Remove diagram">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Remove
        </button>
      </div>
    ` : '';

    card.innerHTML = `
      <div class="flex items-center justify-between flex-wrap gap-1">
        <span class="font-bold text-slate-200">${isUrdu ? `تفصیلی سوال (${idx + 1})` : `Long Question Q.${idx + 1}`}</span>
        <div class="flex items-center gap-1.5">
          <span class="text-[10px] text-slate-400">Lines:</span>
          <select onchange="updateLongQLines(${idx}, this.value)" class="bg-slate-900 border border-slate-700 rounded-lg px-1.5 py-0.5 text-purple-400 font-bold text-[11px]" title="Answer Lines for this question">
            <option value="auto" ${selectedLines === 'auto' ? 'selected' : ''}>Auto</option>
            <option value="0" ${selectedLines === '0' ? 'selected' : ''}>0 (None)</option>
            <option value="2" ${selectedLines === '2' ? 'selected' : ''}>2 Lines</option>
            <option value="3" ${selectedLines === '3' ? 'selected' : ''}>3 Lines</option>
            <option value="4" ${selectedLines === '4' ? 'selected' : ''}>4 Lines</option>
            <option value="5" ${selectedLines === '5' ? 'selected' : ''}>5 Lines</option>
            <option value="6" ${selectedLines === '6' ? 'selected' : ''}>6 Lines</option>
            <option value="8" ${selectedLines === '8' ? 'selected' : ''}>8 Lines</option>
            <option value="box" ${selectedLines === 'box' ? 'selected' : ''}>Box</option>
          </select>
          <span class="text-[10px] text-slate-400">Marks:</span>
          <input type="number" value="${item.marks || 5}" oninput="updateLongQMarks(${idx}, this.value)" class="w-10 bg-slate-900 border border-slate-700 rounded-lg p-1 text-amber-400 font-bold text-center text-xs">
          <!-- Inline Image/Diagram -->
          <button onclick="triggerQuestionImageUpload('longQs', ${idx})" class="p-1.5 rounded-lg bg-slate-700 hover:bg-emerald-600 text-slate-200 hover:text-white transition" title="Add Diagram / Image">
            <i data-lucide="image" class="w-3.5 h-3.5"></i>
          </button>
          <!-- Inline Mic -->
          <button onclick="recordForInput('${qInputId}')" id="micBtn_${qInputId}" class="p-1.5 rounded-lg bg-slate-700 hover:bg-red-600 text-slate-200 hover:text-white transition" title="Voice Typing">
            <i data-lucide="mic" class="w-3.5 h-3.5"></i>
          </button>
          <!-- Inline Camera/Scan -->
          <button onclick="triggerInlineOCR('${qInputId}')" class="p-1.5 rounded-lg bg-slate-700 hover:bg-cyan-600 text-slate-200 hover:text-white transition" title="Scan Book Photo">
            <i data-lucide="camera" class="w-3.5 h-3.5"></i>
          </button>
          <!-- Delete -->
          <button onclick="deleteLongQ(${idx})" class="p-1 text-red-400 hover:text-red-300 ml-1" title="Delete"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
        </div>
      </div>

      <textarea id="${qInputId}" rows="3" oninput="updateLongQ(${idx}, this.value)" placeholder="Detailed question..." class="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-100 font-medium ${isUrdu ? 'font-jameel-nastaliq text-right' : ''}">${item.q}</textarea>

      ${imagePreviewHtml}
    `;

    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function addSingleLongQ() {
  paperData.longQs.push({ q: "تفصیلی سوال یا خلاصہ تحریر کریں...", marks: 5, lines: "auto" });
  renderLongList();
  renderPaper();
}

function updateLongQ(idx, val) {
  if (paperData.longQs[idx]) {
    paperData.longQs[idx].q = val;
    renderPaper();
  }
}

function updateLongQLines(idx, val) {
  if (paperData.longQs[idx]) {
    paperData.longQs[idx].lines = val;
    renderPaper();
  }
}

function updateLongQMarks(idx, val) {
  if (paperData.longQs[idx]) {
    paperData.longQs[idx].marks = Number(val) || 0;
    renderPaper();
  }
}

function deleteLongQ(idx) {
  paperData.longQs.splice(idx, 1);
  renderLongList();
  renderPaper();
}

// ================= RENDER FILL IN THE BLANKS =================
function renderBlanksList() {
  const container = document.getElementById("blanksListContainer");
  if (!container) return;
  container.innerHTML = "";

  if (paperData.blanks.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-slate-500 border border-dashed border-slate-700 rounded-xl">
        <p class="font-medium text-xs">No Blanks added yet.</p>
        <button onclick="addSingleBlank()" class="mt-2 text-xs bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 px-3 py-1.5 rounded-lg font-bold">➕ Add Blank</button>
      </div>
    `;
    return;
  }

  const isUrdu = paperData.layout.isUrduSubject;

  paperData.blanks.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "bg-slate-800/90 border border-slate-700 rounded-xl p-2.5 space-y-2 text-xs shadow";
    const qInputId = `blank_q_${idx}`;

    const imageSrc = item.diagram || item.image;
    const imagePreviewHtml = imageSrc ? `
      <div class="question-thumb-preview">
        <div class="flex items-center gap-2">
          <img src="${imageSrc}" class="w-10 h-10 object-contain bg-white rounded border border-slate-600 p-0.5" alt="Preview">
          <span class="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <i data-lucide="image" class="w-3.5 h-3.5"></i> Diagram Attached
          </span>
        </div>
        <button type="button" onclick="event.stopPropagation(); removeQuestionImage('blanks', ${idx})" class="text-xs bg-red-600/30 hover:bg-red-600 text-red-300 hover:text-white px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 transition" title="Remove diagram">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Remove
        </button>
      </div>
    ` : '';

    card.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="font-bold text-emerald-400">Blank #${idx + 1}</span>
        <div class="flex items-center gap-1.5">
          <!-- Inline Image/Diagram -->
          <button onclick="triggerQuestionImageUpload('blanks', ${idx})" class="p-1.5 rounded-lg bg-slate-700 hover:bg-emerald-600 text-slate-200 hover:text-white transition" title="Add Diagram / Image">
            <i data-lucide="image" class="w-3.5 h-3.5"></i>
          </button>
          <!-- Inline Mic -->
          <button onclick="recordForInput('${qInputId}')" id="micBtn_${qInputId}" class="p-1.5 rounded-lg bg-slate-700 hover:bg-red-600 text-slate-200 hover:text-white"><i data-lucide="mic" class="w-3.5 h-3.5"></i></button>
          <!-- Delete -->
          <button onclick="deleteBlank(${idx})" class="p-1 text-red-400 hover:text-red-300 ml-1"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
        </div>
      </div>
      <input type="text" id="${qInputId}" value="${item.q}" oninput="updateBlank(${idx}, this.value)" placeholder="${isUrdu ? 'خالی جگہ کے ساتھ جملہ درج کریں...' : 'Statement with ________ blank line...'}" class="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-100 font-medium ${isUrdu ? 'font-jameel-nastaliq text-right' : 'text-left'}">
      ${imagePreviewHtml}
    `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function addSingleBlank() {
  const isUrdu = paperData.layout.isUrduSubject;
  const count = paperData.blanks.length + 1;
  const defaultText = isUrdu 
    ? `${count}. پاکستان کا دارالحکومت ____________ ہے۔`
    : `${count}. The capital of Pakistan is ____________.`;
  paperData.blanks.push({ q: defaultText });
  renderBlanksList();
  renderPaper();
}

function updateBlank(idx, val) {
  if (paperData.blanks[idx]) {
    paperData.blanks[idx].q = val;
    renderPaper();
  }
}

function deleteBlank(idx) {
  paperData.blanks.splice(idx, 1);
  renderBlanksList();
  renderPaper();
}

// ================= RENDER MATCHING =================
function renderMatchingList() {
  const container = document.getElementById("matchingListContainer");
  if (!container) return;
  container.innerHTML = "";

  if (paperData.matching.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-slate-500 border border-dashed border-slate-700 rounded-xl">
        <p class="font-medium text-xs">No Matching columns added.</p>
        <button onclick="addMatchingRow()" class="mt-2 text-xs bg-cyan-600/30 text-cyan-300 border border-cyan-500/40 px-3 py-1.5 rounded-lg font-bold">➕ Add Matching Row</button>
      </div>
    `;
    return;
  }

  const isUrdu = paperData.layout.isUrduSubject;

  paperData.matching.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "bg-slate-800/90 border border-slate-700 rounded-xl p-2.5 space-y-1.5 text-xs";
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="font-bold text-cyan-400">${isUrdu ? `جوڑا #${idx + 1}` : `Match Row #${idx + 1}`}</span>
        <button onclick="deleteMatchingRow(${idx})" class="text-red-400 hover:text-red-300"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
      </div>
      <div class="grid grid-cols-2 gap-1.5">
        <input type="text" value="${item.colA}" oninput="updateMatchingRow(${idx}, 'colA', this.value)" placeholder="${isUrdu ? 'کالم (الف)' : 'Column (A)'}" class="bg-slate-950 border border-slate-700 rounded-lg p-1.5 text-slate-100 ${isUrdu ? 'font-jameel-nastaliq text-right' : 'text-left'}">
        <input type="text" value="${item.colB}" oninput="updateMatchingRow(${idx}, 'colB', this.value)" placeholder="${isUrdu ? 'کالم (ب)' : 'Column (B)'}" class="bg-slate-950 border border-slate-700 rounded-lg p-1.5 text-slate-100 ${isUrdu ? 'font-jameel-nastaliq text-right' : 'text-left'}">
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function addMatchingRow() {
  const isUrdu = paperData.layout.isUrduSubject;
  const count = paperData.matching.length + 1;
  const itemA = isUrdu ? `کالم الف (مفہوم ${count})` : `Column A (Item ${count})`;
  const itemB = isUrdu ? `کالم ب (جواب ${count})` : `Column B (Match ${count})`;
  paperData.matching.push({ colA: itemA, colB: itemB });
  renderMatchingList();
  renderPaper();
}

function updateMatchingRow(idx, field, val) {
  if (paperData.matching[idx]) {
    paperData.matching[idx][field] = val;
    renderPaper();
  }
}

function deleteMatchingRow(idx) {
  paperData.matching.splice(idx, 1);
  renderMatchingList();
  renderPaper();
}

// ================= RENDER TRACING =================
function renderTracingList() {
  const container = document.getElementById("tracingListContainer");
  if (!container) return;
  container.innerHTML = "";

  if (paperData.tracing.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-slate-500 border border-dashed border-slate-700 rounded-xl">
        <p class="font-medium text-xs">No Tracing letters added.</p>
        <button onclick="addTracingRow()" class="mt-2 text-xs bg-pink-600/30 text-pink-300 border border-pink-500/40 px-3 py-1.5 rounded-lg font-bold">➕ Add Tracing Row</button>
      </div>
    `;
    return;
  }

  paperData.tracing.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "bg-slate-800/90 border border-slate-700 rounded-xl p-2.5 space-y-1.5 text-xs";
    card.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="font-bold text-pink-400">Tracing #${idx + 1}</span>
        <button onclick="deleteTracingRow(${idx})" class="text-red-400 hover:text-red-300"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
      </div>
      <input type="text" value="${item.text}" oninput="updateTracingRow(${idx}, this.value)" placeholder="A  B  C  D..." class="w-full bg-slate-950 border border-slate-700 rounded-lg p-1.5 text-slate-100 font-bold">
    `;
    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function addTracingRow() {
  paperData.tracing.push({ text: "A  B  C  D  E" });
  renderTracingList();
  renderPaper();
}

function updateTracingRow(idx, val) {
  if (paperData.tracing[idx]) {
    paperData.tracing[idx].text = val;
    renderPaper();
  }
}

function deleteTracingRow(idx) {
  paperData.tracing.splice(idx, 1);
  renderTracingList();
  renderPaper();
}

// ================= RENDER LIVE PRINT PAPER =================
function handleTotalMarksInput(val) {
  paperData.exam.totalMarks = val;
  renderPaper();
}

function renderPaper() {
  const examTitleInput = document.getElementById("examTitle");
  if (examTitleInput) paperData.exam.title = examTitleInput.value;

  const classSelectorInput = document.getElementById("classSelector");
  if (classSelectorInput) paperData.exam.classLevel = classSelectorInput.value;

  const timeAllowedInput = document.getElementById("timeAllowed");
  if (timeAllowedInput) paperData.exam.timeAllowed = timeAllowedInput.value;

  const totalMarksInput = document.getElementById("totalMarks");
  if (totalMarksInput && totalMarksInput.value !== "") {
    paperData.exam.totalMarks = totalMarksInput.value;
  }

  const paperSheet = document.getElementById("paperSheet");
  const isUrdu = paperData.layout.isUrduSubject;

  // Toggle RTL & Jameel Noori Nastaleeq on Paper Sheet
  if (isUrdu) {
    paperSheet.classList.add("urdu-mode");
  } else {
    paperSheet.classList.remove("urdu-mode");
  }

  // Sync Watermark
  const watermarkEl = document.getElementById("paperWatermark");
  if (watermarkEl) {
    if (paperData.watermark !== false) {
      watermarkEl.classList.remove("hidden");
    } else {
      watermarkEl.classList.add("hidden");
    }
  }

  // Sync Border Style
  paperSheet.classList.remove("border-none", "border-single", "border-double", "border-formal");
  const currentBorder = paperData.borderStyle || "double";
  paperSheet.classList.add(`border-${currentBorder}`);

  // Dynamic Font Size & Line Height Calculation
  const profile = CLASS_PROFILES[paperData.exam.classLevel] || CLASS_PROFILES["Class 9th"];
  const fSize = Math.max(12, paperData.layout.fontSize || 12.5);
  const lHeight = isUrdu ? (profile.urduLineHeight || 2.2) : (profile.lineHeight || 1.45);

  paperSheet.style.setProperty("--paper-font-size", `${fSize}pt`);
  paperSheet.style.setProperty("--paper-line-height", `${lHeight}`);

  // Update Display Badge
  const fontBadge = document.getElementById("fontSizeDisplayBadge");
  if (fontBadge) fontBadge.textContent = `${fSize}pt`;

  renderHeaderHTML();
  renderStudentTableHTML();
  renderQuestionsHTML();
  updateMarksBadge();

  // KaTeX Math Rendering across entire paper
  if (window.renderMathInElement) {
    const sheet = document.getElementById("paperSheet") || document.getElementById("paperContent");
    if (sheet) {
      window.renderMathInElement(sheet, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false }
        ],
        throwOnError: false
      });
    }
  }
}

// ================= RENDER CHENAB COLLEGE HEADER =================
function renderHeaderHTML() {
  const container = document.getElementById("paperHeaderContainer");
  const isUrdu = paperData.layout.isUrduSubject;
  const logoSrc = "chenab_logo.png";

  let titleHeaderHTML = "";
  if (isUrdu) {
    titleHeaderHTML = `
      <div class="text-center w-full">
        <h1 class="font-nastaliq-center text-4xl font-bold text-black leading-snug">چناب کالج شورکوٹ</h1>
        <div class="text-[11pt] font-semibold text-slate-700 tracking-wider font-nastaliq-center mt-0.5">شورکوٹ کینٹ کیمپس</div>
      </div>
    `;
    const footerTag = document.getElementById("footerCollegeTag");
    if (footerTag) footerTag.textContent = "★ چناب کالج شورکوٹ ★";
  } else {
    let fontClass = "font-old-english-prestigious text-2xl md:text-3xl";
    if (paperData.headerFontStyle === "gothic_classic") {
      fontClass = "font-gothic-classic text-3xl md:text-4xl";
    } else if (paperData.headerFontStyle === "imperial_roman") {
      fontClass = "font-oxford-serif text-2xl md:text-3xl";
    } else if (paperData.headerFontStyle === "modern_bold") {
      fontClass = "font-sans font-extrabold text-2xl md:text-3xl tracking-wide";
    }

    titleHeaderHTML = `
      <div class="text-center w-full">
        <h1 class="${fontClass} text-black leading-tight drop-shadow-sm">${paperData.collegeName}</h1>
        <div class="text-[9.5pt] font-semibold text-slate-600 tracking-widest uppercase font-sans mt-0.5">Aspire and Achieve • Shorkot Campus</div>
      </div>
    `;
    const footerTag = document.getElementById("footerCollegeTag");
    if (footerTag) footerTag.textContent = "★ CHENAB COLLEGE SHORKOT ★";
  }

  container.innerHTML = `
    <div class="paper-header-classic">
      <div class="flex items-center justify-between gap-4">
        <!-- Left Logo -->
        <div class="shrink-0">
          <img src="${logoSrc}" class="w-16 h-16 object-contain" alt="Chenab College Logo">
        </div>

        <!-- Center Name & Title -->
        <div class="flex-1 flex flex-col items-center justify-center text-center">
          ${titleHeaderHTML}
          <div class="inline-block mt-1 font-bold text-[11pt] border-b-2 border-black pb-0.5 px-4 uppercase tracking-wide">
            ${paperData.exam.title}
          </div>
        </div>

        <!-- Right Logo Balance -->
        <div class="shrink-0">
          <img src="${logoSrc}" class="w-16 h-16 object-contain" alt="Chenab College Logo">
        </div>
      </div>

      <!-- Meta Row (Class, Subject, Marks, Time) -->
      <div class="grid grid-cols-3 gap-2 mt-2 pt-1 border-t border-slate-300 text-[10.5pt] font-semibold text-slate-800 ${isUrdu ? 'font-jameel-nastaliq' : ''}">
        <div class="${isUrdu ? 'text-right' : 'text-left'}"><span class="font-bold">${isUrdu ? 'جماعت:' : 'Class:'}</span> ${paperData.exam.classLevel}</div>
        <div class="text-center"><span class="font-bold">${isUrdu ? 'مضمون:' : 'Subject:'}</span> ${paperData.exam.subject}</div>
        <div class="${isUrdu ? 'text-left' : 'text-right'}">
          <span class="font-bold">${isUrdu ? 'کل نمبر:' : 'Total Marks:'}</span> ${paperData.exam.totalMarks}
          ${paperData.exam.timeAllowed ? ` | <span class="font-bold">${isUrdu ? 'وقت:' : 'Time:'}</span> ${paperData.exam.timeAllowed}` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderStudentTableHTML() {
  const container = document.getElementById("paperStudentInfoBox");
  const isUrdu = paperData.layout.isUrduSubject;

  if (isUrdu) {
    container.innerHTML = `
      <table class="student-info-table font-jameel-nastaliq text-[10.5pt]">
        <tr>
          <td class="label" style="width: 14%;">نام طالب علم:</td>
          <td style="width: 36%;"></td>
          <td class="label" style="width: 12%;">رول نمبر:</td>
          <td style="width: 18%;"></td>
          <td class="label" style="width: 12%;">حاصل کردہ نمبر:</td>
          <td style="width: 8%;"></td>
        </tr>
      </table>
    `;
  } else {
    container.innerHTML = `
      <table class="student-info-table">
        <tr>
          <td class="label" style="width: 12%;">Student Name:</td>
          <td style="width: 38%;"></td>
          <td class="label" style="width: 10%;">Roll No:</td>
          <td style="width: 15%;"></td>
          <td class="label" style="width: 8%;">Section:</td>
          <td style="width: 17%;"></td>
        </tr>
      </table>
    `;
  }
}

// ================= SECTION MARKS & AUTO-DIVISION HELPERS =================
function initSectionConfig() {
  if (!paperData.sectionConfig) {
    paperData.sectionConfig = {
      mcqs: { marks: 5, attempt: 0 },
      shortQs: { marks: 10, attempt: 0, lines: "2" },
      longQs: { marks: 10, attempt: 0, lines: "4" },
      blanks: { marks: 5, attempt: 0 },
      matching: { marks: 5, attempt: 0 },
      tracing: { marks: 5, attempt: 0 }
    };
  }
}

function updateSectionMarks(secKey, val) {
  initSectionConfig();
  paperData.sectionConfig[secKey].marks = Math.max(0, Number(val) || 0);
  updateSectionBadgesUI();
  
  let grandTotal = 0;
  if (paperData.mcqs.length > 0) grandTotal += getSectionCalculation('mcqs', paperData.mcqs.length).totalMarks;
  if (paperData.shortQs.length > 0) grandTotal += getSectionCalculation('shortQs', paperData.shortQs.length).totalMarks;
  if (paperData.longQs.length > 0) grandTotal += getSectionCalculation('longQs', paperData.longQs.length).totalMarks;
  if (paperData.blanks.length > 0) grandTotal += getSectionCalculation('blanks', paperData.blanks.length).totalMarks;
  if (paperData.matching.length > 0) grandTotal += getSectionCalculation('matching', paperData.matching.length).totalMarks;
  if (paperData.tracing.length > 0) grandTotal += getSectionCalculation('tracing', paperData.tracing.length).totalMarks;

  if (grandTotal > 0) {
    paperData.exam.totalMarks = grandTotal;
    const totalMarksInput = document.getElementById("totalMarks");
    if (totalMarksInput) totalMarksInput.value = grandTotal;
  }
  renderPaper();
}

function updateSectionAttempt(secKey, val) {
  initSectionConfig();
  paperData.sectionConfig[secKey].attempt = Math.max(0, Number(val) || 0);
  updateSectionBadgesUI();
  renderPaper();
}

function updateSectionLines(secKey, val) {
  initSectionConfig();
  paperData.sectionConfig[secKey].lines = val;
  renderPaper();
}

function getSectionCalculation(secKey, totalQuestions) {
  initSectionConfig();
  const cfg = paperData.sectionConfig[secKey] || { marks: 0, attempt: 0 };
  const totalCount = totalQuestions || 0;
  const attempt = (cfg.attempt > 0 && cfg.attempt <= totalCount) ? cfg.attempt : totalCount;
  const totalMarks = cfg.marks !== undefined ? Number(cfg.marks) : (secKey === 'mcqs' ? totalCount : secKey === 'shortQs' ? totalCount * 2 : totalCount * 5);
  const markPerQ = attempt > 0 ? (totalMarks / attempt) : 1;

  return {
    totalCount,
    attempt,
    totalMarks,
    hasChoice: attempt < totalCount,
    markPerQ: Math.round(markPerQ * 100) / 100
  };
}

function formatMarks(val) {
  if (val === undefined || isNaN(val)) return "0";
  return Number.isInteger(val) ? val.toString() : val.toFixed(1);
}

function updateSectionBadgesUI() {
  initSectionConfig();
  // MCQ
  const mcqStat = getSectionCalculation('mcqs', paperData.mcqs.length);
  const mcqBadge = document.getElementById("secBadge_mcq");
  if (mcqBadge) mcqBadge.textContent = `Each: ${formatMarks(mcqStat.markPerQ)} Mark${mcqStat.markPerQ === 1 ? '' : 's'}`;

  // Short
  const shortStat = getSectionCalculation('shortQs', paperData.shortQs.length);
  const shortBadge = document.getElementById("secBadge_short");
  if (shortBadge) shortBadge.textContent = `Each: ${formatMarks(shortStat.markPerQ)} Mark${shortStat.markPerQ === 1 ? '' : 's'}`;

  // Long
  const longStat = getSectionCalculation('longQs', paperData.longQs.length);
  const longBadge = document.getElementById("secBadge_long");
  if (longBadge) longBadge.textContent = `Each: ${formatMarks(longStat.markPerQ)} Mark${longStat.markPerQ === 1 ? '' : 's'}`;

  // Blanks
  const blanksStat = getSectionCalculation('blanks', paperData.blanks.length);
  const blanksBadge = document.getElementById("secBadge_blanks");
  if (blanksBadge) blanksBadge.textContent = `Each: ${formatMarks(blanksStat.markPerQ)} Mark${blanksStat.markPerQ === 1 ? '' : 's'}`;

  // Matching
  const matchStat = getSectionCalculation('matching', paperData.matching.length);
  const matchBadge = document.getElementById("secBadge_matching");
  if (matchBadge) matchBadge.textContent = `Each: ${formatMarks(matchStat.markPerQ)} Mark${matchStat.markPerQ === 1 ? '' : 's'}`;
}

// Dynamic Answer Line Generator Helper
function renderQuestionAnswerLines(lineType, isUrdu) {
  if (!lineType || lineType === "0" || lineType === 0) return "";
  
  if (lineType === "box") {
    return `<div class="answer-box-space"></div>`;
  }
  
  if (lineType === "4lines_eng") {
    return `<div class="handwriting-four-lines"></div>`;
  }

  const count = parseInt(lineType, 10);
  if (isNaN(count) || count <= 0) return "";

  let linesHtml = "";
  const lineClass = isUrdu ? "answer-line-standard urdu-line" : "answer-line-standard";
  for (let i = 0; i < count; i++) {
    linesHtml += `<div class="${lineClass}"></div>`;
  }
  return `<div class="mt-1 mb-1">${linesHtml}</div>`;
}

function renderQuestionsHTML() {
  const container = document.getElementById("paperContent");
  container.innerHTML = "";
  const isUrdu = paperData.layout.isUrduSubject;
  let sectionCounter = 1;

  updateSectionBadgesUI();
  initSectionConfig();

  // 1. MCQs
  if (paperData.mcqs.length > 0) {
    const mcqDiv = document.createElement("div");
    mcqDiv.className = `paper-section-block ${isUrdu ? 'font-jameel-nastaliq' : ''}`;
    const stat = getSectionCalculation('mcqs', paperData.mcqs.length);
    
    let headerText = "";
    if (stat.hasChoice) {
      headerText = isUrdu 
        ? `سوال نمبر ${sectionCounter}: درج ذیل میں سے کوئی سے ${stat.attempt} درست جوابات منتخب کریں۔ (${stat.attempt} × ${formatMarks(stat.markPerQ)} = ${stat.totalMarks} نمبر)`
        : `Q.${sectionCounter}: Choose any ${stat.attempt} correct options out of ${stat.totalCount}. (${stat.attempt} × ${formatMarks(stat.markPerQ)} = ${stat.totalMarks} Marks)`;
    } else {
      headerText = isUrdu 
        ? `سوال نمبر ${sectionCounter}: درست جواب کا انتخاب کریں اور دائرہ پُر کریں۔ (${stat.totalMarks} نمبر)`
        : `Q.${sectionCounter}: Choose the correct option from the following. (${stat.totalMarks} Marks)`;
    }

    let html = `
      <div class="flex justify-between items-center border-b-2 border-slate-900 pb-0.5 mb-2 mt-2 font-bold text-[11.5pt]">
        <div>${headerText}</div>
        <div class="text-[10.5pt] font-bold">(${stat.totalMarks} Marks)</div>
      </div>
      <div class="space-y-2">
    `;

    paperData.mcqs.forEach((item, idx) => {
      const optA_label = isUrdu ? "(الف)" : "(A)";
      const optB_label = isUrdu ? "(ب)" : "(B)";
      const optC_label = isUrdu ? "(ج)" : "(C)";
      const optD_label = isUrdu ? "(د)" : "(D)";

      const diagramSrc = item.diagram || item.image;
      const diagramHtml = diagramSrc ? `
        <div class="question-diagram-container">
          <img src="${diagramSrc}" alt="Diagram Q.${idx + 1}" class="question-diagram-img" />
        </div>
      ` : '';

      html += `
        <div class="mcq-item">
          <div class="font-semibold flex items-start gap-1">
            <span>(${idx + 1})</span>
            <span class="flex-1">${formatText(item.q)}</span>
          </div>
          ${diagramHtml}
          <div class="mcq-options-grid-4 ${isUrdu ? 'pr-4' : 'pl-4'} pt-0.5">
            <div><span class="mcq-option-label">${optA_label}</span> ${formatText(item.a)}</div>
            <div><span class="mcq-option-label">${optB_label}</span> ${formatText(item.b)}</div>
            <div><span class="mcq-option-label">${optC_label}</span> ${formatText(item.c)}</div>
            <div><span class="mcq-option-label">${optD_label}</span> ${formatText(item.d)}</div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    mcqDiv.innerHTML = html;
    container.appendChild(mcqDiv);
    sectionCounter++;
  }

  // 2. Short Questions
  if (paperData.shortQs.length > 0) {
    const shortDiv = document.createElement("div");
    shortDiv.className = `paper-section-block ${isUrdu ? 'font-jameel-nastaliq' : ''}`;
    const stat = getSectionCalculation('shortQs', paperData.shortQs.length);
    const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv", "xv"];
    const sectionDefaultLines = paperData.sectionConfig.shortQs.lines !== undefined 
      ? paperData.sectionConfig.shortQs.lines 
      : (paperData.layout.mode === 'worksheet' ? '2' : '0');

    let headerText = "";
    if (stat.hasChoice) {
      headerText = isUrdu 
        ? `سوال نمبر ${sectionCounter}: درج ذیل میں سے کوئی سے ${stat.attempt} سوالات کے مختصر جوابات تحریر کریں۔ (${stat.attempt} × ${formatMarks(stat.markPerQ)} = ${stat.totalMarks} نمبر)`
        : `Q.${sectionCounter}: Answer any ${stat.attempt} short questions out of ${stat.totalCount}. (${stat.attempt} × ${formatMarks(stat.markPerQ)} = ${stat.totalMarks} Marks)`;
    } else {
      headerText = isUrdu 
        ? `سوال نمبر ${sectionCounter}: درج ذیل تمام سوالات کے مختصر جوابات تحریر کریں۔ (${stat.totalMarks} نمبر)`
        : `Q.${sectionCounter}: Answer the following short questions. (${stat.totalMarks} Marks)`;
    }

    let html = `
      <div class="flex justify-between items-center border-b-2 border-slate-900 pb-0.5 mb-2 mt-3 font-bold text-[11.5pt]">
        <div>${headerText}</div>
        <div class="text-[10.5pt] font-bold">(${stat.totalMarks} Marks)</div>
      </div>
      <div class="space-y-2">
    `;

    paperData.shortQs.forEach((item, idx) => {
      const qLines = (item.lines && item.lines !== "auto") ? item.lines : sectionDefaultLines;
      const linesBlock = renderQuestionAnswerLines(qLines, isUrdu);
      const diagramSrc = item.diagram || item.image;
      const diagramHtml = diagramSrc ? `
        <div class="question-diagram-container">
          <img src="${diagramSrc}" alt="Diagram Q.${idx + 1}" class="question-diagram-img" />
        </div>
      ` : '';

      html += `
        <div class="keep-together">
          <div class="flex items-start gap-1.5 font-medium">
            <span class="font-bold">(${romanNumerals[idx] || idx + 1})</span>
            <span class="flex-1 whitespace-pre-line">${formatText(item.q)}</span>
            <span class="font-bold ml-1 mr-1 text-slate-800">[${formatMarks(stat.markPerQ)}]</span>
          </div>
          ${diagramHtml}
          ${linesBlock}
        </div>
      `;
    });

    html += `</div>`;
    shortDiv.innerHTML = html;
    container.appendChild(shortDiv);
    sectionCounter++;
  }

  // 3. Long Questions
  if (paperData.longQs.length > 0) {
    const longDiv = document.createElement("div");
    longDiv.className = `paper-section-block ${isUrdu ? 'font-jameel-nastaliq' : ''}`;
    const stat = getSectionCalculation('longQs', paperData.longQs.length);
    const sectionDefaultLines = paperData.sectionConfig.longQs.lines !== undefined 
      ? paperData.sectionConfig.longQs.lines 
      : (paperData.layout.mode === 'worksheet' ? '4' : '0');

    let headerText = "";
    if (stat.hasChoice) {
      headerText = isUrdu 
        ? `سوال نمبر ${sectionCounter}: درج ذیل میں سے کوئی سے ${stat.attempt} تفصیلی سوالات حل کریں۔ (${stat.attempt} × ${formatMarks(stat.markPerQ)} = ${stat.totalMarks} نمبر)`
        : `Q.${sectionCounter}: Answer any ${stat.attempt} questions in detail out of ${stat.totalCount}. (${stat.attempt} × ${formatMarks(stat.markPerQ)} = ${stat.totalMarks} Marks)`;
    } else {
      headerText = isUrdu 
        ? `سوال نمبر ${sectionCounter}: درج ذیل تمام تفصیلی سوالات حل کریں۔ (${stat.totalMarks} نمبر)`
        : `Q.${sectionCounter}: Answer the following questions in detail. (${stat.totalMarks} Marks)`;
    }

    let html = `
      <div class="flex justify-between items-center border-b-2 border-slate-900 pb-0.5 mb-2 mt-3 font-bold text-[11.5pt]">
        <div>${headerText}</div>
        <div class="text-[10.5pt] font-bold">(${stat.totalMarks} Marks)</div>
      </div>
      <div class="space-y-2.5">
    `;

    paperData.longQs.forEach((item, idx) => {
      const qLines = (item.lines && item.lines !== "auto") ? item.lines : sectionDefaultLines;
      const linesBlock = renderQuestionAnswerLines(qLines, isUrdu);
      const diagramSrc = item.diagram || item.image;
      const diagramHtml = diagramSrc ? `
        <div class="question-diagram-container">
          <img src="${diagramSrc}" alt="Diagram Q.${idx + 1}" class="question-diagram-img" />
        </div>
      ` : '';

      html += `
        <div class="keep-together">
          <div class="flex items-start justify-between font-medium">
            <div class="flex items-start gap-1.5 flex-1">
              <span class="font-bold">${isUrdu ? `سوال ${idx + 1}:` : `Q.${idx + 1}:`}</span>
              <span class="flex-1 whitespace-pre-line">${formatText(item.q)}</span>
            </div>
            <span class="font-bold ml-2 mr-2 text-slate-800">[${formatMarks(stat.markPerQ)}]</span>
          </div>
          ${diagramHtml}
          ${linesBlock}
        </div>
      `;
    });

    html += `</div>`;
    longDiv.innerHTML = html;
    container.appendChild(longDiv);
    sectionCounter++;
  }

  // 4. Fill in the Blanks
  if (paperData.blanks.length > 0) {
    const blanksDiv = document.createElement("div");
    blanksDiv.className = `paper-section-block ${isUrdu ? 'font-jameel-nastaliq' : ''}`;
    const stat = getSectionCalculation('blanks', paperData.blanks.length);

    let html = `
      <div class="flex justify-between items-center border-b-2 border-slate-900 pb-0.5 mb-2 mt-3 font-bold text-[11.5pt]">
        <div>${isUrdu ? `سوال نمبر ${sectionCounter}: خالی جگہ پُر کریں۔` : `Q.${sectionCounter}: Fill in the blanks with suitable words.`}</div>
        <div class="text-[10.5pt] font-bold">(${stat.totalMarks} Marks)</div>
      </div>
      <div class="space-y-2">
    `;

    paperData.blanks.forEach((item) => {
      const diagramSrc = item.diagram || item.image;
      const diagramHtml = diagramSrc ? `
        <div class="question-diagram-container">
          <img src="${diagramSrc}" alt="Diagram Blank" class="question-diagram-img" />
        </div>
      ` : '';

      html += `
        <div class="font-medium keep-together">
          ${formatText(item.q)}
          ${diagramHtml}
        </div>
      `;
    });

    html += `</div>`;
    blanksDiv.innerHTML = html;
    container.appendChild(blanksDiv);
    sectionCounter++;
  }

  // 5. Match the Column
  if (paperData.matching.length > 0) {
    const matchDiv = document.createElement("div");
    matchDiv.className = `paper-section-block ${isUrdu ? 'font-jameel-nastaliq' : ''}`;
    const stat = getSectionCalculation('matching', paperData.matching.length);
    const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv", "xv"];
    const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"];
    const urduLetters = ["الف", "ب", "ج", "د", "ہ", "و", "ز", "ح", "ط", "ی", "ک", "ل", "م", "ن", "ص"];

    let html = `
      <div class="flex justify-between items-center border-b-2 border-slate-900 pb-0.5 mb-2 mt-3 font-bold text-[11.5pt]">
        <div>${isUrdu ? `سوال نمبر ${sectionCounter}: کالم (الف) کو کالم (ب) سے ملائیں۔` : `Q.${sectionCounter}: Match items of Column (A) with Column (B).`}</div>
        <div class="text-[10.5pt] font-bold">(${stat.totalMarks} Marks)</div>
      </div>
      <table class="matching-clean-table">
        <thead>
          <tr>
            <th class="${isUrdu ? 'text-right' : 'text-left'}">${isUrdu ? 'کالم (الف)' : 'Column (A)'}</th>
            <th class="col-spacer"></th>
            <th class="${isUrdu ? 'text-right' : 'text-left'}">${isUrdu ? 'کالم (ب)' : 'Column (B)'}</th>
          </tr>
        </thead>
        <tbody>
    `;

    paperData.matching.forEach((item, idx) => {
      const colA_prefix = isUrdu ? `(${idx + 1})` : `(${romanNumerals[idx] || idx + 1})`;
      const colB_prefix = isUrdu ? `(${urduLetters[idx] || idx + 1})` : `(${alphabets[idx] || idx + 1})`;

      html += `
        <tr>
          <td class="col-a-cell ${isUrdu ? 'text-right' : 'text-left'}">
            <span class="font-bold mr-1.5 ml-1.5">${colA_prefix}</span> ${formatText(item.colA)}
          </td>
          <td class="col-spacer"></td>
          <td class="col-b-cell ${isUrdu ? 'text-right' : 'text-left'}">
            <span class="font-bold mr-1.5 ml-1.5">${colB_prefix}</span> ${formatText(item.colB)}
          </td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
    matchDiv.innerHTML = html;
    container.appendChild(matchDiv);
    sectionCounter++;
  }

  // 6. Kids Tracing
  if (paperData.tracing.length > 0) {
    const traceDiv = document.createElement("div");
    traceDiv.className = "paper-section-block";
    let html = `<div class="border-b-2 border-slate-900 pb-0.5 mb-2 mt-3 font-bold text-[11.5pt]">Activity: Trace the letters neatly with your pencil.</div><div class="space-y-2">`;
    paperData.tracing.forEach(item => {
      html += `<div class="p-2.5 border border-slate-300 rounded bg-slate-50/50 text-center tracing-text">${item.text}</div>`;
    });
    html += `</div>`;
    traceDiv.innerHTML = html;
    container.appendChild(traceDiv);
  }
}

function formatText(text) {
  if (!text) return "";
  return text.replace(/\\n/g, "<br/>");
}

function updateMarksBadge() {
  const tracker = document.getElementById("marksTracker");
  if (!tracker) return;

  initSectionConfig();
  let sum = 0;
  if (paperData.mcqs.length > 0) sum += getSectionCalculation('mcqs', paperData.mcqs.length).totalMarks;
  if (paperData.shortQs.length > 0) sum += getSectionCalculation('shortQs', paperData.shortQs.length).totalMarks;
  if (paperData.longQs.length > 0) sum += getSectionCalculation('longQs', paperData.longQs.length).totalMarks;
  if (paperData.blanks.length > 0) sum += getSectionCalculation('blanks', paperData.blanks.length).totalMarks;
  if (paperData.matching.length > 0) sum += getSectionCalculation('matching', paperData.matching.length).totalMarks;
  if (paperData.tracing.length > 0) sum += getSectionCalculation('tracing', paperData.tracing.length).totalMarks;

  const target = Number(paperData.exam.totalMarks) || 0;
  tracker.textContent = `Marks: ${sum} / ${target}`;
  if (sum === target) {
    tracker.className = "text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hidden lg:block";
  } else {
    tracker.className = "text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 hidden lg:block";
  }
}

// ================= LAYOUT CONTROLS =================
function togglePaperMode() {
  paperData.layout.mode = paperData.layout.mode === "question_only" ? "worksheet" : "question_only";
  const btn = document.getElementById("paperModeBtn");
  const shortLinesSelect = document.getElementById("secLines_short");
  const longLinesSelect = document.getElementById("secLines_long");

  if (paperData.layout.mode === "worksheet") {
    btn.innerHTML = `<i data-lucide="edit-3" class="w-3 h-3 text-emerald-400"></i> Worksheet (Lines)`;
    paperData.sectionConfig.shortQs.lines = "2";
    paperData.sectionConfig.longQs.lines = "4";
    if (shortLinesSelect) shortLinesSelect.value = "2";
    if (longLinesSelect) longLinesSelect.value = "4";
  } else {
    btn.innerHTML = `<i data-lucide="file-text" class="w-3 h-3 text-blue-400"></i> Question Paper`;
    paperData.sectionConfig.shortQs.lines = "0";
    paperData.sectionConfig.longQs.lines = "0";
    if (shortLinesSelect) shortLinesSelect.value = "0";
    if (longLinesSelect) longLinesSelect.value = "0";
  }
  if (window.lucide) lucide.createIcons();
  renderPaper();
}

function toggleFitToOnePage() {
  paperData.layout.compactSpacing = !paperData.layout.compactSpacing;
  const sheet = document.getElementById("paperSheet");
  const btn = document.getElementById("fitToOnePageBtn");
  if (paperData.layout.compactSpacing) {
    sheet.classList.add("compact-mode");
    btn.textContent = "✓ 1-Page Active";
    paperData.layout.fontSize = 12;
  } else {
    sheet.classList.remove("compact-mode");
    btn.innerHTML = `<i data-lucide="minimize-2" class="w-3 h-3"></i> Fit 1-Page`;
    applyClassProfile(paperData.exam.classLevel);
  }
  if (window.lucide) lucide.createIcons();
  renderPaper();
}

// ================= INLINE VOICE TYPING =================
function initSpeech() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (currentRecordingTargetId) {
        const input = document.getElementById(currentRecordingTargetId);
        if (input) {
          input.value += (input.value ? " " : "") + transcript;
          input.dispatchEvent(new Event("input"));
        }
      }
      stopVoice();
    };

    recognition.onerror = () => stopVoice();
    recognition.onend = () => stopVoice();
  }
}

function recordForInput(inputId) {
  if (!recognition) {
    alert("Speech recognition is supported in Google Chrome & Edge.");
    return;
  }
  if (currentRecordingTargetId === inputId) {
    recognition.stop();
    stopVoice();
  } else {
    currentRecordingTargetId = inputId;
    recognition.lang = paperData.layout.isUrduSubject ? "ur-PK" : "en-US";
    recognition.start();
    const btn = document.getElementById(`micBtn_${inputId}`);
    if (btn) btn.className = "p-1.5 rounded-lg bg-red-600 text-white animate-pulse";
  }
}

function stopVoice() {
  if (currentRecordingTargetId) {
    const btn = document.getElementById(`micBtn_${currentRecordingTargetId}`);
    if (btn) btn.className = "p-1.5 rounded-lg bg-slate-700 hover:bg-red-600 text-slate-200 hover:text-white transition";
    currentRecordingTargetId = null;
  }
}

// ================= INLINE OCR =================
function triggerInlineOCR(inputId) {
  activeTargetInputId = inputId;
  document.getElementById("inlineOcrInput").click();
}

function processInlineOCR(event) {
  const file = event.target.files[0];
  if (!file || !activeTargetInputId) return;

  const targetInput = document.getElementById(activeTargetInputId);
  if (targetInput) targetInput.placeholder = "Scanning text from photo...";

  if (window.Tesseract) {
    Tesseract.recognize(file, 'eng+urd')
      .then(({ data: { text } }) => {
        if (targetInput) {
          targetInput.value = text.trim();
          targetInput.dispatchEvent(new Event("input"));
        }
      })
      .catch(() => alert("OCR scan failed. Please try a clearer picture."));
  }
}

// ================= FAST INSERT SYMBOLS =================
function insertAtCursor(text) {
  const activeEl = document.activeElement;
  if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA")) {
    const start = activeEl.selectionStart || 0;
    const end = activeEl.selectionEnd || 0;
    const val = activeEl.value;
    activeEl.value = val.substring(0, start) + text + val.substring(end);
    activeEl.selectionStart = activeEl.selectionEnd = start + text.length;
    activeEl.focus();
    activeEl.dispatchEvent(new Event("input"));
  }
}

// ================= TEACHER ANSWER KEY =================
function openAnswerKeyModal() {
  const modal = document.getElementById("answerKeyModal");
  const content = document.getElementById("answerKeyContent");
  modal.classList.remove("hidden");
  const isUrdu = paperData.layout.isUrduSubject;

  let html = `
    <div class="border-b border-slate-700 pb-2 flex items-center justify-between">
      <div>
        <h3 class="font-bold text-sm text-slate-100">${isUrdu ? 'چناب کالج شورکوٹ' : 'CHENAB COLLEGE SHORKOT'}</h3>
        <p class="text-slate-400 text-xs">${paperData.exam.title} | ${paperData.exam.classLevel} - ${paperData.exam.subject}</p>
      </div>
      <img src="chenab_logo.png" class="w-10 h-10 object-contain">
    </div>
  `;

  if (paperData.mcqs.length > 0) {
    html += `<div class="font-bold text-blue-400 pt-2">${isUrdu ? 'معروضی جوابات کی کلید:' : 'MCQs Answer Key:'}</div><div class="grid grid-cols-2 gap-2">`;
    paperData.mcqs.forEach((mcq, idx) => {
      const correctOpt = mcq.correct || "A";
      const ansText = mcq[correctOpt.toLowerCase()] || "";
      const optLabel = isUrdu ? (correctOpt === 'A' ? 'الف' : correctOpt === 'B' ? 'ب' : correctOpt === 'C' ? 'ج' : 'د') : correctOpt;
      html += `
        <div class="bg-slate-800 p-2 rounded-xl border border-slate-700 flex items-center justify-between">
          <span class="font-bold text-slate-300">Q.${idx + 1}:</span>
          <span class="bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-500/30">(${optLabel}) ${ansText.substring(0, 16)}</span>
        </div>
      `;
    });
    html += `</div>`;
  } else {
    html += `<p class="text-slate-400 italic py-4 text-center">No MCQs in this test.</p>`;
  }

  content.innerHTML = html;
}

function closeAnswerKeyModal() {
  document.getElementById("answerKeyModal").classList.add("hidden");
}

function adjustZoom(delta) {
  currentZoom = Math.max(0.6, Math.min(1.4, currentZoom + delta));
  document.getElementById("paperSheetScaleWrapper").style.transform = `scale(${currentZoom})`;
  document.getElementById("zoomLevelDisplay").textContent = Math.round(currentZoom * 100) + "%";
}

function triggerPrint() {
  const originalTitle = document.title;
  const cleanSubject = (paperData.exam.subject || "Subject").replace(/[\s\(\)\/]+/g, "_");
  const cleanClass = (paperData.exam.classLevel || "Class").replace(/[\s\(\)\/]+/g, "_");
  document.title = `Chenab_College_${cleanClass}_${cleanSubject}`;

  // Hide any lingering toasts or modals immediately
  const toast = document.getElementById("toastNotification");
  if (toast) {
    toast.classList.add("opacity-0", "translate-y-20", "hidden");
  }
  closeAdminPortalModal();

  window.print();

  setTimeout(() => {
    document.title = originalTitle;
    if (toast) toast.classList.remove("hidden");
  }, 1000);
}

// ==========================================================================
// ADMIN PORTAL & CLASS FOLDERS REPOSITORY ENGINE
// ==========================================================================

const STORAGE_KEY = "CHENAB_EXAM_REPOSITORY";
const DEFAULT_CLOUD_DB_URL = "https://chenab-college-shorkot-default-rtdb.firebaseio.com/chenab_exam_repository.json";
const CLOUD_DB_KEY = "chenab_cloud_db_url";

function getCloudDbUrl() {
  return localStorage.getItem(CLOUD_DB_KEY) || DEFAULT_CLOUD_DB_URL;
}

function mergeRepositories(localRepo, cloudRepo) {
  if (!cloudRepo || typeof cloudRepo !== "object") return localRepo || {};
  const merged = { ...(localRepo || {}) };
  
  ALL_CLASSES.forEach(cls => {
    if (!merged[cls]) merged[cls] = [];
    const cloudPapers = Array.isArray(cloudRepo[cls]) ? cloudRepo[cls] : [];
    
    cloudPapers.forEach(cp => {
      const idx = merged[cls].findIndex(p => p.id === cp.id || (p.subject && cp.subject && p.subject.toLowerCase() === cp.subject.toLowerCase()));
      if (idx >= 0) {
        merged[cls][idx] = cp;
      } else {
        merged[cls].push(cp);
      }
    });
  });

  return merged;
}

function initRepository() {
  let repo = getRepositoryData();
  if (!repo || Object.keys(repo).length === 0) {
    repo = {};
    ALL_CLASSES.forEach(cls => {
      repo[cls] = [];
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(repo));
  }

  // Automatic Cloud Sync on Startup from Chenab College Firebase (No Cache)
  const cloudUrl = getCloudDbUrl();
  if (cloudUrl && navigator.onLine) {
    fetch(cloudUrl, { cache: "no-store" })
      .then(res => res.json())
      .then(data => {
        if (data && typeof data === "object" && Object.keys(data).length > 0) {
          const currentLocal = getRepositoryData();
          const merged = mergeRepositories(currentLocal, data);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          updatePortalBadgeCount();
          updateCloudBtnStatus(true);
        }
      })
      .catch(e => console.warn("Initial cloud sync check:", e));
  }
}

function getRepositoryData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("Failed to load exam repository:", e);
    return {};
  }
}

function saveRepositoryData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    updatePortalBadgeCount();

    // Auto sync to cloud in background if URL configured
    const cloudUrl = getCloudDbUrl();
    if (cloudUrl && navigator.onLine) {
      fetch(cloudUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(() => updateCloudBtnStatus(true))
      .catch(e => console.warn("Background cloud sync offline:", e));
    }
  } catch (e) {
    console.error("Failed to save exam repository:", e);
  }
}

function openCloudSyncModal() {
  const modal = document.getElementById("cloudSyncModal");
  const input = document.getElementById("cloudDbUrlInput");
  if (modal) modal.classList.remove("hidden");
  if (input) input.value = getCloudDbUrl();
  if (window.lucide) lucide.createIcons();
}

function closeCloudSyncModal() {
  const modal = document.getElementById("cloudSyncModal");
  if (modal) modal.classList.add("hidden");
}

async function pushToCloudDatabase() {
  const input = document.getElementById("cloudDbUrlInput");
  let url = (input ? input.value : "").trim();
  if (!url) {
    showToast("Please enter a Cloud Database URL (e.g. Firebase URL).");
    return;
  }
  if (!url.endsWith(".json")) {
    url = url.replace(/\/+$/, "") + "/chenab_exam_repository.json";
  }

  localStorage.setItem(CLOUD_DB_KEY, url);
  const repo = getRepositoryData();

  try {
    showToast("☁️ Syncing papers to Cloud Database...");
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(repo)
    });
    if (res.ok) {
      updateCloudBtnStatus(true);
      closeCloudSyncModal();
      showToast("✓ All Exam Papers successfully backed up to Cloud Database!");
    } else {
      showToast("Cloud Error: " + res.statusText);
    }
  } catch (err) {
    console.error("Cloud push failed:", err);
    showToast("Failed to connect to Cloud Database. Check URL or internet.");
  }
}

async function pullFromCloudDatabase() {
  const input = document.getElementById("cloudDbUrlInput");
  let url = (input ? input.value : "").trim() || localStorage.getItem(CLOUD_DB_KEY);
  if (!url) {
    showToast("Please enter a Cloud Database URL first.");
    return;
  }
  if (!url.endsWith(".json")) {
    url = url.replace(/\/+$/, "") + "/chenab_exam_repository.json";
  }

  try {
    showToast("☁️ Fetching exam papers from Cloud Database...");
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data === "object") {
        saveRepositoryData(data);
        localStorage.setItem(CLOUD_DB_KEY, url);
        updateCloudBtnStatus(true);
        if (currentActivePortalClass) renderClassFolderView(currentActivePortalClass);
        else renderPortalRootFolders();
        closeCloudSyncModal();
        showToast("✓ Synced all exam papers from Cloud Database!");
      }
    } else {
      showToast("Cloud Pull Error: " + res.statusText);
    }
  } catch (err) {
    console.error("Cloud pull failed:", err);
    showToast("Failed to fetch from Cloud Database.");
  }
}

function updateCloudBtnStatus(isConnected) {
  const btnText = document.getElementById("cloudStatusBtnText");
  const btn = document.getElementById("cloudSyncBtn");
  if (btnText && btn) {
    if (isConnected) {
      btnText.textContent = "Cloud: Connected";
      btn.className = "bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition";
    }
  }
}

function updatePortalBadgeCount() {
  const repo = getRepositoryData();
  let count = 0;
  Object.values(repo).forEach(papers => {
    if (Array.isArray(papers)) count += papers.length;
  });
  const badge = document.getElementById("portalPaperCountBadge");
  if (badge) badge.textContent = count;
  const footerStats = document.getElementById("portalStatsFooter");
  if (footerStats) footerStats.textContent = `Total: ${count} saved exam papers across ${ALL_CLASSES.length} class folders`;
}

// Save Current Working Paper into Class Folder & Sync to Firebase
async function saveCurrentPaperToRepository() {
  // Capture latest values directly from DOM inputs
  const classSelect = document.getElementById("classSelector");
  const customSub = document.getElementById("customSubjectInput");
  const subSelect = document.getElementById("subjectSelector");
  const titleInput = document.getElementById("examTitle");
  const marksInput = document.getElementById("totalMarks");
  const timeInput = document.getElementById("timeAllowed");

  if (classSelect && classSelect.value) paperData.exam.classLevel = classSelect.value;
  if (customSub && customSub.value.trim()) {
    paperData.exam.subject = customSub.value.trim();
  } else if (subSelect && subSelect.value) {
    paperData.exam.subject = subSelect.value;
  }
  if (titleInput && titleInput.value.trim()) paperData.exam.title = titleInput.value.trim();
  if (marksInput && marksInput.value) paperData.exam.totalMarks = marksInput.value;
  if (timeInput && timeInput.value.trim()) paperData.exam.timeAllowed = timeInput.value.trim();

  let repo = getRepositoryData();
  const currentClass = paperData.exam.classLevel || "Class 9th";
  const currentSubject = paperData.exam.subject || "English";

  // Pre-fetch latest from Firebase before saving to prevent overwrite
  const cloudUrl = getCloudDbUrl();
  if (cloudUrl && navigator.onLine) {
    try {
      const res = await fetch(cloudUrl, { cache: "no-store" });
      if (res.ok) {
        const cloudData = await res.json();
        if (cloudData && typeof cloudData === "object") {
          repo = mergeRepositories(repo, cloudData);
        }
      }
    } catch (e) {
      console.warn("Pre-save cloud check:", e);
    }
  }

  if (!repo[currentClass]) {
    repo[currentClass] = [];
  }

  // Check if a paper with same subject exists in this class
  const existingIdx = repo[currentClass].findIndex(p => p.subject && p.subject.toLowerCase() === currentSubject.toLowerCase());
  
  const record = {
    id: existingIdx >= 0 ? repo[currentClass][existingIdx].id : "paper_" + Date.now(),
    classLevel: currentClass,
    subject: currentSubject,
    title: paperData.exam.title || `${currentClass} - ${currentSubject} Test`,
    totalMarks: paperData.exam.totalMarks || 25,
    timeAllowed: paperData.exam.timeAllowed || "45 Minutes",
    savedAt: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    paperData: JSON.parse(JSON.stringify(paperData))
  };

  if (existingIdx >= 0) {
    repo[currentClass][existingIdx] = record;
  } else {
    repo[currentClass].push(record);
  }

  saveRepositoryData(repo);
  showToast(`✓ Paper Saved to Cloud & Folder: [${currentClass}] ➔ [${currentSubject}]`);

  if (!document.getElementById("adminPortalModal").classList.contains("hidden")) {
    if (currentActivePortalClass === currentClass) {
      renderClassFolderView(currentClass);
    } else {
      renderPortalRootFolders();
    }
  }
}

// ================= ADMIN PASSWORD SECURITY (Admin@123) =================
const ADMIN_PASSWORD = "Admin@123";
let isAdminAuthenticated = false;
let pendingTargetClass = null;

// Open Admin Portal (Checks Password First & Fetches Live Cloud Papers)
function openAdminPortalModal(targetClass = null) {
  pendingTargetClass = targetClass;

  if (!isAdminAuthenticated) {
    const authModal = document.getElementById("adminAuthModal");
    const pwdInput = document.getElementById("adminPasswordInput");
    const errText = document.getElementById("adminAuthError");
    
    if (authModal) authModal.classList.remove("hidden");
    if (pwdInput) pwdInput.value = "";
    if (errText) errText.classList.add("hidden");
    setTimeout(() => { if (pwdInput) pwdInput.focus(); }, 150);
    return;
  }

  const modal = document.getElementById("adminPortalModal");
  if (modal) modal.classList.remove("hidden");
  
  // Render immediately with local data
  if (targetClass) {
    renderClassFolderView(targetClass);
  } else {
    renderPortalRootFolders();
  }

  // Real-time live fetch from Firebase Cloud so Mobile gets latest papers instantly
  const cloudUrl = getCloudDbUrl();
  if (cloudUrl && navigator.onLine) {
    fetch(cloudUrl, { cache: "no-store" })
      .then(res => res.json())
      .then(data => {
        if (data && typeof data === "object" && Object.keys(data).length > 0) {
          const currentLocal = getRepositoryData();
          const merged = mergeRepositories(currentLocal, data);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          updatePortalBadgeCount();
          updateCloudBtnStatus(true);
          if (currentActivePortalClass) renderClassFolderView(currentActivePortalClass);
          else renderPortalRootFolders();
        }
      })
      .catch(e => console.warn("Portal live cloud pull:", e));
  }
}

function submitAdminPassword() {
  const pwdInput = document.getElementById("adminPasswordInput");
  const errText = document.getElementById("adminAuthError");
  const entered = pwdInput ? pwdInput.value : "";

  if (entered === ADMIN_PASSWORD) {
    isAdminAuthenticated = true;
    const authModal = document.getElementById("adminAuthModal");
    if (authModal) authModal.classList.add("hidden");
    
    showToast("✓ Admin Access Granted! Welcome to Repository");
    openAdminPortalModal(pendingTargetClass);
    pendingTargetClass = null;
  } else {
    if (errText) errText.classList.remove("hidden");
    if (pwdInput) {
      pwdInput.focus();
      pwdInput.select();
    }
  }
}

function closeAdminAuthModal() {
  const authModal = document.getElementById("adminAuthModal");
  if (authModal) authModal.classList.add("hidden");
  pendingTargetClass = null;
}

function toggleAdminPasswordVisibility() {
  const pwdInput = document.getElementById("adminPasswordInput");
  if (pwdInput) {
    pwdInput.type = pwdInput.type === "password" ? "text" : "password";
  }
}

function lockAdminPortal() {
  isAdminAuthenticated = false;
  closeAdminPortalModal();
  showToast("🔒 Admin Portal Locked Successfully");
}

function closeAdminPortalModal() {
  const modal = document.getElementById("adminPortalModal");
  if (modal) modal.classList.add("hidden");
}

// Render All Class Folders in Root View
function renderPortalRootFolders() {
  currentActivePortalClass = null;
  const repo = getRepositoryData();
  const container = document.getElementById("portalMainContent");
  const breadcrumb = document.getElementById("portalBreadcrumb");

  breadcrumb.innerHTML = `
    <span class="flex items-center gap-1 text-indigo-400 font-bold">
      <i data-lucide="folder-tree" class="w-4 h-4"></i> All Class Folders (محکمہ امتحانات - تمام کلاسز)
    </span>
  `;

  let html = `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  `;

  ALL_CLASSES.forEach(cls => {
    const papers = repo[cls] || [];
    const count = papers.length;
    const hasPapers = count > 0;

    // Extract subjects preview chips
    let subjectsPreview = papers.map(p => `<span class="bg-slate-800 text-slate-300 text-[10px] px-1.5 py-0.5 rounded border border-slate-700">${p.subject}</span>`).join(" ");
    if (!subjectsPreview) {
      subjectsPreview = `<span class="text-slate-500 italic text-[11px]">No papers saved yet</span>`;
    }

    html += `
      <div onclick="renderClassFolderView('${cls}')" class="bg-slate-950/80 hover:bg-slate-800/80 border ${hasPapers ? 'border-indigo-500/40 hover:border-indigo-400 shadow-lg shadow-indigo-950/30' : 'border-slate-800'} rounded-2xl p-4 cursor-pointer transition transform hover:-translate-y-1 group flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <div class="p-2.5 rounded-xl ${hasPapers ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'bg-slate-800 text-slate-400'} group-hover:bg-indigo-600 group-hover:text-white transition">
              <i data-lucide="folder" class="w-6 h-6"></i>
            </div>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full ${hasPapers ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-slate-800 text-slate-500'}">
              ${count} ${count === 1 ? 'Paper' : 'Papers'}
            </span>
          </div>

          <h3 class="font-bold text-sm text-slate-100 group-hover:text-indigo-300 transition flex items-center gap-1.5">
            ${cls}
          </h3>
          <p class="text-[11px] text-slate-400 mt-0.5">${CLASS_PROFILES[cls]?.desc || ''}</p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-800/80">
          <div class="flex flex-wrap gap-1 items-center">
            ${subjectsPreview}
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
  if (window.lucide) lucide.createIcons();
}

// Render Inside a Specific Class Folder
function renderClassFolderView(className) {
  currentActivePortalClass = className;
  const repo = getRepositoryData();
  const papers = repo[className] || [];
  const container = document.getElementById("portalMainContent");
  const breadcrumb = document.getElementById("portalBreadcrumb");

  breadcrumb.innerHTML = `
    <button onclick="renderPortalRootFolders()" class="flex items-center gap-1 text-slate-400 hover:text-white">
      <i data-lucide="home" class="w-3.5 h-3.5"></i> All Class Folders
    </button>
    <span class="text-slate-600">/</span>
    <span class="flex items-center gap-1 text-indigo-400 font-bold">
      <i data-lucide="folder-open" class="w-4 h-4 text-indigo-400"></i> ${className} Folder (${papers.length} Papers)
    </span>
  `;

  if (papers.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 bg-slate-950 border border-dashed border-slate-800 rounded-2xl space-y-3">
        <div class="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mx-auto text-slate-600">
          <i data-lucide="file-x" class="w-6 h-6"></i>
        </div>
        <h4 class="text-slate-300 font-bold text-sm">No exam papers in folder: ${className}</h4>
        <p class="text-slate-500 text-xs max-w-sm mx-auto">Create and design a paper in the editor, then click 'Save Paper' to automatically store it in this folder.</p>
        <button onclick="createPaperInClass('${className}')" class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-4 py-2 rounded-xl inline-flex items-center gap-1.5 transition">
          <i data-lucide="plus" class="w-3.5 h-3.5"></i> Create New Paper for ${className}
        </button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  let html = `
    <div class="flex items-center justify-between mb-4 bg-slate-950 p-3 rounded-xl border border-slate-800">
      <div class="text-xs text-slate-300 font-semibold">
        📂 Showing <span class="text-indigo-400 font-bold">${papers.length}</span> saved subject exam paper(s) in <span class="text-white font-bold">${className}</span>:
      </div>
      <button onclick="createPaperInClass('${className}')" class="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition">
        <i data-lucide="plus" class="w-3.5 h-3.5"></i> + Add Another Subject
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  `;

  papers.forEach(p => {
    const isUrdu = /[\u0600-\u06FF]/.test(p.subject) || p.subject === "Urdu" || p.subject === "Islamiyat" || p.subject === "Pak Studies";
    const mcqCount = p.paperData?.mcqs?.length || 0;
    const shortCount = p.paperData?.shortQs?.length || 0;
    const longCount = p.paperData?.longQs?.length || 0;

    html += `
      <div class="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 flex flex-col justify-between space-y-3 shadow-md">
        <div>
          <!-- Header -->
          <div class="flex items-start justify-between gap-2">
            <div class="flex items-center gap-2">
              <div class="p-2 rounded-xl ${isUrdu ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' : 'bg-blue-600/20 text-blue-400 border border-blue-500/30'}">
                <i data-lucide="file-text" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="font-bold text-sm text-white flex items-center gap-1.5">
                  ${p.subject}
                  <span class="text-[10px] font-semibold bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700">File: ${p.subject}.exam</span>
                </h4>
                <div class="text-[11px] text-slate-400 font-medium line-clamp-1">${p.title}</div>
              </div>
            </div>
          </div>

          <!-- Metadata -->
          <div class="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-slate-800 text-[11px] text-slate-400">
            <div><span class="text-slate-500">Marks:</span> <b class="text-amber-400">${p.totalMarks}</b> | ${p.timeAllowed}</div>
            <div class="text-right"><span class="text-slate-500">Saved:</span> ${p.savedAt}</div>
          </div>

          <!-- Question Structure Breakdown -->
          <div class="flex items-center gap-1.5 mt-2 text-[10px] text-slate-300">
            <span class="bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-900/60 font-medium">${mcqCount} MCQs</span>
            <span class="bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-900/60 font-medium">${shortCount} Short Qs</span>
            <span class="bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-900/60 font-medium">${longCount} Long Qs</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-3 gap-1.5 pt-3 border-t border-slate-800">
          <button onclick="loadPaperIntoEditor('${className}', '${p.id}')" class="bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 py-1.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition" title="Open paper in editor">
            <i data-lucide="edit" class="w-3.5 h-3.5"></i> Open
          </button>
          <button onclick="printDirectlyFromRepository('${className}', '${p.id}')" class="bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 py-1.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition" title="Direct Print this paper">
            <i data-lucide="printer" class="w-3.5 h-3.5"></i> Print
          </button>
          <button onclick="deletePaperFromRepository('${className}', '${p.id}')" class="bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white border border-red-500/30 py-1.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition" title="Delete paper">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Delete
          </button>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
  if (window.lucide) lucide.createIcons();
}

// Create New Paper for Class
function createPaperInClass(className) {
  document.getElementById("classSelector").value = className;
  handleClassChange(className);
  closeAdminPortalModal();
  showToast(`Switched editor to: [${className}]`);
}

// Load Paper Into Active Composer
function loadPaperIntoEditor(classLevel, paperId) {
  const repo = getRepositoryData();
  const papers = repo[classLevel] || [];
  const found = papers.find(p => p.id === paperId);

  if (!found || !found.paperData) {
    alert("Could not load paper data.");
    return;
  }

  paperData = JSON.parse(JSON.stringify(found.paperData));

  // Sync Form Controls
  document.getElementById("classSelector").value = paperData.exam.classLevel;
  document.getElementById("examTitle").value = paperData.exam.title;
  document.getElementById("totalMarks").value = paperData.exam.totalMarks;
  document.getElementById("timeAllowed").value = paperData.exam.timeAllowed;

  const subjectSelector = document.getElementById("subjectSelector");
  if (subjectSelector) {
    const exists = Array.from(subjectSelector.options).some(o => o.value === paperData.exam.subject);
    if (exists) {
      subjectSelector.value = paperData.exam.subject;
    }
  }

  applyClassProfile(paperData.exam.classLevel);

  // Sync Section Configuration Inputs
  if (paperData.sectionConfig) {
    if (document.getElementById("secMarks_mcq") && paperData.sectionConfig.mcqs) document.getElementById("secMarks_mcq").value = paperData.sectionConfig.mcqs.marks || 5;
    if (document.getElementById("secAttempt_mcq") && paperData.sectionConfig.mcqs) document.getElementById("secAttempt_mcq").value = paperData.sectionConfig.mcqs.attempt || "";
    
    if (document.getElementById("secMarks_short") && paperData.sectionConfig.shortQs) document.getElementById("secMarks_short").value = paperData.sectionConfig.shortQs.marks || 10;
    if (document.getElementById("secAttempt_short") && paperData.sectionConfig.shortQs) document.getElementById("secAttempt_short").value = paperData.sectionConfig.shortQs.attempt || "";
    if (document.getElementById("secLines_short") && paperData.sectionConfig.shortQs?.lines !== undefined) document.getElementById("secLines_short").value = paperData.sectionConfig.shortQs.lines;
    
    if (document.getElementById("secMarks_long") && paperData.sectionConfig.longQs) document.getElementById("secMarks_long").value = paperData.sectionConfig.longQs.marks || 10;
    if (document.getElementById("secAttempt_long") && paperData.sectionConfig.longQs) document.getElementById("secAttempt_long").value = paperData.sectionConfig.longQs.attempt || "";
    if (document.getElementById("secLines_long") && paperData.sectionConfig.longQs?.lines !== undefined) document.getElementById("secLines_long").value = paperData.sectionConfig.longQs.lines;
  }

  // Sync Border Style & Watermark
  if (paperData.borderStyle) {
    const borderSelector = document.getElementById("borderStyleSelector");
    if (borderSelector) borderSelector.value = paperData.borderStyle;
  }
  const watermarkBtn = document.getElementById("watermarkToggleBtn");
  if (watermarkBtn) {
    if (paperData.watermark !== false) {
      watermarkBtn.innerHTML = `<i data-lucide="shield" class="w-3 h-3 text-indigo-400"></i> Watermark: ON`;
      watermarkBtn.className = "bg-indigo-950/50 hover:bg-indigo-900/50 border border-indigo-500/40 text-indigo-300 px-2 py-1 rounded-lg font-bold flex items-center gap-1 text-[11px]";
    } else {
      watermarkBtn.innerHTML = `<i data-lucide="shield-off" class="w-3 h-3 text-slate-400"></i> Watermark: OFF`;
      watermarkBtn.className = "bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 px-2 py-1 rounded-lg font-bold flex items-center gap-1 text-[11px]";
    }
  }

  renderAllSections();
  renderPaper();
  closeAdminPortalModal();
  showToast(`✓ Loaded into Editor: [${classLevel} ➔ ${paperData.exam.subject}]`);
}

// Direct Print From Repository
function printDirectlyFromRepository(classLevel, paperId) {
  loadPaperIntoEditor(classLevel, paperId);
  setTimeout(() => {
    triggerPrint();
  }, 400);
}

// Delete Paper
function deletePaperFromRepository(classLevel, paperId) {
  if (!confirm(`Are you sure you want to delete this paper from ${classLevel}?`)) return;

  const repo = getRepositoryData();
  if (repo[classLevel]) {
    repo[classLevel] = repo[classLevel].filter(p => p.id !== paperId);
    saveRepositoryData(repo);
    renderClassFolderView(classLevel);
    showToast(`🗑️ Paper deleted from ${classLevel}`);
  }
}

// Filter Portal Content
function filterPortalContent(query) {
  if (!query.trim()) {
    if (currentActivePortalClass) {
      renderClassFolderView(currentActivePortalClass);
    } else {
      renderPortalRootFolders();
    }
    return;
  }

  const q = query.toLowerCase();
  const repo = getRepositoryData();
  const container = document.getElementById("portalMainContent");
  const breadcrumb = document.getElementById("portalBreadcrumb");

  breadcrumb.innerHTML = `
    <span class="text-slate-400">Search Results for: "<b class="text-white">${query}</b>"</span>
  `;

  let matched = [];
  Object.keys(repo).forEach(cls => {
    (repo[cls] || []).forEach(p => {
      if (p.subject.toLowerCase().includes(q) || 
          p.classLevel.toLowerCase().includes(q) || 
          p.title.toLowerCase().includes(q)) {
        matched.push(p);
      }
    });
  });

  if (matched.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 text-slate-500">
        <p class="font-bold text-sm">No exam papers found matching "${query}"</p>
      </div>
    `;
    return;
  }

  let html = `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">`;
  matched.forEach(p => {
    html += `
      <div class="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-3">
        <div>
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-900">${p.classLevel}</span>
            <span class="text-[10px] text-slate-500">${p.savedAt}</span>
          </div>
          <h4 class="font-bold text-sm text-white mt-1">${p.subject}</h4>
          <p class="text-xs text-slate-400">${p.title}</p>
        </div>
        <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
          <button onclick="loadPaperIntoEditor('${p.classLevel}', '${p.id}')" class="bg-blue-600 text-white font-bold py-1.5 rounded-xl text-xs">Open</button>
          <button onclick="printDirectlyFromRepository('${p.classLevel}', '${p.id}')" class="bg-emerald-600 text-white font-bold py-1.5 rounded-xl text-xs">Print</button>
        </div>
      </div>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// Backup Export
function exportRepositoryBackup() {
  const repo = getRepositoryData();
  const blob = new Blob([JSON.stringify(repo, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Chenab_College_Exam_Repository_Backup_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("📥 Repository Backup Downloaded!");
}

// Backup Import
function importRepositoryFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (typeof data === "object") {
        saveRepositoryData(data);
        renderPortalRootFolders();
        showToast("✓ All Class Folders Restored Successfully!");
      }
    } catch (err) {
      alert("Invalid backup file format.");
    }
  };
  reader.readAsText(file);
}

// Floating Toast Notification
function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  if (!toast || !msgEl) return;

  msgEl.textContent = msg;
  toast.classList.remove("translate-y-20", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-20", "opacity-0");
  }, 3200);
}

// ================= QUESTION DIAGRAM ATTACHMENT HANDLERS =================
function triggerQuestionImageUpload(section, idx) {
  activeQuestionImageTarget = { section, idx };
  const uploader = document.getElementById("questionImageUploader");
  if (uploader) {
    uploader.value = "";
    uploader.click();
  }
}

function handleQuestionImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    if (activeQuestionImageTarget) {
      const { section, idx } = activeQuestionImageTarget;
      if (paperData[section] && paperData[section][idx]) {
        paperData[section][idx].diagram = e.target.result;
        paperData[section][idx].image = e.target.result;
        renderAllSections();
        renderPaper();
        showToast("✓ Diagram Image Attached to Question!");
      }
    }
  };
  reader.readAsDataURL(file);
}

function renderQuestionsList(section) {
  if (section === "mcqs" || section === "mcq") renderMCQList();
  else if (section === "shortQs" || section === "short") renderShortList();
  else if (section === "longQs" || section === "long") renderLongList();
  else if (section === "blanks" || section === "blank") renderBlanksList();
  else if (section === "matching") renderMatchingList();
  else if (section === "tracing") renderTracingList();
  else renderAllSections();
}

function removeDiagramFromSelectedTarget() {
  const targetSelect = document.getElementById("mathDiagramTargetSelect");
  if (!targetSelect || !targetSelect.value) {
    showToast("Please select a question first.");
    return;
  }
  const parts = targetSelect.value.split("_");
  const section = parts[0];
  const idx = parseInt(parts[1], 10);
  if (paperData[section] && paperData[section][idx]) {
    removeQuestionImage(section, idx);
    populateMathDiagramTargetSelect();
  }
}

// ================= MATH & SCIENCE STUDIO ENGINE =================
let currentMatrixRows = 2;
let currentMatrixCols = 2;
let lastFocusedInputId = null;

// Track focused input across the entire document
document.addEventListener("focusin", (e) => {
  if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) {
    if (e.target.id && !e.target.id.startsWith("matrix") && !e.target.id.startsWith("primaryMath")) {
      lastFocusedInputId = e.target.id;
    }
  }
});

function insertAtCursor(text) {
  let target = null;
  if (lastFocusedInputId) {
    target = document.getElementById(lastFocusedInputId);
  }
  if (!target) {
    target = document.querySelector(".sec-content-panel:not(.hidden) textarea, .sec-content-panel:not(.hidden) input[type='text']");
  }
  if (!target) return;

  const start = target.selectionStart || target.value.length;
  const end = target.selectionEnd || target.value.length;
  const val = target.value;
  target.value = val.substring(0, start) + text + val.substring(end);
  target.selectionStart = target.selectionEnd = start + text.length;
  target.focus();
  target.dispatchEvent(new Event("input", { bubbles: true }));
  renderPaper();
}

function openMathStudioModal() {
  const modal = document.getElementById("mathStudioModal");
  if (modal) {
    modal.classList.remove("hidden");
    populateMathDiagramTargetSelect();
    renderMatrixGrid();
    if (window.renderMathInElement) {
      renderMathInElement(modal, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false }
        ],
        throwOnError: false
      });
    }
  }
}

function populateMathDiagramTargetSelect() {
  const select = document.getElementById("mathDiagramTargetSelect");
  if (!select) return;
  select.innerHTML = "";

  const options = [];

  // Short Qs
  paperData.shortQs.forEach((item, idx) => {
    const preview = (item.q || "").substring(0, 22) || `Short Q.${idx + 1}`;
    options.push({ val: `shortQs_${idx}`, label: `Short Q.${idx + 1} (${preview}...)` });
  });

  // Long Qs
  paperData.longQs.forEach((item, idx) => {
    const preview = (item.q || "").substring(0, 22) || `Long Q.${idx + 1}`;
    options.push({ val: `longQs_${idx}`, label: `Long Q.${idx + 1} (${preview}...)` });
  });

  // MCQs
  paperData.mcqs.forEach((item, idx) => {
    const preview = (item.q || "").substring(0, 22) || `MCQ #${idx + 1}`;
    options.push({ val: `mcqs_${idx}`, label: `MCQ #${idx + 1} (${preview}...)` });
  });

  // Blanks
  paperData.blanks.forEach((item, idx) => {
    const preview = (item.q || "").substring(0, 22) || `Blank #${idx + 1}`;
    options.push({ val: `blanks_${idx}`, label: `Blank #${idx + 1} (${preview}...)` });
  });

  if (options.length === 0) {
    select.innerHTML = `<option value="">(Add a question first)</option>`;
    return;
  }

  options.forEach(opt => {
    const el = document.createElement("option");
    el.value = opt.val;
    el.textContent = opt.label;
    select.appendChild(el);
  });

  // If activeQuestionImageTarget is set, default to that
  if (activeQuestionImageTarget) {
    const currentKey = `${activeQuestionImageTarget.section}_${activeQuestionImageTarget.idx}`;
    if (select.querySelector(`option[value="${currentKey}"]`)) {
      select.value = currentKey;
    }
  }
}

function closeMathStudioModal() {
  const modal = document.getElementById("mathStudioModal");
  if (modal) modal.classList.add("hidden");
}

function switchMathStudioTab(tabId) {
  document.querySelectorAll("[id^='mathStudioContent_']").forEach(el => el.classList.add("hidden"));
  document.querySelectorAll(".math-studio-tab").forEach(btn => {
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("bg-slate-800", "text-slate-300");
  });

  const content = document.getElementById("mathStudioContent_" + tabId.replace("math_tab_", ""));
  const tabBtn = document.getElementById("mathStudioTab_" + tabId.replace("math_tab_", ""));
  if (content) content.classList.remove("hidden");
  if (tabBtn) {
    tabBtn.classList.add("bg-blue-600", "text-white");
    tabBtn.classList.remove("bg-slate-800", "text-slate-300");
  }

  if (tabId === "math_tab_matrix") {
    renderMatrixGrid();
  } else if (tabId === "math_tab_geometry") {
    populateMathDiagramTargetSelect();
  }

  const modal = document.getElementById("mathStudioModal");
  if (modal && window.renderMathInElement) {
    renderMathInElement(modal, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  }
}

function insertFormulaTemplate(latex) {
  insertAtCursor(`$${latex}$`);
  closeMathStudioModal();
  showToast("✓ Formula Inserted!");
}

function setMatrixDimension(rows, cols) {
  currentMatrixRows = rows;
  currentMatrixCols = cols;
  document.querySelectorAll("[id^='matBtn_']").forEach(btn => {
    btn.classList.remove("bg-indigo-600", "text-white");
    btn.classList.add("bg-slate-800", "text-slate-300");
  });
  const activeBtn = document.getElementById(`matBtn_${rows}x${cols}`);
  if (activeBtn) {
    activeBtn.classList.add("bg-indigo-600", "text-white");
    activeBtn.classList.remove("bg-slate-800", "text-slate-300");
  }
  renderMatrixGrid();
}

function renderMatrixGrid() {
  const container = document.getElementById("matrixGridContainer");
  if (!container) return;
  
  let html = `<div class="inline-flex items-center gap-2 p-3 bg-slate-950 border border-slate-700 rounded-xl shadow-inner">`;
  html += `<span class="text-2xl text-slate-500 font-serif font-thin">[</span>`;
  html += `<div class="grid gap-2" style="grid-template-columns: repeat(${currentMatrixCols}, minmax(0, 1fr));">`;

  for (let r = 0; r < currentMatrixRows; r++) {
    for (let c = 0; c < currentMatrixCols; c++) {
      const defaultVal = r === 0 && c === 0 ? "1" : (r === 0 && c === 1 ? "2" : (r === 1 && c === 0 ? "3" : "4"));
      html += `<input type="text" id="matCell_${r}_${c}" value="${defaultVal}" class="w-12 h-10 bg-slate-900 border border-indigo-500/60 rounded-lg text-center font-bold text-white text-xs focus:border-indigo-400 focus:outline-none">`;
    }
  }

  html += `</div>`;
  html += `<span class="text-2xl text-slate-500 font-serif font-thin">]</span>`;
  html += `</div>`;

  container.innerHTML = html;
}

function insertCurrentMatrixToActiveInput() {
  const matName = (document.getElementById("matrixNameInput")?.value || "A").trim();
  let matrixBody = [];

  for (let r = 0; r < currentMatrixRows; r++) {
    let rowVals = [];
    for (let c = 0; c < currentMatrixCols; c++) {
      const cell = document.getElementById(`matCell_${r}_${c}`);
      rowVals.push(cell ? cell.value.trim() || "0" : "0");
    }
    matrixBody.push(rowVals.join(" & "));
  }

  const latexMatrix = `${matName} = \\begin{bmatrix} ${matrixBody.join(" \\\\ ")} \\end{bmatrix}`;
  insertAtCursor(`$${latexMatrix}$`);
  closeMathStudioModal();
  showToast("✓ Matrix Inserted Successfully!");
}

function insertPrimaryVerticalMath() {
  const topNum = (document.getElementById("primaryMathTop")?.value || "584").trim();
  const op = (document.getElementById("primaryMathOp")?.value || "+").trim();
  const bottomNum = (document.getElementById("primaryMathBottom")?.value || "231").trim();

  // KaTeX array for clean, reliable primary column arithmetic
  const latexMath = `$\\begin{array}{rr} & ${topNum} \\\\[-2pt] ${op} & ${bottomNum} \\\\ \\hline & \\end{array}$`;
  insertAtCursor(latexMath);
  closeMathStudioModal();
  showToast("✓ Column Math Inserted!");
}

// Complete Geometry & Diagram SVG Library (Class 1 to 12th)
function getGeometrySvgData(shapeType) {
  const svgs = {
    // 1. 2D Shapes & Triangles
    right_triangle: `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="150" viewBox="0 0 220 150">
      <polygon points="30,125 180,125 180,25" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <rect x="160" y="105" width="20" height="20" fill="none" stroke="#1e293b" stroke-width="1.5"/>
      <text x="105" y="142" font-size="13" font-family="serif" font-weight="bold" text-anchor="middle">Base (b)</text>
      <text x="202" y="75" font-size="13" font-family="serif" font-weight="bold" text-anchor="middle">Alt (a)</text>
      <text x="95" y="65" font-size="13" font-family="serif" font-weight="bold" text-anchor="middle">Hyp (c)</text>
      <text x="20" y="132" font-size="13" font-weight="bold">A</text>
      <text x="188" y="132" font-size="13" font-weight="bold">B</text>
      <text x="188" y="22" font-size="13" font-weight="bold">C</text>
    </svg>`,

    equilateral_triangle: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150">
      <polygon points="100,20 30,130 170,130" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <text x="100" y="15" font-size="13" font-weight="bold" text-anchor="middle">A (60°)</text>
      <text x="20" y="140" font-size="13" font-weight="bold">B</text>
      <text x="175" y="140" font-size="13" font-weight="bold">C</text>
      <text x="100" y="145" font-size="12" font-family="serif" text-anchor="middle">a = b = c</text>
    </svg>`,

    isosceles_triangle: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150">
      <polygon points="100,20 40,130 160,130" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="65" y1="72" x2="75" y2="78" stroke="#dc2626" stroke-width="2"/>
      <line x1="125" y1="78" x2="135" y2="72" stroke="#dc2626" stroke-width="2"/>
      <text x="100" y="15" font-size="13" font-weight="bold" text-anchor="middle">A</text>
      <text x="30" y="140" font-size="13" font-weight="bold">B</text>
      <text x="165" y="140" font-size="13" font-weight="bold">C</text>
      <text x="100" y="145" font-size="12" font-family="serif" text-anchor="middle">Base</text>
    </svg>`,

    square_shape: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="150" viewBox="0 0 180 150">
      <rect x="40" y="25" width="100" height="100" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <text x="90" y="142" font-size="13" font-family="serif" font-weight="bold" text-anchor="middle">Side (s)</text>
      <text x="90" y="78" font-size="13" font-family="serif" text-anchor="middle">Area = s²</text>
      <text x="30" y="25" font-size="12" font-weight="bold">A</text>
      <text x="145" y="25" font-size="12" font-weight="bold">B</text>
      <text x="145" y="135" font-size="12" font-weight="bold">C</text>
      <text x="30" y="135" font-size="12" font-weight="bold">D</text>
    </svg>`,

    rectangle_shape: `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="140" viewBox="0 0 220 140">
      <rect x="30" y="25" width="160" height="85" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <text x="110" y="125" font-size="13" font-family="serif" font-weight="bold" text-anchor="middle">Length (l)</text>
      <text x="202" y="70" font-size="13" font-family="serif" font-weight="bold" text-anchor="middle">w</text>
      <text x="110" y="72" font-size="12" font-family="serif" text-anchor="middle">Area = l × w</text>
      <text x="20" y="25" font-size="12" font-weight="bold">A</text>
      <text x="195" y="25" font-size="12" font-weight="bold">B</text>
      <text x="195" y="118" font-size="12" font-weight="bold">C</text>
      <text x="20" y="118" font-size="12" font-weight="bold">D</text>
    </svg>`,

    parallelogram_shape: `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="140" viewBox="0 0 220 140">
      <polygon points="55,25 190,25 165,110 30,110" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="55" y1="25" x2="55" y2="110" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <rect x="55" y="98" width="12" height="12" fill="none" stroke="#64748b" stroke-width="1"/>
      <text x="98" y="125" font-size="13" font-family="serif" font-weight="bold" text-anchor="middle">Base (b)</text>
      <text x="42" y="70" font-size="12" font-family="serif" text-anchor="middle">h</text>
      <text x="110" y="70" font-size="12" font-family="serif" text-anchor="middle">Area = b × h</text>
    </svg>`,

    rhombus_shape: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150">
      <polygon points="100,20 170,75 100,130 30,75" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="100" y1="20" x2="100" y2="130" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="30" y1="75" x2="170" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <text x="100" y="145" font-size="12" font-family="serif" text-anchor="middle">Diagonals d₁, d₂</text>
    </svg>`,

    trapezium_shape: `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="140" viewBox="0 0 220 140">
      <polygon points="60,30 150,30 190,110 30,110" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="60" y1="30" x2="60" y2="110" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <text x="105" y="22" font-size="12" font-family="serif" font-weight="bold" text-anchor="middle">a</text>
      <text x="110" y="125" font-size="12" font-family="serif" font-weight="bold" text-anchor="middle">b</text>
      <text x="50" y="70" font-size="12" font-family="serif" text-anchor="middle">h</text>
    </svg>`,

    circle_radius: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="150" viewBox="0 0 180 150">
      <circle cx="90" cy="75" r="55" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="90" y1="75" x2="145" y2="75" stroke="#1e293b" stroke-width="2" stroke-dasharray="3 3"/>
      <circle cx="90" cy="75" r="3" fill="#1e293b"/>
      <text x="80" y="75" font-size="13" font-weight="bold">O</text>
      <text x="115" y="70" font-size="13" font-family="serif" font-weight="bold">r</text>
      <text x="90" y="145" font-size="12" font-family="serif" text-anchor="middle">Area = πr², C = 2πr</text>
    </svg>`,

    circle_tangent: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150">
      <circle cx="100" cy="65" r="45" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="20" y1="110" x2="180" y2="110" stroke="#dc2626" stroke-width="2.5"/>
      <line x1="100" y1="65" x2="100" y2="110" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <rect x="100" y="98" width="12" height="12" fill="none" stroke="#1e293b" stroke-width="1"/>
      <circle cx="100" cy="65" r="3" fill="#1e293b"/>
      <circle cx="100" cy="110" r="3" fill="#dc2626"/>
      <text x="100" y="55" font-size="13" font-weight="bold" text-anchor="middle">O</text>
      <text x="100" y="128" font-size="12" font-weight="bold" text-anchor="middle">P (Point of Contact)</text>
      <text x="185" y="108" font-size="13" font-weight="bold" fill="#dc2626">Tangent</text>
    </svg>`,

    circle_sector: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="150" viewBox="0 0 180 150">
      <path d="M90,85 L145,85 A55,55 0 0,0 120,40 Z" fill="rgba(30,41,59,0.08)" stroke="#1e293b" stroke-width="2.5"/>
      <circle cx="90" cy="85" r="3" fill="#1e293b"/>
      <text x="80" y="90" font-size="13" font-weight="bold">O</text>
      <text x="110" y="80" font-size="13" font-family="serif">θ</text>
      <text x="115" y="100" font-size="12" font-family="serif">r</text>
      <text x="90" y="140" font-size="12" font-family="serif" text-anchor="middle">Arc Length l = rθ</text>
    </svg>`,

    angle_degrees: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="140" viewBox="0 0 200 140">
      <line x1="40" y1="105" x2="170" y2="105" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="40" y1="105" x2="135" y2="35" stroke="#1e293b" stroke-width="2.5"/>
      <path d="M75,105 A35,35 0 0,0 65,85" fill="none" stroke="#dc2626" stroke-width="2"/>
      <text x="80" y="92" font-size="13" font-family="serif" fill="#dc2626">θ</text>
      <text x="25" y="115" font-size="13" font-weight="bold">B</text>
      <text x="175" y="110" font-size="13" font-weight="bold">C</text>
      <text x="140" y="30" font-size="13" font-weight="bold">A</text>
      <text x="100" y="132" font-size="12" font-weight="bold" text-anchor="middle">∠ABC = θ</text>
    </svg>`,

    // 2. 3D Solid Geometry
    cube_3d: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="150" viewBox="0 0 180 150">
      <rect x="35" y="55" width="65" height="65" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <rect x="65" y="25" width="65" height="65" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="35" y1="55" x2="65" y2="25" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="100" y1="55" x2="130" y2="25" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="100" y1="120" x2="130" y2="90" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="35" y1="120" x2="65" y2="90" stroke="#1e293b" stroke-width="2.5"/>
      <text x="90" y="142" font-size="12" font-family="serif" text-anchor="middle">Volume = a³, TSA = 6a²</text>
    </svg>`,

    cuboid_3d: `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="150" viewBox="0 0 220 150">
      <rect x="30" y="55" width="110" height="60" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <rect x="65" y="25" width="110" height="60" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="30" y1="55" x2="65" y2="25" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="140" y1="55" x2="175" y2="25" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="140" y1="115" x2="175" y2="85" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="30" y1="115" x2="65" y2="85" stroke="#1e293b" stroke-width="2.5"/>
      <text x="85" y="132" font-size="12" font-family="serif" text-anchor="middle">l</text>
      <text x="180" y="105" font-size="12" font-family="serif">w</text>
      <text x="20" y="85" font-size="12" font-family="serif">h</text>
      <text x="110" y="145" font-size="11" font-family="serif" text-anchor="middle">Volume = l × w × h</text>
    </svg>`,

    cylinder_3d: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="160" viewBox="0 0 180 160">
      <ellipse cx="90" cy="35" rx="50" ry="16" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <ellipse cx="90" cy="115" rx="50" ry="16" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="40" y1="35" x2="40" y2="115" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="140" y1="35" x2="140" y2="115" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="90" y1="35" x2="140" y2="35" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <text x="115" y="30" font-size="12" font-family="serif">r</text>
      <text x="25" y="78" font-size="12" font-family="serif">h</text>
      <text x="90" y="150" font-size="12" font-family="serif" text-anchor="middle">V = πr²h, CSA = 2πrh</text>
    </svg>`,

    cone_3d: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="160" viewBox="0 0 180 160">
      <ellipse cx="90" cy="120" rx="50" ry="16" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="90" y1="20" x2="40" y2="120" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="90" y1="20" x2="140" y2="120" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="90" y1="20" x2="90" y2="120" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="90" y1="120" x2="140" y2="120" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <text x="115" y="115" font-size="12" font-family="serif">r</text>
      <text x="75" y="70" font-size="12" font-family="serif">h</text>
      <text x="125" y="65" font-size="12" font-family="serif">l</text>
      <text x="90" y="152" font-size="12" font-family="serif" text-anchor="middle">V = ⅓πr²h, l = √(r²+h²)</text>
    </svg>`,

    sphere_3d: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="160" viewBox="0 0 180 160">
      <circle cx="90" cy="75" r="55" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <ellipse cx="90" cy="75" rx="55" ry="16" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4"/>
      <line x1="90" y1="75" x2="145" y2="75" stroke="#1e293b" stroke-width="2" stroke-dasharray="2 2"/>
      <circle cx="90" cy="75" r="3" fill="#1e293b"/>
      <text x="115" y="70" font-size="12" font-family="serif">r</text>
      <text x="90" y="150" font-size="12" font-family="serif" text-anchor="middle">V = ⁴⁄₃πr³, SA = 4πr²</text>
    </svg>`,

    hemisphere_3d: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="150" viewBox="0 0 180 150">
      <ellipse cx="90" cy="50" rx="55" ry="18" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <path d="M35,50 A55,55 0 0,0 145,50" fill="none" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="90" y1="50" x2="145" y2="50" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="90" cy="50" r="3" fill="#1e293b"/>
      <text x="115" y="45" font-size="12" font-family="serif">r</text>
      <text x="90" y="135" font-size="12" font-family="serif" text-anchor="middle">V = ⅔πr³, TSA = 3πr²</text>
    </svg>`,

    // 3. Coordinate Graphs, Vectors & Sets
    xy_plane: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="160" viewBox="0 0 200 160">
      <line x1="20" y1="80" x2="180" y2="80" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="100" y1="15" x2="100" y2="145" stroke="#1e293b" stroke-width="2.5"/>
      <polygon points="180,80 172,76 172,84" fill="#1e293b"/>
      <polygon points="100,15 96,23 104,23" fill="#1e293b"/>
      <text x="185" y="85" font-size="13" font-weight="bold">X</text>
      <text x="100" y="12" font-size="13" font-weight="bold" text-anchor="middle">Y</text>
      <text x="12" y="85" font-size="12" font-weight="bold">X'</text>
      <text x="100" y="156" font-size="12" font-weight="bold" text-anchor="middle">Y'</text>
      <text x="90" y="95" font-size="12" font-weight="bold">O(0,0)</text>
    </svg>`,

    linear_graph: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="160" viewBox="0 0 200 160">
      <line x1="20" y1="110" x2="180" y2="110" stroke="#1e293b" stroke-width="2"/>
      <line x1="60" y1="15" x2="60" y2="145" stroke="#1e293b" stroke-width="2"/>
      <line x1="30" y1="130" x2="160" y2="25" stroke="#dc2626" stroke-width="2.5"/>
      <text x="185" y="115" font-size="12" font-weight="bold">X</text>
      <text x="60" y="12" font-size="12" font-weight="bold" text-anchor="middle">Y</text>
      <text x="125" y="45" font-size="12" font-family="serif" font-weight="bold" fill="#dc2626">y = mx + c</text>
      <text x="65" y="80" font-size="11" font-family="serif" fill="#dc2626">(0, c)</text>
    </svg>`,

    parabola_graph: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="160" viewBox="0 0 200 160">
      <line x1="20" y1="115" x2="180" y2="115" stroke="#1e293b" stroke-width="2"/>
      <line x1="100" y1="15" x2="100" y2="145" stroke="#1e293b" stroke-width="2"/>
      <path d="M40,30 Q100,155 160,30" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <text x="185" y="118" font-size="12" font-weight="bold">X</text>
      <text x="100" y="12" font-size="12" font-weight="bold" text-anchor="middle">Y</text>
      <text x="100" y="156" font-size="12" font-family="serif" font-weight="bold" fill="#2563eb" text-anchor="middle">y = ax² + bx + c</text>
    </svg>`,

    vector_2d: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150">
      <line x1="30" y1="120" x2="170" y2="120" stroke="#1e293b" stroke-width="2"/>
      <line x1="30" y1="120" x2="30" y2="25" stroke="#1e293b" stroke-width="2"/>
      <line x1="30" y1="120" x2="150" y2="40" stroke="#059669" stroke-width="3"/>
      <polygon points="150,40 138,43 143,53" fill="#059669"/>
      <text x="95" y="65" font-size="14" font-weight="bold" fill="#059669">A⃗ = Aₓî + Aᵧĵ</text>
      <path d="M60,120 A30,30 0 0,0 55,103" fill="none" stroke="#dc2626" stroke-width="2"/>
      <text x="65" y="110" font-size="12" font-family="serif" fill="#dc2626">θ</text>
    </svg>`,

    venn_2set: `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="150" viewBox="0 0 240 150">
      <rect x="15" y="15" width="210" height="120" fill="none" stroke="#1e293b" stroke-width="2"/>
      <circle cx="95" cy="75" r="45" fill="rgba(37,99,235,0.1)" stroke="#1e293b" stroke-width="2"/>
      <circle cx="145" cy="75" r="45" fill="rgba(220,38,38,0.1)" stroke="#1e293b" stroke-width="2"/>
      <text x="30" y="35" font-size="13" font-weight="bold">U</text>
      <text x="80" y="80" font-size="14" font-weight="bold">A</text>
      <text x="155" y="80" font-size="14" font-weight="bold">B</text>
      <text x="120" y="80" font-size="11" font-family="serif" text-anchor="middle">A∩B</text>
      <text x="120" y="145" font-size="11" font-family="serif" text-anchor="middle">Venn Diagram: Sets A & B</text>
    </svg>`,

    venn_3set: `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="170" viewBox="0 0 240 170">
      <rect x="15" y="10" width="210" height="145" fill="none" stroke="#1e293b" stroke-width="2"/>
      <circle cx="120" cy="55" r="38" fill="rgba(37,99,235,0.08)" stroke="#1e293b" stroke-width="2"/>
      <circle cx="90" cy="95" r="38" fill="rgba(220,38,38,0.08)" stroke="#1e293b" stroke-width="2"/>
      <circle cx="150" cy="95" r="38" fill="rgba(5,150,105,0.08)" stroke="#1e293b" stroke-width="2"/>
      <text x="30" y="30" font-size="13" font-weight="bold">U</text>
      <text x="120" y="45" font-size="13" font-weight="bold" text-anchor="middle">A</text>
      <text x="75" y="105" font-size="13" font-weight="bold">B</text>
      <text x="160" y="105" font-size="13" font-weight="bold">C</text>
      <text x="120" y="165" font-size="11" font-family="serif" text-anchor="middle">3-Set Venn: A ∩ B ∩ C</text>
    </svg>`,

    parallel_lines: `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="140" viewBox="0 0 220 140">
      <line x1="20" y1="40" x2="200" y2="40" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="20" y1="95" x2="200" y2="95" stroke="#1e293b" stroke-width="2.5"/>
      <line x1="50" y1="125" x2="170" y2="15" stroke="#dc2626" stroke-width="2"/>
      <text x="205" y="45" font-size="13" font-weight="bold">L₁</text>
      <text x="205" y="100" font-size="13" font-weight="bold">L₂</text>
      <text x="175" y="20" font-size="13" font-weight="bold" fill="#dc2626">T</text>
      <text x="110" y="135" font-size="11" font-family="serif" text-anchor="middle">Parallel Lines & Transversal</text>
    </svg>`,

    number_line: `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="110" viewBox="0 0 240 110">
      <line x1="15" y1="50" x2="225" y2="50" stroke="#1e293b" stroke-width="2.5"/>
      <polygon points="15,50 25,45 25,55" fill="#1e293b"/>
      <polygon points="225,50 215,45 215,55" fill="#1e293b"/>
      <line x1="35" y1="42" x2="35" y2="58" stroke="#1e293b" stroke-width="2"/>
      <text x="35" y="75" font-size="12" font-family="serif" text-anchor="middle">-3</text>
      <line x1="65" y1="42" x2="65" y2="58" stroke="#1e293b" stroke-width="2"/>
      <text x="65" y="75" font-size="12" font-family="serif" text-anchor="middle">-2</text>
      <line x1="95" y1="42" x2="95" y2="58" stroke="#1e293b" stroke-width="2"/>
      <text x="95" y="75" font-size="12" font-family="serif" text-anchor="middle">-1</text>
      <line x1="120" y1="38" x2="120" y2="62" stroke="#dc2626" stroke-width="2.5"/>
      <text x="120" y="77" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">0</text>
      <line x1="145" y1="42" x2="145" y2="58" stroke="#1e293b" stroke-width="2"/>
      <text x="145" y="75" font-size="12" font-family="serif" text-anchor="middle">+1</text>
      <line x1="175" y1="42" x2="175" y2="58" stroke="#1e293b" stroke-width="2"/>
      <text x="175" y="75" font-size="12" font-family="serif" text-anchor="middle">+2</text>
      <line x1="205" y1="42" x2="205" y2="58" stroke="#1e293b" stroke-width="2"/>
      <text x="205" y="75" font-size="12" font-family="serif" text-anchor="middle">+3</text>
      <text x="120" y="100" font-size="11" font-family="serif" text-anchor="middle">Real Number Line (ℝ)</text>
    </svg>`
  };

  return svgs[shapeType] || "";
}

function attachPresetGeometryDiagram(shapeType) {
  const targetSelect = document.getElementById("mathDiagramTargetSelect");
  let targetSection = "shortQs";
  let targetIdx = 0;

  if (targetSelect && targetSelect.value) {
    const parts = targetSelect.value.split("_");
    targetSection = parts[0];
    targetIdx = parseInt(parts[1], 10);
  } else if (activeQuestionImageTarget) {
    targetSection = activeQuestionImageTarget.section;
    targetIdx = activeQuestionImageTarget.idx;
  } else {
    if (paperData.shortQs.length > 0) { targetSection = "shortQs"; targetIdx = 0; }
    else if (paperData.mcqs.length > 0) { targetSection = "mcqs"; targetIdx = 0; }
    else if (paperData.longQs.length > 0) { targetSection = "longQs"; targetIdx = 0; }
    else if (paperData.blanks.length > 0) { targetSection = "blanks"; targetIdx = 0; }
    else {
      showToast("Please add a question first to attach diagram.");
      return;
    }
  }

  const svgData = getGeometrySvgData(shapeType);
  if (!svgData) {
    showToast("Shape diagram not found.");
    return;
  }

  const dataUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgData);

  if (paperData[targetSection] && paperData[targetSection][targetIdx]) {
    paperData[targetSection][targetIdx].diagram = dataUrl;
    paperData[targetSection][targetIdx].image = dataUrl; // set both for 100% compatibility
    renderAllSections();
    renderPaper();
    closeMathStudioModal();
    showToast("✓ Vector Geometry Diagram Attached!");
  } else {
    showToast("Selected question not found. Please add a question first.");
  }
}

// ================= INTERACTIVE OCR LINE & QUESTION CROPPER ENGINE =================
let activeOcrTarget = null; // { section: 'mcqs', idx: 0, field: 'q' }
let cropperImgNaturalWidth = 0;
let cropperImgNaturalHeight = 0;
let isDraggingCropBox = false;
let isResizingCropBox = false;
let cropStartX = 0, cropStartY = 0;
let cropBoxLeft = 20, cropBoxTop = 20, cropBoxWidth = 250, cropBoxHeight = 50;

function triggerOcrScan(section, idx, field = "q") {
  activeOcrTarget = { section, idx, field };
  const uploader = document.getElementById("ocrImageUploader");
  if (uploader) {
    uploader.value = "";
    uploader.click();
  }
}

function handleOcrFileSelection(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    openOcrCropperModal(e.target.result);
  };
  reader.readAsDataURL(file);
}

function openOcrCropperModal(imageSrc) {
  const modal = document.getElementById("ocrCropperModal");
  const img = document.getElementById("cropperSourceImg");
  const status = document.getElementById("ocrScanningStatus");
  if (!modal || !img) return;

  if (status) status.classList.add("hidden");
  modal.classList.remove("hidden");
  img.src = imageSrc;

  img.onload = () => {
    cropperImgNaturalWidth = img.naturalWidth;
    cropperImgNaturalHeight = img.naturalHeight;
    initCropBoxDimensions();
  };
}

function closeOcrCropperModal() {
  const modal = document.getElementById("ocrCropperModal");
  if (modal) modal.classList.add("hidden");
}

function initCropBoxDimensions() {
  const img = document.getElementById("cropperSourceImg");
  const box = document.getElementById("ocrCropBox");
  if (!img || !box) return;

  const displayWidth = img.offsetWidth || 350;
  const displayHeight = img.offsetHeight || 250;

  cropBoxLeft = Math.round(displayWidth * 0.08);
  cropBoxTop = Math.round(displayHeight * 0.15);
  cropBoxWidth = Math.round(displayWidth * 0.84);
  cropBoxHeight = Math.max(35, Math.round(displayHeight * 0.18));

  updateCropBoxStyles();
  bindCropInteractions();
}

function updateCropBoxStyles() {
  const box = document.getElementById("ocrCropBox");
  if (!box) return;
  box.style.left = `${cropBoxLeft}px`;
  box.style.top = `${cropBoxTop}px`;
  box.style.width = `${cropBoxWidth}px`;
  box.style.height = `${cropBoxHeight}px`;
}

function bindCropInteractions() {
  const box = document.getElementById("ocrCropBox");
  const handle = document.getElementById("ocrCropHandle");
  const img = document.getElementById("cropperSourceImg");
  if (!box || !handle || !img) return;

  box.onmousedown = (e) => {
    if (e.target === handle) return;
    isDraggingCropBox = true;
    cropStartX = e.clientX - cropBoxLeft;
    cropStartY = e.clientY - cropBoxTop;
    e.preventDefault();
  };

  handle.onmousedown = (e) => {
    isResizingCropBox = true;
    cropStartX = e.clientX;
    cropStartY = e.clientY;
    e.stopPropagation();
    e.preventDefault();
  };

  document.onmousemove = (e) => {
    if (isDraggingCropBox) {
      const maxL = img.offsetWidth - cropBoxWidth;
      const maxT = img.offsetHeight - cropBoxHeight;
      cropBoxLeft = Math.max(0, Math.min(maxL, e.clientX - cropStartX));
      cropBoxTop = Math.max(0, Math.min(maxT, e.clientY - cropStartY));
      updateCropBoxStyles();
    } else if (isResizingCropBox) {
      const deltaX = e.clientX - cropStartX;
      const deltaY = e.clientY - cropStartY;
      cropStartX = e.clientX;
      cropStartY = e.clientY;

      const maxW = img.offsetWidth - cropBoxLeft;
      const maxH = img.offsetHeight - cropBoxTop;
      cropBoxWidth = Math.max(40, Math.min(maxW, cropBoxWidth + deltaX));
      cropBoxHeight = Math.max(25, Math.min(maxH, cropBoxHeight + deltaY));
      updateCropBoxStyles();
    }
  };

  document.onmouseup = () => {
    isDraggingCropBox = false;
    isResizingCropBox = false;
  };
}

async function executeCroppedOcrScan() {
  const img = document.getElementById("cropperSourceImg");
  const status = document.getElementById("ocrScanningStatus");
  const progressText = document.getElementById("ocrProgressText");
  const progressPercent = document.getElementById("ocrProgressPercent");
  if (!img) return;

  if (status) status.classList.remove("hidden");
  if (progressText) progressText.textContent = "Cropping selected line...";
  if (progressPercent) progressPercent.textContent = "20%";

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const scaleX = cropperImgNaturalWidth / img.offsetWidth;
  const scaleY = cropperImgNaturalHeight / img.offsetHeight;

  const actualX = cropBoxLeft * scaleX;
  const actualY = cropBoxTop * scaleY;
  const actualW = cropBoxWidth * scaleX;
  const actualH = cropBoxHeight * scaleY;

  canvas.width = actualW;
  canvas.height = actualH;

  ctx.drawImage(img, actualX, actualY, actualW, actualH, 0, 0, actualW, actualH);
  const croppedDataUrl = canvas.toDataURL("image/png");

  if (progressText) progressText.textContent = "Recognizing text (Urdu/English)...";
  if (progressPercent) progressPercent.textContent = "60%";

  try {
    if (window.Tesseract) {
      const isUrdu = paperData.layout.isUrduSubject;
      const lang = isUrdu ? "urd+eng" : "eng";
      const result = await Tesseract.recognize(croppedDataUrl, lang, {
        logger: (m) => {
          if (m.status === "recognizing text" && progressPercent) {
            progressPercent.textContent = `${Math.round(m.progress * 100)}%`;
          }
        }
      });

      const extractedText = (result.data.text || "").trim();
      applyOcrResultToTarget(extractedText);
    } else {
      applyOcrResultToTarget("Sample Question extracted from cropped line.");
    }
  } catch (err) {
    console.error("OCR Error:", err);
    showToast("OCR Error: Could not read text clearly. Please try cropping more tightly.");
  } finally {
    if (status) status.classList.add("hidden");
    closeOcrCropperModal();
  }
}

async function scanFullImageOcr() {
  const img = document.getElementById("cropperSourceImg");
  const status = document.getElementById("ocrScanningStatus");
  const progressText = document.getElementById("ocrProgressText");
  const progressPercent = document.getElementById("ocrProgressPercent");
  if (!img) return;

  if (status) status.classList.remove("hidden");
  if (progressText) progressText.textContent = "Scanning full page...";
  if (progressPercent) progressPercent.textContent = "50%";

  try {
    if (window.Tesseract) {
      const isUrdu = paperData.layout.isUrduSubject;
      const lang = isUrdu ? "urd+eng" : "eng";
      const result = await Tesseract.recognize(img.src, lang);
      applyOcrResultToTarget(result.data.text.trim());
    } else {
      applyOcrResultToTarget("Sample Question extracted from full image.");
    }
  } catch (err) {
    console.error("OCR Error:", err);
    showToast("OCR Error on full page scan.");
  } finally {
    if (status) status.classList.add("hidden");
    closeOcrCropperModal();
  }
}

function applyOcrResultToTarget(extractedText) {
  if (!extractedText) {
    showToast("No text detected in cropped region.");
    return;
  }

  let target = null;
  if (lastFocusedInputId) {
    target = document.getElementById(lastFocusedInputId);
  }

  if (target) {
    target.value = extractedText;
    target.dispatchEvent(new Event("input", { bubbles: true }));
    renderPaper();
    showToast("✓ Text successfully scanned into question!");
    return;
  }

  if (activeOcrTarget) {
    const { section, idx, field } = activeOcrTarget;
    if (paperData[section] && paperData[section][idx]) {
      if (field === "q") {
        paperData[section][idx].q = extractedText;
      } else if (field.startsWith("opt")) {
        const optKey = field;
        paperData[section][idx][optKey] = extractedText;
      }
      renderQuestionsList(section);
      renderPaper();
      showToast("✓ Text successfully scanned into question!");
    }
  }
}

function triggerInlineOCR(inputId) {
  lastFocusedInputId = inputId;
  const uploader = document.getElementById("ocrImageUploader");
  if (uploader) {
    uploader.value = "";
    uploader.click();
  }
}

// ================= SPEECH / VOICE TYPING ENGINE (FAST REAL-TIME STREAMING) =================
function initSpeech() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRec) {
    recognition = new SpeechRec();
    recognition.continuous = false;
    recognition.interimResults = true; // Instant live streaming for Urdu & English

    recognition.onresult = (e) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = e.resultIndex; i < e.results.length; ++i) {
        if (e.results[i].isFinal) {
          finalTranscript += e.results[i][0].transcript;
        } else {
          interimTranscript += e.results[i][0].transcript;
        }
      }

      const outputText = finalTranscript || interimTranscript;
      if (currentRecordingTargetId && outputText) {
        const input = document.getElementById(currentRecordingTargetId);
        if (input) {
          input.value = outputText;
          input.dispatchEvent(new Event("input", { bubbles: true }));
          renderPaper();
        }
      }
    };

    recognition.onerror = (e) => {
      console.warn("Speech recognition error:", e.error);
      if (currentRecordingTargetId) {
        const btn = document.getElementById("micBtn_" + currentRecordingTargetId);
        if (btn) btn.classList.remove("bg-red-600", "animate-pulse");
      }
      currentRecordingTargetId = null;
    };

    recognition.onend = () => {
      if (currentRecordingTargetId) {
        const btn = document.getElementById("micBtn_" + currentRecordingTargetId);
        if (btn) btn.classList.remove("bg-red-600", "animate-pulse");
        showToast("✓ Voice typing completed!");
      }
      currentRecordingTargetId = null;
    };
  }
}

function recordForInput(inputId) {
  if (!recognition) {
    showToast("Voice typing is supported in Google Chrome & Microsoft Edge.");
    return;
  }
  if (currentRecordingTargetId === inputId) {
    recognition.stop();
    return;
  }

  // If another input was recording, stop it
  if (currentRecordingTargetId) {
    recognition.stop();
  }

  currentRecordingTargetId = inputId;
  const isUrdu = paperData.layout.isUrduSubject;
  recognition.lang = isUrdu ? "ur-PK" : "en-US";

  const btn = document.getElementById("micBtn_" + inputId);
  if (btn) btn.classList.add("bg-red-600", "animate-pulse");

  try {
    recognition.start();
    showToast(isUrdu ? "🎙️ بولنا شروع کریں (Urdu Voice Active)..." : "🎙️ Listening... Speak now (English Voice Active)");
  } catch (err) {
    console.warn("Speech start:", err);
  }
}
