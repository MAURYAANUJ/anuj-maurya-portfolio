import { profile } from '../data/profile';
import { SocialLinks } from './SocialLinks';
import { isPlaceholderValue } from '../utils/paths';

export const Footer = () => {
  const year = 2026;

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-mist-400">
            © {year} {profile.name}
          </p>
          <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-mist-500">
            {profile.role}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-mist-400">
          {profile.social.map((item) =>
            isPlaceholderValue(item.href) ? (
              <span key={item.id} className="opacity-60">
                {item.label}
              </span>
            ) : (
              <a
                key={item.id}
                href={item.href}
                className="transition-colors hover:text-white"
                target={item.id === 'email' ? undefined : '_blank'}
                rel={item.id === 'email' ? undefined : 'noreferrer noopener'}
              >
                {item.label}
              </a>
            ),
          )}
        </div>
        <SocialLinks links={profile.social} />
      </div>
    </footer>
  );
};
