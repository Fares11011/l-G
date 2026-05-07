import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_COURSES } from '../constants';
import { YTA_VIDEOS, YTA_SOURCES, YTA_PRE_ASSESSMENT, YTA_POST_ASSESSMENT, YTA_FLASHCARDS } from '../YtaCourseData';
import { useLanguage } from '../LanguageContext';
import { 
  PlayCircle, CheckCircle, Lock, Award, FileText, 
  Gamepad2, Activity, ArrowRight, BarChart3, Star, Clock, HelpCircle, Lightbulb, XCircle
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const course = MOCK_COURSES.find(c => c.id === id);
  
  const [activeTab, setActiveTab] = useState<'overview' | 'learn' | 'quiz' | 'post-quiz' | 'games' | 'certificate'>('overview');
  const [progress, setProgress] = useState(course?.progress || 0);
  const [modulesCompleted, setModulesCompleted] = useState<number[]>(course?.progress === 100 ? [1,2,3,4,5,6] : [1]);
  const [preExamDone, setPreExamDone] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [postQuizScore, setPostQuizScore] = useState<number | null>(null);
  
  // YTA specific state
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [showFlashcard, setShowFlashcard] = useState(false);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isVideoStopped, setIsVideoStopped] = useState(false);
  const [activeGameUrl, setActiveGameUrl] = useState<string | null>(null);
  
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'close-game') {
        setActiveGameUrl(null);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    if (course?.id === 'yta1' && activeTab === 'learn' && !isVideoStopped) {
      setShowFlashcard(false);
      setFlashcardFlipped(false);
      const timer = setTimeout(() => {
        setShowFlashcard(true);
      }, 60000); // 1 minute
      return () => clearTimeout(timer);
    }
  }, [activeTab, activeVideoIndex, course?.id, isVideoStopped]);

  if (!course) return <div className="p-10 text-center dark:text-white">{t('الكورس غير موجود', 'Course not found')}</div>;

  const handleModuleComplete = (moduleId: number) => {
    if (!modulesCompleted.includes(moduleId)) {
      setModulesCompleted([...modulesCompleted, moduleId]);
      setProgress(Math.min(100, progress + 20));
    }
  };

  const stopVideo = () => {
    setIsVideoStopped(true);
  };

  const startVideo = () => {
    setIsVideoStopped(false);
  };

  const renderOverview = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row gap-8 transition-colors">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-4 text-brand-900 dark:text-white">{t('عن الكورس', 'About Course')}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{t(course.descriptionAr, course.descriptionEn)}</p>
          
          <div className="flex gap-4 flex-wrap">
            <div className="bg-blue-50/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 border border-blue-100 dark:border-blue-800">
              <Clock size={16} /> {course.hours} {t('ساعات', 'Hours')}
            </div>
            <div className="bg-purple-50/50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 border border-purple-100 dark:border-purple-800">
              <Star size={16} /> {t(course.level, course.level)}
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-64">
           <div className="bg-gray-50/50 dark:bg-slate-700/30 p-4 rounded-xl text-center backdrop-blur-sm">
             <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-2">{t('تقدمك', 'Your Progress')}</h4>
             <div className="h-32 w-full mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[{ value: progress }, { value: 100 - progress }]}
                      innerRadius={40}
                      outerRadius={55}
                      startAngle={90}
                      endAngle={-270}
                      dataKey="value"
                    >
                      <Cell fill="#0ea5e9" />
                      <Cell fill="#64748b" className="opacity-20" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
             </div>
             <p className="text-2xl font-black text-brand-800 dark:text-white">{progress}%</p>
           </div>
        </div>
      </div>

      <div className="glass-panel p-6 rounded-2xl transition-colors">
        <h3 className="text-xl font-bold mb-4 text-brand-900 dark:text-white">{t('المهارات المكتسبة', 'Skills Gained')}</h3>
        <div className="flex flex-wrap gap-3">
          {(t(course.skillsAr.join(','), course.skillsEn.join(','))).split(',').map((skill, i) => (
             <span key={i} className="px-3 py-1.5 bg-brand-50/50 dark:bg-slate-700/50 text-brand-700 dark:text-brand-300 rounded-full text-sm font-medium border border-brand-200 dark:border-slate-600">
                {skill}
             </span>
          ))}
        </div>
      </div>
      
      {!preExamDone && progress < 10 && (
         <div className="glass-panel border-l-4 border-l-yellow-400 p-4 rounded-r-lg flex items-start justify-between bg-yellow-50/40 dark:bg-yellow-900/10">
           <div>
              <h4 className="font-bold text-yellow-800 dark:text-yellow-400">{t('التقييم القبلي مطلوب', 'Pre-Assessment Required')}</h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">{t('يرجى إتمام التقييم القبلي لتحديد مستواك.', 'Please complete the pre-assessment to gauge your level.')}</p>
           </div>
           <button onClick={() => setActiveTab('quiz')} className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-yellow-600 transition-colors shadow-lg shadow-yellow-500/30">
             {t('ابدأ الآن', 'Start Now')}
           </button>
         </div>
      )}
    </div>
  );

  const renderContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
       {/* Video Player Main */}
       <div className="lg:col-span-2 space-y-4">
          <div className="glass-panel p-1 rounded-2xl relative">
             <div className="aspect-video bg-black rounded-xl overflow-hidden relative group shadow-lg">
                {!showFlashcard && !isVideoStopped ? (
                   course.id === 'yta1' ? (
                      <iframe
                        src={YTA_VIDEOS[activeVideoIndex]}
                        className="w-full h-full border-0"
                        allowFullScreen
                      ></iframe>
                   ) : (
                      <>
                         {/* Mock Player UI */}
                         <div className="absolute inset-0 flex items-center justify-center">
                            <button onClick={startVideo} className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-brand hover:scale-110 transition-all">
                               <PlayCircle size={32} fill="currentColor" />
                            </button>
                         </div>
                         <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <p className="font-bold">{t('مقدمة في الكورس', 'Course Introduction')}</p>
                            <div className="w-full bg-gray-600 h-1 rounded-full mt-2 overflow-hidden">
                               <div className="bg-red-500 h-full w-1/3"></div>
                            </div>
                         </div>
                      </>
                   )
                ) : (
                   <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white gap-4">
                      {showFlashcard ? (
                         <div className="text-center p-6">
                            <Activity className="mx-auto mb-4 text-blue-400 animate-bounce" size={48} />
                            <p className="text-xl font-bold">{t('يوجد سؤال معلق.. أجب عليه للمتابعة', 'Question pending.. answer to continue')}</p>
                         </div>
                      ) : (
                         <div className="text-center p-6">
                            <button 
                               onClick={startVideo}
                               className="w-20 h-20 bg-brand-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
                            >
                               <PlayCircle size={40} />
                            </button>
                            <p className="mt-4 font-bold text-slate-400">{t('انقر للبدء أو الاستمرار', 'Click to start or continue')}</p>
                         </div>
                      )}
                   </div>
                )}
             </div>
             
             {/* Stop/Play Buttons */}
             {!showFlashcard && (
                <div className="absolute bottom-6 end-6 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   {isVideoStopped ? (
                      <button onClick={startVideo} className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-brand transition-colors">
                         <PlayCircle size={20} />
                      </button>
                   ) : (
                      <button onClick={stopVideo} className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-red-500 transition-colors">
                         <div className="w-5 h-5 bg-white rounded-sm"></div>
                      </button>
                   )}
                </div>
             )}

             {/* Flashcard Overlay for YTA */}
             {course.id === 'yta1' && showFlashcard && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/10 dark:bg-black/20 backdrop-blur-3xl rounded-xl p-6">
                   <div 
                      className={`w-full max-w-md aspect-video cursor-pointer perspective-1000`}
                      onClick={() => {
                         if (!flashcardFlipped) {
                            setFlashcardFlipped(true);
                         } else {
                            setShowFlashcard(false);
                            startVideo(); // Explicitly restart video after answering
                         }
                      }}
                   >
                      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flashcardFlipped ? 'rotate-y-180' : ''}`}>
                         {/* Front */}
                         <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-white/60 to-white/20 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-xl border border-white/50 dark:border-white/20 rounded-[2rem] flex flex-col items-center justify-center p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                            <div className="w-16 h-16 mb-6 rounded-full bg-brand-100/50 dark:bg-brand-900/50 flex items-center justify-center text-brand-600 dark:text-brand-300">
                               <HelpCircle size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-4 leading-tight">{YTA_FLASHCARDS[activeVideoIndex]?.question}</h3>
                            <p className="text-brand-600 dark:text-brand-400 font-bold animate-pulse mt-auto">{t('انقر لرؤية الإجابة', 'Click to see answer')}</p>
                         </div>
                         {/* Back */}
                         <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-brand-500 to-brand-700 backdrop-blur-xl border border-white/30 rounded-[2rem] flex flex-col items-center justify-center p-8 text-center shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                            <div className="w-16 h-16 mb-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                               <Lightbulb size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 leading-relaxed">{YTA_FLASHCARDS[activeVideoIndex]?.answer}</h3>
                            <p className="text-white/80 font-bold mt-auto">{t('انقر للمتابعة', 'Click to continue')}</p>
                         </div>
                      </div>
                   </div>
                </div>
             )}
          </div>
          
          <div className="flex justify-between items-center px-2">
             <h2 className="text-2xl font-bold text-brand-900 dark:text-white drop-shadow-sm">
                {course.id === 'yta1' ? `${t('فيديو', 'Video')} ${activeVideoIndex + 1}` : t(course.titleAr, course.titleEn)}
             </h2>
             <button onClick={() => handleModuleComplete(course.id === 'yta1' ? activeVideoIndex + 1 : Math.floor(Math.random() * 100))} className="text-brand-600 dark:text-brand-400 font-bold hover:underline">
                {t('وضع علامة "مكتمل"', 'Mark as Completed')}
             </button>
          </div>
       </div>

       {/* Playlist */}
       <div className="glass-panel rounded-2xl overflow-hidden shadow-sm h-fit transition-colors">
          <div className="p-4 bg-gray-50/50 dark:bg-slate-700/50 border-b border-gray-200 dark:border-slate-600 font-bold text-gray-700 dark:text-gray-200 backdrop-blur-md">
             {t('محتوى الكورس', 'Course Content')}
          </div>
          <div className="divide-y divide-gray-100 dark:divide-slate-700 max-h-[400px] overflow-y-auto">
             {(course.id === 'yta1' ? [1,2,3,4,5,6] : [1,2,3,4,5]).map((item) => (
               <div 
                  key={item} 
                  onClick={() => {
                     if (course.id === 'yta1' && (item <= Math.max(...modulesCompleted, 0) + 1)) {
                        setActiveVideoIndex(item - 1);
                     }
                  }}
                  className={`p-4 hover:bg-gray-50/50 dark:hover:bg-slate-700/50 cursor-pointer flex items-center gap-3 ${modulesCompleted.includes(item) ? 'opacity-50' : ''} ${course.id === 'yta1' && activeVideoIndex === item - 1 ? 'bg-brand-50 dark:bg-brand-900/20 border-s-4 border-brand-500' : ''}`}
               >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${modulesCompleted.includes(item) ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-slate-600 text-gray-500 dark:text-gray-300'}`}>
                     {modulesCompleted.includes(item) ? <CheckCircle size={14} /> : <span className="text-xs">{item}</span>}
                  </div>
                  <div className="flex-1">
                     <p className="text-sm font-bold text-gray-800 dark:text-white">{t(`الوحدة ${item}`, `Module ${item}`)}</p>
                     <p className="text-xs text-gray-400 dark:text-gray-500">15:00 {t('دقيقة', 'mins')}</p>
                  </div>
                  {item > Math.max(...modulesCompleted, 0) + 1 && <Lock size={14} className="text-gray-300 dark:text-slate-600" />}
               </div>
             ))}
          </div>
          
          {course.id === 'yta1' && (
             <div className="p-4 bg-gray-50/50 dark:bg-slate-700/50 border-t border-gray-200 dark:border-slate-600">
                <p className="font-bold text-gray-700 dark:text-gray-200 mb-2">{t('المصادر', 'Sources')}</p>
                <div className="space-y-2">
                   {YTA_SOURCES.map((src, idx) => (
                      <button 
                         key={idx} 
                         onClick={() => setActiveSource(src)} 
                         className="flex items-center gap-2 text-sm text-brand-600 dark:text-brand-400 hover:underline text-start"
                      >
                         <FileText size={16} />
                         {t(`المصدر ${idx + 1}`, `Source ${idx + 1}`)}
                      </button>
                   ))}
                </div>
             </div>
          )}
       </div>
       
       {/* Source Modal */}
       {activeSource && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
             <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-5xl h-[80vh] flex flex-col overflow-hidden shadow-2xl">
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-slate-700">
                   <h3 className="font-bold text-gray-800 dark:text-white">{t('المصدر', 'Source')}</h3>
                   <button onClick={() => setActiveSource(null)} className="text-gray-500 hover:text-red-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                   </button>
                </div>
                <div className="flex-1 bg-gray-100 dark:bg-slate-900">
                   <iframe src={activeSource} className="w-full h-full border-0"></iframe>
                </div>
             </div>
          </div>
       )}
    </div>
  );

  const renderQuiz = (isPostQuiz = false) => {
    const isYta = course.id === 'yta1';
    const questions = isYta ? (isPostQuiz ? YTA_POST_ASSESSMENT : YTA_PRE_ASSESSMENT) : [
      { id: 1, question: 'ما هو المفهوم الأساسي لـ...؟', options: ['Option A', 'Option B', 'Option C'] },
      { id: 2, question: 'ما هو المفهوم الأساسي لـ...؟', options: ['Option A', 'Option B', 'Option C'] },
      { id: 3, question: 'ما هو المفهوم الأساسي لـ...؟', options: ['Option A', 'Option B', 'Option C'] }
    ];
    
    const currentScore = isPostQuiz ? postQuizScore : quizScore;
    const setScore = isPostQuiz ? setPostQuizScore : setQuizScore;

    const handleOptionSelect = (questionId: number, optionIndex: number) => {
      setUserAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    };

    const handleSubmit = () => {
      let correct = 0;
      questions.forEach(q => {
        // For YTA questions, we have correctAnswer index. For generic, we just mock it.
        const isCorrect = isYta ? userAnswers[q.id] === (q as any).correctAnswer : userAnswers[q.id] === 0;
        if (isCorrect) correct++;
      });
      const percentage = Math.round((correct / questions.length) * 100);
      setScore(percentage);
      if (!isPostQuiz) setPreExamDone(true);
      setUserAnswers({});
    };

    return (
      <div className="max-w-2xl mx-auto glass-panel p-8 rounded-3xl animate-fade-in transition-colors">
         {!currentScore ? (
            <>
              <h3 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                {isPostQuiz ? t('الاختبار البعدي', 'Post-Assessment') : t('التقييم القبلي', 'Pre-Assessment')}
              </h3>
              <div className="space-y-6">
                 {questions.map((q, idx) => (
                   <div key={q.id} className="bg-gray-50/50 dark:bg-slate-700/50 p-4 rounded-xl transition-colors border border-white/40 dark:border-white/10">
                      <p className="font-bold mb-3 text-gray-800 dark:text-gray-200">
                        {isYta ? q.question : t(`سؤال ${q.id}: ${q.question}`, `Question ${q.id}: ${q.question}`)}
                      </p>
                      <div className="space-y-2">
                         {q.options.map((opt, optIdx) => (
                            <label key={optIdx} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${userAnswers[q.id] === optIdx ? 'bg-brand-50 dark:bg-brand-900/30 border-brand-300 dark:border-brand-500' : 'bg-white/70 dark:bg-slate-600/70 border-gray-200 dark:border-slate-500 hover:border-brand-300 dark:hover:border-brand-500'}`}>
                               <input 
                                 type="radio" 
                                 name={`q${q.id}`} 
                                 checked={userAnswers[q.id] === optIdx}
                                 onChange={() => handleOptionSelect(q.id, optIdx)}
                                 className="text-brand-600 focus:ring-brand-500" 
                               />
                               <span className="text-sm text-gray-700 dark:text-gray-200">{opt}</span>
                            </label>
                         ))}
                      </div>
                   </div>
                 ))}
              </div>
              <button 
                 onClick={handleSubmit}
                 disabled={Object.keys(userAnswers).length < questions.length}
                 className="w-full mt-8 bg-brand text-white py-3 rounded-xl font-bold hover:bg-brand-light transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                 {t('إرسال الإجابات', 'Submit Answers')}
              </button>
            </>
         ) : (
            <div className="text-center py-10">
               <div className="w-20 h-20 bg-green-100/50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <CheckCircle size={40} />
               </div>
               <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-2">{t('أحسنت!', 'Well Done!')}</h3>
               <p className="text-gray-500 dark:text-gray-400 mb-6">{t(`لقد حصلت على ${currentScore}%`, `You scored ${currentScore}%`)}</p>
               <button onClick={() => { setScore(null); setActiveTab(isPostQuiz ? 'certificate' : 'learn'); }} className="bg-brand text-white px-6 py-2 rounded-lg font-bold">
                  {isPostQuiz ? t('عرض الشهادة', 'View Certificate') : t('متابعة التعلم', 'Continue Learning')}
               </button>
            </div>
         )}
      </div>
    );
  };

  const renderGames = () => {
    if (course.id === 'yta1') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {[
            { 
              title: 'تعلم الآلة من خلال اللعب الذاتي', 
              url: '/games/ml_self_play.html', 
              icon: Gamepad2, 
              gradient: 'from-blue-500/80 to-cyan-600/80' 
            },
            { 
              title: 'تقليل الخسارة في توقع أسعار البيوت', 
              url: '/games/house_price_prediction.html', 
              icon: Activity, 
              gradient: 'from-red-500/80 to-rose-600/80' 
            },
            { 
              title: 'تنظيف البيانات الشاذة (Outliers)', 
              url: '/games/data_outliers.html', 
              icon: BarChart3, 
              gradient: 'from-green-500/80 to-emerald-600/80' 
            }
          ].map((game, i) => (
            <div key={i} className={`glass-panel rounded-2xl p-6 text-white text-center shadow-lg transform hover:-translate-y-1 transition-transform bg-gradient-to-br ${game.gradient}`}>
              <game.icon size={48} className="mx-auto mb-4 opacity-80" />
              <h3 className="text-lg font-bold mb-6 h-12 flex items-center justify-center">{t(game.title, game.title)}</h3>
              <button 
                onClick={() => setActiveGameUrl(game.url)} 
                className="bg-white/90 text-slate-800 px-6 py-2 rounded-full font-bold shadow hover:shadow-lg transition-all"
              >
                {t('العب الآن', 'Play Now')}
              </button>
            </div>
          ))}
          
          {/* Game Modal */}
          {activeGameUrl && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10">
              <div className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-6xl h-full flex flex-col overflow-hidden shadow-2xl relative">
                <button 
                  onClick={() => setActiveGameUrl(null)}
                  className="absolute top-4 left-4 z-[210] bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition-colors"
                >
                  <XCircle size={24} />
                </button>
                <iframe src={activeGameUrl} className="w-full h-full border-0"></iframe>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
         <div className="glass-panel rounded-2xl p-6 text-white text-center shadow-lg transform hover:-translate-y-1 transition-transform bg-gradient-to-br from-purple-500/80 to-indigo-600/80">
            <Gamepad2 size={48} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-2">{t('تحدي الأكواد', 'Code Challenge')}</h3>
            <p className="text-purple-100 text-sm mb-6">{t('اختبر سرعتك في كتابة الكود الصحيح قبل انتهاء الوقت!', 'Test your speed in writing correct code before time runs out!')}</p>
            <button className="bg-white/90 text-purple-600 px-6 py-2 rounded-full font-bold shadow hover:shadow-lg">{t('العب الآن', 'Play Now')}</button>
         </div>
         <div className="glass-panel rounded-2xl p-6 text-white text-center shadow-lg transform hover:-translate-y-1 transition-transform bg-gradient-to-br from-orange-400/80 to-red-500/80">
            <Activity size={48} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-2">{t('لعبة الذاكرة', 'Memory Game')}</h3>
            <p className="text-orange-100 text-sm mb-6">{t('طابق المصطلحات البرمجية مع تعاريفها.', 'Match coding terms with their definitions.')}</p>
            <button className="bg-white/90 text-orange-600 px-6 py-2 rounded-full font-bold shadow hover:shadow-lg">{t('العب الآن', 'Play Now')}</button>
         </div>
      </div>
    );
  };

  const renderCertificate = () => (
     <div className="text-center animate-fade-in glass-panel p-10 rounded-3xl shadow-sm max-w-2xl mx-auto transition-colors">
        {progress >= 100 ? (
           <>
              <Award size={80} className="text-yellow-500 mx-auto mb-6 drop-shadow-md" />
              <h3 className="text-3xl font-black text-brand-900 dark:text-white mb-4">{t('مبارك!', 'Congratulations!')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">{t('لقد أكملت الكورس بنجاح. يمكنك الآن تحميل شهادتك المعتمدة.', 'You have successfully completed the course. You can now download your certified certificate.')}</p>
              <div className="p-8 border-4 border-double border-brand-200 dark:border-slate-600 rounded-xl bg-white/50 dark:bg-slate-700/50 mb-8 relative">
                  {/* Mock Certificate Visual */}
                  <div className="absolute top-4 start-4 opacity-10"><Award size={100}/></div>
                  <h2 className="font-serif text-2xl font-bold text-brand-900 dark:text-white mb-2">CERTIFICATE OF COMPLETION</h2>
                  <p className="text-brand-700 dark:text-brand-300">Awarded to Student Name</p>
                  <p className="text-sm text-brand-500 dark:text-brand-400 mt-4">For completing {t(course.titleAr, course.titleEn)}</p>
              </div>
              <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto">
                 <FileText size={20} /> {t('تحميل الشهادة', 'Download Certificate')}
              </button>
           </>
        ) : (
           <>
              <Lock size={60} className="text-gray-300 dark:text-slate-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-2">{t('الشهادة مقفلة', 'Certificate Locked')}</h3>
              <p className="text-gray-500 dark:text-gray-400">{t('يجب إكمال 100% من الكورس للحصول على الشهادة.', 'You must complete 100% of the course to earn the certificate.')}</p>
           </>
        )}
     </div>
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-20">
       {/* Breadcrumb & Back */}
       <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Link to="/dashboard" className="hover:text-brand-600 dark:hover:text-brand-400">{t('مسار التعلم', 'Learning Path')}</Link>
          <span>/</span>
          <span className="text-brand-800 dark:text-brand-200 font-bold">{t(course.titleAr, course.titleEn)}</span>
       </div>

       {/* Course Header */}
       <div className="glass-panel bg-brand/90 dark:bg-brand/60 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
          <div className="absolute end-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -me-16 -mt-16 animate-pulse"></div>
          <div className="relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                   <h1 className="text-3xl md:text-4xl font-black mb-2 drop-shadow-sm">{t(course.titleAr, course.titleEn)}</h1>
                   <p className="text-brand-100 max-w-2xl">{t(course.descriptionAr, course.descriptionEn)}</p>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                   <div className="text-center px-2">
                      <p className="text-xs text-brand-200">{t('التقدم', 'Progress')}</p>
                      <p className="text-xl font-bold">{progress}%</p>
                   </div>
                   <div className="w-px h-8 bg-white/20"></div>
                   <div className="text-center px-2">
                      <p className="text-xs text-brand-200">{t('النقاط', 'XP')}</p>
                      <p className="text-xl font-bold text-yellow-400">150</p>
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Navigation Tabs */}
       <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
          {[
             { id: 'overview', label: 'نظرة عامة', icon: Activity },
             { id: 'quiz', label: 'تقييم قبلي', icon: FileText },
             { id: 'learn', label: 'محتوى الكورس', icon: PlayCircle },
             { id: 'games', label: 'الألعاب', icon: Gamepad2 },
             { id: 'post-quiz', label: 'اختبار نهائي', icon: FileText },
             { id: 'certificate', label: 'الشهادة', icon: Award },
          ].map(tab => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id as any)}
               className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap font-bold transition-all
                  ${activeTab === tab.id 
                     ? 'bg-brand-600 text-white shadow-lg' 
                     : 'glass-panel text-gray-600 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-slate-700/60'
                  }
               `}
             >
                <tab.icon size={18} />
                <span>{t(tab.label, tab.label)}</span>
             </button>
          ))}
       </div>

       {/* Tab Content */}
       <div className="min-h-[400px]">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'learn' && renderContent()}
          {activeTab === 'quiz' && renderQuiz(false)}
          {activeTab === 'post-quiz' && renderQuiz(true)}
          {activeTab === 'games' && renderGames()}
          {activeTab === 'certificate' && renderCertificate()}
       </div>
    </div>
  );
};