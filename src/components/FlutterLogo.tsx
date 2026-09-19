type FlutterLogoProps = {
  className?: string;
  size?: number;
};

/** Official-style Flutter mark used as a brand accent. */
export const FlutterLogo = ({ className = '', size = 28 }: FlutterLogoProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14.314 0 2.3 12 6 15.7 21.684.013h-7.37z" fill="#13B9FD" />
      <path d="M14.328 11.072 7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.372z" fill="#0175C2" />
    </svg>
  );
};
