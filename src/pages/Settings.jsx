import React, { useState } from 'react';
import { 
  Settings, 
  User, 
  School, 
  Brain, 
  Bell, 
  Globe, 
  Palette, 
  Save, 
  CheckCircle2,
  Lock
} from 'lucide-react';
import Card from '../components/Card';
import { mockSettings } from '../services/mockData';

export default function SettingsPage() {
  const [profile, setProfile] = useState(mockSettings.profile);
  const [theme, setTheme] = useState(mockSettings.theme);
  const [language, setLanguage] = useState(mockSettings.language);
  const [notifications, setNotifications] = useState(mockSettings.notifications);
  const [aiPrefs, setAiPrefs] = useState(mockSettings.aiPreferences);
  
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleFocusAreaToggle = (area) => {
    setAiPrefs(prev => {
      const exists = prev.focusAreas.includes(area);
      const updated = exists 
        ? prev.focusAreas.filter(a => a !== area)
        : [...prev.focusAreas, area];
      return { ...prev, focusAreas: updated };
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black font-display tracking-tight text-gray-900 flex items-center gap-2">
            <Settings className="h-8 w-8 text-brand-purple fill-brand-purple-light" />
            Workspace Settings
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Configure student accommodations criteria, notifications channels, and companion AI templates.
          </p>
        </div>

        {saveSuccess && (
          <div className="flex items-center gap-2 bg-teal-100 text-brand-teal font-extrabold text-xs px-4 py-2.5 rounded-2xl shadow-sm border border-brand-teal/20 animate-bounce">
            <CheckCircle2 className="h-4 w-4" />
            Changes saved successfully!
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Columns: Profile & Preferences (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Teacher Profile & School Info */}
          <Card>
            <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2.5">
              <User className="h-5 w-5 text-brand-purple" />
              <h3 className="text-base font-bold font-display text-gray-900">Teacher Profile & School</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">Teacher Name</label>
                <input 
                  type="text" 
                  value={profile.name} 
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none text-xs font-semibold"
                  required
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">Classroom Designation</label>
                <input 
                  type="text" 
                  value={profile.classroom} 
                  onChange={(e) => setProfile({ ...profile, classroom: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none text-xs font-semibold"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={profile.email} 
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 text-gray-400 rounded-xl outline-none text-xs font-semibold cursor-not-allowed"
                  disabled
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">Role Title</label>
                <input 
                  type="text" 
                  value={profile.role} 
                  onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                  className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none text-xs font-semibold"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2 flex items-center gap-1">
                <School className="h-3.5 w-3.5 text-gray-400" /> School Name
              </label>
              <input 
                type="text" 
                value={profile.school} 
                onChange={(e) => setProfile({ ...profile, school: e.target.value })}
                className="w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none text-xs font-semibold"
                required
              />
            </div>
          </Card>

          {/* AI Generation Preferences */}
          <Card shadowColor="purple">
            <div className="flex items-center gap-2 mb-4 border-b border-purple-100 pb-2.5">
              <Brain className="h-5 w-5 text-brand-purple" />
              <h3 className="text-base font-bold font-display text-gray-900">Companion AI Configuration</h3>
            </div>

            {/* Creativity Index */}
            <div className="mb-6">
              <label className="block text-[10px] font-bold text-purple-700 uppercase mb-3">AI Adaptability Range</label>
              <div className="flex gap-2">
                {["conservative", "balanced", "creative"].map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setAiPrefs({ ...aiPrefs, creativityLevel: style })}
                    className={`flex-1 py-2 rounded-xl border-2 font-bold text-xs capitalize btn-duo cursor-pointer ${
                      aiPrefs.creativityLevel === style
                        ? 'border-brand-purple bg-purple-50 text-brand-purple'
                        : 'border-gray-250 bg-white text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Default Focus Adaptations */}
            <div>
              <label className="block text-[10px] font-bold text-purple-700 uppercase mb-3">Permanent Accommodation Focuses</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {["Social Skills", "Focus/ADHD Support", "Reading Accessibility", "Sensory Aware", "Auditory aids"].map((area) => {
                  const isChecked = aiPrefs.focusAreas.includes(area);
                  return (
                    <button
                      key={area}
                      type="button"
                      onClick={() => handleFocusAreaToggle(area)}
                      className={`py-2 px-3 rounded-xl border font-bold text-xs text-left flex items-center justify-between cursor-pointer ${
                        isChecked 
                          ? 'border-brand-purple bg-purple-100/40 text-brand-purple' 
                          : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                      }`}
                    >
                      {area}
                      {isChecked && <CheckCircle2 className="h-3.5 w-3.5 text-brand-purple fill-purple-100" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </Card>

        </div>

        {/* Right Column: Theme, Notifications, Save (1 col) */}
        <div className="space-y-6">
          
          {/* System & Accessibility */}
          <Card shadowColor="blue">
            <div className="flex items-center gap-2 mb-4 border-b border-blue-100 pb-2.5">
              <Palette className="h-5 w-5 text-brand-blue" />
              <h3 className="text-base font-bold font-display text-gray-900">System Options</h3>
            </div>

            {/* Themes */}
            <div className="mb-4">
              <label className="block text-[10px] font-bold text-blue-700 uppercase mb-2">Display Theme</label>
              <div className="flex gap-2">
                {["light", "dark", "contrast"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTheme(t)}
                    className={`flex-1 py-2 rounded-xl border font-bold text-xs capitalize btn-duo cursor-pointer ${
                      theme === t
                        ? 'border-brand-blue bg-blue-50 text-brand-blue'
                        : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 mt-2">
                💡 High-Contrast mode increases outline weights and text accessibility tags.
              </p>
            </div>

            {/* Language */}
            <div>
              <label className="block text-[10px] font-bold text-blue-700 uppercase mb-2">Workspace Language</label>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand-blue rounded-xl outline-none text-xs font-semibold cursor-pointer"
              >
                <option value="English">English (US)</option>
                <option value="Spanish">Spanish (ES)</option>
                <option value="French">French (FR)</option>
              </select>
            </div>
          </Card>

          {/* Notifications toggles */}
          <Card shadowColor="teal">
            <div className="flex items-center gap-2 mb-4 border-b border-teal-100 pb-2.5">
              <Bell className="h-5 w-5 text-brand-teal" />
              <h3 className="text-base font-bold font-display text-gray-900">Notifications</h3>
            </div>

            <div className="space-y-3">
              {Object.keys(notifications).map((key) => {
                const label = {
                  email: "Email updates & newsletters",
                  browser: "Live companion desktop alerts",
                  weeklyReport: "Weekly classrooms insight digest",
                  aiAlerts: "AI live observation triggers"
                }[key] || key;

                return (
                  <div key={key} className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-gray-600">{label}</span>
                    <button
                      type="button"
                      onClick={() => handleNotificationChange(key)}
                      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        notifications[key] ? 'bg-brand-teal' : 'bg-gray-250'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          notifications[key] ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Submit Action */}
          <button 
            type="submit"
            className="w-full py-4 px-6 bg-brand-purple hover:bg-brand-purple-hover text-white rounded-2xl font-bold text-base btn-duo shadow-duo-purple flex items-center justify-center gap-3 cursor-pointer"
          >
            <Save className="h-5 w-5" />
            Save Configuration
          </button>

        </div>

      </form>

    </div>
  );
}
