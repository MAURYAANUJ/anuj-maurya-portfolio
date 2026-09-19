import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const lines = [
  'Anuj Maurya',
  'Flutter Developer',
  '',
  'This is a placeholder resume file.',
  'Replace this PDF with your actual resume:',
  'public/assets/resume/Anuj_Maurya_Resume.pdf',
  '',
  'Experience: 3+ Years',
  'Company: Integrity Software LLP',
  '',
  'Keep the filename unchanged so the website download button continues to work.',
];

const escapePdf = (value) => value.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

const commands = lines
  .map((line, index) => `BT /F1 ${index === 0 ? 24 : 12} Tf 56 ${740 - index * 22} Td (${escapePdf(line)}) Tj ET`)
  .join('\n');

const stream = `${commands}\n`;
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
console.log(`Wrote ${target}`);
