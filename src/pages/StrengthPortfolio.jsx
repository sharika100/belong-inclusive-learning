import React, { useState } from 'react';
import { 
  Sparkles, 
  Award, 
  Plus, 
  Calendar, 
  User, 
  Lightbulb,
  Smile,
  Compass,
  Users,
  MessageSquare,
  HelpCircle,
  Eye
} from 'lucide-react';
import Card from '../components/Card';
import { mockStrengths, mockStudents, strengthObservations } from '../services/mockData';

// Map icon strings to components
const strengthIcons = {
  "Creativity": Sparkles,
  "Leadership": Users,
  "Curiosity": Compass,
  "Helping Others": Smile,
  "Storytelling": MessageSquare,
  "Problem Solving": HelpCircle,
  "Visual Thinking": Eye
};

export default function StrengthPortfolio() {
  const [observations, setObservations] = useState(strengthObservations);
  const [strengths, setStrengths] = useState(mockStrengths);
  
  // Form states
  const [studentName, setStudentName] = useState(mockStudents[0].name);
  const [strengthName, setStrengthName] = useState(mockStrengths[0].name);
  const [obsText, setObsText] = useState('');

  const handleAddObservation = (e) => {
    e.preventDefault();
    if (!obsText.trim()) return;

    const newObs = {
      id: `obs-${Date.now()}`,
      studentName,
      strengthName,
      date: new Date().toISOString().split('T')[0],
      text: obsText.trim()
    };

    setObservations([newObs, ...observations]);
    setObsText('');

    // Dynamically update the student count in the strength card list for the prototype
    setStrengths(prevStrengths => 
      prevStrengths.map(s => {
        if (s.name === strengthName) {
          return { ...s, studentsCount: s.studentsCount + 1 };
        }
        return s;
      })
    );
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black font-display tracking-tight text-gray-900 flex items-center gap-2">
          <Award className="h-8 w-8 text-brand-purple fill-brand-purple-light" />
          Strength Portfolios
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Nurturing confidence by tracking and reinforcing positive cognitive strengths in Class 3-B.
        </p>
      </div>

      {/* Grid of Strengths Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {strengths.map((strength) => {
          const StrengthIcon = strengthIcons[strength.name] || Award;
          
          return (
            <Card 
              key={strength.id}
              className={`hover:-translate-y-1.5 transition-all duration-200 border-2 ${strength.color.split(" ")[2]} ${strength.color.split(" ")[0]} text-left`}
              padding="p-5"
            >
              <div className="flex justify-between items-start">
                <div className={`p-3 rounded-2xl bg-white border ${strength.color.split(" ")[2]} text-gray-700 shadow-sm`}>
                  <StrengthIcon className="h-5 w-5 stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-extrabold uppercase bg-white/70 px-2 py-0.5 rounded-full shadow-sm text-gray-600 border border-black/5">
                  {strength.studentsCount} {strength.studentsCount === 1 ? 'learner' : 'learners'}
                </span>
              </div>
              
              <h3 className="text-lg font-black font-display text-gray-900 mt-4">{strength.name}</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed font-medium">
                {strength.description}
              </p>
            </Card>
          );
        })}
      </div>

      {/* Core Action Grid: Logger & List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Log Observation Form */}
        <div className="lg:col-span-1">
          <Card shadowColor="purple" className="sticky top-20">
            <div className="flex items-center gap-2 mb-4">
              <Plus className="h-5 w-5 text-brand-purple" />
              <h3 className="text-base font-bold font-display text-gray-900">Log Strength Observation</h3>
            </div>
            
            <form onSubmit={handleAddObservation} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Student Name</label>
                <select 
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none text-xs font-medium cursor-pointer"
                >
                  {mockStudents.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Observed Strength</label>
                <select 
                  value={strengthName}
                  onChange={(e) => setStrengthName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none text-xs font-medium cursor-pointer"
                >
                  {strengths.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Observation Notes</label>
                <textarea 
                  rows="4"
                  value={obsText}
                  onChange={(e) => setObsText(e.target.value)}
                  placeholder="Describe how they demonstrated this strength (e.g. Leo drew a map using complex grid coordinates...)"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none text-xs font-medium"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 px-4 bg-brand-purple hover:bg-brand-purple-hover text-white rounded-xl font-bold text-xs btn-duo shadow-duo-purple flex items-center justify-center gap-1 cursor-pointer"
              >
                Add to Portfolio
              </button>
            </form>
          </Card>
        </div>

        {/* Observations Timeline feed */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <h3 className="text-base font-bold font-display text-gray-900 mb-4 border-b border-gray-100 pb-2">
              Strength Observation Ledger
            </h3>
            
            <div className="space-y-4">
              {observations.map((obs) => {
                const StrengthIcon = strengthIcons[obs.strengthName] || Award;
                
                return (
                  <div key={obs.id} className="flex gap-4 p-4 border border-gray-150 rounded-2xl bg-white text-left transition hover:shadow-sm">
                    <div className="bg-brand-purple-light text-brand-purple p-3 rounded-2xl shrink-0 h-fit">
                      <StrengthIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-extrabold text-sm text-gray-900 font-display">
                          {obs.studentName}
                        </h4>
                        <span className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {obs.date}
                        </span>
                      </div>
                      <span className="text-[10px] bg-purple-100 text-brand-purple font-extrabold px-2 py-0.5 rounded mt-1 inline-block">
                        {obs.strengthName}
                      </span>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        "{obs.text}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

      </div>

    </div>
  );
}
