import { User, UserRole, Course, StudentStat, SupervisorStat } from './types';
import { 
  BookOpen, 
  Layout, 
  Users, 
  Settings, 
  Award, 
  Gamepad2,
  PieChart,
  Target
} from 'lucide-react';

export const APP_NAME = "LEARNING & GROWTH";
export const LOGO_URL = "https://drive.google.com/thumbnail?id=1bnJyp7LhGZCfAh9Ic2eLbYBop1Po8l7o&sz=w200";

export const NAVIGATION_ITEMS = {
  [UserRole.STUDENT]: [
    { nameAr: 'مسار التعلم', nameEn: 'Learning Path', path: '/dashboard', icon: Layout },
    { nameAr: 'الألعاب', nameEn: 'Games', path: '/games', icon: Gamepad2 },
    { nameAr: 'الإنجازات', nameEn: 'Achievements', path: '/achievements', icon: Award },
  ],
  [UserRole.SUPERVISOR]: [
    { nameAr: 'لوحة التحكم', nameEn: 'Dashboard', path: '/dashboard', icon: Layout },
    { nameAr: 'الطلاب', nameEn: 'Students', path: '/students', icon: Users },
    { nameAr: 'التقارير', nameEn: 'Reports', path: '/reports', icon: PieChart },
  ],
  [UserRole.ADMIN]: [
    { nameAr: 'الرئيسية', nameEn: 'Home', path: '/dashboard', icon: Layout },
    { nameAr: 'المشرفين', nameEn: 'Supervisors', path: '/supervisors', icon: Users },
    { nameAr: 'الإعدادات', nameEn: 'Settings', path: '/manage-courses', icon: Settings },
  ]
};

