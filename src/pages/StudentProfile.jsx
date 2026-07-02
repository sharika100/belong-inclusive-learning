import React, { useState } from 'react';
import { 
  Plus, 
  Check, 
  Calendar, 
  Award, 
  MessageSquare, 
  AlertCircle, 
  TrendingUp, 
  Sparkles,
  CheckCircle2,
  Bookmark
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';
import Card from '../components/Card';
import { mockStudents } from '../services/mockData';

export default function StudentProfile({ activeStudentId, setActiveStudentId }) {
  const [students, setStudents] = useState(mockStudents);
  const [newNote, setNewNote] = useState('');
  
  // Find current active student
  const activeStudent = students.find(s => s.id === activeStudentId) || students[0];

  // Helper to append a new observation note locally
  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    const updatedStudents = students.map(student => {
      if (student.id === activeStudent.id) {
        return {
          ...student,
          recentNotes: [
            {
              id: `note-${student.id}-${Date.now()}`,
              date: new Date().toISOString().split('T')[0],
              text: newNote.trim()
            },
            ...student.recentNotes
          ]
        };
      }
      return student;
    });

    setStudents(updatedStudents);
    setNewNote('');
  };

  const handleToggleGoal = (goalId) => {
    const updatedStudents = students.map(student => {
      if (student.id === activeStudent.id) {
        return {
          ...student,
          currentGoals: student.currentGoals.map(g => 
            g.id === goalId ? { ...g, status: g.status === 'achieved' ? 'in-progress' : 'achieved' } : g
          )
        };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  // Tag coloring helpers
  const getNeedsColor = (needs) => {
    if (needs.includes("ADHD")) return "bg-purple-100 text-brand-purple border-purple-200";
    if (needs.includes("Autism")) return "bg-teal-100 text-brand-teal border-teal-200";
    if (needs.includes("Dyslexia")) return "bg-blue-100 text-brand-blue border-blue-200";
    return "bg-orange-100 text-brand-orange border-orange-200";
  };

  return (
    <div className="space-y-6">
      
      {/* Top Student Selection Bar */}
      <div className="bg-white border-2 border-gray-200 rounded-3xl p-4 shadow-duo flex flex-wrap gap-3 items-center">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-2">Select Student:</span>
        <div className="flex flex-wrap gap-2">
          {students.map(s => {
            const isActive = s.id === activeStudent.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStudentId(s.id)}
                className={`flex items-center gap-2 py-2 px-4 rounded-2xl text-xs font-extrabold transition-all btn-duo cursor-pointer ${
                  isActive 
                    ? 'bg-brand-purple text-white shadow-duo-purple border-2 border-brand-purple' 
                    : 'bg-gray-50 text-gray-600 border-2 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <img src={s.avatar} alt={s.name} className="h-5 w-5 rounded-md bg-white" />
                {s.name.split(" ")[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Avatar details, confidence chart, preferences */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Main Card */}
          <Card className="text-center">
            <div className="flex flex-col items-center">
              <img 
                src={activeStudent.avatar} 
                alt={activeStudent.name}
                className="h-28 w-28 rounded-3xl border-4 border-brand-purple/20 bg-gray-50 shadow-md animate-float"
              />
              <h2 className="text-2xl font-black font-display text-gray-900 mt-4">{activeStudent.name}</h2>
              <p className="text-xs text-gray-400 font-semibold">{activeStudent.grade} • Class 3-B</p>
              
              <span className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold border ${getNeedsColor(activeStudent.needs)}`}>
                {activeStudent.needs}
              </span>
            </div>

            {/* Participation Radial Ring Simulation */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-around">
              <div>
                <p className="text-3xl font-extrabold text-brand-purple font-display">{activeStudent.participationScore}%</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Participation</p>
              </div>
              <div className="border-r border-gray-100 h-10" />
              <div>
                <p className="text-3xl font-extrabold text-brand-teal font-display">88%</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Focus Goal</p>
              </div>
            </div>
          </Card>

          {/* Confidence Timeline Chart */}
          <Card>
            <div className="mb-4">
              <h3 className="text-base font-bold font-display text-gray-900">Confidence Timeline</h3>
              <p className="text-[10px] text-gray-400">Tracking confidence growth over school term</p>
            </div>
            <div className="h-44 w-full text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart 
                  data={activeStudent.confidenceTimeline}
                  margin={{ top: 5, right: 5, left: -25, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorConf" cx="0" cy="0" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#7c3aed" stopOpacity={0.4}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[0, 100]} />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="level" 
                    stroke="#7c3aed" 
                    strokeWidth={2.5} 
                    fillOpacity={1} 
                    fill="url(#colorConf)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Learning Preferences */}
          <Card shadowColor="teal">
            <h3 className="text-base font-bold font-display text-gray-900 mb-2.5">Learning Preferences</h3>
            <p className="text-xs text-gray-600 leading-relaxed font-medium">
              {activeStudent.learningPreferences}
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">Attention Span Limit</span>
              <p className="text-xs font-bold text-gray-700 mt-1">{activeStudent.attentionSpan}</p>
            </div>
          </Card>

        </div>

        {/* Right 2 Columns: Strengths, Goals, Notes */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Strengths & Interests Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Strengths Card */}
            <Card shadowColor="purple">
              <h3 className="text-base font-bold font-display text-gray-900 mb-3">Key Strengths</h3>
              <div className="flex flex-wrap gap-2">
                {activeStudent.strengths.map(st => (
                  <span 
                    key={st}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-100 text-brand-purple border border-purple-200 text-xs font-extrabold"
                  >
                    <Sparkles className="h-3.5 w-3.5 fill-purple-200" />
                    {st}
                  </span>
                ))}
              </div>
            </Card>

            {/* Interests Card */}
            <Card shadowColor="blue">
              <h3 className="text-base font-bold font-display text-gray-900 mb-3">Student Interests</h3>
              <div className="flex flex-wrap gap-2">
                {activeStudent.interests.map(item => (
                  <span 
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-100 text-brand-blue border border-blue-200 text-xs font-extrabold"
                  >
                    <Bookmark className="h-3.5 w-3.5 fill-blue-200" />
                    {item}
                  </span>
                ))}
              </div>
            </Card>

          </div>

          {/* Goals Checklist */}
          <Card>
            <h3 className="text-base font-bold font-display text-gray-900 mb-4">Inclusion Goals</h3>
            <div className="space-y-3">
              {activeStudent.currentGoals.map(goal => (
                <div 
                  key={goal.id}
                  onClick={() => handleToggleGoal(goal.id)}
                  className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                    goal.status === 'achieved' 
                      ? 'bg-teal-50/30 border-teal-100 opacity-60' 
                      : 'bg-white border-gray-150 hover:bg-gray-50'
                  }`}
                >
                  <button className="shrink-0 mt-0.5">
                    {goal.status === 'achieved' ? (
                      <CheckCircle2 className="h-5 w-5 text-brand-teal fill-teal-100" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                    )}
                  </button>
                  <span className={`text-xs font-medium text-gray-700 leading-snug ${goal.status === 'achieved' ? 'line-through text-gray-400' : ''}`}>
                    {goal.text}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Positive Achievements */}
          <Card shadowColor="orange">
            <h3 className="text-base font-bold font-display text-gray-900 mb-3">Positive Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeStudent.achievements.map((ach, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-orange-50/30 border border-orange-100 rounded-xl">
                  <div className="p-1.5 rounded-lg bg-orange-100 text-brand-orange">
                    <Award className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-tight">{ach}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Teacher Observation Notes */}
          <Card>
            <h3 className="text-base font-bold font-display text-gray-900 mb-4">Recent Observation Notes</h3>
            
            {/* New Note Form */}
            <form onSubmit={handleAddNote} className="flex gap-2 mb-6">
              <input 
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Log a new classroom observation (e.g. Leo stayed focused for 15m...)"
                className="flex-1 px-4 py-2.5 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none text-xs font-medium"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-brand-purple text-white rounded-xl text-xs font-bold btn-duo shadow-duo-purple flex items-center gap-1 cursor-pointer"
              >
                <Plus className="h-4 w-4 stroke-[3]" /> Add Note
              </button>
            </form>

            {/* Notes Timeline List */}
            <div className="space-y-4">
              {activeStudent.recentNotes.map((note) => (
                <div key={note.id} className="flex items-start gap-3 text-left">
                  <div className="p-2 rounded-xl bg-gray-150 text-gray-500 shrink-0 mt-0.5">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-gray-800 font-display">Sarah Jenkins</span>
                      <span className="text-[10px] text-gray-400 font-medium">{note.date}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{note.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

        </div>

      </div>

    </div>
  );
}
