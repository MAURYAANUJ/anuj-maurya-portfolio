export type SocialLink = {
  id: 'github' | 'linkedin' | 'email' | 'phone';
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
  location?: string;
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
  tag?: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: ProjectLink;
  playStore?: ProjectLink;
  appStore?: ProjectLink;
};

export type ExpertiseItem = {
  id: string;
  title: string;
  summary: string;
};

export type EducationItem = {
  title: string;
  detail: string;
};

export type Profile = {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  experience: string;
  company: string;
  location: string;
  phone: string;
  email: string;
  emailIsPlaceholder: boolean;
  photo: string;
  resumePath: string;
  education: EducationItem[];
  seo: {
    title: string;
    description: string;
    url: string;
  };
  intro: string;
  about: string[];
  social: SocialLink[];
};
