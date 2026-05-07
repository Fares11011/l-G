export const YTA_VIDEOS = [
  "https://www.canva.com/design/DAHEmDbUJ4E/mW9pcY-bcILv9_ak5OO4Uw/view?embed",
  "https://www.canva.com/design/DAHEmixk7bg/Y0TJKp21k88VxW2a9jrBhg/view?embed",
  "https://www.canva.com/design/DAHEsAU5oVs/bwgVDhnnYr_PpkrdCPS_Kw/view?embed",
  "https://www.canva.com/design/DAHEscjzKlk/aOQUqkctZ1WT-zLcT1WCGQ/view?embed",
  "https://www.canva.com/design/DAHEsi8NKec/6rAQIKlCgtedjioA1rXjGg/view?embed",
  "https://www.canva.com/design/DAHEsimC1UI/yMxsZ2qimrPSIpKUd_-HvQ/view?embed"
];

export const YTA_SOURCES = [
  "https://drive.google.com/file/d/1psOlYB4J0GHsVtSedMu6jdgFoPg1cEKc/preview",
  "https://drive.google.com/file/d/1xK-SWLKyE3_JLQl-vhRxo9Dl8xbQH2H_/preview"
];

export const YTA_PRE_ASSESSMENT = [
  {
    id: 1,
    question: "ما هي العلاقة الصحيحة بين مفاهيم الذكاء الاصطناعي (AI)، وتعلم الآلة (ML)، والتعلم العميق (DL)؟",
    options: [
      "تعلم الآلة هو المظلة الكبيرة التي تشمل الذكاء الاصطناعي والتعلم العميق.",
      "الذكاء الاصطناعي هو المظلة الكبيرة، يندرج تحته تعلم الآلة، وبداخل تعلم الآلة يوجد التعلم العميق.",
      "التعلم العميق هو علم منفصل تماماً ولا علاقة له بتعلم الآلة."
    ],
    correctAnswer: 1,
    explanation: "الذكاء الاصطناعي (AI) هو المظلة الشاملة لأي نظام يقلد ذكاء البشر، بينما تعلم الآلة (ML) هو جزء منه يعتمد على الخوارزميات للتحسن من البيانات، والتعلم العميق (DL) هو ليفل متقدم من ML يعتمد على الشبكات العصبية."
  },
  {
    id: 2,
    question: "عندما نقوم بتدريب نموذج للتفريق بين \"الرسائل المزعجة\" (Spam) وغير المزعجة باستخدام بيانات \"متصنفة\" (أي مدخلات ومعها مخرجاتها)، فإننا نستخدم نوعاً من التعلم يسمى:",
    options: [
      "التعلم بدون إشراف (Unsupervised Learning).",
      "التعلم التعزيزي (Reinforcement Learning).",
      "التعلم بإشراف (Supervised Learning)."
    ],
    correctAnswer: 2,
    explanation: "التعلم بإشراف يعتمد على بيانات متصنفة (Labeled)، حيث يتم إعطاء الماكينة المدخلات مع نتائجها الصحيحة لتتعلم النمط، مثل فلتر الإيميلات."
  },
  {
    id: 3,
    question: "ماذا نطلق على المشكلة التي تحدث عندما \"يحفظ\" الموديل بيانات التدريب صم بكل تفاصيلها وضوضائها، مما يجعله يفشل في الاختبار ببيانات جديدة؟",
    options: [
      "الـ Overfitting.",
      "الـ Underfitting.",
      "الـ Data Wrangling."
    ],
    correctAnswer: 0,
    explanation: "الـ Overfitting هو التحدي الذي يواجهنا عندما يكون الموديل دقيقاً جداً على بيانات التدريب فقط لدرجة \"الحفظ\"، ولكنه يفقد القدرة على التعميم عند مواجهة بيانات لم يرها من قبل."
  }
];