// FULL COURSE DATA
export const MOCK_COURSES: Course[] = [
  // --- Programming Track ---
  // Beginner (6-9)
  {
    id: 'p1', track: 'programming', level: 'Beginner', ageGroup: '6-9', hours: 3,
    titleAr: 'أساسيات التفكير المنطقي', titleEn: 'Logic Fundamentals',
    descriptionAr: 'كسر الجمود وتدريب العقل على التفكير المتسلسل.', descriptionEn: 'Mastering sequential thinking and patterns.',
    skillsAr: ['التسلسل', 'الخوارزميات البسيطة', 'حل الألغاز', 'الأنماط'], skillsEn: ['Sequencing', 'Basic Algo', 'Puzzles', 'Patterns'],
    progress: 100, isLocked: false, iconName: 'BrainCircuit'
  },
  {
    id: 'p2', track: 'programming', level: 'Beginner', ageGroup: '6-9', hours: 3,
    titleAr: 'الأكواد الصورية (Blocks)', titleEn: 'Visual Blocks Coding',
    descriptionAr: 'مدخل للبرمجة المرئية بدون كتابة أكواد معقدة.', descriptionEn: 'Intro to coding without syntax stress.',
    skillsAr: ['سحب وإفلات', 'الأحداث', 'الحركة', 'الإبداع'], skillsEn: ['Drag & Drop', 'Events', 'Motion', 'Creativity'],
    progress: 80, isLocked: false, iconName: 'Puzzle'
  },
  {
    id: 'p3', track: 'programming', level: 'Beginner', ageGroup: '6-9', hours: 3,
    titleAr: 'بناء القصص الرقمية', titleEn: 'Digital Storytelling',
    descriptionAr: 'توظيف البرمجة في سرد قصص تفاعلية بسيطة.', descriptionEn: 'Using code for interactive narratives.',
    skillsAr: ['الرسوم المتحركة', 'الأصوات', 'التنسيق', 'الخيال الرقمي'], skillsEn: ['Animation', 'Sounds', 'Formatting', 'Digital Imagination'],
    progress: 0, isLocked: true, iconName: 'BookOpenCheck'
  },
  {
    id: 'p4', track: 'programming', level: 'Beginner', ageGroup: '6-9', hours: 4,
    titleAr: 'تصميم الألعاب البسيط', titleEn: 'Simple Game Design',
    descriptionAr: 'إنشاء أول لعبة تفاعلية باستخدام الكتل.', descriptionEn: 'Mechanics, scores, and basic levels.',
    skillsAr: ['ميكانيكا الألعاب', 'التصادم', 'النقاط', 'المستويات'], skillsEn: ['Game Mechanics', 'Collision', 'Scores', 'Levels'],
    progress: 0, isLocked: true, iconName: 'Gamepad2'
  },
  {
    id: 'p5', track: 'programming', level: 'Beginner', ageGroup: '6-9', hours: 3,
    titleAr: 'التفكير الخوارزمي للأطفال', titleEn: 'Algorithmic Thinking',
    descriptionAr: 'تبسيط مفهوم "المدخلات والمخرجات" من خلال اللعب.', descriptionEn: 'Input/Output concepts through play.',
    skillsAr: ['المدخلات', 'المخرجات', 'تحليل المشكلة', 'ترتيب الخطوات'], skillsEn: ['Inputs', 'Outputs', 'Problem Analysis', 'Steps'],
    progress: 0, isLocked: true, iconName: 'GitMerge'
  },
  // Intermediate (10-13)
  {
    id: 'p6', track: 'programming', level: 'Intermediate', ageGroup: '10-13', hours: 4,
    titleAr: 'هيكلة الويب (HTML) - ج1', titleEn: 'Web Structure (HTML)',
    descriptionAr: 'بداية رحلة تطوير المواقع وفهم لغة الهيكل.', descriptionEn: 'Foundations of tags and data.',
    skillsAr: ['العناوين (Tags)', 'الفقرات', 'القوائم', 'هيكلة البيانات'], skillsEn: ['Tags', 'Paragraphs', 'Lists', 'Data Struct'],
    progress: 0, isLocked: true, iconName: 'Globe'
  },
  {
    id: 'p7', track: 'programming', level: 'Intermediate', ageGroup: '10-13', hours: 4,
    titleAr: 'هيكلة الويب (HTML) - ج2', titleEn: 'Intermediate HTML',
    descriptionAr: 'إضافة الروابط والجداول لبناء صفحة متكاملة.', descriptionEn: 'Links, tables, and basic web forms.',
    skillsAr: ['الروابط التشعبية', 'الجداول', 'النماذج البسيطة', 'الربط'], skillsEn: ['Links', 'Tables', 'Forms', 'Connecting'],
    progress: 0, isLocked: true, iconName: 'Link'
  },
  {
    id: 'p8', track: 'programming', level: 'Intermediate', ageGroup: '10-13', hours: 4,
    titleAr: 'جماليات الويب (CSS)', titleEn: 'Web Styling (CSS)',
    descriptionAr: 'استخدام الألوان والخطوط لتنسيق شكل الموقع.', descriptionEn: 'Colors, fonts, and visual layouts.',
    skillsAr: ['الألوان', 'الخطوط', 'الخلفيات', 'التنسيق البصري'], skillsEn: ['Colors', 'Fonts', 'Backgrounds', 'Visual Layouts'],
    progress: 0, isLocked: true, iconName: 'Palette'
  },
  {
    id: 'p9', track: 'programming', level: 'Intermediate', ageGroup: '10-13', hours: 3,
    titleAr: 'مبادئ التصميم (UI)', titleEn: 'UI Design Principles',
    descriptionAr: 'تعلم كيف يرى المستخدم الموقع وكيف ينجذب إليه.', descriptionEn: 'Visual balance and user attraction.',
    skillsAr: ['التوازن البصري', 'الأيقونات', 'واجهة المستخدم', 'التباين'], skillsEn: ['Visual Balance', 'Icons', 'User Interface', 'Contrast'],
    progress: 0, isLocked: true, iconName: 'LayoutTemplate'
  },
  {
    id: 'p10', track: 'programming', level: 'Intermediate', ageGroup: '10-13', hours: 5,
    titleAr: 'مدخل لبرمجة البايثون', titleEn: 'Python Intro',
    descriptionAr: 'كتابة أول أكواد نصية حقيقية (Text Coding).', descriptionEn: 'First steps into text-based coding.',
    skillsAr: ['بناء الجمل البرمجية', 'الطباعة (Print)', 'كتابة الكود'], skillsEn: ['Syntax', 'Print', 'Text Coding'],
    progress: 0, isLocked: true, iconName: 'Terminal'
  },
  {
    id: 'p11', track: 'programming', level: 'Intermediate', ageGroup: '10-13', hours: 4,
    titleAr: 'المتغيرات وأنواع البيانات', titleEn: 'Variables & Types',
    descriptionAr: 'كيف يحفظ الكمبيوتر المعلومات في ذاكرته.', descriptionEn: 'Memory storage and data handling.',
    skillsAr: ['المتغيرات', 'الأرقام', 'النصوص (Strings)', 'التخزين'], skillsEn: ['Variables', 'Numbers', 'Strings', 'Storage'],
    progress: 0, isLocked: true, iconName: 'Database'
  },
  {
    id: 'p12', track: 'programming', level: 'Intermediate', ageGroup: '10-13', hours: 5,
    titleAr: 'التحكم في المسار (Conditions)', titleEn: 'Control Flow',
    descriptionAr: 'جعل البرنامج يتخذ قرارات (If-Statements).', descriptionEn: 'If-Statements and logical decisions.',
    skillsAr: ['المقارنة', 'المنطق البرمجي', 'اتخاذ القرار', 'الشروط'], skillsEn: ['Comparison', 'Logic', 'Decisions', 'Conditions'],
    progress: 0, isLocked: true, iconName: 'Split'
  },
  {
    id: 'p13', track: 'programming', level: 'Intermediate', ageGroup: '10-13', hours: 5,
    titleAr: 'الحلقات التكرارية (Loops)', titleEn: 'Iteration (Loops)',
    descriptionAr: 'تعلم تكرار العمليات بذكاء لتوفير الوقت.', descriptionEn: 'Automating repetitive tasks efficiently.',
    skillsAr: ['For-loops', 'While-loops', 'التكرار', 'الأتمتة البسيطة'], skillsEn: ['For-loops', 'While-loops', 'Repetition', 'Automation'],
    progress: 0, isLocked: true, iconName: 'RefreshCcw'
  },
  // Advanced (14-18)
  {
    id: 'p14', track: 'programming', level: 'Advanced', ageGroup: '14-18', hours: 5,
    titleAr: 'الدوال (Functions)', titleEn: 'Functions & Modular',
    descriptionAr: 'تنظيم الكود وتجنب التكرار من خلال وحدات صغيرة.', descriptionEn: 'Code reusability and organization.',
    skillsAr: ['إعادة استخدام الكود', 'المعاملات', 'تنظيم المشاريع'], skillsEn: ['Reusability', 'Parameters', 'Organization'],
    progress: 0, isLocked: true, iconName: 'Box'
  },
  {
    id: 'p15', track: 'programming', level: 'Advanced', ageGroup: '14-18', hours: 3,
    titleAr: 'اكتشاف الأخطاء (Debugging)', titleEn: 'Debugging Mastery',
    descriptionAr: 'مهارة الصبر والبحث عن الخطأ في الكود وتصحيحه.', descriptionEn: 'Patience and error-solving skills.',
    skillsAr: ['التحليل', 'الصبر', 'التدقيق', 'حل المشكلات المعقدة'], skillsEn: ['Analysis', 'Patience', 'Auditing', 'Complex Problem Solving'],
    progress: 0, isLocked: true, iconName: 'Bug'
  },
  {
    id: 'p16', track: 'programming', level: 'Advanced', ageGroup: '14-18', hours: 6,
    titleAr: 'بايثون المتقدم', titleEn: 'Adv Python Data',
    descriptionAr: 'التعامل مع القوائم المعقدة والبيانات الكبيرة.', descriptionEn: 'Lists, Dictionaries, and sets.',
    skillsAr: ['القوائم (Lists)', 'القواميس', 'التلاعب بالبيانات'], skillsEn: ['Lists', 'Dictionaries', 'Data Manipulation'],
    progress: 0, isLocked: true, iconName: 'Braces'
  },
  {
    id: 'p17', track: 'programming', level: 'Advanced', ageGroup: '14-18', hours: 6,
    titleAr: 'التفاعل مع الويب (JS)', titleEn: 'Interactive Web (JS)',
    descriptionAr: 'إضافة روح وحركة للمواقع باستخدام جافا سكريبت.', descriptionEn: 'Bringing sites to life with JavaScript.',
    skillsAr: ['الأحداث', 'DOM', 'التفاعل', 'الوظائف الديناميكية'], skillsEn: ['Events', 'DOM', 'Interaction', 'Dynamic Functions'],
    progress: 0, isLocked: true, iconName: 'MousePointerClick'
  },
  {
    id: 'p18', track: 'programming', level: 'Advanced', ageGroup: '14-18', hours: 5,
    titleAr: 'جافا سكريبت للبيانات', titleEn: 'JS Logic & Data',
    descriptionAr: 'كيفية معالجة مدخلات المستخدم وعرض نتائج فورية.', descriptionEn: 'Processing inputs and dynamics.',
    skillsAr: ['المتغيرات في JS', 'العمليات الحسابية', 'التحقق'], skillsEn: ['JS Variables', 'Calculations', 'Validation'],
    progress: 0, isLocked: true, iconName: 'Calculator'
  },
  {
    id: 'p19', track: 'programming', level: 'Advanced', ageGroup: '14-18', hours: 5,
    titleAr: 'تطوير المواقع المتكاملة', titleEn: 'Full Web Dev Project',
    descriptionAr: 'ربط كل ما سبق لبناء مشروع موقع ويب كامل.', descriptionEn: 'Integrating HTML/CSS/JS.',
    skillsAr: ['التكامل', 'التصميم المتجاوب', 'بناء صفحة هبوط'], skillsEn: ['Integration', 'Responsive Design', 'Landing Page'],
    progress: 0, isLocked: true, iconName: 'MonitorSmartphone'
  },
  {
    id: 'p20', track: 'programming', level: 'Advanced', ageGroup: '14-18', hours: 4,
    titleAr: 'أساسيات تطبيقات الجوال', titleEn: 'App Dev Concepts',
    descriptionAr: 'كيف تختلف برمجة الموبايل عن برمجة الويب.', descriptionEn: 'Mobile vs. Web architecture.',
    skillsAr: ['الشاشات', 'الملاحة', 'الفرق بين الأنظمة', 'المحاكاة'], skillsEn: ['Screens', 'Navigation', 'OS Differences', 'Simulation'],
    progress: 0, isLocked: true, iconName: 'Smartphone'
  },
  {
    id: 'p21', track: 'programming', level: 'Advanced', ageGroup: '14-18', hours: 5,
    titleAr: 'تصميم واجهة التطبيق', titleEn: 'App UI Design',
    descriptionAr: 'بناء شكل التطبيق ووضع الأزرار في مكانها الصحيح.', descriptionEn: 'Designing mobile screens and UX.',
    skillsAr: ['مكونات الواجهة', 'تجربة المستخدم (UX)', 'النماذج'], skillsEn: ['UI Components', 'UX', 'Prototypes'],
    progress: 0, isLocked: true, iconName: 'SmartphoneCharging'
  },
  // Professional (14-18)
  {
    id: 'p22', track: 'programming', level: 'Professional', ageGroup: '14-18', hours: 5,
    titleAr: 'قواعد البيانات (SQL)', titleEn: 'Database (SQL)',
    descriptionAr: 'تعلم لغة التحدث مع الخوادم لتخزين المعلومات.', descriptionEn: 'Storing and querying information.',
    skillsAr: ['تخزين البيانات', 'الاستعلام', 'الربط بين الجداول'], skillsEn: ['Data Storage', 'Querying', 'Table Joining'],
    progress: 0, isLocked: true, iconName: 'Database'
  },
  {
    id: 'p23', track: 'programming', level: 'Professional', ageGroup: '14-18', hours: 4,
    titleAr: 'إدارة البيانات المتقدمة', titleEn: 'Adv SQL Operations',
    descriptionAr: 'حماية البيانات وتنظيمها بفعالية عالية.', descriptionEn: 'Filtering and data security basics.',
    skillsAr: ['التحديث', 'الحذف الآمن', 'الفلترة', 'أمن البيانات'], skillsEn: ['Updates', 'Safe Deletion', 'Filtering', 'Data Security'],
    progress: 0, isLocked: true, iconName: 'ShieldCheck'
  },
  {
    id: 'p24', track: 'programming', level: 'Professional', ageGroup: '14-18', hours: 4,
    titleAr: 'أدوات المبرمجين (Git)', titleEn: 'Developer Tools (Git)',
    descriptionAr: 'تعلم العمل الجماعي ومشاركة الكود مع الآخرين.', descriptionEn: 'Version control and collaboration.',
    skillsAr: ['GitHub', 'التحكم في الإصدارات', 'العمل الجماعي'], skillsEn: ['GitHub', 'Version Control', 'Teamwork'],
    progress: 0, isLocked: true, iconName: 'GitBranch'
  },
  {
    id: 'p25', track: 'programming', level: 'Professional', ageGroup: '14-18', hours: 3,
    titleAr: 'الوعي السيبراني', titleEn: 'Cyber Awareness',
    descriptionAr: 'كيف تحمي برنامجك ومستخدميك من الاختراقات.', descriptionEn: 'Protecting code and privacy.',
    skillsAr: ['التشفير', 'كلمات المرور', 'الخصوصية', 'الوعي الرقمي'], skillsEn: ['Encryption', 'Passwords', 'Privacy', 'Digital Awareness'],
    progress: 0, isLocked: true, iconName: 'Lock'
  },
  {
    id: 'p26', track: 'programming', level: 'Professional', ageGroup: '14-18', hours: 5,
    titleAr: 'الذكاء الاصطناعي للناشئين', titleEn: 'AI for Teens',
    descriptionAr: 'مقدمة بسيطة عن كيفية تعلم الآلة للبيانات.', descriptionEn: 'Machine Learning and data patterns.',
    skillsAr: ['مفاهيم الـ AI', 'تدريب النماذج', 'البيانات الضخمة'], skillsEn: ['AI Concepts', 'Model Training', 'Big Data'],
    progress: 0, isLocked: true, iconName: 'Bot'
  },
  {
    id: 'p27', track: 'programming', level: 'Professional', ageGroup: '14-18', hours: 3,
    titleAr: 'التحضير لسوق العمل', titleEn: 'Tech Career Prep',
    descriptionAr: 'كيف تبني ملفك الشخصي (Portfolio) كمبرمج.', descriptionEn: 'Portfolio and freelance readiness.',
    skillsAr: ['السيرة الذاتية', 'عرض المشاريع', 'العمل الحر'], skillsEn: ['CV', 'Showcasing Projects', 'Freelance'],
    progress: 0, isLocked: true, iconName: 'Briefcase'
  },
  // Final
  {
    id: 'p28', track: 'programming', level: 'Final', ageGroup: 'All', hours: 4,
    titleAr: 'التخطيط للمشروع الختامي', titleEn: 'Capstone Planning',
    descriptionAr: 'تحديد فكرة مشروعك ورسم خطوات تنفيذه.', descriptionEn: 'Scoping and project roadmap.',
    skillsAr: ['العصف الذهني', 'التخطيط', 'تحديد النطاق', 'الجدول'], skillsEn: ['Brainstorming', 'Planning', 'Scoping', 'Scheduling'],
    progress: 0, isLocked: true, iconName: 'Map'
  },
  {
    id: 'p29', track: 'programming', level: 'Final', ageGroup: 'All', hours: 6,
    titleAr: 'تنفيذ المشروع الختامي', titleEn: 'Capstone Execution',
    descriptionAr: 'العمل المكثف لبناء المنتج النهائي (تطبيق أو موقع).', descriptionEn: 'Final coding and testing.',
    skillsAr: ['التنفيذ البرمجي', 'الاختبار', 'اللمسات الأخيرة'], skillsEn: ['Coding', 'Testing', 'Polishing'],
    progress: 0, isLocked: true, iconName: 'Rocket'
  },
  {
    id: 'p30', track: 'programming', level: 'Final', ageGroup: 'All', hours: 2,
    titleAr: 'العرض والتقديم (Pitch)', titleEn: 'Pitching & Demo',
    descriptionAr: 'تعلم مهارة عرض مشروعك أمام الجمهور بثقة.', descriptionEn: 'Presenting the final product confidently.',
    skillsAr: ['الإلقاء التقني', 'الإقناع', 'الثقة', 'الإطلاق الرسمي'], skillsEn: ['Technical Speaking', 'Persuasion', 'Confidence', 'Launch'],
    progress: 0, isLocked: true, iconName: 'Mic2'
  },

  // --- Soft Skills Track (Strategic Excellence) ---
  // Beginner
  {
    id: 's1', track: 'soft-skills', level: 'Beginner', hours: 5,
    titleAr: 'أساسيات التناغم الإنساني', titleEn: 'Interpersonal Rapport',
    descriptionAr: 'إتقان أساسيات التعامل مع الناس وبناء الألفة الفورية.', descriptionEn: 'Mastering the fundamentals of handling people.',
    skillsAr: ['بناء الألفة', 'كسر الجمود', 'فهم الطبائع', 'لغة الجسد', 'التواصل الأولي', 'التقبل'], 
    skillsEn: ['Rapport building', 'Ice breaking', 'Understanding Temperaments', 'Body language', 'Initial Communication', 'Acceptance'],
    progress: 40, isLocked: false, iconName: 'Handshake'
  },
  {
    id: 's2', track: 'soft-skills', level: 'Beginner', hours: 5,
    titleAr: 'فن الاستماع النشط', titleEn: 'Active Listening Loop',
    descriptionAr: 'تعلم حلقة الاستماع وتجاوز عوائق السماع الفعال.', descriptionEn: 'Overcoming barriers to effective hearing.',
    skillsAr: ['الاستماع النشط', 'تجاوز المشتتات', 'حلقة التغذية الراجعة', 'التركيز', 'التلخيص', 'الصبر التنظيمي'],
    skillsEn: ['Active listening', 'Overcoming Distractions', 'Feedback loop', 'Focus', 'Summarizing', 'Organizational Patience'],
    progress: 0, isLocked: false, iconName: 'Ear'
  },
  {
    id: 's3', track: 'soft-skills', level: 'Beginner', hours: 5,
    titleAr: 'الوعي الذاتي الواعي', titleEn: 'Conscious Self-Awareness',
    descriptionAr: 'تطوير الحضور والوعي بالأفعال والقيم والحالات الداخلية.', descriptionEn: 'Presence, actions, values, and internal states.',
    skillsAr: ['الوعي بالذات', 'تحديد القيم', 'مراقبة الانفعالات', 'الحضور الذهني', 'تحليل السلوك', 'الصدق مع النفس'],
    skillsEn: ['Self-awareness', 'Identifying Values', 'Emotion Monitoring', 'Mindfulness', 'Behavior Analysis', 'Self-Honesty'],
    progress: 0, isLocked: true, iconName: 'UserCheck'
  },
  {
    id: 's4', track: 'soft-skills', level: 'Beginner', hours: 5,
    titleAr: 'قوة الابتسامة المخلصة', titleEn: 'Power of Sincere Smile',
    descriptionAr: 'فهم الأثر النفسي والفسيولوجي للإشارات غير اللفظية الإيجابية.', descriptionEn: 'Psychological impact of positive non-verbal cues.',
    skillsAr: ['التواصل غير اللفظي', 'لغة الوجه', 'الأثر النفسي', 'بناء الود', 'الإيجابية', 'الجاذبية الشخصية'],
    skillsEn: ['Non-verbal Communication', 'Facial Language', 'Psychological Impact', 'Building Rapport', 'Positivity', 'Personal Charm'],
    progress: 0, isLocked: true, iconName: 'Smile'
  },
  {
    id: 's5', track: 'soft-skills', level: 'Beginner', hours: 5,
    titleAr: 'التقبل الذاتي والثبات العاطفي', titleEn: 'Emotional Grounding',
    descriptionAr: 'تقبل الأفكار والمشاعر كأساس للعمل الفعال.', descriptionEn: 'Accepting thoughts/emotions for effective action.',
    skillsAr: ['التقبل العاطفي', 'الثبات النفسي', 'إدارة التوتر', 'المرونة', 'التفكير الواقعي', 'الشجاعة الأدبية'],
    skillsEn: ['Emotional Acceptance', 'Emotional Stability', 'Stress management', 'Resilience', 'Realistic Thinking', 'Moral Courage'],
    progress: 0, isLocked: true, iconName: 'HeartHandshake'
  },
  {
    id: 's6', track: 'soft-skills', level: 'Beginner', hours: 5,
    titleAr: 'النزاهة المهنية واليقظة', titleEn: 'Professional Integrity',
    descriptionAr: 'مواءمة السلوك مع الكلمات والقيم الشخصية المعلنة.', descriptionEn: 'Aligning behavior with words and values.',
    skillsAr: ['مواءمة القيم', 'النزاهة', 'المسؤولية', 'الأخلاقيات', 'الموثوقية', 'الالتزام بالوعود'],
    skillsEn: ['Value Alignment', 'Integrity', 'Accountability', 'Ethics', 'Reliability', 'Commitment'],
    progress: 0, isLocked: true, iconName: 'Scale'
  },
  {
    id: 's7', track: 'soft-skills', level: 'Beginner', hours: 5,
    titleAr: 'البروفة الذهنية للنجاح', titleEn: 'Mental Rehearsal',
    descriptionAr: 'استخدام التخيل والممارسة الذهنية لبناء الثقة الاجتماعية.', descriptionEn: 'Visualization for social confidence.',
    skillsAr: ['التخيل الإبداعي', 'بناء الثقة', 'محاكاة النجاح', 'الاستعداد النفسي', 'كسر حاجز الخوف', 'التركيز'],
    skillsEn: ['Creative Visualization', 'Confidence Building', 'Success Simulation', 'Psychological Prep', 'Overcoming Fear', 'Focus'],
    progress: 0, isLocked: true, iconName: 'Brain'
  },
  {
    id: 's8', track: 'soft-skills', level: 'Beginner', hours: 5,
    titleAr: 'منطق حل المشكلات والاستفسار', titleEn: 'Logic & Inquiry',
    descriptionAr: 'التحقق من الدقة والجودة من خلال عادة السؤال بـ "لماذا؟".', descriptionEn: 'Checking accuracy and the habit of "Why?".',
    skillsAr: ['التحليل المنطقي', 'السؤال الجذري (5 Whys)', 'الدقة', 'جودة التفكير', 'الفضول المعرفي', 'حل المشكلات'],
    skillsEn: ['Logical Analysis', '5 Whys', 'Accuracy', 'Thinking Quality', 'Cognitive Curiosity', 'Problem-solving'],
    progress: 0, isLocked: true, iconName: 'SearchCheck'
  },
  // Intermediate
  {
    id: 's9', track: 'soft-skills', level: 'Intermediate', hours: 5,
    titleAr: 'سحر الإقناع عبر القيم', titleEn: 'Values-Based Persuasion',
    descriptionAr: 'مخاطبة الدوافع الجوهرية مثل السيطرة والأمان والقبول.', descriptionEn: 'Appealing to control, security, and approval.',
    skillsAr: ['الإقناع القيمي', 'فهم الدوافع', 'التحفيز', 'التفاوض النفسي', 'التأثير', 'كسب التأييد'],
    skillsEn: ['Value-based Persuasion', 'Understanding Motives', 'Motivation', 'Psychological Negotiation', 'Influence', 'Winning Support'],
    progress: 0, isLocked: true, iconName: 'Megaphone'
  },
  {
    id: 's10', track: 'soft-skills', level: 'Intermediate', hours: 5,
    titleAr: 'إتقان قصصك الشخصية', titleEn: 'Mastering Your Stories',
    descriptionAr: 'تحديد الروايات الذاتية (الضحية، الشرير، العاجز) وتغييرها.', descriptionEn: 'Identifying Victim, Villain, and Helpless narratives.',
    skillsAr: ['إعادة صياغة القصص', 'المسؤولية الذاتية', 'التفكير الإيجابي', 'التحليل السلوكي', 'القيادة الذاتية', 'الوعي بالأدوار'],
    skillsEn: ['Reframing Stories', 'Self-Accountability', 'Positive Thinking', 'Behavioral Analysis', 'Self-Leadership', 'Role Awareness'],
    progress: 0, isLocked: true, iconName: 'Book'
  },
  {
    id: 's11', track: 'soft-skills', level: 'Intermediate', hours: 5,
    titleAr: 'الحزم ووضع الحدود', titleEn: 'Self-Assertiveness',
    descriptionAr: 'التعبير عن الاحتياجات باحترام مع مقاومة الهيمنة.', descriptionEn: 'Expressing needs while resisting domination.',
    skillsAr: ['الحزم (Assertiveness)', 'وضع الحدود', 'التعبير عن الحاجات', 'الثقة', 'قول "لا" باحترافية', 'حماية الذات'],
    skillsEn: ['Assertiveness', 'Setting Boundaries', 'Expressing Needs', 'Confidence', 'Saying No Professionaly', 'Self-Protection'],
    progress: 0, isLocked: true, iconName: 'Shield'
  },
  {
    id: 's12', track: 'soft-skills', level: 'Intermediate', hours: 5,
    titleAr: 'التفاوض (ربح - ربح)', titleEn: 'Win-Win Negotiation',
    descriptionAr: 'تطبيق التفاوض القائم على المصالح وفصل الناس عن المشكلات.', descriptionEn: 'Interest-based negotiation.',
    skillsAr: ['التفاوض التعاوني', 'حل النزاعات', 'فصل الأشخاص عن المشكلة', 'البحث عن بدائل', 'إدارة المصالح', 'الإغلاق الناجح'],
    skillsEn: ['Cooperative Negotiation', 'Conflict Resolution', 'Separating People from Problems', 'Finding Alternatives', 'Interest Mgmt', 'Closing'],
    progress: 0, isLocked: true, iconName: 'Users'
  },
  {
    id: 's13', track: 'soft-skills', level: 'Intermediate', hours: 5,
    titleAr: 'مسار "STATE" للملاحظات الحساسة', titleEn: 'STATE Path Feedback',
    descriptionAr: 'تقديم الملاحظات الصعبة بوضوح دون عدوانية.', descriptionEn: 'Delivering delicate feedback without aggression.',
    skillsAr: ['تقديم الملاحظات', 'الوضوح', 'عدم العدوانية', 'الصراحة المهنية', 'التواصل الحساس', 'بناء الثقة'],
    skillsEn: ['Giving Feedback', 'Clarity', 'Non-aggression', 'Professional Candor', 'Sensitive Communication', 'Trust Building'],
    progress: 0, isLocked: true, iconName: 'MessageCircle'
  },
  {
    id: 's14', track: 'soft-skills', level: 'Intermediate', hours: 5,
    titleAr: 'الاستماع القوي (طريقة AMPP)', titleEn: 'Power Listening (AMPP)',
    descriptionAr: 'استخدام الأسئلة، الانعكاس، إعادة الصياغة، والتمهيد لضمان الأمان.', descriptionEn: 'Creating psychological safety (Ask, Mirror, etc.).',
    skillsAr: ['طريقة AMPP', 'خلق الأمان النفسي', 'إعادة الصياغة', 'الانعكاس العاطفي', 'الأسئلة المفتوحة', 'التعاطف'],
    skillsEn: ['AMPP Method', 'Psychological Safety', 'Rephrasing', 'Emotional Reflection', 'Open Questions', 'Empathy'],
    progress: 0, isLocked: true, iconName: 'Radio'
  },
  {
    id: 's15', track: 'soft-skills', level: 'Intermediate', hours: 5,
    titleAr: 'إعادة صياغة الرفض والمثابرة', titleEn: 'Reframing Rejection',
    descriptionAr: 'التعامل مع الرفض بالتركيز على النتائج بدلاً من الأنا.', descriptionEn: 'Handling rejection by focusing on outcomes.',
    skillsAr: ['إدارة الرفض', 'المثابرة', 'الفصل بين الذات والنتائج', 'التعلم من الفشل', 'المرونة النفسية', 'الإصرار'],
    skillsEn: ['Handling Rejection', 'Persistence', 'Separating Self from Results', 'Learning from Failure', 'Resilience', 'Determination'],
    progress: 0, isLocked: true, iconName: 'XCircle'
  },
  {
    id: 's16', track: 'soft-skills', level: 'Intermediate', hours: 5,
    titleAr: 'التعاطف المعرفي والعاطفي للفرق', titleEn: 'Cognitive Empathy',
    descriptionAr: 'التمييز بين فهم وجهات النظر وبين الرنين العاطفي.', descriptionEn: 'Perspective-taking for team resonance.',
    skillsAr: ['التعاطف المعرفي', 'بناء الفرق', 'فهم المنظور الآخر', 'الذكاء الاجتماعي', 'الترابط الجماعي', 'القيادة بالتعاطف'],
    skillsEn: ['Cognitive Empathy', 'Team Building', 'Perspective Taking', 'Social Intelligence', 'Group Cohesion', 'Empathetic Leadership'],
    progress: 0, isLocked: true, iconName: 'Heart'
  },
  // Advanced
  {
    id: 's17', track: 'soft-skills', level: 'Advanced', hours: 5,
    titleAr: 'التفكير المنظومي للقيادة', titleEn: 'Systems Thinking',
    descriptionAr: 'فهم الترابطات وسير العمل والسلوك المنظومي (Gemba).', descriptionEn: 'Understanding interdependencies and Gemba.',
    skillsAr: ['التفكير المنظومي', 'إدارة سير العمل', 'تحليل العلاقات', 'فلسفة Gemba', 'الرؤية الشمولية', 'حل المشكلات المعقدة'],
    skillsEn: ['Systems Thinking', 'Workflow Mgmt', 'Relationship Analysis', 'Gemba', 'Holistic View', 'Complex Solving'],
    progress: 0, isLocked: true, iconName: 'Network'
  },
  {
    id: 's18', track: 'soft-skills', level: 'Advanced', hours: 5,
    titleAr: 'تشريح السلام وحل النزاعات', titleEn: 'Anatomy of Peace',
    descriptionAr: 'كسر دورات التواطؤ والتوقف عن معاملة الآخرين كأشياء.', descriptionEn: 'Breaking cycles of collusion and objectifying.',
    skillsAr: ['حل النزاعات العميقة', 'الإنسانية في العمل', 'كسر التحيز', 'الوساطة', 'السلام النفسي', 'بناء الجسور'],
    skillsEn: ['Deep Conflict Res', 'Humanity at Work', 'Breaking Bias', 'Mediation', 'Inner Peace', 'Bridge Building'],
    progress: 0, isLocked: true, iconName: 'Flower2'
  },
  {
    id: 's19', track: 'soft-skills', level: 'Advanced', hours: 5,
    titleAr: 'القيادة القائمة على الكوتشينج', titleEn: 'Inquiry-Based Coaching',
    descriptionAr: 'الانتقال من القيادة التوجيهية إلى القيادة بالأسئلة.', descriptionEn: 'Shifting from directive to question-based leadership.',
    skillsAr: ['كوتشينج القيادة', 'مهارات السؤال', 'تمكين الموظفين', 'تقليل التوجيه المباشر', 'تطوير الآخرين', 'القيادة الداعمة'],
    skillsEn: ['Leadership Coaching', 'Questioning Skills', 'Employee Empowerment', 'Less Directing', 'Developing Others', 'Supportive Leadership'],
    progress: 0, isLocked: true, iconName: 'HelpCircle'
  },
  {
    id: 's20', track: 'soft-skills', level: 'Advanced', hours: 5,
    titleAr: 'الرؤية الاستراتيجية وتحديد الاتجاه', titleEn: 'Strategic Vision',
    descriptionAr: 'تحديد المستقبل المثالي ومواءمة الفرق حول الهدف.', descriptionEn: 'Defining purpose and aligning teams.',
    skillsAr: ['الرؤية الاستراتيجية', 'تحديد الأهداف', 'مواءمة الفريق', 'الإلهام', 'التخطيط للمستقبل', 'صياغة الرسالة'],
    skillsEn: ['Strategic Vision', 'Goal Setting', 'Team Alignment', 'Inspiration', 'Future Planning', 'Mission Crafting'],
    progress: 0, isLocked: true, iconName: 'Compass'
  },
  {
    id: 's21', track: 'soft-skills', level: 'Advanced', hours: 5,
    titleAr: 'التنبؤ الفائق والمرونة التحليلية', titleEn: 'Superforecasting',
    descriptionAr: 'موازنة وجهات النظر المتعارضة وتحسين دقة الحكم.', descriptionEn: 'Balancing views and improving judgment.',
    skillsAr: ['التنبؤ الاستراتيجي', 'المرونة العقلية', 'تحليل المخاطر', 'موازنة الآراء', 'اتخاذ القرار', 'التفكير الاحتمالي'],
    skillsEn: ['Strategic Forecasting', 'Mental Flexibility', 'Risk Analysis', 'Balancing Views', 'Decision Making', 'Probabilistic Thinking'],
    progress: 0, isLocked: true, iconName: 'BarChart2'
  },
  {
    id: 's22', track: 'soft-skills', level: 'Advanced', hours: 5,
    titleAr: 'فهم تباين الأداء', titleEn: 'Variation in Performance',
    descriptionAr: 'التمييز بين المشكلات القائمة على النظام والمشكلات الفردية.', descriptionEn: 'System-based vs. individual performance.',
    skillsAr: ['تحليل الأداء', 'تحسين الأنظمة', 'تقييم الموظفين', 'العدالة التنظيمية', 'إدارة العمليات', 'التفكير الإحصائي البسيط'],
    skillsEn: ['Performance Analysis', 'System Improvement', 'Employee Eval', 'Organizational Justice', 'Operations Mgmt', 'Statistical Thinking'],
    progress: 0, isLocked: true, iconName: 'Sliders'
  },
  // Professional
  {
    id: 's23', track: 'soft-skills', level: 'Professional', hours: 5,
    titleAr: 'بناء ثقافة مؤسسية مزدهرة', titleEn: 'Thriving Culture',
    descriptionAr: 'مأسسة الأمان والتعلم والحيوية من خلال الركائز الست.', descriptionEn: 'Safety, learning, and vitality through 6 pillars.',
    skillsAr: ['بناء الثقافة', 'الأمان النفسي', 'التعلم المستمر', 'الابتكار', 'الحيوية التنظيمية', 'الاستدامة'],
    skillsEn: ['Culture Building', 'Psychological Safety', 'Continuous Learning', 'Innovation', 'Organizational Vitality', 'Sustainability'],
    progress: 0, isLocked: true, iconName: 'Landmark'
  },
  {
    id: 's24', track: 'soft-skills', level: 'Professional', hours: 5,
    titleAr: 'هرم التغيير وصناعة السلام', titleEn: 'Pyramid of Change',
    descriptionAr: 'التركيز على تمكين النجاح بدلاً من تصحيح الفشل.', descriptionEn: 'Enabling success vs. correcting failure.',
    skillsAr: ['إدارة التغيير', 'تمكين النجاح', 'التفكير الإيجابي', 'القيادة التحويلية', 'صناعة السلام', 'النتائج المستدامة'],
    skillsEn: ['Change Mgmt', 'Enabling Success', 'Positive Thinking', 'Transformational Leadership', 'Peacemaking', 'Sustainable Results'],
    progress: 0, isLocked: true, iconName: 'Triangle'
  },

  // --- AI in Electrical Engineering Track ---
  {
    id: 'ae1', track: 'ai-electrical', level: 'Advanced', ageGroup: 'All', hours: 10,
    titleAr: 'Advances in Artificial Systems for Power Engineering', titleEn: 'Advances in Artificial Systems for Power Engineering',
    descriptionAr: 'by Fares with SME : Zhengbing Hu, Bo Wang, Sergey Petoukhov, Matthew He', descriptionEn: 'by Fares with SME : Zhengbing Hu, Bo Wang, Sergey Petoukhov, Matthew He',
    skillsAr: ['Power Engineering', 'Artificial Systems'], skillsEn: ['Power Engineering', 'Artificial Systems'],
    progress: 100, isLocked: false, iconName: 'Zap'
  },
  {
    id: 'ae2', track: 'ai-electrical', level: 'Advanced', ageGroup: 'All', hours: 8,
    titleAr: 'Artificial Intelligence in China', titleEn: 'Artificial Intelligence in China',
    descriptionAr: 'by Fares with SME : Qilian Liang · Wei Wang · Jiasong Mu · Xin Liu · Zhenyu Na', descriptionEn: 'by Fares with SME : Qilian Liang · Wei Wang · Jiasong Mu · Xin Liu · Zhenyu Na',
    skillsAr: ['AI in China', 'Research'], skillsEn: ['AI in China', 'Research'],
    progress: 80, isLocked: false, iconName: 'Cpu'
  },
  {
    id: 'ae3', track: 'ai-electrical', level: 'Advanced', ageGroup: 'All', hours: 12,
    titleAr: 'Progressive and Integrative Ideas and Applications of Engineering Systems', titleEn: 'Progressive and Integrative Ideas and Applications of Engineering Systems',
    descriptionAr: 'Under the Framework of IOT and AI by Fares with SME : Yongsheng Ma', descriptionEn: 'Under the Framework of IOT and AI by Fares with SME : Yongsheng Ma',
    skillsAr: ['IoT', 'AI Frameworks', 'Engineering Systems'], skillsEn: ['IoT', 'AI Frameworks', 'Engineering Systems'],
    progress: 0, isLocked: false, iconName: 'Network'
  },
  {
    id: 'ae4', track: 'ai-electrical', level: 'Advanced', ageGroup: 'All', hours: 15,
    titleAr: 'Intelligent Control, Robotics, and Industrial Automation', titleEn: 'Intelligent Control, Robotics, and Industrial Automation',
    descriptionAr: 'By Fares with SME : Sanjay Sharma, Bidyadhar Subudhi, Umesh Kumar Sahu', descriptionEn: 'By Fares with SME : Sanjay Sharma, Bidyadhar Subudhi, Umesh Kumar Sahu',
    skillsAr: ['Robotics', 'Industrial Automation', 'Intelligent Control'], skillsEn: ['Robotics', 'Industrial Automation', 'Intelligent Control'],
    progress: 0, isLocked: false, iconName: 'Bot'
  },
  {
    id: 'ae5', track: 'ai-electrical', level: 'Advanced', ageGroup: 'All', hours: 20,
    titleAr: 'Transformer Condition Control', titleEn: 'Transformer Condition Control',
    descriptionAr: 'Advanced and Traditional Technologies (PART 1& 2) By Fares with SME : Vasily Ya. Ushakov, Alexey V. Mytnikov, Valeriy A. Lavrinovich, Alexey V. Lavrinovich', descriptionEn: 'Advanced and Traditional Technologies (PART 1& 2) By Fares with SME : Vasily Ya. Ushakov, Alexey V. Mytnikov, Valeriy A. Lavrinovich, Alexey V. Lavrinovich',
    skillsAr: ['Transformer Control', 'Advanced Technologies'], skillsEn: ['Transformer Control', 'Advanced Technologies'],
    progress: 0, isLocked: false, iconName: 'Activity'
  },
  {
    id: 'ae6', track: 'ai-electrical', level: 'Advanced', ageGroup: 'All', hours: 10,
    titleAr: 'Conversational AI for Natural Human-Centric Interaction', titleEn: 'Conversational AI for Natural Human-Centric Interaction',
    descriptionAr: 'By Fares with SME : Svetlana Stoyanchev, Stefan Ultes, Haizhou Li', descriptionEn: 'By Fares with SME : Svetlana Stoyanchev, Stefan Ultes, Haizhou Li',
    skillsAr: ['Conversational AI', 'Human-Centric Interaction'], skillsEn: ['Conversational AI', 'Human-Centric Interaction'],
    progress: 0, isLocked: false, iconName: 'MessageSquare'
  },
  {
    id: 'ae7', track: 'ai-electrical', level: 'Advanced', ageGroup: 'All', hours: 5,
    titleAr: 'Smart Grid AI', titleEn: 'Smart Grid AI',
    descriptionAr: 'Load forecasting, Demand response, Grid stability', descriptionEn: 'Load forecasting, Demand response, Grid stability',
    skillsAr: ['Load forecasting', 'Demand response', 'Grid stability'], skillsEn: ['Load forecasting', 'Demand response', 'Grid stability'],
    progress: 0, isLocked: true, iconName: 'Grid'
  },
  {
    id: 'ae8', track: 'ai-electrical', level: 'Advanced', ageGroup: 'All', hours: 5,
    titleAr: 'Predictive Maintenance', titleEn: 'Predictive Maintenance',
    descriptionAr: 'تشخيص أعطال المحولات, مراقبة المحركات الكهربائية', descriptionEn: 'Transformer fault diagnosis, Electric motor monitoring',
    skillsAr: ['تشخيص أعطال المحولات', 'مراقبة المحركات الكهربائية'], skillsEn: ['Transformer fault diagnosis', 'Electric motor monitoring'],
    progress: 0, isLocked: true, iconName: 'Wrench'
  },
  {
    id: 'ae9', track: 'ai-electrical', level: 'Advanced', ageGroup: 'All', hours: 5,
    titleAr: 'Renewable Energy Forecasting', titleEn: 'Renewable Energy Forecasting',
    descriptionAr: 'توقع طاقة الرياح, توقع الطاقة الشمسية', descriptionEn: 'Wind power forecasting, Solar power forecasting',
    skillsAr: ['توقع طاقة الرياح', 'توقع الطاقة الشمسية'], skillsEn: ['Wind power forecasting', 'Solar power forecasting'],
    progress: 0, isLocked: true, iconName: 'Sun'
  },
  {
    id: 'ae10', track: 'ai-electrical', level: 'Advanced', ageGroup: 'All', hours: 5,
    titleAr: 'Power System Optimization', titleEn: 'Power System Optimization',
    descriptionAr: 'Economic dispatch, Optimal power flow', descriptionEn: 'Economic dispatch, Optimal power flow',
    skillsAr: ['Economic dispatch', 'Optimal power flow'], skillsEn: ['Economic dispatch', 'Optimal power flow'],
    progress: 0, isLocked: true, iconName: 'TrendingUp'
  },
  {
    id: 'ae11', track: 'ai-electrical', level: 'Advanced', ageGroup: 'All', hours: 5,
    titleAr: 'Digital Substations', titleEn: 'Digital Substations',
    descriptionAr: 'AI + IoT + SCADA', descriptionEn: 'AI + IoT + SCADA',
    skillsAr: ['AI', 'IoT', 'SCADA'], skillsEn: ['AI', 'IoT', 'SCADA'],
    progress: 0, isLocked: true, iconName: 'Server'
  },
  
  // --- YTA Track ---
  {
    id: 'yta1', track: 'yta', level: 'Beginner', ageGroup: 'All', hours: 10,
    titleAr: 'AI for every one', titleEn: 'AI for every one',
    descriptionAr: 'كورس الذكاء الاصطناعي للجميع', descriptionEn: 'AI for everyone course',
    skillsAr: ['AI', 'Machine Learning', 'Deep Learning'], skillsEn: ['AI', 'Machine Learning', 'Deep Learning'],
    progress: 0, isLocked: false, iconName: 'Bot'
  }
];

