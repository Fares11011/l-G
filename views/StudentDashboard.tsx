import React, { useState } from 'react';
import { MOCK_COURSES } from '../constants';
import { 
  Lock, Code, Brain, CheckCircle2, Star, ChevronRight 
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { useLanguage } from '../LanguageContext';
import { User, TrackType } from '../types';
import * as Icons from 'lucide-react';

interface StudentDashboardProps {
  user: User;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ user }) => {
  const { t, dir } = useLanguage();
  const [activeTrack, setActiveTrack] = useState<TrackType>(user.isYTA ? 'yta' : 'programming');
  const navigate = useNavigate();

  // Filter Courses
  let trackCourses = MOCK_COURSES.filter(c => c.track === activeTrack);
  
  // If YTA user, force all YTA courses to be unlocked
  if (user.isYTA) {
    trackCourses = trackCourses.map(c => ({ ...c, isLocked: false }));
  }

  // Helper to render dynamic icon
  const CourseIcon = ({ name, size = 24 }: { name?: string, size?: number }) => {
    const IconComponent = name && (Icons as any)[name] ? (Icons as any)[name] : Icons.BookOpen;
    return <IconComponent size={size} />;
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Welcome Banner */}
      <div className="glass-panel rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden bg-brand/90 dark:bg-brand/60">
        <div className="absolute top-0 end-0 w-96 h-96 bg-secondary-500/30 rounded-full blur-3xl -me-20 -mt-20 animate-pulse"></div>
        <div className="absolute bottom-0 start-0 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl -ms-10 -mb-10"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-start">
                <h2 className="text-3xl md:text-4xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-sm">
                    {t('مرحباً بك في رحلة التعلم!', 'Welcome to your Learning Journey!')} 🚀
                </h2>
                <p className="text-brand-100 text-lg max-w-xl leading-relaxed">
                    {t(
                    'كل خطوة تقربك من الاحتراف. استمر في جمع النقاط وفتح مستويات جديدة.',
                    'Every step brings you closer to mastery. Keep collecting XP and unlocking new levels.'
                    )}
                </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex gap-6 shadow-inner">
                <div className="text-center">
                    <p className="text-brand-200 text-xs font-bold uppercase">{t('النقاط', 'XP')}</p>
                    <p className="text-2xl font-black text-yellow-400 drop-shadow-md">1250</p>
                </div>
                <div className="w-px bg-white/20"></div>
                <div className="text-center">
                    <p className="text-brand-200 text-xs font-bold uppercase">{t('المستوى', 'Level')}</p>
                    <p className="text-2xl font-black text-white drop-shadow-md">5</p>
                </div>
            </div>
        </div>
      </div>

      {/* Track Selector */}
      {!user.isYTA && (
        <div className="flex justify-center mb-12">
          <div className="glass-panel p-2 rounded-2xl flex flex-wrap justify-center gap-2 transition-colors">
              <button 
                  onClick={() => setActiveTrack('programming')}
                  className={`flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold transition-all duration-300 ${activeTrack === 'programming' ? 'bg-brand/90 text-white shadow-lg transform scale-105' : 'text-gray-600 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-slate-700/50'}`}
              >
                  <Code size={22} />
                  <span>{t('مسار البرمجة', 'Programming Track')}</span>
              </button>
              <button 
                  onClick={() => setActiveTrack('soft-skills')}
                  className={`flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold transition-all duration-300 ${activeTrack === 'soft-skills' ? 'bg-secondary-600/90 text-white shadow-lg transform scale-105' : 'text-gray-600 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-slate-700/50'}`}
              >
                  <Brain size={22} />
                  <span>{t('التميز الشخصي', 'Soft Skills')}</span>
              </button>
              <button 
                  onClick={() => setActiveTrack('ai-electrical')}
                  className={`flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold transition-all duration-300 ${activeTrack === 'ai-electrical' ? 'bg-accent-600/90 text-white shadow-lg transform scale-105' : 'text-gray-600 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-slate-700/50'}`}
              >
                  <Icons.Zap size={22} />
                  <span>{t('الذكاء الاصطناعي في الهندسة الكهربائية', 'AI in Electrical Engineering')}</span>
              </button>
              <button 
                  onClick={() => setActiveTrack('yta')}
                  className={`flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold transition-all duration-300 ${activeTrack === 'yta' ? 'bg-purple-600/90 text-white shadow-lg transform scale-105' : 'text-gray-600 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-slate-700/50'}`}
              >
                  <Icons.Bot size={22} />
                  <span>{t('أكاديمية تكنولوجيا الشباب', 'YTA | Youth technology academy')}</span>
              </button>
          </div>
        </div>
      )}

      {/* Innovative Snake Journey Path */}
      <div className="relative max-w-5xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 relative z-10 mt-8">
              {trackCourses.map((course, idx) => {
                  const isUnlocked = !course.isLocked;

                  return (
                      <div 
                        key={course.id} 
                        onClick={() => isUnlocked && navigate(`/course/${course.id}`)}
                        className={`
                            relative group cursor-pointer perspective-1000
                            ${!isUnlocked ? 'cursor-not-allowed grayscale-[0.8] opacity-70' : ''}
                        `}
                      >
                          {/* Glass Card Content */}
                          <div className={`
                              glass-panel rounded-[2rem] p-6 transition-all duration-500 ease-out transform
                              ${isUnlocked 
                                ? 'hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]' 
                                : 'bg-gray-100/50 dark:bg-slate-900/50'}
                          `}>
                              <div className="flex justify-between items-start mb-4">
                                  {/* Icon inside card */}
                                  <div className={`
                                      w-16 h-16 rounded-2xl flex items-center justify-center shadow-md
                                      ${isUnlocked ? 'bg-gradient-to-br from-brand-600 to-brand-800 text-white' : 'bg-gray-200 dark:bg-slate-700 text-gray-400 dark:text-slate-500'}
                                  `}>
                                      {isUnlocked ? <CourseIcon name={course.iconName} size={28} /> : <Lock size={28} />}
                                  </div>

                                  {/* Status Badge */}
                                  {course.progress === 100 && (
                                      <span className="bg-green-100/80 dark:bg-green-900/60 text-green-700 dark:text-green-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm h-7">
                                          <CheckCircle2 size={12} /> {t('مكتمل', 'Done')}
                                      </span>
                                  )}
                              </div>

                              <div className="mt-2">
                                  <h3 className={`text-lg font-black mb-2 leading-tight ${isUnlocked ? 'text-gray-800 dark:text-white' : 'text-gray-500 dark:text-slate-500'}`}>
                                      {t(course.titleAr, course.titleEn)}
                                  </h3>
                                  <div className="flex items-center gap-2 mb-4">
                                      <span className="text-[10px] font-bold bg-white/50 dark:bg-slate-700/50 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md">{t(course.level, course.level)}</span>
                                      <span className="text-[10px] font-bold bg-blue-50/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-md">{course.hours}h</span>
                                  </div>
                                  
                                  {/* Skills */}
                                  <div className="flex flex-wrap gap-1 mb-4 h-12 overflow-hidden">
                                      {(t(course.skillsAr.join(','), course.skillsEn.join(','))).split(',').slice(0,2).map((skill, i) => (
                                          <span key={i} className="text-[10px] text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-slate-600 px-2 py-0.5 rounded-full bg-white/30 dark:bg-slate-800/30">
                                              {skill}
                                          </span>
                                      ))}
                                  </div>

                                  {/* Action Button */}
                                  <div className={`
                                      flex items-center justify-between mt-2 pt-4 border-t border-gray-200/50 dark:border-slate-700/50
                                      ${isUnlocked ? 'text-secondary-600 dark:text-secondary-400' : 'text-gray-300 dark:text-slate-600'}
                                  `}>
                                      <span className="font-bold text-sm">{isUnlocked ? t('ابــدأ', 'Start') : t('مغلق', 'Locked')}</span>
                                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isUnlocked ? 'bg-secondary-50 dark:bg-secondary-900/30 group-hover:bg-secondary-600 dark:group-hover:bg-secondary-500 group-hover:text-white' : 'bg-gray-100 dark:bg-slate-700'}`}>
                                          <ChevronRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  );
              })}
          </div>
      </div>
    </div>
  );
};