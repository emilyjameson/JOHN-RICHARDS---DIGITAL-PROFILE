import React, { useState } from 'react';
import { Sparkles, QrCode, Check, Copy, RotateCw, ShieldCheck } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface DigitalCardProps {
  portraitUrl: string;
}

export const DigitalCard: React.FC<DigitalCardProps> = ({ portraitUrl }) => {
  const [copied, setCopied] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="digital-card" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl text-left mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono-accent">
            Identification
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mt-2 text-balance">
            DIGITAL PROFILE CARD
          </h2>
          <p className="text-base text-slate-400 mt-3 font-normal">
            A verified digital identity representation of John Richards at Christy Caleb International School.
          </p>
        </div>

        {/* The Card Presentation Area */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xl perspective-1000">
            {/* The Physical-feeling Card */}
            <div
              className={`w-full rounded-3xl p-7 sm:p-9 relative overflow-hidden transition-all duration-700 transform border shadow-2xl ${
                isFlipped
                  ? 'bg-gradient-to-br from-[#101728] via-[#0b101c] to-[#080c16] border-violet-500/30 shadow-violet-950/20'
                  : 'bg-gradient-to-br from-[#12192b] via-[#0d1322] to-[#090d16] border-white/15 shadow-black/80'
              }`}
            >
              {/* Subtle holographic diagonal sheen line */}
              <div className="absolute -top-32 -left-32 w-72 h-72 bg-gradient-to-br from-blue-400/10 via-violet-400/5 to-transparent rounded-full blur-2xl pointer-events-none" />

              {!isFlipped ? (
                /* FRONT OF CARD */
                <div className="space-y-6 text-left relative z-10">
                  {/* Card Header Strip */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-xs font-mono-accent font-bold tracking-widest text-slate-300 uppercase">
                        STUDENT IDENTITY CARD
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-mono-accent text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3" />
                      <span>OFFICIAL DIGITAL PASS</span>
                    </div>
                  </div>

                  {/* Identity Core */}
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-black/40 border border-white/15 shrink-0 shadow-md">
                      <img
                        src={portraitUrl}
                        alt="John Richards portrait avatar"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight">
                        {PROFILE_INFO.name}
                      </h3>
                      <p className="text-sm font-semibold text-blue-400 font-mono-accent">
                        {PROFILE_INFO.currentRole}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium">
                        {PROFILE_INFO.school}
                      </p>
                    </div>
                  </div>

                  {/* Academic Interests & Ambition breakdown */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-3">
                    <div>
                      <span className="text-[11px] font-mono-accent text-slate-400 uppercase tracking-wider">
                        Key Subjects:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 mt-0.5 font-medium">
                        Physics · Mathematics · Biology · English
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono-accent text-slate-400 uppercase tracking-wider">
                        Future Dream:
                      </span>
                      <p className="text-xs sm:text-sm text-violet-300 mt-0.5 font-semibold">
                        Entrepreneurship · Building Wealth & Sustainable Ventures
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom: QR Code + Decorative Barcode */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white p-1 rounded-lg flex items-center justify-center">
                        <QrCode className="w-full h-full text-slate-900" />
                      </div>
                      <div className="text-[10px] font-mono-accent text-slate-400 leading-tight">
                        <span>CARD ID: JR-CCIS-2026</span>
                        <br />
                        <span className="text-slate-500">DIGITAL PROFILE TOKEN</span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono-accent text-slate-400">
                      CLASS OF 2026
                    </span>
                  </div>
                </div>
              ) : (
                /* BACK OF CARD */
                <div className="space-y-6 text-left relative z-10 py-2">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-mono-accent font-bold tracking-widest text-violet-400 uppercase">
                      STUDENT CHARTER & VALUES
                    </span>
                    <span className="text-[11px] font-mono-accent text-slate-400">
                      CARD REVERSE
                    </span>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      &ldquo;Education is the foundation for turning raw ambition into lasting reality. By mastering sciences, developing rigorous logic, and understanding economic value, we build the future today.&rdquo;
                    </p>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                      <p className="font-semibold text-white font-display text-sm">
                        Christy Caleb International School Charter
                      </p>
                      <p className="text-xs text-slate-400">
                        Integrity · Curiosity · Academic Excellence · Forward Ambition
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-accent text-slate-400">
                    <span>AUTHORIZED DIGITAL PROFILE</span>
                    <span>ACTIVE RECORD</span>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Action Controls */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                type="button"
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>{isFlipped ? 'Show Front' : 'Flip Card'}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Profile Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
