import React, { useState } from 'react';
import { 
  Sparkles, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Activity, 
  Plus, 
  CheckCircle2, 
  ChevronRight,
  Brain,
  Lightbulb
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import { 
  mockStudents, 
  mockDashboardStats, 
  mockMissions, 
  mockAISuggestions 
} from '../services/mockData';

export default function Dashboard({ setPage, setSelectedStudentId }) {
  const [missions, setMissions] = useState(mockMissions);
  
  const toggleMission = (id) => {
    setMissions(prev => 
      prev.map(m => m.id === id ? { ...m, completed: !m.completed } : m)
    );
  };

  const handleStudentClick = (id) => {
    setSelectedStudentId(id);
    setPage('students');
  };

  return (
    <div className="space-y-6">
      
      {/* Header and Welcome */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black font-display tracking-tight text-gray-900">
            Good morning, Sarah! ☀️
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Oakwood Elementary • Class 3-B • Let's empower our learners today.
          </p>
        </div>
        
        {/* Quick CTA */}
        <button 
          onClick={() => setPage('create-lesson')}
          className="flex items-center gap-2 px-5 py-3 bg-brand-purple hover:bg-brand-purple-hover text-white rounded-2xl font-bold btn-duo shadow-duo-purple text-sm cursor-pointer"
        >
          <Plus className="h-4 w-4 stroke-[3]" />
          Quick Generate Lesson
        </button>
      </div>

      {/* Statistics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Active Students" 
          value={mockDashboardStats.activeStudents} 
          icon={Users} 
          color="purple" 
          trend="+0" 
        />
        <StatCard 
          title="Lessons Generated" 
          value={mockDashboardStats.lessonsGenerated} 
          icon={BookOpen} 
          color="blue" 
          trend="+6 this week" 
        />
        <StatCard 
          title="Confidence Growth" 
          value={`+${mockDashboardStats.confidenceGrowth}%`} 
          icon={TrendingUp} 
          color="teal" 
          trend="+3.4%" 
        />
        <StatCard 
          title="Participation Rate" 
          value={`${mockDashboardStats.participationRate}%`} 
          icon={Activity} 
          color="orange" 
          trend="+4.1%" 
        />
      </div>

      {/* Main Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: Lessons & Weekly Chart */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Today's Lessons & Quick Actions */}
          <Card className="relative overflow-hidden border-2 border-brand-purple/15 bg-gradient-to-r from-brand-purple/5 to-transparent">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] bg-brand-purple/10 text-brand-purple font-extrabold uppercase px-2.5 py-1 rounded-full">
                  Up Next
                </span>
                <h3 className="text-xl font-bold font-display text-gray-900 mt-2">Today's Lesson Plan</h3>
              </div>
              <button 
                onClick={() => setPage('create-lesson')}
                className="text-xs font-bold text-brand-purple hover:underline flex items-center gap-1 cursor-pointer"
              >
                Change active plan <ChevronRight className="h-3 w-3" />
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <div className="bg-brand-purple-light p-3.5 rounded-2xl text-brand-purple">
                <BookOpen className="h-7 w-7" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-extrabold text-gray-900 text-lg">Solar System & Gravity</h4>
                <p className="text-sm text-gray-500 mt-0.5">Adaptations: Visual Story, Astronaut Stretch Break, Whiteboard Participation.</p>
                <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-purple-100 text-brand-purple text-[10px] font-bold px-2 py-0.5 rounded-md">ADHD Adaptations</span>
                  <span className="bg-teal-100 text-brand-teal text-[10px] font-bold px-2 py-0.5 rounded-md">Sensory Aware</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  setSelectedStudentId('stu-1'); // Default to leo's space theme
                  setPage('generated-lesson');
                }}
                className="w-full md:w-auto px-4 py-2 bg-brand-purple text-white text-xs font-bold rounded-xl btn-duo shadow-duo-purple cursor-pointer"
              >
                Open Lesson
              </button>
            </div>
          </Card>

          {/* Weekly Classroom Overview Graph */}
          <Card>
            <div className="mb-4">
              <h3 className="text-lg font-bold font-display text-gray-900">Weekly Classroom Overview</h3>
              <p className="text-xs text-gray-500">Tracking aggregate indicators for inclusion effectiveness.</p>
            </div>
            <div className="h-72 w-full text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                  data={mockDashboardStats.weeklyOverview}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '16px', 
                      border: '2px solid rgba(0,0,0,0.05)',
                      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                    }} 
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: 10 }} />
                  <Line 
                    type="monotone" 
                    dataKey="Participation" 
                    stroke="#ea580c" 
                    strokeWidth={3} 
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="Engagement" 
                    stroke="#0284c7" 
                    strokeWidth={3} 
                    dot={{ r: 4 }} 
                    activeDot={{ r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="Confidence" 
                    stroke="#7c3aed" 
                    strokeWidth={3} 
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

        </div>

        {/* Right 1 Column: Missions & AI Suggestions */}
        <div className="space-y-6">
          
          {/* Today's Confidence Missions */}
          <Card shadowColor="purple" padding="p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-purple-100 text-brand-purple">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base font-display text-gray-900">Today's Missions</h3>
                <p className="text-[10px] text-gray-400">Tactical actions to support diversity</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {missions.map((mission) => (
                <div 
                  key={mission.id}
                  onClick={() => toggleMission(mission.id)}
                  className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                    mission.completed 
                      ? 'bg-purple-50/30 border-purple-100 opacity-60' 
                      : 'bg-white border-gray-150 hover:bg-gray-50'
                  }`}
                >
                  <button className="shrink-0 mt-0.5">
                    {mission.completed ? (
                      <CheckCircle2 className="h-5 w-5 text-brand-purple fill-purple-100" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                    )}
                  </button>
                  <span className={`text-xs font-medium text-gray-700 leading-snug ${mission.completed ? 'line-through text-gray-400' : ''}`}>
                    {mission.text}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent AI Suggestions */}
          <Card shadowColor="teal" padding="p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-teal-100 text-brand-teal">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base font-display text-gray-900">Recent AI Suggestions</h3>
                <p className="text-[10px] text-gray-400">Real-time companion tips</p>
              </div>
            </div>

            <div className="space-y-3.5">
              {mockAISuggestions.map((suggestion) => (
                <div key={suggestion.id} className="relative pl-3 border-l-2 border-brand-teal text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-brand-teal">{suggestion.student}</span>
                    <span className="text-[10px] text-gray-400">{suggestion.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {suggestion.text}
                  </p>
                </div>
              ))}
            </div>
          </Card>

        </div>

      </div>

      {/* Bottom Section: Student Summary */}
      <Card>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold font-display text-gray-900">Diverse Learners Summary</h3>
            <p className="text-xs text-gray-500">Quick view of students with customized learning profiles.</p>
          </div>
          <button 
            onClick={() => setPage('students')}
            className="text-sm font-bold text-brand-blue hover:underline cursor-pointer"
          >
            View all portfolios
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockStudents.map((student) => {
            
            // Choose background border colors based on student needs
            const tagColors = student.needs.includes("ADHD") 
              ? "bg-purple-100 text-brand-purple" 
              : student.needs.includes("Autism") 
              ? "bg-teal-100 text-brand-teal" 
              : student.needs.includes("Dyslexia")
              ? "bg-blue-100 text-brand-blue"
              : "bg-orange-100 text-brand-orange";

            return (
              <div 
                key={student.id} 
                onClick={() => handleStudentClick(student.id)}
                className="group border border-gray-200 hover:border-brand-purple hover:bg-brand-purple/5 p-4 rounded-2xl cursor-pointer transition-all duration-200 text-left shadow-sm hover:shadow"
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={student.avatar} 
                    alt={student.name}
                    className="h-12 w-12 rounded-2xl border-2 border-gray-150 bg-gray-50 group-hover:border-brand-purple transition-colors"
                  />
                  <div>
                    <h4 className="font-extrabold text-sm text-gray-900 group-hover:text-brand-purple font-display">{student.name}</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md mt-1 inline-block ${tagColors}`}>
                      {student.needs.split(" (")[0]}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 space-y-2 text-xs">
                  <div>
                    <span className="text-gray-400 font-semibold uppercase text-[9px] tracking-wider block">Top Strength</span>
                    <span className="font-extrabold text-gray-700">{student.strengths[0]}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-semibold uppercase text-[9px] tracking-wider block">Active Goal</span>
                    <p className="text-gray-600 truncate">{student.currentGoals.find(g => g.status === "in-progress")?.text || "No active goals"}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

    </div>
  );
}
