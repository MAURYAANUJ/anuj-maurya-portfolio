import type { ReactNode } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types';
import { isPlaceholderValue } from '../utils/paths';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const descriptionPlaceholder = isPlaceholderValue(project.description);
  const featurePlaceholder = project.features.every((item) => isPlaceholderValue(item));

  return (
    <article className="flex h-full flex-col border border-white/10 bg-ink-800/80 p-6 transition-colors duration-200 hover:border-white/25">
      <p className="eyebrow">Project</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
      <p className="mt-3 text-sm leading-6 text-mist-400">
        {descriptionPlaceholder ? (
          <span className="placeholder-chip">{project.description}</span>
        ) : (
          project.description
        )}
      </p>

      <div className="mt-5">
        <p className="text-[11px] uppercase tracking-[0.16em] text-mist-500">Technologies</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist-100"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <p className="text-[11px] uppercase tracking-[0.16em] text-mist-500">Key features</p>
        {featurePlaceholder ? (
          <p className="mt-2">
            <span className="placeholder-chip">[PROJECT_FEATURES]</span>
          </p>
        ) : (
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-mist-400">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {project.github ? (
          <ProjectAction
            href={project.github.href}
            label={project.github.label}
            icon={<Github size={15} />}
            placeholder={project.github.isPlaceholder}
          />
        ) : null}
        {project.live ? (
          <ProjectAction
            href={project.live.href}
            label={project.live.label}
            icon={<ExternalLink size={15} />}
            placeholder={project.live.isPlaceholder}
          />
        ) : null}
      </div>
    </article>
  );
};

type ProjectActionProps = {
  href: string;
  label: string;
  icon: ReactNode;
  placeholder?: boolean;
};

const ProjectAction = ({ href, label, icon, placeholder }: ProjectActionProps) => {
  if (placeholder || isPlaceholderValue(href)) {
    return (
      <span
        className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/15 px-3 py-1.5 text-xs text-mist-500"
        title={`${label} pending`}
      >
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
      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-mist-100 transition-colors hover:border-white/40 hover:text-white"
    >
      {icon}
      {label}
    </a>
  );
};
