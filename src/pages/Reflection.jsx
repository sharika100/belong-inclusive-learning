import React, { useState } from 'react';
import { 
  MessageSquareHeart, 
  Sparkles, 
  Send, 
  Download, 
  Check, 
  Lightbulb, 
  HelpCircle,
  TrendingUp,
  BrainCircuit,
  FileText
} from 'lucide-react';
import Card from '../components/Card';
import { mockReflectionReports } from '../services/mockData';

export default function Reflection() {
  const [q1, setQ1] = useState(mockReflectionReports[0].responses.participation);
  const [q2, setQ2] = useState(mockReflectionReports[0].responses.confidence);
  const [q3, setQ3] = useState(mockReflectionReports[0].responses.strategy);
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [showReport, setShowReport] = useState(false);
  
  const [aiReport, setAiReport] = useState({
    review: mockReflectionReports[0].aiReview,
    actions: mockReflectionReports[0].actions
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI compiling the response report
    setTimeout(() => {
      setIsGenerating(false);
      setShowReport(true);
      setAiReport({
        review: `Based on your observation of Chloe sharing her illustration with a peer and Leo completing his space building blocks, classroom engagement was high. Chloe is beginning to respond to low-stakes visual whiteboards. Next week, prioritize structured dyad setups (1-on-1 pairs) rather than larger group rotations to keep sensory levels low.`,
        actions: [
          "Pair Chloe and Leo for the botanical drawing lab",
          "Introduce a 5-minute visual transition countdown card before recess",
          "Ensure Leo holds the clay model during physical science blocks"
        ]
      });
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black font-display tracking-tight text-gray-900 flex items-center gap-2">
          <BrainCircuit className="h-8 w-8 text-brand-purple fill-brand-purple-light" />
          Reflection Space
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Review weekly classroom dynamics, log what worked, and receive tailored tips for the upcoming week.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* Left Column: Weekly Questions Form (3 cols) */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
          <Card>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
              <h3 className="text-lg font-bold font-display text-gray-900">Weekly Reflection Journal</h3>
              <span className="text-xs bg-brand-purple-light text-brand-purple px-2.5 py-1 rounded-md font-bold">
                Week: June 22 - June 26
              </span>
            </div>

            <div className="space-y-4">
              
              <div>
                <label className="block text-xs font-extrabold text-gray-500 uppercase mb-2 flex items-center gap-1.5">
                  <HelpCircle className="h-4 w-4 text-brand-purple" />
                  Did every child participate?
                </label>
                <textarea 
                  rows="3"
                  value={q1}
                  onChange={(e) => setQ1(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none text-xs font-medium"
                  placeholder="Summarize speech, written, or visual participation rates..."
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-gray-500 uppercase mb-2 flex items-center gap-1.5">
                  <HelpCircle className="h-4 w-4 text-brand-purple" />
                  Who gained confidence?
                </label>
                <textarea 
                  rows="3"
                  value={q2}
                  onChange={(e) => setQ2(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none text-xs font-medium"
                  placeholder="Detail positive highlights for neurodivergent or quiet students..."
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-gray-500 uppercase mb-2 flex items-center gap-1.5">
                  <HelpCircle className="h-4 w-4 text-brand-purple" />
                  Which strategy worked?
                </label>
                <textarea 
                  rows="3"
                  value={q3}
                  onChange={(e) => setQ3(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none text-xs font-medium"
                  placeholder="Which adaptation (visual, tactile, movement) was most effective?"
                  required
                />
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button 
                type="submit"
                disabled={isGenerating}
                className="px-5 py-3 bg-brand-purple hover:bg-brand-purple-hover disabled:bg-purple-300 text-white rounded-xl font-bold text-xs btn-duo shadow-duo-purple flex items-center gap-2 cursor-pointer"
              >
                {isGenerating ? (
                  <>
                    <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Analyzing observations...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 fill-purple-100" />
                    Generate Reflection Report
                  </>
                )}
              </button>
            </div>
          </Card>
        </form>

        {/* Right Column: AI Analysis Report (2 cols) */}
        <div className="lg:col-span-2">
          {showReport ? (
            <Card shadowColor="purple" className="space-y-6">
              <div className="border-b border-purple-100 pb-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-purple fill-purple-100" />
                  <h3 className="text-lg font-bold font-display text-gray-900">AI Evaluation</h3>
                </div>
                <button 
                  onClick={handlePrint}
                  className="p-2 border border-gray-200 hover:bg-gray-50 rounded-lg text-gray-600 transition"
                  title="Print Report"
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>

              {/* Review text */}
              <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100 text-xs">
                <p className="font-extrabold text-brand-purple uppercase tracking-wider mb-2">Classroom Dynamics Review</p>
                <p className="text-gray-700 leading-relaxed font-semibold">
                  {aiReport.review}
                </p>
              </div>

              {/* Action checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Next Week's Action Items</h4>
                {aiReport.actions.map((act, idx) => (
                  <div key={idx} className="flex gap-3 items-start p-3 bg-white border border-gray-150 rounded-xl">
                    <div className="h-5 w-5 rounded-full bg-brand-purple text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-xs font-medium text-gray-700 leading-tight">{act}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 flex gap-2">
                <div className="p-2 rounded-xl bg-teal-100 text-brand-teal shrink-0">
                  <Lightbulb className="h-4 w-4" />
                </div>
                <p className="text-[10px] text-gray-400 leading-relaxed font-semibold">
                  AI suggestions are generated by matching observations to pedagogic neurodiversity guidelines. Re-evaluate strategies if focus constraints persist.
                </p>
              </div>

            </Card>
          ) : (
            <Card className="flex flex-col items-center justify-center text-center p-8 min-h-[300px]">
              <div className="p-4 rounded-3xl bg-gray-50 border border-gray-200 text-gray-400 mb-4">
                <FileText className="h-10 w-10" />
              </div>
              <h4 className="font-extrabold text-sm text-gray-800">Report Pending</h4>
              <p className="text-xs text-gray-400 mt-2 max-w-xs">
                Complete and submit the weekly reflection journal form on the left to generate your custom inclusion analysis.
              </p>
            </Card>
          )}
        </div>

      </div>

    </div>
  );
}
