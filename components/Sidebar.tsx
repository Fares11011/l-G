import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { UserRole } from '../types';
import { NAVIGATION_ITEMS, LOGO_URL, APP_NAME } from '../constants';
import { LogOut } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface SidebarProps {
  role: UserRole;
  onLogout: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ role, onLogout, isOpen, onClose }) => {
  const location = useLocation();
  const items = NAVIGATION_ITEMS[role];
  const { t } = useLanguage();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/80 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed top-0 start-0 z-30 h-full w-64 glass-panel bg-brand-dark/95 dark:bg-black/80 shadow-2xl transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:h-screen lg:border-e-0 border-e border-white/10 rounded-none border-y-0 border-s-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full rtl:translate-x-full'}
      `}
      >
        <div className="flex flex-col h-full">
          {/* Logo Area */}
          <div className="p-6 flex flex-col items-center gap-4 border-b border-white/10 bg-brand/50 dark:bg-slate-950/50 transition-colors">
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg bg-white flex items-center justify-center ring-4 ring-brand-700/50 dark:ring-slate-800/50 backdrop-blur-sm">
               <img src={LOGO_URL} alt="L&G" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="text-center">
              <h1 className="font-black text-white text-xl leading-none tracking-tight mb-1 drop-shadow-md">
                L&G
              </h1>
              <span className="text-[10px] text-primary-200 uppercase tracking-widest bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">Learning & Growth</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => window.innerWidth < 1024 && onClose()}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                    ${isActive 
                      ? 'bg-secondary-600/90 text-white font-bold shadow-lg shadow-secondary-900/20 backdrop-blur-sm' 
                      : 'text-primary-400 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  <Icon size={20} className={`transition-colors ${isActive ? 'text-white' : 'text-primary-500 group-hover:text-secondary-400'}`} />
                  <span>{t(item.nameAr, item.nameEn)}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-white/10 bg-black/20 transition-colors">
            <button
              onClick={onLogout}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-colors backdrop-blur-sm"
            >
              <LogOut size={20} />
              <span>{t('تسجيل الخروج', 'Logout')}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};