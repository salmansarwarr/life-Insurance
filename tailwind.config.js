/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{ts,tsx}',
  './src/components/**/*.{ts,tsx}',
  './src/app/**/*.{ts,tsx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    screens: {
      '2md': '900px',
      '2lg': '770px'
    },
  },
};
export const plugins = [];
