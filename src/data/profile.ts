import type { NavItem, Profile } from '../types';

/**
 * Central profile data. Update this file to change name, role, contact, and SEO.
 *
 * Placeholders (replace later):
 * - [EMAIL]
 * - [GITHUB_URL]
 * - [LINKEDIN_URL]
 * - [SITE_URL]
 */
export const profile: Profile = {
  name: 'Anuj Maurya',
  firstName: 'Anuj',
  lastName: 'Maurya',
  role: 'Flutter Developer',
  experience: '3+ Years',
  company: 'Integrity Software LLP',
  email: '[EMAIL]',
  emailIsPlaceholder: true,
  resumePath: '/assets/resume/Anuj_Maurya_Resume.pdf',
  seo: {
    title: 'Anuj Maurya | Flutter Developer',
    description:
      'Portfolio of Anuj Maurya, a Flutter Developer specializing in Flutter, Dart, Firebase, APIs, state management, real-time tracking and mobile application development.',
    url: '[SITE_URL]',
  },
  intro:
    'I build scalable, high-performance mobile applications using Flutter and Dart, with experience across APIs, Firebase, real-time tracking, notifications, and production deployment.',
  about: [
    'I am a Flutter Developer with 3+ years of experience building and maintaining mobile applications for Android and iOS.',
    'My work focuses on Flutter and Dart, including UI implementation, application architecture, REST API integration, Firebase, and state management.',
    'I have worked on real-time features such as live tracking, push notifications, and background processing, and I handle testing, debugging, performance optimization, and production releases for Play Store and App Store.',
    'I have also worked on applications for different business domains, including lawyers and doctors.',
  ],
  social: [
    {
      id: 'github',
      label: 'GitHub',
      href: '[GITHUB_URL]',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: '[LINKEDIN_URL]',
    },
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:[EMAIL]',
    },
  ],
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'expertise', label: 'Expertise', href: '#expertise' },
  { id: 'resume', label: 'Resume', href: '#resume' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const tickerItems = [
  'Flutter',
  'Dart',
  'GetX',
  'BLoC',
  'Firebase',
  'REST APIs',
  'Live Tracking',
  'Push Notifications',
  'Android',
  'iOS',
  'Play Store',
  'App Store',
];

export const isPlaceholder = (value: string) =>
  value.includes('[') && value.includes(']');
