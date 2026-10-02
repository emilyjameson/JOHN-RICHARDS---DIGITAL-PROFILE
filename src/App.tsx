import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Subjects } from './components/Subjects';
import { Hobbies } from './components/Hobbies';
import { FoodSection } from './components/FoodSection';
import { CareerDream } from './components/CareerDream';
import { SchoolSection } from './components/SchoolSection';
import { StatsNumbers } from './components/StatsNumbers';
import { DigitalCard } from './components/DigitalCard';
import { Gallery } from './components/Gallery';
import { FunFacts } from './components/FunFacts';
import { Footer } from './components/Footer';
import { ImageUploadModal } from './components/ImageUploadModal';
import { INITIAL_IMAGES, INITIAL_GALLERY_ITEMS } from './data/profileData';
import { GalleryItem, PhotoReplacerState } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Custom photo states with localStorage fallback for persistent user uploads
  const [portraitUrl, setPortraitUrl] = useState<string>(() => {
    return localStorage.getItem('john_portrait_url') || INITIAL_IMAGES.portrait;
  });

  const [foodUrl, setFoodUrl] = useState<string>(() => {
    return localStorage.getItem('john_food_url') || INITIAL_IMAGES.food;
  });

  const [schoolUrl, setSchoolUrl] = useState<string>(() => {
    return localStorage.getItem('john_school_url') || INITIAL_IMAGES.school;
  });

  const [workspaceUrl, setWorkspaceUrl] = useState<string>(() => {
    return localStorage.getItem('john_workspace_url') || INITIAL_IMAGES.workspace;
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('john_gallery_items');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_GALLERY_ITEMS;
      }
    }
    return INITIAL_GALLERY_ITEMS;
  });

  // Photo replacer modal state
  const [uploadModal, setUploadModal] = useState<PhotoReplacerState>({
    isOpen: false,
    targetId: '',
    targetTitle: '',
    currentUrl: '',
  });

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const sectionIds = ['home', 'about', 'subjects', 'hobbies', 'food', 'dream', 'school', 'gallery', 'digital-card'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenUpload = (targetId: string, title: string, currentUrl: string) => {
    setUploadModal({
      isOpen: true,
      targetId,
      targetTitle: title,
      currentUrl,
    });
  };

  const handleSavePhoto = (newUrl: string) => {
    const target = uploadModal.targetId;

    if (target === 'portrait') {
      setPortraitUrl(newUrl);
      localStorage.setItem('john_portrait_url', newUrl);
      // also update portrait in gallery if present
      setGalleryItems((prev) =>
        prev.map((item) => (item.id === 'item-portrait' ? { ...item, url: newUrl } : item))
      );
    } else if (target === 'food') {
      setFoodUrl(newUrl);
      localStorage.setItem('john_food_url', newUrl);
      setGalleryItems((prev) =>
        prev.map((item) => (item.id === 'item-food' ? { ...item, url: newUrl } : item))
      );
    } else if (target === 'school') {
      setSchoolUrl(newUrl);
      localStorage.setItem('john_school_url', newUrl);
      setGalleryItems((prev) =>
        prev.map((item) => (item.id === 'item-school' ? { ...item, url: newUrl } : item))
      );
    } else if (target === 'workspace') {
      setWorkspaceUrl(newUrl);
      localStorage.setItem('john_workspace_url', newUrl);
      setGalleryItems((prev) =>
        prev.map((item) => (item.id === 'item-workspace' ? { ...item, url: newUrl } : item))
      );
    } else {
      // Gallery item
      setGalleryItems((prev) => {
        const updated = prev.map((item) =>
          item.id === target ? { ...item, url: newUrl } : item
        );
        localStorage.setItem('john_gallery_items', JSON.stringify(updated));
        return updated;
      });
    }
  };

  const getDefaultUrlForTarget = (targetId: string): string => {
    if (targetId === 'portrait') return INITIAL_IMAGES.portrait;
    if (targetId === 'food') return INITIAL_IMAGES.food;
    if (targetId === 'school') return INITIAL_IMAGES.school;
    if (targetId === 'workspace') return INITIAL_IMAGES.workspace;
    const item = INITIAL_GALLERY_ITEMS.find((g) => g.id === targetId);
    return item ? item.url : INITIAL_IMAGES.portrait;
  };

  return (
    <div className="min-h-screen bg-[#090b10] text-[#e2e8f0] selection:bg-blue-600/30 selection:text-white font-sans">
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          portraitUrl={portraitUrl}
          onOpenUpload={handleOpenUpload}
        />

        {/* 2. Personal Introduction */}
        <About
          workspaceUrl={workspaceUrl}
          onOpenUpload={handleOpenUpload}
        />

        {/* 3. Favorite Subjects */}
        <Subjects />

        {/* 4. Personality / Hobbies */}
        <Hobbies />

        {/* 5. Favorite Food */}
        <FoodSection
          foodUrl={foodUrl}
          onOpenUpload={handleOpenUpload}
        />

        {/* 6. Career Dream */}
        <CareerDream />

        {/* 7. School Section */}
        <SchoolSection
          schoolUrl={schoolUrl}
          onOpenUpload={handleOpenUpload}
        />

        {/* 8. John in Numbers */}
        <StatsNumbers />

        {/* 9. Digital Profile Card */}
        <DigitalCard portraitUrl={portraitUrl} />

        {/* 10. Photo / Gallery Section */}
        <Gallery
          items={galleryItems}
          onOpenUpload={handleOpenUpload}
        />

        {/* 11. Fun Facts */}
        <FunFacts />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Photo Upload / Replacement Modal */}
      <ImageUploadModal
        isOpen={uploadModal.isOpen}
        onClose={() => setUploadModal((prev) => ({ ...prev, isOpen: false }))}
        title={uploadModal.targetTitle}
        currentUrl={uploadModal.currentUrl}
        defaultUrl={getDefaultUrlForTarget(uploadModal.targetId)}
        onSave={handleSavePhoto}
      />
    </div>
  );
}
