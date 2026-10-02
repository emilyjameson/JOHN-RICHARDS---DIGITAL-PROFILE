import React, { useState, useEffect } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryProps {
  items: GalleryItem[];
  onOpenUpload: (targetId: string, title: string, currentUrl: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ items, onOpenUpload }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Portrait', 'School', 'Projects', 'Favorite things'];

  const filteredItems =
    selectedFilter === 'All'
      ? items
      : items.filter((item) => item.category.toLowerCase() === selectedFilter.toLowerCase());

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const currentLightboxItem =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 sm:py-32 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono-accent">
              Visual Archive
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mt-1 text-balance">
              MY WORLD
            </h2>
            <p className="text-base text-slate-400 mt-2 font-normal">
              An editorial gallery of student life, study focus, favorite moments, and aspirations.
            </p>
          </div>

          {/* Interactive filter tabs (segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.03] border border-white/[0.08] rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredItems.map((item, index) => {
            // Asymmetric sizing based on index
            const colSpan =
              index % 4 === 0
                ? 'md:col-span-7'
                : index % 4 === 1
                ? 'md:col-span-5'
                : index % 4 === 2
                ? 'md:col-span-5'
                : 'md:col-span-7';

            return (
              <div
                key={item.id}
                className={`${colSpan} group relative rounded-2xl overflow-hidden bg-[#111726] border border-white/15 shadow-xl transition-all duration-300 hover:border-blue-500/40`}
              >
                <div className={`relative w-full ${item.aspect} min-h-[300px]`}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-mono-accent font-semibold px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-slate-300">
                      {item.category}
                    </span>
                  </div>

                  {/* Top Right Quick Actions */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => setActiveLightboxIndex(index)}
                      className="p-2 rounded-lg bg-black/60 backdrop-blur-md hover:bg-black/90 text-white border border-white/15 transition-colors cursor-pointer"
                      title="View full image"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenUpload(item.id, item.title, item.url)}
                      className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
                      title="Replace this photo"
                    >
                      <Camera className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Editorial Caption */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {currentLightboxItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setActiveLightboxIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top controls */}
              <div className="w-full flex items-center justify-between pb-3 text-white mb-2">
                <div className="text-left">
                  <span className="text-xs font-mono-accent text-blue-400 uppercase">
                    {currentLightboxItem.category}
                  </span>
                  <h3 id="lightbox-title" className="text-xl font-bold font-display">
                    {currentLightboxItem.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenUpload(
                        currentLightboxItem.id,
                        currentLightboxItem.title,
                        currentLightboxItem.url
                      )
                    }
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Replace Photo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveLightboxIndex(null)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Close lightbox"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Main Display Container */}
              <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-white/15 bg-black flex items-center justify-center">
                <img
                  src={currentLightboxItem.url}
                  alt={currentLightboxItem.title}
                  className="max-h-[70vh] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />

                {/* Left/Right navigation */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveLightboxIndex(
                          (prev) => (prev! - 1 + filteredItems.length) % filteredItems.length
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveLightboxIndex((prev) => (prev! + 1) % filteredItems.length)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Caption */}
              <p className="text-sm text-slate-300 mt-4 max-w-2xl text-center leading-relaxed">
                {currentLightboxItem.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
