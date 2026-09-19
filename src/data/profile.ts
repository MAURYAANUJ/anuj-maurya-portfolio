import type { NavItem, Profile } from '../types';

/**
 * Central profile data. Update this file to change name, role, contact, and SEO.
 *
 * Remaining placeholders:
 * - [LINKEDIN_URL]
 */
export const profile: Profile = {
  name: 'Anuj Maurya',
  firstName: 'Anuj',
  lastName: 'Maurya',
  role: 'Flutter Developer',
  experience: '4+ Years',
  company: 'WDIPL',
  location: 'Thane West',
  phone: '+91 7021431686',
  email: 'mauryaanuj21958@gmail.com',
  emailIsPlaceholder: false,
  photo: '/assets/profile/anuj-maurya.jpg',
  resumePath: '/assets/resume/Anuj_Maurya_Resume.pdf',
  education: [
    {
      title: 'Bachelors in Information Technology',
      detail: 'Mumbai University, 2024 · 7.25 CGPA',
    },
    {
      title: 'HSC',
      detail: 'CBSE Board, 2021 · 65.60%',
    },
    {
      title: 'SSC',
      detail: 'Maharashtra Board, 2019 · 45.60%',
    },
  ],
  seo: {
    title: 'Anuj Maurya | Flutter Developer',
    description:
      'Portfolio of Anuj Maurya, a Flutter Developer specializing in Flutter, Dart, Firebase, APIs, state management, real-time tracking and mobile application development.',
    url: 'https://mauryaanuj.github.io/anuj-maurya-portfolio/',
  },
  intro:
    'I build scalable, high-performance Flutter apps for Android and iOS — from civic tools and HR platforms to clinic software and consumer products, shipped to Play Store and App Store.',
  about: [
    'I am a Flutter Developer with 4+ years of hands-on experience in Flutter and Dart, based in Thane West.',
    'I work across requirement analysis, UI implementation, application architecture, REST API integration, Firebase, and state management with GetX, BLoC, and setState.',
    'I have shipped production apps for Android and iOS from a single Flutter codebase, including live tracking, Google Maps, notifications, testing, debugging, and store releases.',
    'Recent work includes consumer, civic, HR, and healthcare apps — Minglar, Nashik Streetlight Complaint, InfowanHR, ECMS Envision, and Cheers to the Season.',
  ],
  social: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/MAURYAANUJ',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: '[LINKEDIN_URL]',
    },
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:mauryaanuj21958@gmail.com',
    },
    {
      id: 'phone',
      label: 'Phone',
      href: 'tel:+917021431686',
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
  'Google Maps',
  'SOS',
  'Play Store',
  'App Store',
  'Live Tracking',
  'Android',
  'iOS',
];

export const isPlaceholder = (value: string) =>
  value.includes('[') && value.includes(']');