export const YTA_POST_ASSESSMENT = [
  {
    id: 1,
    question: "من هو العالم الذي طرح سؤال \"هل يمكن للآلات أن تفكر؟\" ووضع اختباراً يعتمد على قدرة الآلة على محاكاة لغة البشر؟",
    options: ["آرثر صامويل.", "آلان تورينج.", "يوجين غوستمان."],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "ما هو نوع الذكاء الاصطناعي الذي نستخدمه حالياً في تطبيقات مثل \"سيري\" وبرامج البحث في جوجل؟",
    options: ["الذكاء الاصطناعي العام (AGI).", "الذكاء الاصطناعي المحدود (ANI).", "التعلم العميق المتقدم."],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "أي من المصطلحات التالية يمثل الجزء الذي يعتمد على \"الشبكات العصبية الاصطناعية\" لمحاكاة مخ الإنسان وحل المشكلات المعقدة؟",
    options: ["تعلم الآلة (ML).", "التعلم العميق (DL).", "الذكاء الاصطناعي المحدود (ANI)."],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "الهدف الأساسي في أي عملية تدريب لنموذج ذكاء اصطناعي هو \"تقليل الخسارة\" (Minimize the Loss)، والمقصود به:",
    options: ["تقليل عدد البيانات المستخدمة.", "تقليل الفرق بين توقع الموديل وبين الحقيقة.", "تقليل الوقت المستغرق في التدريب."],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "إذا قمنا بتدريب نموذج ليتوقع \"أرقاماً\" محددة (مثل أسعار البيوت أو درجات الحرارة)، فماذا يسمى هذا النوع من التعلم بإشراف؟",
    options: ["التصنيف (Classification).", "الانحدار (Regression).", "التجميع (Clustering)."],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "ما هو نوع التعلم الذي يستخدم في الروبوتات والعربات ذاتية القيادة، ويعتمد على نظام المكافأة (Reward) والعقوبة (Penalty)؟",
    options: ["التعلم بدون إشراف.", "التعلم بإشراف.", "التعلم التعزيزي (Reinforcement Learning)."],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "في دورة حياة المشروع، ماذا تعني قاعدة \"الزبالة اللي هتدخل، هتطلع زبالة\" (Garbage in, Garbage out)؟",
    options: ["جودة الكود أهم من جودة البيانات.", "إذا كانت البيانات المدخلة سيئة أو غير منظمة، ستكون النتائج خاطئة مهما كان الموديل قوياً.", "الموديل يحتاج لبيانات قليلة جداً ليعمل."],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "عندما ينجح الموديل في تحقيق دقة عالية جداً على بيانات التدريب (لدرجة الحفظ) ولكنه \"يسقط\" في الاختبار ببيانات جديدة، تسمى هذه المشكلة:",
    options: ["Overfitting.", "Underfitting.", "Data Mismatch."],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "تسمى القيم الشاذة أو الأرقام غير المنطقية في البيانات (مثل عمر 1000 سنة في استبيان) بـ:",
    options: ["الخصائص (Features).", "القيم المتطرفة (Outliers).", "التوحيد (Normalization)."],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "لماذا نستخدم تقنيات مثل (Min-Max Normalization) أو (Z-Score) للبيانات قبل التدريب؟",
    options: ["لزيادة حجم البيانات.", "لتوحيد نطاق الأرقام (مثل السن والمرتب) حتى لا تسيطر القيم الكبيرة على الحسابات.", "لحذف البيانات المتكررة فقط."],
    correctAnswer: 1
  }
];

export const YTA_FLASHCARDS = [
  { question: "ما هو الذكاء الاصطناعي؟", answer: "محاكاة لذكاء البشر في الآلات." },
  { question: "ما هو تعلم الآلة؟", answer: "جزء من الذكاء الاصطناعي يعتمد على الخوارزميات للتعلم من البيانات." },
  { question: "ما هو التعلم العميق؟", answer: "مستوى متقدم من تعلم الآلة يعتمد على الشبكات العصبية." },
  { question: "ما هو Overfitting؟", answer: "حفظ الموديل لبيانات التدريب وفشله في بيانات جديدة." },
  { question: "ما هي القيم المتطرفة؟", answer: "أرقام شاذة تخرج عن النطاق الطبيعي للبيانات." },
  { question: "ما هو الانحدار؟", answer: "توقع أرقام محددة مثل أسعار البيوت." }
];
