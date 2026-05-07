import React, { useState } from 'react';
import { User } from '../types';
import { Menu, Bell, Search, Star, Globe, Moon, Sun, ChevronDown, LogOut, Layout, Gamepad2, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext';
import { NAVIGATION_ITEMS, LOGO_URL } from '../constants';
import { Link, useLocation } from 'react-router-dom';

interface TopBarProps {
  user: User;
  onLogout: () => void;
  onMenuClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ user, onLogout, onMenuClick }) => {
  const { toggleLanguage, language, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = NAVIGATION_ITEMS[user.role];

  return (
    <header className="glass-panel h-20 px-6 flex items-center justify-between sticky top-0 z-50 shadow-lg border-b border-white/10 dark:border-white/5 transition-colors duration-300 bg-brand/90 dark:bg-slate-900/90 rounded-none border-x-0 border-t-0">
      {/* Left Section: Menu & Search */}
      <div className="flex items-center gap-4 flex-1">
        {/* Main Menu Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 p-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
          >
            <Menu size={20} />
            <span className="font-bold text-sm hidden sm:block">{t('القائمة', 'Menu')}</span>
            <ChevronDown size={14} className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {isMenuOpen && (
            <>
              <div 
                className="fixed inset-0 z-40 bg-transparent" 
                onClick={() => setIsMenuOpen(false)}
              />
              <div className="absolute top-full start-0 mt-2 w-64 glass-panel bg-white dark:bg-slate-800 rounded-2xl shadow-2xl z-50 overflow-hidden border border-white/20 dark:border-slate-700 animate-in fade-in slide-in-from-top-4 duration-200">
                <div className="p-4 bg-brand/5 dark:bg-white/5 border-b border-gray-100 dark:border-slate-700 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
                    <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-black text-brand dark:text-white">L&G</span>
                </div>
                <div className="p-2 space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`
                          flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                          ${isActive 
                            ? 'bg-secondary-500 text-white font-bold shadow-md' 
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                          }
                        `}
                      >
                        <Icon size={18} />
                        <span>{t(item.nameAr, item.nameEn)}</span>
                      </Link>
                    );
                  })}
                  <div className="h-px bg-gray-100 dark:bg-slate-700 my-2" />
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      onLogout();
                    }}
                    className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-500 hover:bg-red-50/80 dark:hover:bg-red-500/10 font-bold transition-all text-start"
                  >
                    <LogOut size={18} />
                    <span>{t('تسجيل الخروج', 'Logout')}</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Search Bar - Hidden on small mobile */}
        <div className="hidden lg:flex items-center bg-black/20 dark:bg-black/40 px-4 py-2.5 rounded-full w-64 xl:w-96 border border-white/10 focus-within:ring-2 focus-within:ring-secondary-500 transition-all backdrop-blur-sm">
          <Search size={18} className="text-primary-400 me-2" />
          <input 
            type="text" 
            placeholder={t("ابحث عن كورس، طالب، أو نشاط...", "Search for courses, students, or activities...")} 
            className="bg-transparent border-none outline-none text-sm w-full placeholder-primary-500 text-white"
          />
        </div>
      </div>

      {/* Center Section: Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1.5 shadow-xl border-2 border-white/20">
          <img src={LOGO_URL} alt="L&G Logo" className="w-full h-full object-contain" />
        </div>
        <div className="hidden md:flex flex-col items-start leading-none gap-0.5">
           <span className="text-xl font-black text-white tracking-tighter">L&G</span>
           <span className="text-[9px] font-bold text-primary-200 uppercase tracking-widest">{t('تعلم ونمو', 'LEARNING & GROWTH')}</span>
           <span className="text-[8px] font-medium text-slate-300 italic mt-0.5 tracking-tight border-t border-white/10 pt-0.5">
             {t('دوائر المعرفة لا تنتهي', 'The Circle of Knowledge Never Ends')}
           </span>
        </div>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center gap-3 sm:gap-4 flex-1 justify-end">
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors text-yellow-400 backdrop-blur-sm"
          title={theme === 'dark' ? t('الوضع النهاري', 'Light Mode') : t('الوضع الليلي', 'Dark Mode')}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Language Toggle */}
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-colors backdrop-blur-sm"
        >
          <Globe size={16} className="text-secondary-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-white">{language}</span>
        </button>

        {/* Gamification Stats (Student Only) */}
        {user.role === 'STUDENT' && (
          <div className="hidden sm:flex items-center gap-2 bg-accent-500/20 text-accent-400 px-3 py-1.5 rounded-full border border-accent-500/30 backdrop-blur-sm">
             <Star size={16} fill="currentColor" />
             <span className="font-bold text-sm tracking-tight">{user.points} XP</span>
          </div>
        )}

        <button className="relative p-2 text-primary-300 hover:text-white transition-colors">
          <Bell size={22} />
          <span className="absolute top-1.5 end-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-brand shadow-sm"></span>
        </button>

        <div className="flex items-center gap-3 ps-4 border-s border-white/10 pe-1">
          <div className="text-end hidden xl:block leading-tight">
            <p className="text-sm font-bold text-white">{user.name}</p>
            <p className="text-[10px] text-primary-400 font-medium">{user.role === 'STUDENT' ? t(`المستوى ${user.level}`, `Level ${user.level}`) : user.role}</p>
          </div>
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-10 h-10 rounded-full border-2 border-white/20 shadow-md object-cover bg-white"
          />
        </div>
      </div>
    </header>
  );
};