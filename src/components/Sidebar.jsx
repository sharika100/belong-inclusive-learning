import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Sparkles, 
  Award, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  BrainCircuit,
  MessageSquareHeart,
  TrendingUp
} from 'lucide-react';
import { mockSettings } from '../services/mockData';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-brand-purple hover:bg-brand-purple-light/50' },
  { id: 'students', label: 'Students', icon: Users, color: 'text-brand-blue hover:bg-brand-blue-light/50' },
  { id: 'create-lesson', label: 'Create Lesson', icon: Sparkles, color: 'text-brand-teal hover:bg-brand-teal-light/50' },
  { id: 'social-inclusion', label: 'Insights', icon: TrendingUp, color: 'text-brand-orange hover:bg-brand-orange-light/50' },
  { id: 'strengths', label: 'Strength Portfolio', icon: Award, color: 'text-brand-purple hover:bg-brand-purple-light/50' },
  { id: 'reflection', label: 'Reflection', icon: MessageSquareHeart, color: 'text-brand-teal hover:bg-brand-teal-light/50' },
  { id: 'settings', label: 'Settings', icon: Settings, color: 'text-brand-blue hover:bg-brand-blue-light/50' }
];

export default function Sidebar({ currentPage, setPage, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const teacher = mockSettings.profile;

  const handleNavClick = (id) => {
    setPage(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="lg:hidden w-full bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2" onClick={() => setPage('dashboard')}>
          <div className="bg-brand-purple p-2 rounded-xl text-white font-extrabold text-lg flex items-center justify-center h-9 w-9">
            B
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight text-gray-900">BELONG</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar Drawer Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white border-r-2 border-gray-200/80 p-5 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 lg:sticky lg:h-screen lg:top-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="space-y-6">
          {/* Logo Brand Area */}
          <div className="flex items-center gap-3 px-2 cursor-pointer" onClick={() => handleNavClick('dashboard')}>
            <div className="h-10 w-10 bg-brand-purple text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-duo-purple animate-float">
              B
            </div>
            <div>
              <span className="font-display font-black text-2xl tracking-tight bg-gradient-to-r from-brand-purple via-brand-blue to-brand-teal bg-clip-text text-transparent">
                BELONG
              </span>
              <p className="text-[10px] text-brand-teal font-extrabold tracking-wider uppercase -mt-1">
                Teacher Companion
              </p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id || (item.id === 'create-lesson' && currentPage === 'generated-lesson');
              
              const activeStyles = isActive 
                ? 'bg-brand-purple/10 text-brand-purple font-bold border-l-4 border-brand-purple pl-3' 
                : 'text-gray-600 pl-4 border-l-4 border-transparent';

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 py-3 rounded-xl transition-all duration-150 text-sm font-semibold btn-duo cursor-pointer ${activeStyles} ${item.color}`}
                >
                  <Icon className={`h-5 w-5 stroke-[2] ${isActive ? 'text-brand-purple' : 'text-gray-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Teacher profile and logout */}
        <div className="space-y-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-2xl border border-gray-100">
            <img 
              src={`https://api.dicebear.com/7.x/open-peeps/svg?seed=${teacher.name}`} 
              alt="Teacher Avatar" 
              className="h-10 w-10 rounded-full border-2 border-brand-purple/30 bg-purple-50"
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-extrabold text-gray-800 truncate font-display">{teacher.name}</p>
              <p className="text-[10px] text-gray-400 truncate">{teacher.role}</p>
            </div>
          </div>
          
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-red-50 text-red-500 transition-colors text-sm font-semibold cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay for mobile drawer */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
        />
      )}
    </>
  );
}
