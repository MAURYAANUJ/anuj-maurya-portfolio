import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  external?: boolean;
  download?: boolean;
};

const styles = {
  primary:
    'bg-accent text-ink-950 hover:bg-accent-soft border-transparent',
  secondary:
    'bg-transparent text-white border-white/20 hover:border-white/50 hover:bg-white/5',
  ghost:
    'bg-transparent text-mist-400 border-transparent hover:text-white',
};

export const Button = ({
  href,
  variant = 'primary',
  children,
  className = '',
  external,
  download,
  ...props
}: ButtonProps) => {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};
