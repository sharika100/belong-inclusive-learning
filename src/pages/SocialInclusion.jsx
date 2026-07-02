import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Sparkles, 
  AlertCircle, 
  HelpCircle, 
  Activity, 
  UserPlus, 
  Lightbulb,
  HeartHandshake
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  AreaChart,
  Area
} from 'recharts';
import Card from '../components/Card';
import { mockStudents, mockSocialData } from '../services/mockData';

export default function SocialInclusion() {
  
  // Format bar chart data comparing the four students
  const barChartData = mockStudents.map(student => ({
    name: student.name.split(" ")[0],
    Participation: student.participationScore,
    Engagement: student.engagementHistory[student.engagementHistory.length - 1].score
  }));

  // Format line/area confidence data by combining students
  const months = ["Jan", "Feb", "Mar", "Apr", "May"];
  const confidenceData = months.map((month, idx) => {
    let sum = 0;
    mockStudents.forEach(student => {
      sum += student.confidenceTimeline[idx]?.level || 50;
    });
    return {
      month,
      ClassAverage: Math.round(sum / mockStudents.length)
    };
  });

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black font-display tracking-tight text-gray-900 flex items-center gap-2">
          <HeartHandshake className="h-8 w-8 text-brand-purple fill-brand-purple-light" />
          Social Inclusion Dashboard
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Insights and suggestions to foster friendships, classroom connections, and positive peer dynamics.
        </p>
      </div>

      {/* Analytics Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Participation and Engagement rates */}
        <Card>
          <div className="mb-4">
            <h3 className="text-base font-bold font-display text-gray-900">Participation vs. Engagement</h3>
            <p className="text-xs text-gray-500">Comparing active speech participation against work focus rates.</p>
          </div>
          <div className="h-64 w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={barChartData}
                margin={{ top: 5, right: 5, left: -25, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" domain={[0, 100]} />
                <Tooltip />
                <Legend iconType="circle" />
                <Bar dataKey="Participation" fill="#0284c7" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Engagement" fill="#0d9488" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Classroom Confidence Growth Area Chart */}
        <Card>
          <div className="mb-4">
            <h3 className="text-base font-bold font-display text-gray-900">Classroom Confidence Growth Trend</h3>
            <p className="text-xs text-gray-500">Average student confidence progression over the school semester.</p>
          </div>
          <div className="h-64 w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart 
                data={confidenceData}
                margin={{ top: 5, right: 5, left: -25, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorSocial" cx="0" cy="0" x1="0" y1="1" x2="0" y2="0">
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
                  dataKey="ClassAverage" 
                  stroke="#7c3aed" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorSocial)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

      </div>

      {/* Core Social Context Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Encouragement list & Buddy Suggestions */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Peer Buddy Pairs */}
          <Card shadowColor="purple">
            <h3 className="text-lg font-bold font-display text-gray-900 mb-4 flex items-center gap-2">
              <UserPlus className="h-5 w-5 text-brand-purple" />
              Suggested Peer Buddies
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockSocialData.suggestedPeerBuddies.map((pair, idx) => (
                <div key={idx} className="bg-white border-2 border-brand-purple/20 p-4 rounded-2xl text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-16 w-16 bg-brand-purple/5 rounded-bl-full flex items-center justify-center text-brand-purple opacity-40">
                    <HeartHandshake className="h-5 w-5 -mt-3 -mr-3" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-gray-900">{pair.studentA}</span>
                    <span className="text-xs text-brand-purple font-black">↔</span>
                    <span className="font-extrabold text-sm text-gray-900">{pair.studentB}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                    <span className="text-brand-purple font-extrabold uppercase text-[9px] tracking-wider block">Inclusion strategy</span>
                    {pair.reason}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Students needing encouragement */}
          <Card shadowColor="orange">
            <h3 className="text-lg font-bold font-display text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-brand-orange" />
              Students Needing Encouragement
            </h3>

            <div className="space-y-4">
              {mockSocialData.studentsNeedingEncouragement.map((student, idx) => (
                <div key={idx} className="flex gap-4 p-4 border border-orange-100 rounded-2xl bg-orange-50/10 text-left">
                  <div className="bg-orange-100 text-brand-orange p-3 rounded-2xl shrink-0 h-fit">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-extrabold text-sm text-gray-900">{student.name}</h4>
                      <span className="text-xs font-bold text-brand-orange">Confidence Score: {student.score}%</span>
                    </div>
                    <p className="text-xs text-gray-500 font-semibold mt-0.5">Alert: {student.reason}</p>
                    <div className="bg-white border border-orange-100/60 p-2.5 rounded-xl mt-3 text-xs">
                      <p className="font-bold text-brand-orange uppercase text-[9px] tracking-wider">Teacher strategy recommendation</p>
                      <p className="text-gray-700 mt-0.5 font-medium">{student.recommendation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

        </div>

        {/* Right Column: Weekly Recommendations */}
        <div className="lg:col-span-1">
          <Card shadowColor="teal" className="sticky top-20">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-brand-teal" />
              <h3 className="text-base font-bold font-display text-gray-900">Weekly AI Recommendations</h3>
            </div>
            
            <div className="space-y-4 text-xs">
              {mockSocialData.weeklyRecommendations.map((rec, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-teal-50/10 border border-teal-100 rounded-xl">
                  <div className="p-1 rounded-md bg-brand-teal text-white shrink-0 mt-0.5 font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    {rec}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>

      </div>

    </div>
  );
}
