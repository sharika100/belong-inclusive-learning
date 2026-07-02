import React from 'react';
import { Sparkles } from 'lucide-react';
import Card from '../components/Card';

export default function Login({ onLogin }) {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-[#fafaf9]">
      
      {/* Left Column: Branding and Authentication */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-16 bg-white border-r border-gray-100">
        
        {/* Brand Header */}
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 bg-brand-purple text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-duo-purple animate-float">
            B
          </div>
          <div>
            <span className="font-display font-black text-2xl tracking-tight text-gray-900">
              BELONG
            </span>
            <p className="text-[10px] text-brand-teal font-extrabold tracking-wider uppercase -mt-0.5">
              Teacher Companion
            </p>
          </div>
        </div>

        {/* Content & Sign In */}
        <div className="my-auto py-12 max-w-md">
          <div className="flex items-center gap-2 mb-4 bg-brand-purple-light text-brand-purple font-extrabold text-xs px-3 py-1.5 rounded-full w-fit">
            <Sparkles className="h-3.5 w-3.5" />
            Empowering Inclusive Education
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-gray-900 leading-tight mb-4">
            Empowering Teachers to Build Confident, Connected & Inclusive Classrooms.
          </h1>
          
          <p className="text-gray-500 text-base mb-8">
            Co-create customized visual stories, brain breaks, and inclusion guidelines tailored specifically to your students' ADHD, sensory, and learning needs.
          </p>

          {/* Duolingo style Google button */}
          <button 
            onClick={onLogin}
            className="w-full py-4 px-6 bg-white border-2 border-gray-200 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 active:translate-y-1 hover:border-gray-300 shadow-duo transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer"
          >
            {/* Google Logo Icon */}
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.66 1.48 14.98 1 12 1 7.24 1 3.2 3.74 1.25 7.74l3.82 2.96C6.01 7.54 8.78 5.04 12 5.04z"
              />
              <path
                fill="#4285F4"
                d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.4 3.58l3.73 2.89c2.18-2.01 3.7-4.97 3.7-8.62z"
              />
              <path
                fill="#FBBC05"
                d="M5.07 10.7c-.24-.72-.38-1.5-.38-2.3 0-.8.14-1.58.38-2.3L1.25 7.14C.45 8.76 0 10.58 0 12.5s.45 3.74 1.25 5.36l3.82-2.96c-.24-.72-.38-1.5-.38-2.3z"
              />
              <path
                fill="#34A853"
                d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.73-2.89c-1.18.79-2.69 1.27-4.23 1.27-3.22 0-5.99-2.5-6.93-5.66L1.25 15.77C3.2 19.77 7.24 23 12 23z"
              />
            </svg>
            Continue with Google
          </button>
          
          <p className="text-xs text-gray-400 mt-6 text-center">
            By signing in, you agree to our Terms of Service and Privacy Guidelines.
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-6">
          <span>© 2026 BELONG Companion</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>

      </div>

      {/* Right Column: Hero Graphic Illustration */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-brand-purple/20 via-brand-blue/10 to-brand-teal/20 items-center justify-center p-12">
        <div className="max-w-md text-center space-y-8">
          
          {/* Beautiful SVG Custom Illustration */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 animate-float">
            <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-md">
              {/* Sun/Glow */}
              <circle cx="200" cy="150" r="130" fill="url(#grad)" opacity="0.3" />
              
              {/* Board */}
              <rect x="60" y="30" width="280" height="120" rx="10" fill="#0f766e" />
              <rect x="65" y="35" width="270" height="110" rx="8" fill="#115e59" />
              {/* Board drawings */}
              <text x="200" y="70" fill="#ccfbf1" fontSize="16" fontFamily="var(--font-sans)" fontWeight="bold" textAnchor="middle">
                Welcome to Class 3-B!
              </text>
              <circle cx="120" cy="110" r="10" fill="#eab308" />
              <circle cx="280" cy="110" r="7" fill="#ea580c" />
              <path d="M 120 110 Q 200 120 280 110" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4" fill="none" />
              
              {/* Teacher Figure */}
              <g transform="translate(80, 140)">
                {/* Hair */}
                <path d="M 25 15 C 5 15 5 45 25 45 C 45 45 45 15 25 15" fill="#f97316" />
                {/* Head */}
                <circle cx="25" cy="30" r="15" fill="#fed7aa" />
                {/* Glasses */}
                <rect x="15" y="24" width="8" height="6" rx="2" fill="none" stroke="#3b82f6" strokeWidth="2" />
                <rect x="27" y="24" width="8" height="6" rx="2" fill="none" stroke="#3b82f6" strokeWidth="2" />
                <line x1="23" y1="27" x2="27" y2="27" stroke="#3b82f6" strokeWidth="2" />
                {/* Smile */}
                <path d="M 20 37 Q 25 42 30 37" stroke="#ea580c" strokeWidth="2" fill="none" />
                {/* Body */}
                <path d="M 10 50 L 40 50 L 45 100 L 5 100 Z" fill="#7c3aed" />
                {/* Hands */}
                <path d="M 8 55 L -10 70 L -5 75 L 10 60" fill="#7c3aed" />
                <circle cx="-12" cy="72" r="5" fill="#fed7aa" />
              </g>

              {/* Child 1 (Hyperactive Leo, space shirt) */}
              <g transform="translate(190, 160)">
                {/* Head */}
                <circle cx="20" cy="25" r="12" fill="#ffedd5" />
                {/* Hair */}
                <path d="M 8 20 Q 20 5 32 20" stroke="#78350f" strokeWidth="5" fill="none" />
                {/* Smile */}
                <path d="M 16 30 Q 20 34 24 30" stroke="#b45309" strokeWidth="2" fill="none" />
                {/* Body */}
                <path d="M 8 40 L 32 40 L 35 80 L 5 80 Z" fill="#0284c7" />
                {/* Star on shirt */}
                <polygon points="20,48 22,54 28,54 23,58 25,64 20,60 15,64 17,58 12,54 18,54" fill="#facc15" />
                {/* Arm pointing up */}
                <path d="M 30 45 L 45 25" stroke="#0284c7" strokeWidth="6" strokeLinecap="round" />
                <circle cx="45" cy="23" r="4" fill="#ffedd5" />
              </g>

              {/* Child 2 (Chloe, flowers) */}
              <g transform="translate(270, 175)">
                {/* Head */}
                <circle cx="20" cy="25" r="12" fill="#fbcfe8" />
                {/* Hair (Pigtails) */}
                <circle cx="7" cy="18" r="6" fill="#172554" />
                <circle cx="33" cy="18" r="6" fill="#172554" />
                <path d="M 8 22 Q 20 15 32 22" stroke="#172554" strokeWidth="4" fill="none" />
                {/* Smile */}
                <path d="M 16 30 Q 20 34 24 30" stroke="#1e293b" strokeWidth="1.5" fill="none" />
                {/* Body */}
                <path d="M 8 40 L 32 40 L 34 75 L 6 75 Z" fill="#0d9488" />
                {/* Arm waving */}
                <path d="M 6 45 L -5 55" stroke="#0d9488" strokeWidth="6" strokeLinecap="round" />
                <circle cx="-5" cy="55" r="4" fill="#fbcfe8" />
              </g>

              {/* Gradients */}
              <defs>
                <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold text-gray-900 font-display">
              Build Connections, Nurture Talents
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              "We focus on what children CAN do. BELONG helps me find Leo's rocket-building strengths to teach him math, while ensuring Chloe has low-stakes pathways to share her beautiful drawings."
            </p>
            <p className="text-xs font-bold text-brand-purple uppercase tracking-wider">
              - Sarah J., Lead 3rd Grade Teacher
            </p>
          </div>
          
        </div>
      </div>

    </div>
  );
}
