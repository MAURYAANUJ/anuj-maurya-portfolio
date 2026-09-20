import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, profile } from '../data/profile';
import { SocialLinks } from './SocialLinks';
import { FlutterLogo } from './FlutterLogo';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-white/10 bg-ink-950/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
          <FlutterLogo size={18} />
          {profile.name.replace(' ', '')}
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-[12px] uppercase tracking-[0.16em] text-mist-400 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink-950 lg:hidden">
          <nav className="section-shell flex flex-col gap-1 py-6" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="py-3 text-sm uppercase tracking-[0.16em] text-mist-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <SocialLinks links={profile.social} />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
};
