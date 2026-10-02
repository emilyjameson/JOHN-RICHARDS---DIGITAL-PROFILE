import React from 'react';
import { Camera, Compass } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface AboutProps {
  workspaceUrl: string;
  onOpenUpload: (targetId: string, title: string, currentUrl: string) => void;
}

export const About: React.FC<AboutProps> = ({ workspaceUrl, onOpenUpload }) => {
  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono-accent">
                Personal Introduction
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display text-balance">
                A LITTLE ABOUT ME
              </h2>
            </div>

            <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {PROFILE_INFO.aboutParagraphs.map((para, index) => (
                <p key={index} className="text-slate-300">
                  {para}
                </p>
              ))}
            </div>

            {/* Profile Information Block (Clean, unboxed, high-contrast) */}
            <div className="pt-6 border-t border-white/[0.08]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-accent mb-4">
                Profile Directory
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <p className="text-xs text-slate-400 font-mono-accent uppercase tracking-wider">
                    Name
                  </p>
                  <p className="text-base font-semibold text-white mt-1">
                    {PROFILE_INFO.name}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <p className="text-xs text-slate-400 font-mono-accent uppercase tracking-wider">
                    School
                  </p>
                  <p className="text-base font-semibold text-white mt-1">
                    {PROFILE_INFO.school}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <p className="text-xs text-slate-400 font-mono-accent uppercase tracking-wider">
                    Current Role
                  </p>
                  <p className="text-base font-semibold text-white mt-1">
                    {PROFILE_INFO.currentRole}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <p className="text-xs text-slate-400 font-mono-accent uppercase tracking-wider">
                    Big Goal
                  </p>
                  <p className="text-base font-semibold text-blue-400 mt-1">
                    {PROFILE_INFO.bigGoal}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual editorial anchor */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#111726] border border-white/15 shadow-xl aspect-[4/3] group">
              <img
                src={workspaceUrl}
                alt="John Richards student study workspace and physics notes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-blue-400" />
                  <span className="font-mono-accent text-[11px] text-slate-300">
                    STEM & Thought Studio
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onOpenUpload('workspace', 'Study Workspace Visual', workspaceUrl)
                  }
                  className="flex items-center gap-1.5 bg-black/60 hover:bg-black/90 text-slate-300 hover:text-white px-2.5 py-1 rounded-md text-[11px] border border-white/10 transition-colors cursor-pointer"
                >
                  <Camera className="w-3 h-3" />
                  <span>Replace</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-blue-200/90 leading-relaxed">
              <span className="font-semibold text-blue-300">Perspective:</span> &ldquo;I believe curiosity in high school is the best investment. You learn the laws of nature in Physics, the rigor of numbers in Math, the human condition in English, and how life organizes itself in Biology.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
