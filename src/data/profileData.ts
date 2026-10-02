import portraitImg from '../assets/images/john_portrait_1790843366569.jpg';
import foodImg from '../assets/images/fried_rice_chicken_1790843379112.jpg';
import schoolImg from '../assets/images/modern_school_campus_1790843388766.jpg';
import workspaceImg from '../assets/images/student_workspace_1790843399475.jpg';
import { GalleryItem, HobbyItem, SubjectItem } from '../types';

export const INITIAL_IMAGES = {
  portrait: portraitImg,
  food: foodImg,
  school: schoolImg,
  workspace: workspaceImg,
};

export const PROFILE_INFO = {
  name: 'John Richards',
  school: 'Christy Caleb International School',
  currentRole: 'Student',
  bigGoal: 'Entrepreneurship & Building Wealth',
  tagline: 'Student. Curious mind. Big ambitions.',
  bioIntro:
    "Welcome to my digital profile — a little space where you can discover what I enjoy, what I'm learning, what makes me laugh, and what I hope to accomplish in the future.",
  aboutParagraphs: [
    "I'm John Richards, a student at Christy Caleb International School. I'm interested in understanding how things work, learning new things, having fun, and thinking about what I want my future to look like.",
    "I enjoy Physics, Mathematics, Biology, and English, but I'm also interested in business and the idea of building something of my own someday.",
    "I'm still learning and figuring things out, but I have big ambitions for where I want to go.",
  ],
  food: {
    main: 'FRIED RICE + CHICKEN',
    sub: 'Especially barbecue or grilled chicken.',
    description:
      'Nothing compares to seasoned golden fried rice paired with succulent, smoky barbecue or grilled chicken. It is simultaneously comfort food, weekend celebration fuel, and the undisputed pinnacle of the culinary department.',
  },
  dreamStatement: {
    lines: [
      'I WANT TO BUILD WEALTH.',
      'I WANT TO BUILD BUSINESSES.',
      'I WANT TO BUILD A LEGACY.',
    ],
    narrative1:
      'My dream is to become a successful entrepreneur and build businesses that create value and opportunities.',
    narrative2:
      "I don't simply want to have a job. I want to learn how businesses work, build something of my own, become financially independent, and create a successful future.",
    inspirationTitle: 'Inspired by African entrepreneurship',
    inspirationFigure: 'Aliko Dangote',
    inspirationNote:
      "Looking up to iconic African builders who started with determination and scaled transformative enterprises across manufacturing, commodities, and logistics. It's a reminder of what is possible through relentless focus.",
  },
  schoolQuote:
    "My school is an important part of my journey. It's where I learn, grow, meet people, develop skills and prepare for the future.",
};

export const SUBJECTS: SubjectItem[] = [
  {
    id: 'physics',
    title: 'Physics',
    description:
      'Understanding how the world works through forces, energy, motion and the laws of nature.',
    iconName: 'Atom',
    details:
      'Physics reveals the mechanics behind reality. From gravitational forces to electromagnetism and thermodynamics, it teaches the fundamental rules that govern our universe.',
    keyTopics: ['Mechanics & Motion', 'Energy Conservation', 'Waves & Sound', 'Electric Circuits'],
  },
  {
    id: 'mathematics',
    title: 'Mathematics',
    description: 'Numbers, patterns, logic and solving problems.',
    iconName: 'Sigma',
    details:
      'The universal language of logic. Solving complex equations builds the analytical discipline needed for both scientific inquiry and strategic business finance.',
    keyTopics: ['Algebraic Systems', 'Geometry & Trigonometry', 'Probability & Statistics', 'Calculus Foundations'],
  },
  {
    id: 'biology',
    title: 'Biology',
    description: 'Exploring living things, life and the systems that make them work.',
    iconName: 'Dna',
    details:
      'The intricacy of organic life: cellular processes, human physiology, and ecosystems. It highlights how natural systems achieve equilibrium and resilience.',
    keyTopics: ['Cellular Structure', 'Genetics & Heredity', 'Human Physiology', 'Ecology & Biodiversity'],
  },
  {
    id: 'english',
    title: 'English',
    description: 'Communication, writing, reading and expressing ideas.',
    iconName: 'BookOpen',
    details:
      'Clear communication is the ultimate lever. Being able to articulate ideas, analyze literature, and craft persuasive arguments is essential for any future leader.',
    keyTopics: ['Analytical Reading', 'Persuasive Writing', 'Rhetoric & Debate', 'Literary Expression'],
  },
];

