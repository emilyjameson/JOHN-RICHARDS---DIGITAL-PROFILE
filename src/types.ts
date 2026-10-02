export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspect: string;
  url: string;
  description: string;
}

export interface SubjectItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Atom' | 'Sigma' | 'Dna' | 'BookOpen';
  details: string;
  keyTopics: string[];
}

export interface HobbyItem {
  id: string;
  title: string;
  tagline: string;
  quote: string;
  flavorText: string;
  seriousnessLevel: string;
  iconName: 'Moon' | 'Utensils' | 'TrendingUp' | 'Flame';
}

export interface PhotoReplacerState {
  isOpen: boolean;
  targetId: string;
  targetTitle: string;
  currentUrl: string;
}
