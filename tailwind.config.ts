import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: 'calc(1112px + 1rem)',
        },
        padding: {
          DEFAULT: '1rem',
        },
      },
      borderRadius: {
        primary: '8px',
      },
      colors: {
        primary: '#1882FF',
        'primary-black': '#1A2B3D',
        'dark-deep': '#3E4957',
        'dark-light': '#5A6573',
      },
      gap: {
        primary: '6px',
      },
      fontSize: {
        'theme-13': ['13px', '18px'],
      },
    },
  },
  plugins: [],
};
export default config;
