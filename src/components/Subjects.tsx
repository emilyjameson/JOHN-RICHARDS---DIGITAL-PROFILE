import React, { useState } from 'react';
import { Atom, Sigma, Dna, BookOpen, ChevronRight, X, Sparkles } from 'lucide-react';
import { SUBJECTS } from '../data/profileData';
import { SubjectItem } from '../types';

export const Subjects: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectItem | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-6 h-6 text-blue-400" />;
      case 'Sigma':
        return <Sigma className="w-6 h-6 text-cyan-400" />;
      case 'Dna':
        return <Dna className="w-6 h-6 text-emerald-400" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-violet-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="subjects" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono-accent">
            Academic Interests
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mt-2 text-balance">
            WHAT I LIKE TO LEARN
          </h2>
          <p className="text-base text-slate-400 mt-3 font-normal">
            Four disciplines that shape my perspective, sharpen analytical thinking, and build the foundation for my future ambitions.
          </p>
        </div>

        {/* 4 Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUBJECTS.map((subject) => (
            <div
              key={subject.id}
              onClick={() => setSelectedSubject(subject)}
              className="group p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {renderIcon(subject.iconName)}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-blue-400 transition-colors">
                    {subject.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed font-normal">
                    {subject.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 group-hover:text-blue-400 transition-colors font-mono-accent">
                <span>View Notes & Topics</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Subject Detail Modal */}
        {selectedSubject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="subject-detail-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedSubject(null)}
          >
            <div
              className="w-full max-w-lg bg-[#0e1422] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                    {renderIcon(selectedSubject.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono-accent text-blue-400 uppercase tracking-wider">
                      Favorite Discipline
                    </span>
                    <h3 id="subject-detail-title" className="text-2xl font-bold text-white font-display">
                      {selectedSubject.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedSubject(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  aria-label="Close subject modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-accent mb-2">
                    Core Focus
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {selectedSubject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-accent mb-2">
                    John&apos;s Perspective
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed bg-white/[0.03] p-4 rounded-xl border border-white/[0.06]">
                    {selectedSubject.details}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-accent mb-2">
                    Topics of Interest
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                    {selectedSubject.keyTopics.map((topic, i) => (
                      <span
                        key={i}
                        className="py-1 px-2.5 rounded-md bg-white/[0.05] border border-white/10"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedSubject(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
