import React from 'react';
import { Camera, GraduationCap, Building } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface SchoolSectionProps {
  schoolUrl: string;
  onOpenUpload: (targetId: string, title: string, currentUrl: string) => void;
}

export const SchoolSection: React.FC<SchoolSectionProps> = ({ schoolUrl, onOpenUpload }) => {
  return (
    <section id="school" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Academic identity */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono-accent flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>MY SCHOOL</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance">
                {PROFILE_INFO.school}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {PROFILE_INFO.schoolQuote}
            </p>

            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Building className="w-4 h-4 text-blue-400 shrink-0" />
                <span>A supportive environment fostering curiosity in science, literature, and leadership.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>Daily curriculum: Physics, Mathematics, Biology, English.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Campus Visual frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#111726] border border-white/15 shadow-2xl aspect-[16/9] group">
              <img
                src={schoolUrl}
                alt="Christy Caleb International School Campus Architecture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Tag & Replace button */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <div className="font-mono-accent text-[11px] text-slate-300">
                  Campus Environment
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onOpenUpload('school', 'School Campus Photograph', schoolUrl)
                  }
                  className="flex items-center gap-1.5 bg-black/60 hover:bg-black/90 text-slate-200 hover:text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10 transition-colors cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Replace Photo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
