import { useEffect } from 'react';
import { tickerItems, profile } from '../data/profile';
import { usePrefersReducedMotion } from '../hooks/useMotion';

type PageLoaderProps = {
  onComplete: () => void;
};

export const PageLoader = ({ onComplete }: PageLoaderProps) => {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) {
      onComplete();
      return;
    }
    const timeout = window.setTimeout(onComplete, 2800);
    return () => window.clearTimeout(timeout);
  }, [reduced, onComplete]);

  if (reduced) {
    return null;
  }

  return (
    <div
      className="loader-overlay loader-exit fixed inset-0 z-50 bg-ink-950"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && event.animationName === 'loaderExit') {
          onComplete();
        }
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="relative flex h-full items-center">
        <div className="dot-map absolute inset-0 opacity-70" />
        <div className="section-shell relative grid w-full items-center gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="loader-brand display-title text-4xl text-white sm:text-5xl">
              {profile.name.replace(' ', '').toUpperCase()}
            </p>
            <ul className="loader-list mt-8 space-y-1.5 text-[12px] uppercase tracking-[0.18em] text-mist-400">
              {tickerItems.slice(0, 8).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="relative hidden h-[42vh] md:block">
            <div className="absolute inset-0 rounded-full border border-white/5" />
            <div className="absolute inset-8 rounded-full border border-white/10" />
            <span className="absolute right-[22%] top-[28%] h-2 w-2 rounded-full bg-accent animate-pulseDot" />
            <span className="absolute bottom-[30%] right-[36%] h-2 w-2 rounded-full bg-accent animate-pulseDot" />
            <span className="absolute left-[40%] top-[42%] h-1.5 w-1.5 rounded-full bg-white/70 animate-pulseDot" />
          </div>
        </div>
      </div>
    </div>
  );
};
