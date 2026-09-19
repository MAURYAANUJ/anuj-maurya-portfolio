# Anuj Maurya Portfolio

Personal portfolio website for **Anuj Maurya**, Flutter Developer.

This is a custom React application (not WordPress). It is designed for CV/resume sharing with recruiters and hiring teams.

Live site: https://mauryaanuj.github.io/anuj-maurya-portfolio/

## Overview

The site is a single-page portfolio with:

- Cinematic intro inspired by editorial sites such as [United Carriers](https://unitedcarriers.com/)
- Hero, About, Skills, Experience, Projects, Technical Expertise, Resume, and Contact
- Recruiter-friendly content, placeholder-safe project cards, and update-friendly data files

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide icons
- GitHub Pages

## Installation

```bash
git clone https://github.com/MAURYAANUJ/anuj-maurya-portfolio.git
cd anuj-maurya-portfolio
npm install
```

## Development

```bash
npm run dev
```

The local app runs at `http://localhost:5173/anuj-maurya-portfolio/`.

## Build

```bash
npm run build
npm run preview
```

Production files are written to `dist/`.

## Deployment

### GitHub Pages (default)

1. Push this repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

The public URL will look like:

`https://mauryaanuj.github.io/anuj-maurya-portfolio/`

### Vercel (optional)

If you prefer Vercel:

1. Import the GitHub repository in Vercel.
2. Set the environment variable `VITE_BASE_PATH` to `/`.
3. Use the Vite preset. Framework: Vite. Build command: `npm run build`. Output: `dist`.

## Updating content later

All copy lives in `src/data/`:

| File | What to edit |
| --- | --- |
| `src/data/profile.ts` | Name, role, intro, about text, email, GitHub, LinkedIn, SEO |
| `src/data/projects.ts` | Project names, descriptions, technologies, features, links |
| `src/data/skills.ts` | Skill categories |
| `src/data/experience.ts` | Company, role, dates, responsibilities |
| `src/data/expertise.ts` | Technical expertise cards |

After editing, commit and push. GitHub Pages will rebuild automatically.

## Replacing the resume

1. Export your CV as a PDF.
2. Save it as `public/assets/resume/Anuj_Maurya_Resume.pdf`.
3. Keep that exact filename, or update `resumePath` in `src/data/profile.ts`.
4. Commit and push.

## Adding a new project

Open `src/data/projects.ts` and add an object:

```ts
{
  id: 'new-project',
  name: 'Project Name',
  description: 'Short description',
  technologies: ['Flutter', 'Dart'],
  features: ['Feature one', 'Feature two'],
  github: { label: 'GitHub', href: 'https://github.com/...' },
  live: { label: 'Live / App Store', href: 'https://...' },
}
```

If a link is not ready, keep a placeholder such as `[PROJECT_LINK]` and `isPlaceholder: true`.

## License

Private personal portfolio. All rights reserved.
