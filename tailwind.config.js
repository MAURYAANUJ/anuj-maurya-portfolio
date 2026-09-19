/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070708',
          900: '#0C0C0E',
          800: '#121215',
          700: '#1A1A1F',
          600: '#2A2A31',
        },
        mist: {
          50: '#F7F7F8',
          100: '#ECECEE',
          400: '#A1A1AA',
          500: '#8A8A93',
        },
        accent: {
          DEFAULT: '#13B9FD',
          soft: '#7AD7FF',
          muted: 'rgba(19, 185, 253, 0.14)',
          deep: '#0175C2',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Arial Narrow', 'sans-serif'],
        sans: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.18em',
        section: '0.22em',
      },
      boxShadow: {
        card: '0 18px 50px rgba(0, 0, 0, 0.28)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
        floatPhone: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        fadeUp: 'fadeUp 0.7s ease both',
        pulseDot: 'pulseDot 2.8s ease-in-out infinite',
        floatPhone: 'floatPhone 5.5s ease-in-out infinite',
        shine: 'shine 3.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
