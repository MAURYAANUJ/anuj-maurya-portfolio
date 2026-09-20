import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { isPlaceholderValue } from '../utils/paths';
import type { SocialLink } from '../types';

const icons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  phone: Phone,
};

type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
};

export const SocialLinks = ({ links, className = '' }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map((link) => {
        const Icon = icons[link.id];
        const placeholder = isPlaceholderValue(link.href);
        const shared =
          'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist-400 transition-colors duration-200';

        if (placeholder) {
          return (
            <span
              key={link.id}
              className={`${shared} cursor-not-allowed opacity-60`}
              title={`${link.label} URL pending`}
              aria-label={`${link.label} link pending`}
            >
              <Icon size={16} />
            </span>
          );
        }

        const external = link.id === 'github' || link.id === 'linkedin';

        return (
          <a
            key={link.id}
            href={link.href}
            className={`${shared} hover:border-accent hover:text-accent`}
            aria-label={link.label}
            target={external ? '_blank' : undefined}
            rel={link.id === 'linkedin' ? 'noopener' : external ? 'noreferrer noopener' : undefined}
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
};