export const MOCK_STUDENT_STATS: StudentStat[] = [
  { studentId: 's1', studentName: 'محمد عمر', coursesCompleted: 5, averageScore: 92, lastActive: 'منذ ساعتين' },
  { studentId: 's2', studentName: 'ليلى خالد', coursesCompleted: 3, averageScore: 85, lastActive: 'منذ يوم' },
  { studentId: 's3', studentName: 'كريم ناصر', coursesCompleted: 6, averageScore: 78, lastActive: 'منذ 3 ساعات' },
  { studentId: 's4', studentName: 'نور الهدى', coursesCompleted: 2, averageScore: 95, lastActive: 'الآن' },
  { studentId: 's5', studentName: 'ياسر كمال', coursesCompleted: 4, averageScore: 65, lastActive: 'منذ أسبوع' },
];

export const MOCK_SUPERVISOR_STATS: SupervisorStat[] = [
  { id: 'sup1', name: 'أ. فاطمة الزهراء', studentsCount: 45, averageStudentPerformance: 88, activeCourses: 12 },
  { id: 'sup2', name: 'أ. عمر الخيام', studentsCount: 32, averageStudentPerformance: 76, activeCourses: 8 },
  { id: 'sup3', name: 'أ. مريم العلي', studentsCount: 50, averageStudentPerformance: 91, activeCourses: 15 },
];

export const USERS: Record<string, User> = {
  student: {
    id: 'u1',
    name: 'سامي الطالب',
    role: UserRole.STUDENT,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    level: 5,
    points: 1250
  },
  supervisor: {
    id: 'u2',
    name: 'أ. خليل المشرف',
    role: UserRole.SUPERVISOR,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka'
  },
  admin: {
    id: 'u3',
    name: 'المدير العام',
    role: UserRole.ADMIN,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Caleb'
  }
};