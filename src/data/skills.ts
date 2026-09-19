import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'mobile',
    title: 'Mobile Development',
    items: [
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Android' },
      { name: 'iOS' },
    ],
  },
  {
    id: 'state',
    title: 'State Management',
    items: [{ name: 'GetX' }, { name: 'BLoC' }, { name: 'Provider' }],
  },
  {
    id: 'backend',
    title: 'Backend / API',
    items: [
      { name: 'REST API' },
      { name: 'Firebase' },
      { name: 'Authentication' },
      { name: 'Push Notifications' },
      { name: 'FCM' },
    ],
  },
  {
    id: 'other',
    title: 'Other',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'JavaScript' },
      { name: 'C#' },
      { name: 'ASP.NET' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
];
