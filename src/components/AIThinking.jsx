import React, { useState, useEffect } from 'react';
import { Sparkles, Brain, Compass, HelpCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { id: 1, text: "Analyzing Leo's, Maya's, and Chloe's cognitive profiles...", icon: Brain, color: "text-brand-purple bg-purple-100" },
  { id: 2, text: "Integrating outer space interests with 3rd-grade math objectives...", icon: Compass, color: "text-brand-blue bg-blue-100" },
  { id: 3, text: "Drafting Zara & Rex's gravity trampoline story (Visual style)...", icon: Sparkles, color: "text-brand-teal bg-teal-100" },
  { id: 4, text: "Formulating 'Astronaut Orbit' brain break & tactile clay activities...", icon: HelpCircle, color: "text-brand-orange bg-orange-100" },
  { id: 5, text: "Injecting personalized support tips for hyperactive attention spans...", icon: AlertCircle, color: "text-brand-yellow text-yellow-700 bg-yellow-100" }
];

export default function AIThinking({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress increment timer
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // takes ~5 seconds to reach 100%

    // Step change timer
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000); // 1 second per step

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100 && onComplete) {
      const delay = setTimeout(() => {
        onComplete();
      }, 500); // Small delay for polished feel
      return () => clearTimeout(delay);
    }
  }, [progress, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center p-8 max-w-xl mx-auto text-center min-h-[400px]">
      {/* Animated Glowing Ring & Icons */}
      <div className="relative mb-8">
        <motion.div 
          className="absolute -inset-4 bg-gradient-to-tr from-brand-purple via-brand-teal to-brand-orange rounded-full opacity-30 blur-lg"
          animate={{
            scale: [1, 1.1, 1],
            rotate: 360
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="relative h-24 w-24 rounded-full bg-white border-4 border-brand-purple flex items-center justify-center shadow-lg">
          <AnimatePresence mode="wait">
            {(() => {
              const ActiveIcon = steps[Math.min(currentStep, steps.length - 1)].icon;
              return (
                <motion.div
                  key={currentStep}
                  initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.5, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.25 }}
                  className="text-brand-purple"
                >
                  <ActiveIcon className="h-10 w-10 stroke-[2]" />
                </motion.div>
              );
            })()}
          </AnimatePresence>
          <div className="absolute -bottom-1 -right-1 bg-brand-teal text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full shadow-md">
            AI
          </div>
        </div>
      </div>

      {/* Percentage Count */}
      <h2 className="text-4xl font-extrabold font-display bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent mb-2">
        {progress}% Generated
      </h2>
      <p className="text-gray-500 text-sm mb-6 max-w-md h-5">
        {steps[Math.min(currentStep, steps.length - 1)].text}
      </p>

      {/* Modern Progress Bar */}
      <div className="w-full bg-gray-100 rounded-full h-3 border border-gray-200 p-0.5 mb-8 shadow-inner">
        <motion.div 
          className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-teal h-2 rounded-full"
          style={{ width: `${progress}%` }}
          layoutId="progressBar"
        />
      </div>

      {/* Active Checklists */}
      <div className="w-full space-y-3 bg-gray-50 border border-gray-200/60 rounded-2xl p-5 shadow-sm text-left">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">AI Execution Logs</p>
        {steps.map((step, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;
          const StepIcon = step.icon;

          return (
            <div 
              key={step.id} 
              className={`flex items-center gap-3 transition-all duration-300 ${
                isCompleted ? "opacity-60" : isActive ? "opacity-100 scale-[1.01]" : "opacity-30"
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0" />
              ) : isActive ? (
                <div className="h-5 w-5 rounded-full border-2 border-brand-purple border-t-transparent animate-spin shrink-0" />
              ) : (
                <div className="h-5 w-5 rounded-full border-2 border-gray-300 shrink-0" />
              )}
              <div className={`p-1.5 rounded-lg ${step.color} shrink-0`}>
                <StepIcon className="h-3.5 w-3.5" />
              </div>
              <span className={`text-sm ${isActive ? "font-semibold text-gray-800" : "text-gray-600"}`}>
                {step.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
