import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Login } from './views/Login';
import { StudentDashboard } from './views/StudentDashboard';
import { SupervisorDashboard } from './views/SupervisorDashboard';
import { AdminDashboard } from './views/AdminDashboard';
import { GameZone } from './views/GameZone';
import { CourseDetail } from './views/CourseDetail';
import { UserRole, User } from './types';
import { USERS } from './constants';
import { LanguageProvider } from './LanguageContext';
import { ThemeProvider } from './ThemeContext';

const AppContent: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = (role: UserRole, name: string) => {
    let user = { ...USERS.student, name };
    if (role === UserRole.SUPERVISOR) user = { ...USERS.supervisor, name };
    if (role === UserRole.ADMIN) user = { ...USERS.admin, name };
    
    // Set YTA flag if user logged in with YTA credentials
    if (name === 'YTA User') {
      user.isYTA = true;
    }
    
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return (
      <ThemeProvider>
        <Login onLogin={handleLogin} />
      </ThemeProvider>
    );
  }

  return (
    <HashRouter>
      <div className="flex flex-col min-h-[100dvh] relative z-10 transition-colors duration-300"> 
        <div className="flex-1 flex flex-col w-full h-[100dvh] overflow-hidden bg-transparent">
          <TopBar 
            user={currentUser} 
            onLogout={handleLogout}
            onMenuClick={() => setSidebarOpen(true)}
          />
          
          <main className="flex-1 p-4 md:p-8 overflow-y-auto scroll-smooth">
            <Routes>
              {/* Dashboard Routing based on Role */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={
                currentUser.role === UserRole.STUDENT ? <StudentDashboard user={currentUser} /> :
                currentUser.role === UserRole.SUPERVISOR ? <SupervisorDashboard /> :
                <AdminDashboard />
              } />

              {/* Course Detail Route */}
              <Route path="/course/:id" element={<CourseDetail />} />

               {/* Game Route */}
               <Route path="/games" element={
                 currentUser.role === UserRole.STUDENT 
                 ? <GameZone />
                 : <Navigate to="/dashboard" />
              } />

              {/* Placeholder for other routes */}
              <Route path="*" element={
                <div className="flex flex-col items-center justify-center h-full text-gray-400 dark:text-gray-500">
                  <h2 className="text-4xl font-bold mb-4">404</h2>
                  <p>الصفحة غير موجودة</p>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;