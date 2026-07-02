import React, { useState } from 'react';
import { Sparkles, Brain, Wand2, RefreshCw } from 'lucide-react';
import Card from '../components/Card';
import AIThinking from '../components/AIThinking';

const learningStylesList = ["Visual", "Auditory", "Hands-on/Tactile", "Kinesthetic/Movement"];
const attentionSpansList = ["5-10 mins", "10-15 mins", "15-20 mins", "20-30 mins"];
const difficultyList = ["Introductory", "Medium", "Advanced"];
const gradesList = ["1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade"];

export default function LessonGenerator({ onGenerateComplete }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [subject, setSubject] = useState('Science / Space');
  const [grade, setGrade] = useState('3rd Grade');
  const [topic, setTopic] = useState('The Solar System & Gravity');
  const [objectives, setObjectives] = useState('Understand how gravity acts as a pulling force and keeps planets in orbit around the Sun.');
  
  // Tag chips
  const [interests, setInterests] = useState(["Space Exploration", "Dinosaurs"]);
  const [newInterest, setNewInterest] = useState('');
  const [selectedStyles, setSelectedStyles] = useState(["Visual", "Hands-on/Tactile"]);
  const [selectedSpan, setSelectedSpan] = useState("10-15 mins");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Medium");

  const handleAddInterest = (e) => {
    e.preventDefault();
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (item) => {
    setInterests(interests.filter(i => i !== item));
  };

  const toggleStyle = (style) => {
    setSelectedStyles(prev => 
      prev.includes(style) ? prev.filter(s => s !== style) : [...prev, style]
    );
  };

  // Demo auto-populate helper
  const handleAutoPopulate = () => {
    setSubject('Science / Space');
    setGrade('3rd Grade');
    setTopic('The Solar System & Gravity');
    setObjectives('Identify planets in our solar system, understand gravity as an invisible pulling force, and explore orbital motion.');
    setInterests(["Space Exploration", "Dinosaurs", "Building Lego", "Nature Drawings"]);
    setSelectedStyles(["Visual", "Hands-on/Tactile"]);
    setSelectedSpan("10-15 mins");
    setSelectedDifficulty("Medium");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGenerating(true);
  };

  if (isGenerating) {
    return (
      <div className="w-full flex items-center justify-center min-h-[70vh]">
        <AIThinking onComplete={() => onGenerateComplete()} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black font-display tracking-tight text-gray-900 flex items-center gap-2">
            <Sparkles className="h-8 w-8 text-brand-purple fill-brand-purple-light" />
            AI Lesson Adapter
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Create standard-aligned lessons adapted dynamically for neurodivergent and diverse learner needs.
          </p>
        </div>
        
        {/* Populate Demo */}
        <button 
          type="button"
          onClick={handleAutoPopulate}
          className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-brand-purple text-brand-purple hover:bg-brand-purple/5 rounded-2xl font-bold transition-all text-xs cursor-pointer"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Auto-Populate Demo (Leo & Maya's profile)
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Core Lesson Fields */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <h3 className="text-lg font-bold font-display text-gray-900 mb-4 border-b border-gray-100 pb-2">
              1. Lesson Context & Standards
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Subject</label>
                <input 
                  type="text" 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none transition text-sm font-medium"
                  placeholder="e.g. Science, Mathematics, History"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Grade Level</label>
                <select 
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none transition text-sm font-medium"
                >
                  {gradesList.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Lesson Topic</label>
              <input 
                type="text" 
                value={topic} 
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none transition text-sm font-medium"
                placeholder="e.g. Fractions, Photosynthesis, Volcanoes"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Learning Objectives</label>
              <textarea 
                rows="3"
                value={objectives} 
                onChange={(e) => setObjectives(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none transition text-sm font-medium"
                placeholder="What should the students understand or be able to do by the end of this lesson?"
                required
              />
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold font-display text-gray-900 mb-4 border-b border-gray-100 pb-2">
              2. Student Interests & Empathy Triggers
            </h3>
            
            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Target Student Interests</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {interests.map(item => (
                  <span 
                    key={item} 
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-purple-light text-brand-purple border border-brand-purple/20 rounded-full text-xs font-bold"
                  >
                    {item}
                    <button 
                      type="button" 
                      onClick={() => handleRemoveInterest(item)}
                      className="hover:text-red-500 font-extrabold focus:outline-none"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={newInterest} 
                  onChange={(e) => setNewInterest(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-gray-50 border-2 border-gray-250 focus:border-brand-purple rounded-xl outline-none transition text-xs font-medium"
                  placeholder="Add another interest (e.g. Trains, Dogs, Drawing)"
                />
                <button 
                  type="button"
                  onClick={handleAddInterest}
                  className="px-4 py-2 bg-gray-150 text-gray-700 border-2 border-gray-250 hover:bg-gray-200 rounded-xl text-xs font-bold btn-duo cursor-pointer"
                >
                  Add
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-400">
              💡 The AI will weave these interests into the stories, metaphors, and quizzes to capture hyper-focused attention.
            </p>
          </Card>
        </div>

        {/* Adaptations Controls */}
        <div className="space-y-6">
          
          {/* Adaptation Options Card */}
          <Card shadowColor="purple">
            <h3 className="text-lg font-bold font-display text-gray-900 mb-4 border-b border-purple-100 pb-2">
              3. Adaptations Configuration
            </h3>

            {/* Learning Styles */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-purple-700 uppercase mb-3">Target Learning Styles</label>
              <div className="flex flex-col gap-2">
                {learningStylesList.map((style) => {
                  const isSelected = selectedStyles.includes(style);
                  return (
                    <button
                      key={style}
                      type="button"
                      onClick={() => toggleStyle(style)}
                      className={`w-full py-2.5 px-4 text-left rounded-xl border-2 font-bold text-xs btn-duo transition-all flex items-center justify-between cursor-pointer ${
                        isSelected 
                          ? 'border-brand-purple bg-brand-purple-light/40 text-brand-purple shadow-duo-purple' 
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {style}
                      {isSelected && <span className="h-2 w-2 rounded-full bg-brand-purple" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Attention Span limits */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-purple-700 uppercase mb-3">Attention Span Focus Chunking</label>
              <div className="grid grid-cols-2 gap-2">
                {attentionSpansList.map((span) => {
                  const isSelected = selectedSpan === span;
                  return (
                    <button
                      key={span}
                      type="button"
                      onClick={() => setSelectedSpan(span)}
                      className={`py-2.5 px-3 text-center rounded-xl border-2 font-bold text-xs btn-duo transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-brand-purple bg-brand-purple-light/40 text-brand-purple shadow-duo-purple' 
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {span}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Difficulty Level */}
            <div>
              <label className="block text-xs font-bold text-purple-700 uppercase mb-3">Difficulty Scaling</label>
              <div className="flex gap-2">
                {difficultyList.map((level) => {
                  const isSelected = selectedDifficulty === level || (level === "Introductory" && selectedDifficulty === "Low") || (level === "Advanced" && selectedDifficulty === "High");
                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setSelectedDifficulty(level)}
                      className={`flex-1 py-2.5 text-center rounded-xl border-2 font-bold text-xs btn-duo transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-brand-purple bg-brand-purple-light/40 text-brand-purple shadow-duo-purple' 
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>

          </Card>

          {/* Large CTA Generate Button */}
          <button 
            type="submit"
            className="w-full py-4 px-6 bg-brand-purple hover:bg-brand-purple-hover text-white rounded-2xl font-bold text-base btn-duo shadow-duo-purple flex items-center justify-center gap-3 cursor-pointer"
          >
            <Wand2 className="h-5 w-5 animate-pulse" />
            Generate Adapted Lesson
          </button>

        </div>

      </form>

    </div>
  );
}
