
export interface Skill {
  name: string;
  level: number; // 1-5
  label: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud & DevOps' | 'Other';
}

export interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  description: string;
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  links: {
    live?: string;
    code?: string;
  };
}

export interface Engineer {
  id: string;
  name: string;
  role: string;
  roleCategory: 'Engineering' | 'Design' | 'Product' | 'Marketing' | 'Sales' | 'Creative';
  skills: string[];
  detailedSkills?: Skill[];
  experience: string;
  experienceLevel: 'Mid-Level' | 'Senior' | 'Lead';
  location: string;
  bio: string;
  rate: string;
  salaryRange: string;
  availability: 'Available' | 'Interviewing' | 'Placed';
  imageUrl: string;
  // New Profile Fields
  currentCompany?: string;
  timezone?: string;
  englishLevel?: string;
  workHistory?: WorkExperience[];
  projects?: Project[];
  education?: {
    degree: string;
    university: string;
    year: string;
  }[];
  certifications?: string[];
  communicationSample?: {
    question: string;
    answer: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type UserType = 'company' | 'engineer';

export enum View {
  HOME = 'HOME',
  ENGINEERS = 'ENGINEERS',
  APPLY = 'APPLY',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  ONBOARDING = 'ONBOARDING',
  PRICING = 'PRICING',
  HOW_IT_WORKS = 'HOW_IT_WORKS',
  VETTING = 'VETTING',
  TALENT_PROFILE = 'TALENT_PROFILE',
  FOR_COMPANIES = 'FOR_COMPANIES',
  FOR_TALENT = 'FOR_TALENT',
  REQUEST_INTRO = 'REQUEST_INTRO',
  ABOUT = 'ABOUT'
}
