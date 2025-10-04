export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
  summary: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  relevant_coursework?: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  role?: string;
  teamSize?: number;
  impact?: string;
  achievements?: string[];
  url?: string;
  github?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  url?: string;
}

export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  location: string;
  date: string;
  duration: string;
  teamSize: number;
  role: string;
  projectTitle: string;
  projectDescription: string;
  technologies: string[];
  achievements: string[];
  prize: string;
  repositoryUrl: string;
  demoUrl: string;
  challenges: string;
  learnings: string;
}

export interface Internship {
  id: string;
  company: string;
  position: string;
  department: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrentRole: boolean;
  employmentType: string;
  workMode: string;
  supervisor: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skillsGained: string[];
  technologies: string[];
  projects: string[];
  mentorship: string;
  networking: string;
  recommendation: string;
  stipend: string;
  companySize: string;
  industry: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  timeline: string;
  status: string;
  milestones: Milestone[];
  skills: string[];
  resources: string[];
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  progress: number;
}

export interface CareerPlan {
  currentRole: string;
  targetRole: string;
  industry: string;
  timeline: string;
  strengths: string[];
  areasForImprovement: string[];
  networkingGoals: string[];
  mentorship: string;
  notes: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  organization?: string;
  category: 'academic' | 'professional' | 'personal' | 'competition' | 'volunteer' | 'leadership' | 'innovation' | 'community' | 'technical' | 'publication' | 'awards';
  impact?: string;
  recognition?: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: 'native' | 'fluent' | 'advanced' | 'intermediate' | 'beginner';
  certification?: string;
  yearsOfExperience?: number;
}

export interface RoadmapData {
  goals: Goal[];
  careerPlan: CareerPlan;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  hackathons: Hackathon[];
  internships: Internship[];
  achievements: Achievement[];
  languages: Language[];
  roadmap?: RoadmapData;
  selectedJobRole: string;
  isPremium: boolean;
}

export interface FormStep {
  id: number;
  title: string;
  component: string;
  isCompleted: boolean;
  isOptional: boolean;
}

export interface JobRole {
  id: string;
  title: string;
  description: string;
  skills: string[];
  roadmap: RoadmapStep[];
}

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  resources: Resource[];
  isCompleted: boolean;
}

export interface Resource {
  title: string;
  type: 'course' | 'certification' | 'project' | 'book' | 'tutorial';
  url: string;
  isPremium: boolean;
}

export interface SuggestionCard {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  url?: string;
  isPremium?: boolean;
}

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

// Pricing System Types
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  period: 'one-time' | 'monthly' | 'yearly';
  category: 'free' | 'template' | 'support' | 'bundle';
  features: string[];
  buttonText: string;
  popular?: boolean;
  discount?: number;
}

export interface PremiumTemplate {
  id: string;
  name: string;
  thumbnail: string;
  category: 'modern' | 'classic' | 'creative' | 'minimal' | 'executive' | 'tech';
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  isPremium: boolean;
  isPopular?: boolean;
  previewImages?: string[];
}

export interface SupportFeature {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: number;
  originalPrice?: number;
  category: 'courses' | 'internships' | 'hackathons';
  redirectUrl: string;
  benefits: string[];
  integrationFeatures: string[];
  isPopular?: boolean;
}

export interface BundlePackage {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  features: SupportFeature[];
  additionalBenefits: string[];
  isRecommended?: boolean;
}

export interface PaymentItem {
  id: string;
  type: 'template' | 'support' | 'bundle';
  name: string;
  price: number;
  description?: string;
}