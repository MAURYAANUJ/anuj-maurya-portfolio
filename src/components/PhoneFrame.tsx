import type { ReactNode } from 'react';

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
  float?: boolean;
  label?: string;
};

/** Device bezel used to present the profile as a mobile developer portfolio. */
export const PhoneFrame = ({ children, className = '', float = false, label }: PhoneFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      {label ? (
        <span className="absolute -top-3 left-6 z-20 rounded-full border border-accent/40 bg-ink-950 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-accent">
          {label}
        </span>
      ) : null}
      <div className={`phone-shell ${float ? 'animate-floatPhone' : ''}`}>
        <div className="phone-island" aria-hidden="true" />
        <div className="phone-status" aria-hidden="true">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="block h-2 w-3 rounded-[1px] border border-white/80">
              <span className="block h-full w-2/3 bg-white/80" />
            </span>
          </span>
        </div>
        <div className="phone-screen">{children}</div>
        <div className="phone-home" aria-hidden="true" />
      </div>
    </div>
  );
};
