import React from 'react';
import { Camera, Sparkles, UtensilsCrossed, Flame } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface FoodSectionProps {
  foodUrl: string;
  onOpenUpload: (targetId: string, title: string, currentUrl: string) => void;
}

export const FoodSection: React.FC<FoodSectionProps> = ({ foodUrl, onOpenUpload }) => {
  return (
    <section id="food" className="py-24 sm:py-32 relative border-t border-white/[0.06] overflow-hidden">
      {/* Background warm ambiance */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Container */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-[#121622] border border-white/15 shadow-2xl aspect-[4/3] group">
              <img
                src={foodUrl}
                alt="Fried rice with savory barbecue grilled chicken"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Floating culinary metadata */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono-accent text-amber-300 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Smoky BBQ / Grilled Finish</span>
              </div>

              {/* Bottom controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                <span className="font-mono-accent text-[11px] text-slate-300">
                  The Number One Dish
                </span>

                <button
                  type="button"
                  onClick={() =>
                    onOpenUpload('food', 'Favorite Food (Fried Rice & Chicken)', foodUrl)
                  }
                  className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-medium border border-white/15 transition-colors cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Replace Photo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono-accent">
                <UtensilsCrossed className="w-4 h-4" />
                <span>THE FOOD DEPARTMENT</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-display leading-[1.05] text-balance">
                {PROFILE_INFO.food.main}
              </h2>
            </div>

            <p className="text-xl sm:text-2xl font-semibold text-amber-400/90 font-display">
              {PROFILE_INFO.food.sub}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {PROFILE_INFO.food.description}
            </p>

            {/* Editorial specs */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              <div>
                <p className="text-xs uppercase text-slate-400 font-mono-accent tracking-wider">
                  Preparation
                </p>
                <p className="text-sm font-semibold text-white mt-1">
                  Seasoned Stir-Fried Rice
                </p>
              </div>

              <div>
                <p className="text-xs uppercase text-slate-400 font-mono-accent tracking-wider">
                  Protein Preference
                </p>
                <p className="text-sm font-semibold text-amber-300 mt-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Barbecue Glazed Chicken
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
