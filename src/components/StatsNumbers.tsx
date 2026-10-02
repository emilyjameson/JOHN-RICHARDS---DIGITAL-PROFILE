import React from 'react';
import { STATS } from '../data/profileData';

export const StatsNumbers: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 relative border-t border-white/[0.06] bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-12 text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono-accent">
            At a Glance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display mt-1">
            JOHN IN NUMBERS
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            A snapshot of real focus areas, simple truths, and boundless potential.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/30 transition-all text-left group"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight tabular-nums group-hover:text-blue-400 transition-colors">
                {stat.value}
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-200 mt-3 font-display">
                {stat.label}
              </p>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
