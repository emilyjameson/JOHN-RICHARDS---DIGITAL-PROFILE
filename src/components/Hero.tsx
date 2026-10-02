import React from 'react';
import { ArrowDown, Camera, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface HeroProps {
  portraitUrl: string;
  onOpenUpload: (targetId: string, title: string, currentUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ portraitUrl, onOpenUpload }) => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Subtle atmospheric backdrop gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE: Typography & Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Eyebrow text - unboxed editorial text with bullets */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-blue-400 font-mono-accent uppercase">
              <span>Student</span>
              <span className="text-slate-600">·</span>
              <span>Dreamer</span>
              <span className="text-slate-600">·</span>
              <span>Future Entrepreneur</span>
            </div>

            {/* Large headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white font-display leading-[0.95] text-balance">
              JOHN
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                RICHARDS
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-medium text-slate-200 font-display">
              {PROFILE_INFO.tagline}
            </p>

            {/* Intro Prose */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl font-normal">
              {PROFILE_INFO.bioIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => handleScroll('about')}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore My Profile</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll('dream')}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>My Big Dream</span>
              </button>
            </div>

            {/* Unboxed Metadata Strip */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono-accent">
              <div>
                <span className="text-slate-500 uppercase">Institution:</span>{' '}
                <span className="text-slate-200">Christy Caleb Int. School</span>
              </div>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <div>
                <span className="text-slate-500 uppercase">Focus:</span>{' '}
                <span className="text-slate-200">STEM & Business Foundations</span>
              </div>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <div>
                <span className="text-slate-500 uppercase">Class of:</span>{' '}
                <span className="text-slate-200">2026</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Large Portrait Area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Floating metadata labels */}
              <div className="absolute -top-3 left-6 z-20 bg-[#0e131f]/95 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg shadow-lg text-[11px] font-mono-accent font-semibold text-slate-200 tracking-wider">
                PHYSICS
              </div>

              <div className="absolute top-1/4 -right-4 z-20 bg-[#0e131f]/95 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg shadow-lg text-[11px] font-mono-accent font-semibold text-blue-300 tracking-wider">
                MATH
              </div>

              <div className="absolute bottom-16 -left-4 z-20 bg-[#0e131f]/95 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg shadow-lg text-[11px] font-mono-accent font-semibold text-violet-300 tracking-wider">
                BUSINESS
              </div>

              <div className="absolute -bottom-3 right-8 z-20 bg-[#0e131f]/95 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg shadow-lg text-[11px] font-mono-accent font-semibold text-slate-300 tracking-wider">
                2026
              </div>

              {/* Main Portrait Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-[#111726] border border-white/15 shadow-2xl shadow-black/80 aspect-[3/4] group">
                <img
                  src={portraitUrl}
                  alt="John Richards - Student at Christy Caleb International School"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle gradient scrim at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10]/80 via-transparent to-transparent pointer-events-none" />

                {/* Photo replacement button */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                  <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 border border-white/10">
                    Editorial Portrait
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onOpenUpload('portrait', "John Richards' Profile Portrait", portraitUrl)
                    }
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md transition-colors cursor-pointer"
                    title="Upload or change John's photo"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Change Photo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
