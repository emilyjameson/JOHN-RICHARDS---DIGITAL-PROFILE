import React from 'react';
import { Moon, Utensils, TrendingUp, Flame, Quote } from 'lucide-react';
import { HOBBIES } from '../data/profileData';

export const Hobbies: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Moon':
        return <Moon className="w-5 h-5 text-indigo-400" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-rose-400" />;
      default:
        return null;
    }
  };

  return (
    <section id="hobbies" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono-accent">
            Personality & Downtime
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mt-2 text-balance">
            THINGS I ENJOY
          </h2>
          <p className="text-base text-slate-400 mt-3 font-normal">
            Life outside the textbook — honest pursuits, essential recoveries, and personal drives.
          </p>
        </div>

        {/* Varied 4-card asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: SLEEPING - Wide card */}
          <div className="md:col-span-7 p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  {getIcon(HOBBIES[0].iconName)}
                </div>
                <span className="text-xs font-mono-accent text-slate-400">
                  {HOBBIES[0].seriousnessLevel}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
                {HOBBIES[0].title}
              </h3>
              <p className="text-lg text-indigo-300 font-medium mt-2 italic font-display">
                &ldquo;{HOBBIES[0].tagline}&rdquo;
              </p>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed font-normal">
                {HOBBIES[0].flavorText}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs text-slate-400">
              <Quote className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>{HOBBIES[0].quote}</span>
            </div>
          </div>

          {/* Card 2: EATING - Accent card */}
          <div className="md:col-span-5 p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  {getIcon(HOBBIES[1].iconName)}
                </div>
                <span className="text-xs font-mono-accent text-slate-400">
                  {HOBBIES[1].seriousnessLevel}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
                {HOBBIES[1].title}
              </h3>
              <p className="text-base text-amber-300 font-medium mt-2 italic font-display">
                &ldquo;{HOBBIES[1].tagline}&rdquo;
              </p>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed font-normal">
                {HOBBIES[1].flavorText}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs text-slate-400">
              <Quote className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{HOBBIES[1].quote}</span>
            </div>
          </div>

          {/* Card 3: MAKING MONEY - Strong drive */}
          <div className="md:col-span-5 p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  {getIcon(HOBBIES[2].iconName)}
                </div>
                <span className="text-xs font-mono-accent text-slate-400">
                  {HOBBIES[2].seriousnessLevel}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
                {HOBBIES[2].title}
              </h3>
              <p className="text-base text-emerald-300 font-medium mt-2 italic font-display">
                &ldquo;{HOBBIES[2].tagline}&rdquo;
              </p>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed font-normal">
                {HOBBIES[2].flavorText}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs text-slate-400">
              <Quote className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{HOBBIES[2].quote}</span>
            </div>
          </div>

          {/* Card 4: LOOKING FOR TROUBLE - Humorous candor */}
          <div className="md:col-span-7 p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                  {getIcon(HOBBIES[3].iconName)}
                </div>
                <span className="text-xs font-mono-accent text-slate-400">
                  {HOBBIES[3].seriousnessLevel}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
                {HOBBIES[3].title}
              </h3>
              <p className="text-lg text-rose-300 font-medium mt-2 italic font-display">
                &ldquo;{HOBBIES[3].tagline}&rdquo;
              </p>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed font-normal">
                {HOBBIES[3].flavorText}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs text-slate-400">
              <Quote className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>{HOBBIES[3].quote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
