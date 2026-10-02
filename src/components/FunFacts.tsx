import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { FUN_FACTS } from '../data/profileData';

export const FunFacts: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl text-left mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono-accent">
            Personality Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mt-2 text-balance">
            A FEW THINGS ABOUT JOHN
          </h2>
          <p className="text-base text-slate-400 mt-3 font-normal">
            Eight direct truths that define everyday life, genuine interests, and long-term targets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FUN_FACTS.map((item, idx) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-200 text-left flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono-accent text-slate-400">
                    0{idx + 1}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-base font-bold text-white font-display group-hover:text-blue-300 transition-colors">
                  {item.fact}
                </h3>
              </div>

              <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-white/[0.05] leading-relaxed">
                {item.context}
              </p>
            </div>
          ))}
        </div>

        {/* Small authentic closing note */}
        <div className="mt-10 p-5 rounded-2xl bg-blue-950/20 border border-blue-500/20 max-w-xl mx-auto flex items-center gap-3 text-xs text-slate-300 text-left">
          <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
          <span>
            No manufactured awards or pretend achievements. Just a curious, hardworking high school student focused on what lies ahead.
          </span>
        </div>
      </div>
    </section>
  );
};
