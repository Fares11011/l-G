import React, { useState } from 'react';
import { USERS, APP_NAME, LOGO_URL } from '../constants';
import { UserRole } from '../types';
import { ArrowRight, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface LoginProps {
  onLogin: (role: UserRole, name: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const { t, dir, toggleLanguage, language } = useLanguage();
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRoleClick = (role: UserRole) => {
    setSelectedRole(role);
    setName('');
    setPassword('');
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !password.trim()) {
      setError(t('الرجاء إدخال الاسم وكلمة المرور', 'Please enter name and password'));
      return;
    }

    // Special YTA User Login
    if (name.toUpperCase() === 'YTA' && password === 'YTA@2026') {
      onLogin(UserRole.STUDENT, 'YTA User');
      return;
    }

    let validPassword = '';
    if (selectedRole === UserRole.STUDENT) validPassword = '123';
    if (selectedRole === UserRole.SUPERVISOR) validPassword = '1234';
    if (selectedRole === UserRole.ADMIN) validPassword = '12345';

    if (password === validPassword) {
      onLogin(selectedRole!, name);
    } else {
      setError(t('كلمة المرور غير صحيحة', 'Incorrect password'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      {/* Top Language Toggle */}
      <div className="absolute top-8 end-8 z-20">
        <button 
          onClick={toggleLanguage}
          className="glass-panel px-6 py-2 rounded-full font-bold text-slate-800 dark:text-white hover:bg-white/40 dark:hover:bg-slate-800 transition-all shadow-lg flex items-center gap-2"
        >
          <span className="text-xl">🌐</span>
          <span>{language === 'ar' ? 'English' : 'العربية'}</span>
        </button>
      </div>

      <div className="max-w-5xl w-full glass-panel rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row rtl:flex-row-reverse border-0 relative">
        
        {/* Visual Side */}
        <div className="md:w-1/2 bg-gradient-to-br from-brand/90 to-brand-900/90 p-12 text-white flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
           {/* Decorative Elements */}
           <div className="absolute top-0 end-0 w-80 h-80 bg-secondary-500/30 rounded-full -me-20 -mt-20 blur-3xl animate-pulse"></div>
           <div className="absolute bottom-0 start-0 w-64 h-64 bg-accent-500/20 rounded-full -ms-10 -mb-10 blur-3xl"></div>
           
           <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
             <div className="w-24 h-24 glass-panel rounded-2xl mb-8 flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                 <img src={LOGO_URL} alt="Logo" className="w-20 h-20 object-contain drop-shadow-lg" />
             </div>
             <h1 className="text-5xl font-black mb-4 tracking-tight drop-shadow-md">L&G</h1>
             <p className="text-2xl font-light text-primary-200 tracking-widest mb-8">LEARNING & GROWTH</p>
             <div className="w-16 h-1 bg-secondary-500 rounded-full mb-8 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
             <p className="text-primary-100 text-lg leading-relaxed max-w-sm">
               {t('منصة تعليمية ذكية تجمع بين البرمجة وتطوير الذات في تجربة غامرة.', 'Smart learning platform combining coding and self-development in an immersive experience.')}
             </p>
           </div>
           
           <div className="relative z-10 text-xs text-primary-400 mt-8 text-center">
             © 2024 Learning & Growth Platform
           </div>
        </div>

        {/* Action Side */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl">
           <h2 className="text-3xl font-black text-brand dark:text-white mb-2">{t('تسجيل الدخول', 'Login')}</h2>
           <p className="text-gray-600 dark:text-gray-300 mb-10">{t('مرحباً بعودتك! اختر نوع الحساب للمتابعة', 'Welcome back! Select account type')}</p>
           
           <div className="space-y-4">
             <button 
                onClick={() => handleRoleClick(UserRole.STUDENT)}
                className="w-full group glass-panel p-5 rounded-2xl hover:border-brand-light hover:shadow-lg transition-all duration-300 flex items-center justify-between"
             >
                <div className="flex items-center gap-4">
                    <img src={USERS.student.avatar} className="w-12 h-12 rounded-full border-2 border-white/50 shadow-sm" alt="Student" />
                    <div className="text-start">
                        <p className="font-bold text-gray-800 dark:text-white text-lg group-hover:text-brand-light transition-colors">{t('دخول كطالب', 'Student Login')}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{t('تابع مسارك التعليمي', 'Continue learning path')}</p>
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/50 dark:bg-slate-700/50 flex items-center justify-center group-hover:bg-brand-light group-hover:text-white transition-colors">
                    <ArrowRight size={20} className={`dark:text-white ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                </div>
             </button>

             <button 
                onClick={() => handleRoleClick(UserRole.SUPERVISOR)}
                className="w-full group glass-panel p-5 rounded-2xl hover:border-secondary-500 hover:shadow-lg transition-all duration-300 flex items-center justify-between"
             >
                <div className="flex items-center gap-4">
                    <img src={USERS.supervisor.avatar} className="w-12 h-12 rounded-full border-2 border-white/50 shadow-sm" alt="Supervisor" />
                    <div className="text-start">
                        <p className="font-bold text-gray-800 dark:text-white text-lg group-hover:text-secondary-600 transition-colors">{t('دخول كمشرف', 'Supervisor Login')}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{t('إدارة ومتابعة الطلاب', 'Manage students')}</p>
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/50 dark:bg-slate-700/50 flex items-center justify-center group-hover:bg-secondary-600 group-hover:text-white transition-colors">
                    <ArrowRight size={20} className={`dark:text-white ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                </div>
             </button>

             <button 
                onClick={() => handleRoleClick(UserRole.ADMIN)}
                className="w-full group glass-panel p-5 rounded-2xl hover:border-accent-500 hover:shadow-lg transition-all duration-300 flex items-center justify-between"
             >
                <div className="flex items-center gap-4">
                    <img src={USERS.admin.avatar} className="w-12 h-12 rounded-full border-2 border-white/50 shadow-sm" alt="Admin" />
                    <div className="text-start">
                        <p className="font-bold text-gray-800 dark:text-white text-lg group-hover:text-accent-600 transition-colors">{t('دخول كمسؤول', 'Admin Login')}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{t('التحكم الكامل بالمنصة', 'Platform Control')}</p>
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/50 dark:bg-slate-700/50 flex items-center justify-center group-hover:bg-accent-600 group-hover:text-white transition-colors">
                    <ArrowRight size={20} className={`dark:text-white ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                </div>
             </button>
           </div>
        </div>

        {/* Login Modal */}
        {selectedRole && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
              <button 
                onClick={() => setSelectedRole(null)}
                className="absolute top-4 end-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {selectedRole === UserRole.STUDENT && t('دخول كطالب', 'Student Login')}
                  {selectedRole === UserRole.SUPERVISOR && t('دخول كمشرف', 'Supervisor Login')}
                  {selectedRole === UserRole.ADMIN && t('دخول كمسؤول', 'Admin Login')}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {t('الرجاء إدخال بياناتك للمتابعة', 'Please enter your details to continue')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-start text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('الاسم', 'Name')}
                  </label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                    placeholder={t('أدخل اسمك', 'Enter your name')}
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-start text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('كلمة المرور', 'Password')}
                  </label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                    placeholder={t('أدخل كلمة المرور', 'Enter password')}
                  />
                </div>
                
                {error && (
                  <p className="text-red-500 text-sm text-center font-medium animate-pulse">{error}</p>
                )}

                <button 
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-600 text-white font-bold py-3 px-4 rounded-xl transition-colors mt-6"
                >
                  {t('دخول', 'Login')}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};