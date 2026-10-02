import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 sm:py-20 border-t border-white/[0.08] relative bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06] text-left">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
              JOHN RICHARDS
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-blue-400 font-mono-accent uppercase tracking-wider">
              Student · Dreamer · Future Entrepreneur
            </p>
            <p className="text-sm text-slate-400 italic font-display pt-1">
              &ldquo;Still learning. Still dreaming. Still building.&rdquo;
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-xs text-slate-400 font-mono-accent">
              Christy Caleb International School
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-white text-xs font-medium border border-white/10 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono-accent">
          <p>© 2026 John Richards. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Class of 2026</span>
            <span>·</span>
            <span>Future Ambition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