export const HOBBIES: HobbyItem[] = [
  {
    id: 'sleeping',
    title: 'SLEEPING',
    tagline: 'A highly underrated activity.',
    quote: 'Recharging the brain after tackling physics problem sets and intense school days.',
    flavorText: 'Essential recovery mode. The foundation of sharp focus and optimal dreaming.',
    seriousnessLevel: 'Daily Priority',
    iconName: 'Moon',
  },
  {
    id: 'eating',
    title: 'EATING',
    tagline: 'Especially when fried rice and chicken are involved.',
    quote: 'The ultimate reward after a long day of classes and study sessions.',
    flavorText: 'Good food is non-negotiable. Barbecue chicken with steaming fried rice is the gold standard.',
    seriousnessLevel: 'Culinary Devotion',
    iconName: 'Utensils',
  },
  {
    id: 'making-money',
    title: 'MAKING MONEY',
    tagline: "Because the future doesn't build itself.",
    quote: 'Always thinking about economic value, commerce, and financial independence.',
    flavorText: 'Studying how markets function, spotting opportunities, and learning the principles of wealth creation early.',
    seriousnessLevel: 'Lifelong Ambition',
    iconName: 'TrendingUp',
  },
  {
    id: 'looking-for-trouble',
    title: 'LOOKING FOR TROUBLE',
    tagline: 'Probably not the most professional hobby... but honesty matters.',
    quote: 'Challenging assumptions, playful debates with friends, and questioning everything.',
    flavorText: 'Not actual misbehavior — just keeping life interesting, testing boundaries, and having a good laugh.',
    seriousnessLevel: 'Authentic Realism',
    iconName: 'Flame',
  },
];

export const CAREER_STEPS = [
  {
    step: '01',
    label: 'TODAY',
    role: 'Student',
    context: 'Christy Caleb International School',
    description: 'Focusing on academic foundations, curiosity, and disciplined habits in secondary school.',
  },
  {
    step: '02',
    label: 'LEARNING',
    role: 'Knowledge + Skills + Experience',
    context: 'STEM Mastery & Business Literacy',
    description: 'Developing sharp analytical thinking, financial literacy, problem-solving, and practical communication.',
  },
  {
    step: '03',
    label: 'FUTURE',
    role: 'Entrepreneur',
    context: 'Launching First Commercial Ventures',
    description: 'Transforming ideas into viable businesses, taking calculated risks, and building customer value.',
  },
  {
    step: '04',
    label: 'LONG-TERM',
    role: 'Building Businesses & Wealth',
    context: 'Enterprise Scale & Industrial Impact',
    description: 'Creating enduring organizations, generating employment, achieving financial independence, and leaving a legacy.',
  },
];

export const STATS = [
  {
    value: '04',
    label: 'Favorite subjects',
    description: 'Physics, Mathematics, Biology, English',
  },
  {
    value: '01',
    label: 'Big dream',
    description: 'Becoming a wealthy & impactful entrepreneur',
  },
  {
    value: '01',
    label: 'Favorite food combination',
    description: 'Fried rice with barbecue grilled chicken',
  },
  {
    value: '∞',
    label: 'Future possibilities',
    description: 'The journey is just beginning',
  },
];

export const FUN_FACTS = [
  { id: '1', fact: 'Loves Physics', context: 'Fascinated by mechanical forces and the underlying laws of the universe.' },
  { id: '2', fact: 'Enjoys Mathematics', context: 'Appreciates clean logic, pattern recognition, and solving tough problems.' },
  { id: '3', fact: 'Likes Biology', context: 'Curious about human anatomy, organ systems, and living organisms.' },
  { id: '4', fact: 'Enjoys English', context: 'Values articulate communication, sharp vocabulary, and persuasive writing.' },
  { id: '5', fact: 'Loves fried rice and chicken', context: 'Especially barbecue or grilled chicken with savory spices.' },
  { id: '6', fact: 'Enjoys sleeping', context: 'Considers quality sleep a top-tier restoration strategy.' },
  { id: '7', fact: 'Wants to become wealthy', context: 'Committed to achieving true financial independence through hard work.' },
  { id: '8', fact: 'Dreams of becoming an entrepreneur', context: 'Aims to build major enterprises inspired by visionary African builders.' },
];

export const INITIAL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'item-portrait',
    title: 'Official Portrait',
    category: 'Portrait',
    aspect: 'aspect-[3/4]',
    url: portraitImg,
    description: 'John Richards at Christy Caleb International School — focused, curious, and ambitious.',
  },
  {
    id: 'item-workspace',
    title: 'Study & Physics Notebooks',
    category: 'Projects',
    aspect: 'aspect-[4/3]',
    url: workspaceImg,
    description: 'Problem sets, mathematical derivations, and ideas mapped out on paper.',
  },
  {
    id: 'item-school',
    title: 'Christy Caleb Campus',
    category: 'School',
    aspect: 'aspect-[16/9]',
    url: schoolImg,
    description: 'The academic environment where ideas take shape and friendships are forged.',
  },
  {
    id: 'item-food',
    title: 'The Golden Fuel',
    category: 'Favorite things',
    aspect: 'aspect-[4/3]',
    url: foodImg,
    description: 'Fried rice paired with savory barbecue grilled chicken — the food department champion.',
  },
];
