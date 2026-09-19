import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'nashik-streetlight',
    name: 'Nashik Streetlight Complaint',
    tag: 'Tata Project',
    description:
      'A Tata project for Nashik citizens to report streetlight issues directly to electricity officials, track updates, and get them resolved without waiting in a queue.',
    technologies: ['Flutter', 'Dart', 'REST API', 'Xcode', 'Google Map'],
    features: [
      'Report a streetlight issue in the locality',
      'OTP-based login with phone number',
      'Select nearby poles on the map',
      'Get complaint updates by SMS and app notification',
    ],
    playStore: {
      label: 'Play Store',
      href: 'https://play.google.com/store/apps/details?id=com.nasik.nasik_pole&hl=en',
    },
    appStore: {
      label: 'App Store',
      href: 'https://apps.apple.com/in/app/nashik-streetlight-complaint/id6689521789',
    },
  },
  {
    id: 'infowan-hr',
    name: 'InfowanHR',
    tag: 'HRMS',
    description:
      'Attendance and payroll HRMS app covering employee self-service, time and attendance, GPS location tracking, leave, payroll, and related HR workflows.',
    technologies: ['Flutter', 'Dart', 'REST API'],
    features: [
      'Employee database and self-service',
      'Payroll, leave, loan, and advance',
      'Time and attendance with GPS location tracking',
      'Training, timesheet, join and exit management',
    ],
    playStore: {
      label: 'Play Store',
      href: 'https://play.google.com/store/search?q=infowan+hr&c=apps&hl=en',
    },
    appStore: {
      label: 'App Store',
      href: 'https://apps.apple.com/in/app/infowanhr/id1501949376',
    },
  },
  {
    id: 'ecms-envision',
    name: 'ECMS - Envision',
    tag: 'Healthcare',
    description:
      'Cloud-based homeopathy clinic management app. Doctors can upload medical records from web or mobile, access them anytime, and keep patient data encrypted in the cloud.',
    technologies: ['Flutter', 'Dart', 'REST API'],
    features: [
      'Upload medical records from mobile',
      'Access clinic records any time of day',
      'Encrypted cloud storage for patient data',
    ],
    playStore: {
      label: 'Play Store',
      href: 'https://play.google.com/store/apps/details?id=com.envisionecms.envision_ecms_app&hl=en',
    },
  },
  {
    id: 'cheers-to-the-season',
    name: 'Cheers to the Season',
    tag: 'Consumer',
    description:
      'NYC food and drink deals app. Browse restaurants, bars, and cafés, unlock exclusive perks, and redeem in-app vouchers for offers like BOGO drinks and free coffee.',
    technologies: ['Flutter', 'Dart', 'REST API'],
    features: [
      'Browse NYC restaurants, bars, cafés, and bakeries',
      'Unlock exclusive drink and food deals',
      'Redeem in-app vouchers at participating spots',
    ],
    playStore: {
      label: 'Play Store',
      href: 'https://play.google.com/store/apps/details?id=com.cheerstotheseasoncustomer.app&hl=en',
    },
    appStore: {
      label: 'App Store',
      href: 'https://apps.apple.com/in/app/cheers-to-the-season/id6480517837',
    },
  },
  {
    id: 'minglar',
    name: 'Minglar',
    tag: 'Lifestyle',
    description:
      'An app that helps you discover local activities, events, and like-minded people, especially when you are traveling. Explore unique experiences, connect with communities, and plan spontaneous adventures.',
    technologies: ['Flutter', 'Dart', 'REST API'],
    features: [
      'Discover local activities and events',
      'Connect with communities and like-minded people',
      'Plan spontaneous adventures while traveling',
    ],
  },
];
