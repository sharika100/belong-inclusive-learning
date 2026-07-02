import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout and Global components
import Sidebar from './components/Sidebar';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LessonGenerator from './pages/LessonGenerator';
import GeneratedLesson from './pages/GeneratedLesson';
import StudentProfile from './pages/StudentProfile';
import StrengthPortfolio from './pages/StrengthPortfolio';
import SocialInclusion from './pages/SocialInclusion';
import Reflection from './pages/Reflection';
import SettingsPage from './pages/Settings';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [activeStudentId, setActiveStudentId] = useState('stu-1'); // Default active profile is Leo

  // Switcher mapping pages to components
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <Dashboard 
            setPage={setCurrentPage} 
            setSelectedStudentId={setActiveStudentId} 
          />
        );
      case 'students':
        return (
          <StudentProfile 
            activeStudentId={activeStudentId} 
            setActiveStudentId={setActiveStudentId} 
          />
        );
      case 'create-lesson':
        return (
          <LessonGenerator 
            onGenerateComplete={() => setCurrentPage('generated-lesson')} 
          />
        );
      case 'generated-lesson':
        return <GeneratedLesson />;
      case 'social-inclusion':
        return <SocialInclusion />;
      case 'strengths':
        return <StrengthPortfolio />;
      case 'reflection':
        return <Reflection />;
      case 'settings':
        return <SettingsPage />;
      default:
        return (
          <Dashboard 
            setPage={setCurrentPage} 
            setSelectedStudentId={setActiveStudentId} 
          />
        );
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50">
      
      {/* Sidebar Layout */}
      <Sidebar 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        onLogout={() => setIsLoggedIn(false)} 
      />

      {/* Main Page Workspace */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      
    </div>
  );
}
