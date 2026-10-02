import React from 'react';
import { Sparkles, ArrowRight, TrendingUp, Building2, GraduationCap, Compass } from 'lucide-react';
import { PROFILE_INFO, CAREER_STEPS } from '../data/profileData';

export const CareerDream: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <TrendingUp className="w-5 h-5 text-violet-400" />;
      case 3:
        return <Building2 className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="dream" className="py-24 sm:py-32 relative border-t border-white/[0.06] overflow-hidden">
      {/* Subtle deep violet atmospheric glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 font-mono-accent">
            Vision & Ambition
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-[1.05] text-balance">
            MY BIG DREAM
          </h2>

          {/* Large 3-line statement */}
          <div className="space-y-1.5 pt-2">
            {PROFILE_INFO.dreamStatement.lines.map((line, idx) => (
              <p
                key={idx}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 font-display tracking-tight"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-2">
            <p>{PROFILE_INFO.dreamStatement.narrative1}</p>
            <p className="text-slate-400">{PROFILE_INFO.dreamStatement.narrative2}</p>
          </div>
        </div>

        {/* Visual Progression: 4 Steps */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/[0.08]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-accent">
              The Journey from Student to Builder
            </h3>
            <span className="text-xs text-blue-400 font-mono-accent">Aspirational Roadmap</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {CAREER_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-violet-500/30 transition-all flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono-accent text-slate-600 group-hover:text-violet-400 transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <p className="text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono-accent">
                    {step.label}
                  </p>

                  <h4 className="text-lg font-bold text-white font-display mt-1">
                    {step.role}
                  </h4>

                  <p className="text-xs font-medium text-slate-300 mt-2 font-mono-accent">
                    {step.context}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {idx < CAREER_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Inspiration Area: African Entrepreneurship & Dangote */}
        <div className="rounded-2xl bg-[#0f1422] border border-white/[0.08] p-8 sm:p-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono-accent">
                {PROFILE_INFO.dreamStatement.inspirationTitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Role Models: The Vision of {PROFILE_INFO.dreamStatement.inspirationFigure}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {PROFILE_INFO.dreamStatement.inspirationNote}
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold font-display">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>The Core Belief</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                &ldquo;Every titan of industry once sat in a classroom with notebooks, questions, and big ambitions. The ambition starts right now.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
