import React, { useState } from 'react';
import { 
  FileText, 
  Image as ImageIcon, 
  HelpCircle, 
  Activity, 
  Wrench, 
  Lightbulb, 
  Download, 
  RefreshCw, 
  Check, 
  AlertCircle,
  LayoutGrid
} from 'lucide-react';
import Card from '../components/Card';
import { mockLessons } from '../services/mockData';

const tabsList = [
  { id: 'story', label: 'Story', icon: FileText },
  { id: 'comic', label: 'Comic Panel', icon: LayoutGrid },
  { id: 'illustrations', label: 'Illustrations', icon: ImageIcon },
  { id: 'quiz', label: 'Interactive Quiz', icon: HelpCircle },
  { id: 'brain-break', label: 'Brain Break', icon: Activity },
  { id: 'activities', label: 'Activities', icon: Wrench },
  { id: 'teacher-tips', label: 'Teacher Tips', icon: Lightbulb }
];

export default function GeneratedLesson() {
  const [activeTab, setActiveTab] = useState('story');
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [regeneratedCount, setRegeneratedCount] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState({});
  
  // Custom states to handle the simulated local regenerations of tabs
  const [storyContent, setStoryContent] = useState(mockLessons.history.generated.story);
  const [quizContent, setQuizContent] = useState(mockLessons.history.generated.quiz);
  const [tipsContent, setTipsContent] = useState(mockLessons.history.generated.teacherTips);

  const handleExportPDF = () => {
    // Standard window.print() style format
    window.print();
  };

  const handleRegenerateTab = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setIsRegenerating(false);
      setRegeneratedCount(prev => prev + 1);

      // Mutate content depending on what is active to simulate AI updating
      if (activeTab === 'story') {
        setStoryContent({
          title: "The Great Space Gravity Tug-of-War (Updated)",
          content: `Once upon a time in space, a clever kid named Zara and her robot companion, Sparky, were floating next to Mars. Sparky looked down and wondered, "Zara, if space is empty, why do we stay near the planet?"

Zara laughed. "Think of gravity like a giant magnetic friendship! Mars is huge, so it pulls us close with its heavy weight. The Sun is even bigger—it's like the ultimate cosmic magnet, holding all the planets in a giant, circling game of tag. The closer you get to Mars, the stronger its friendly hug pulls!"`,
          illustationPrompt: "A cartoon Zara and her robot Sparky floating in spacesuits next to a red Mars, with glowing blue magnetic waves pulling them closer."
        });
      } else if (activeTab === 'quiz') {
        setQuizContent([
          { q: "Which cosmic body acts as the strongest 'magnet' in our solar system?", options: ["The Moon", "The Sun", "Earth", "Mars"], correct: "The Sun", hint: "It sits right in the middle of our orbits!" },
          { q: "Zara compares gravity to which game?", options: ["Hide and seek", "Tug-of-war", "A game of tag", "Hopscotch"], correct: "A game of tag", hint: "Planets circle the Sun in this game." },
          { q: "What happens to gravity's pull when objects get closer?", options: ["It weakens", "It stays the same", "It gets stronger", "It disappears"], correct: "It gets stronger", hint: "Mars's friendly hug grows tighter." }
        ]);
        setSelectedAnswers({});
        setShowFeedback({});
      } else if (activeTab === 'teacher-tips') {
        setTipsContent([
          { target: "ADHD", tip: "Leo can hold a magnetic solar system model to feel the 'attraction'. This tactile support improves memory retention." },
          { target: "Sensory", tip: "For Maya, use soft foam spheres for the solar system layout. Avoid hard plastic that clicks loudly." },
          { target: "Anxiety", tip: "Allow Chloe to choose the planet she wants to draw beforehand so she feels in control of her role." }
        ]);
      }
    }, 1200); // 1.2 seconds loading simulation
  };

  const handleQuizAnswer = (qIndex, option) => {
    setSelectedAnswers(prev => ({ ...prev, [qIndex]: option }));
    setShowFeedback(prev => ({ ...prev, [qIndex]: true }));
  };

  return (
    <div className="space-y-6">
      
      {/* Header Info */}
      <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-duo flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-purple-100 text-brand-purple text-xs font-bold px-2.5 py-1 rounded-md">Science / Space</span>
            <span className="bg-blue-100 text-brand-blue text-xs font-bold px-2.5 py-1 rounded-md">Grade 3</span>
            <span className="bg-teal-100 text-brand-teal text-xs font-bold px-2.5 py-1 rounded-md">Adapted: ADHD & Sensory</span>
          </div>
          <h1 className="text-3xl font-black font-display tracking-tight text-gray-900 mt-3">
            The Solar System & Gravity
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Learning Objectives: Understand gravity as an invisible pulling force and planet orbit structures.
          </p>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <button 
            onClick={handleExportPDF}
            className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-2xl font-bold text-sm btn-duo shadow-duo cursor-pointer"
          >
            <Download className="h-4 w-4" />
            Export to PDF
          </button>
        </div>
      </div>

      {/* Main Adaptations Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Navigation Tabs (Vertical/Left on Desktop, Horizontal on Mobile) */}
        <div className="lg:col-span-1 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-1.5 p-1 bg-gray-100 rounded-2xl border border-gray-200/60 sticky top-20 z-10 shrink-0">
          {tabsList.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl text-xs font-extrabold whitespace-nowrap lg:whitespace-normal text-left transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-white text-brand-purple shadow-sm border border-gray-200' 
                    : 'text-gray-500 hover:text-gray-800 hover:bg-white/40'
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-brand-purple' : 'text-gray-400'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Workspace Details */}
        <div className="lg:col-span-3">
          <Card className="min-h-[500px] flex flex-col justify-between relative">
            
            {/* Spinning Overlay for tab regeneration */}
            {isRegenerating && (
              <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-2xl animate-fade-in">
                <RefreshCw className="h-10 w-10 text-brand-purple animate-spin" />
                <p className="text-sm font-extrabold text-brand-purple mt-4">Adapting layout choices...</p>
              </div>
            )}

            <div>
              {/* Tab Title */}
              <div className="border-b border-gray-100 pb-4 mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-black font-display text-gray-900">
                  {tabsList.find(t => t.id === activeTab)?.label}
                </h2>
                {regeneratedCount > 0 && (
                  <span className="text-[10px] bg-yellow-100 text-yellow-800 font-bold px-2 py-0.5 rounded-full">
                    Modified {regeneratedCount}x by AI
                  </span>
                )}
              </div>

              {/* TAB CONTENT SWITCH */}
              <div className="text-gray-700 leading-relaxed text-sm">
                
                {/* 1. STORY TAB */}
                {activeTab === 'story' && (
                  <div className="space-y-6">
                    <div className="bg-brand-purple/5 border border-brand-purple/20 p-4 rounded-2xl">
                      <h4 className="font-extrabold text-brand-purple mb-1 font-display">Zara & Rex Story: {storyContent.title}</h4>
                      <p className="text-xs text-gray-500">Visual Metaphor adapted for ADHD (incorporating spaceships, solar gravity, and trampoline models).</p>
                    </div>
                    
                    <p className="whitespace-pre-line text-gray-600 leading-relaxed font-medium">
                      {storyContent.content}
                    </p>

                    <Card shadowColor="purple" padding="p-4" className="border-dashed">
                      <span className="text-[10px] font-extrabold text-brand-purple uppercase tracking-wider block mb-1">Illustration Generation Prompt</span>
                      <p className="text-xs text-gray-500 italic">"{storyContent.illustationPrompt}"</p>
                    </Card>
                  </div>
                )}

                {/* 2. COMIC TAB */}
                {activeTab === 'comic' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {mockLessons.history.generated.comic.map((panel) => (
                      <Card key={panel.panel} shadowColor="blue" padding="p-4" className="bg-blue-50/5 flex flex-col justify-between h-48">
                        <div>
                          <span className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xs mb-2 shadow-sm">
                            {panel.panel}
                          </span>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Visual Setup</p>
                          <p className="text-xs text-gray-600 italic mt-1">{panel.desc}</p>
                        </div>
                        <div className="bg-white border border-blue-150 p-2.5 rounded-xl mt-3">
                          <p className="text-xs font-bold text-brand-blue uppercase">Caption/Dialogue</p>
                          <p className="text-xs font-extrabold text-gray-900 mt-0.5">"{panel.text}"</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                {/* 3. ILLUSTRATIONS TAB */}
                {activeTab === 'illustrations' && (
                  <div className="space-y-6 text-center">
                    <p className="text-xs text-gray-500 mb-4">Tactile visual representations used to ground the abstract orbital physics concepts.</p>
                    
                    <div className="mx-auto max-w-md bg-stone-50 border border-stone-250 p-4 rounded-3xl shadow-sm">
                      {/* Interactive SVG showing Gravity orbit */}
                      <svg viewBox="0 0 400 240" className="w-full h-auto">
                        <defs>
                          <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#fef08a" />
                            <stop offset="60%" stopColor="#facc15" />
                            <stop offset="100%" stopColor="#ca8a04" />
                          </radialGradient>
                          <radialGradient id="trampoline" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                        
                        {/* Trampoline grid */}
                        <circle cx="200" cy="120" r="100" fill="url(#trampoline)" />
                        <circle cx="200" cy="120" r="90" stroke="#ddd6fe" strokeWidth="1" fill="none" opacity="0.3" />
                        <circle cx="200" cy="120" r="70" stroke="#ddd6fe" strokeWidth="1" fill="none" opacity="0.5" />
                        <circle cx="200" cy="120" r="45" stroke="#ddd6fe" strokeWidth="1.5" fill="none" opacity="0.7" />
                        
                        {/* Sun in center */}
                        <circle cx="200" cy="120" r="24" fill="url(#sunGrad)" className="animate-pulse-soft" />
                        <text x="200" y="123" fill="#854d0e" fontSize="9" fontWeight="bold" textAnchor="middle">SUN</text>
                        
                        {/* Orbit paths */}
                        <ellipse cx="200" cy="120" rx="110" ry="60" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3" fill="none" />
                        <ellipse cx="200" cy="120" rx="140" ry="75" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3" fill="none" />
                        
                        {/* Planet 1: Lego Block Planet */}
                        <g transform="translate(100, 95)">
                          <rect x="-6" y="-6" width="12" height="12" fill="#0284c7" rx="1" />
                          <circle cx="-3" cy="-3" r="2" fill="#0369a1" />
                          <circle cx="3" cy="-3" r="2" fill="#0369a1" />
                          <circle cx="-3" cy="3" r="2" fill="#0369a1" />
                          <circle cx="3" cy="3" r="2" fill="#0369a1" />
                          <text x="0" y="15" fill="#0284c7" fontSize="8" fontWeight="bold" textAnchor="middle">Leo's Planet</text>
                        </g>
                        
                        {/* Planet 2: Train Planet */}
                        <g transform="translate(320, 150)">
                          <circle cx="0" cy="0" r="8" fill="#0d9488" />
                          <rect x="-10" y="-3" width="20" height="6" fill="#0d9488" rx="1" />
                          <line x1="-12" y1="5" x2="12" y2="5" stroke="#0d9488" strokeWidth="1.5" />
                          <text x="0" y="-12" fill="#0d9488" fontSize="8" fontWeight="bold" textAnchor="middle">Maya's Planet</text>
                        </g>

                        {/* Force Indicator Arrows */}
                        <path d="M 125 102 Q 165 110 174 113" stroke="#ea580c" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                        <path d="M 290 142 Q 240 130 226 126" stroke="#ea580c" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                        
                        <defs>
                          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ea580c" />
                          </marker>
                        </defs>
                        
                        <text x="200" y="220" fill="#ea580c" fontSize="10" fontWeight="bold" textAnchor="middle">
                          Gravity: Invisible pulling forces act like deep trampoline folds.
                        </text>
                      </svg>
                    </div>
                  </div>
                )}

                {/* 4. QUIZ TAB */}
                {activeTab === 'quiz' && (
                  <div className="space-y-6">
                    <p className="text-xs text-gray-500">Interactive quick checks tailored for low-stakes, high-empathy participation.</p>
                    
                    <div className="space-y-6">
                      {quizContent.map((question, qIdx) => {
                        const answered = selectedAnswers[qIdx];
                        const isCorrect = answered === question.correct;
                        const feedbackShown = showFeedback[qIdx];

                        return (
                          <Card key={qIdx} shadowColor={answered ? (isCorrect ? "teal" : "orange") : "default"}>
                            <h4 className="font-extrabold text-gray-900 mb-3">{qIdx + 1}. {question.q}</h4>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                              {question.options.map((option) => {
                                const isSelected = answered === option;
                                return (
                                  <button
                                    key={option}
                                    onClick={() => handleQuizAnswer(qIdx, option)}
                                    className={`py-3 px-4 text-left rounded-xl border-2 font-bold text-xs btn-duo transition-all flex justify-between items-center cursor-pointer ${
                                      isSelected
                                        ? (isCorrect 
                                          ? 'border-brand-teal bg-teal-50 text-brand-teal' 
                                          : 'border-brand-orange bg-orange-50 text-brand-orange')
                                        : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                                  >
                                    {option}
                                    {isSelected && (isCorrect 
                                      ? <Check className="h-4 w-4 stroke-[3]" /> 
                                      : <AlertCircle className="h-4 w-4 stroke-[3]" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>

                            {feedbackShown && (
                              <div className={`p-3 rounded-xl flex gap-2 items-start text-xs ${
                                isCorrect ? "bg-teal-50 text-teal-800" : "bg-yellow-50 text-yellow-800"
                              }`}>
                                <Lightbulb className="h-4 w-4 shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-extrabold">{isCorrect ? "Correct!" : "Try Again!"}</p>
                                  <p className="mt-0.5">{isCorrect ? "Awesome job! You understand gravity's pull." : `Hint: ${question.hint}`}</p>
                                </div>
                              </div>
                            )}
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 5. BRAIN BREAK TAB */}
                {activeTab === 'brain-break' && (
                  <div className="space-y-6">
                    <Card shadowColor="orange" className="bg-orange-50/5 border-dashed">
                      <div className="flex items-center gap-3 mb-3">
                        <Activity className="h-6 w-6 text-brand-orange" />
                        <h4 className="font-extrabold text-brand-orange text-lg font-display">
                          {mockLessons.history.generated.brainBreak.title}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-500 mb-4">
                        Kinesthetic adaptation for ADHD attention spans. Promotes physical reset without throwing off class order.
                      </p>
                      <div className="bg-white border border-orange-100 p-4 rounded-xl">
                        <p className="whitespace-pre-line text-sm text-gray-700 leading-relaxed font-semibold">
                          {mockLessons.history.generated.brainBreak.instructions}
                        </p>
                      </div>
                    </Card>
                    <p className="text-xs text-gray-400">
                      💡 Tip: Use a visual countdown timer (like a spaceship fuel bar) during this break to make transitions clear.
                    </p>
                  </div>
                )}

                {/* 6. ACTIVITIES TAB */}
                {activeTab === 'activities' && (
                  <div className="space-y-6">
                    <p className="text-xs text-gray-500">Structured hands-on engineering and creative projects matching classroom lessons.</p>
                    
                    <div className="space-y-4">
                      {mockLessons.history.generated.activities.map((act, idx) => (
                        <Card key={idx} shadowColor="blue" padding="p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-extrabold text-gray-900 text-base font-display">{act.name}</h4>
                            <span className="text-[10px] bg-blue-100 text-brand-blue font-bold px-2 py-0.5 rounded-md">
                              {act.time}
                            </span>
                          </div>
                          
                          <p className="text-xs font-semibold text-gray-500 mt-2">
                            <span className="text-brand-blue uppercase text-[9px] tracking-wider block">Materials needed</span>
                            {act.materials}
                          </p>
                          
                          <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                            <span className="text-brand-blue uppercase text-[9px] tracking-wider block">Instructions</span>
                            {act.desc}
                          </p>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. TEACHER TIPS TAB */}
                {activeTab === 'teacher-tips' && (
                  <div className="space-y-6">
                    <div className="bg-teal-50 border border-brand-teal/20 p-4 rounded-2xl">
                      <h4 className="font-extrabold text-brand-teal mb-1 font-display">Inclusion Companion Guide</h4>
                      <p className="text-xs text-teal-800">Custom classroom management tips specifically matched to your current students.</p>
                    </div>

                    <div className="space-y-4">
                      {tipsContent.map((tip, idx) => (
                        <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-150">
                          <div className="bg-brand-teal-light text-brand-teal p-3 rounded-2xl shrink-0 h-fit">
                            <Lightbulb className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-[10px] bg-brand-teal/10 text-brand-teal font-extrabold uppercase px-2 py-0.5 rounded">
                              For {tip.target} profile
                            </span>
                            <p className="text-sm font-semibold text-gray-800 mt-2">
                              {tip.tip}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Bottom Actions inside Card: Regenerate Tab */}
            <div className="border-t border-gray-100 pt-6 mt-8 flex justify-end">
              <button 
                onClick={handleRegenerateTab}
                className="flex items-center gap-2 px-4 py-2 border border-brand-purple text-brand-purple hover:bg-brand-purple/5 rounded-xl font-bold text-xs btn-duo cursor-pointer"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Regenerate this section
              </button>
            </div>

          </Card>
        </div>

      </div>

    </div>
  );
}
