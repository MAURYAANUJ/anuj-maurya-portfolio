export type SocialLink = {
  id: 'github' | 'linkedin' | 'email';
  label: string;
  href: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type SkillItem = {
  name: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  items: SkillItem[];
};

export type ExperienceRole = {
  id: string;
  company: string;
  position: string;
  duration: string;
  highlights: string[];
  responsibilities: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
  isPlaceholder?: boolean;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: ProjectLink;
  live?: ProjectLink;
};

export type ExpertiseItem = {
  id: string;
  title: string;
  summary: string;
};

export type Profile = {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  experience: string;
  company: string;
  locationPlaceholder?: string;
  email: string;
  emailIsPlaceholder: boolean;
  resumePath: string;
  seo: {
    title: string;
    description: string;
    url: string;
  };
  intro: string;
  about: string[];
  social: SocialLink[];
};
