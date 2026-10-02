import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Subjects', href: '#subjects' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Dream', href: '#dream' },
  { name: 'School', href: '#school' },
  { name: 'Gallery', href: '#gallery' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#090b10]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-lg sm:text-xl font-bold tracking-tight text-white font-display hover:text-blue-400 transition-colors"
          >
            JOHN RICHARDS
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors py-1 relative hover:text-white ${
                    isActive ? 'text-blue-400 font-semibold' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary action button + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#digital-card"
              onClick={(e) => handleNavClick(e, '#digital-card')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/20 transition-all whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Digital Profile
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden bg-black/85 backdrop-blur-md pt-20 px-6 flex flex-col justify-between pb-8 animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="space-y-2 mt-4" onClick={(e) => e.stopPropagation()}>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-mono-accent mb-4">
              Navigation Menu
            </p>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block py-3 px-3 text-lg font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600/15 text-blue-400 font-semibold'
                      : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
            <a
              href="#digital-card"
              onClick={(e) => handleNavClick(e, '#digital-card')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              View Digital Profile Card
            </a>
            <p className="text-center text-xs text-slate-500 mt-3 font-mono-accent">
              Christy Caleb International School · 2026
            </p>
          </div>
        </div>
      )}
    </>
  );
};
