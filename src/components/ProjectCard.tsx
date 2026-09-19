import type { ReactNode } from 'react';
import type { Project } from '../types';
import { isPlaceholderValue } from '../utils/paths';
import { FlutterLogo } from './FlutterLogo';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800/80 transition-transform duration-200 hover:-translate-y-1 hover:border-accent/40">
      <div className="h-1.5 bg-gradient-to-r from-accent to-[#0175C2]" />
      <div className="flex h-full flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow">{project.tag ?? 'Project'}</p>
          <FlutterLogo size={18} />
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-6 text-mist-400">{project.description}</p>

        <div className="mt-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-mist-500">Technologies</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs text-accent-soft"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-mist-500">Key features</p>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-mist-400">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.playStore ? (
            <StoreButton href={project.playStore.href} label={project.playStore.label} icon={<PlayIcon />} />
          ) : null}
          {project.appStore ? (
            <StoreButton href={project.appStore.href} label={project.appStore.label} icon={<AppleIcon />} />
          ) : null}
        </div>
      </div>
    </article>
  );
};

const StoreButton = ({ href, label, icon }: { href: string; label: string; icon: ReactNode }) => {
  if (isPlaceholderValue(href)) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/15 px-3 py-1.5 text-xs text-mist-500">
        {icon}
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-mist-100 transition-colors hover:border-accent hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
};

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.6 2.7v18.6c0 .7.8 1.1 1.4.7l15.3-9.3c.6-.4.6-1.2 0-1.6L5 2c-.6-.4-1.4 0-1.4.7z" />
  </svg>
);

const AppleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.4 12.7c0-2.5 2-3.7 2.1-3.8-1.2-1.7-3-1.9-3.6-1.9-1.5-.2-3 .9-3.7.9s-2-.9-3.3-.8c-1.7.1-3.3 1-4.1 2.6-1.8 3.1-.5 7.6 1.3 10.1.9 1.2 1.9 2.6 3.3 2.5 1.3-.1 1.8-.8 3.4-.8s2 .8 3.4.8 2.3-1.3 3.1-2.5c1-1.4 1.4-2.8 1.4-2.8s-2.7-1-2.7-4.3zM14.7 5.3c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.3-.6 3-1.5z" />
  </svg>
);
