export interface Project {
  id: string;
  title: string;
  subtitle: string;
  timeline: string;
  category: 'java' | 'ml' | 'fullstack';
  tags: string[];
  summary: string;
  problem: string;
  solution: string;
  contributions: string[];
  technologies: string[];
  decisions: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  sourceNote?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    details?: string;
    verifiedInResume: boolean;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  code: string;
  issueDate: string;
  badgeUrl?: string;
  pdfUrl?: string;
  verificationNote: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
  highlights: string[];
}
