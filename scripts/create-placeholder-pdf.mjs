import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const lines = [
  ['Anuj K. Maurya', 22],
  ['Flutter Developer', 13],
  ['Thane West  |  +91 7021431686  |  mauryaanuj21958@gmail.com', 11],
  ['', 12],
  ['OBJECTIVE', 12],
  ['To pursue a challenging career in a progressive environment where learning, innovation', 11],
  ['and creativity are encouraged, and skills can contribute to organizational growth.', 11],
  ['', 12],
  ['EXECUTIVE SUMMARY', 12],
  ['- 4+ years hands-on experience on Flutter and Dart.', 11],
  ['- Good understanding of developing and debugging apps with attractive UI.', 11],
  ['- Energetic, self-motivated team member with hands-on programming experience.', 11],
  ['', 12],
  ['SKILL SET', 12],
  ['Programming Languages: Dart, C#, JavaScript', 11],
  ['Frameworks & Technologies: Flutter, ASP.NET', 11],
  ['State Management: setState, GetX, BLoC', 11],
  ['API Integration: REST APIs, Firebase', 11],
  ['', 12],
  ['ORGANIZATIONAL EXPERIENCE', 12],
  ['Software Engineer  |  WDIPL - Mobile App Development Company  |  April 2025 - Present', 11],
  ['Malad (W), Mumbai. Project: Minglar. Flutter, Dart, REST API. Analysis, design,', 11],
  ['development and deployment. Discover local activities, events, and like-minded people.', 11],
  ['', 10],
  ["Software Engineer  |  Integrity Software's LLP  |  January 2022 - April 2025", 11],
  ['Mira Road, Mumbai. Streetlight Complaint (Tata Project). Flutter, Dart, REST API,', 11],
  ['Xcode, Google Map. Citizens report lighting issues to electricity officials.', 11],
  ['Developed and maintained four Android/iOS apps from a single Flutter codebase.', 11],
  ['', 12],
  ['SELECTED APPS', 12],
  ['- Nashik Streetlight Complaint  (Play Store + App Store)', 11],
  ['- InfowanHR  (Play Store + App Store)', 11],
  ['- ECMS - Envision  (Play Store)', 11],
  ['- Cheers to the Season  (Play Store + App Store)', 11],
  ['- Minglar', 11],
  ['', 12],
  ['ACADEMIA', 12],
  ['Bachelors in Information Technology, Mumbai University, 2024, 7.25 CGPA', 11],
  ['HSC, CBSE Board, 2021, 65.60%', 11],
  ['SSC, Maharashtra Board, 2019, 45.60%', 11],
];

const escapePdf = (value) => value.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

let y = 760;
const commands = [];
for (const [text, size] of lines) {
  if (text) {
    commands.push(`BT /F1 ${size} Tf 48 ${y} Td (${escapePdf(text)}) Tj ET`);
  }
  y -= size === 22 ? 26 : size === 13 ? 18 : 14;
}

const stream = `${commands.join('\n')}\n`;
const objects = [
  '1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj',
  '2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj',
  '3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj',
  `4 0 obj << /Length ${Buffer.byteLength(stream)} >> stream\n${stream}endstream endobj`,
  '5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj',
];

let body = '%PDF-1.4\n';
const offsets = [0];
for (const object of objects) {
  offsets.push(Buffer.byteLength(body));
  body += `${object}\n`;
}
const xrefStart = Buffer.byteLength(body);
let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i < offsets.length; i += 1) {
  xref += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
}
const pdf = `${body}${xref}trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

const target = resolve(dirname(fileURLToPath(import.meta.url)), '../public/assets/resume/Anuj_Maurya_Resume.pdf');
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, pdf);
console.log(`Wrote ${target} (${pdf.length} bytes)`);
