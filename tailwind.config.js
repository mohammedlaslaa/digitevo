/** @type {import('tailwindcss').Config} */

const { APPEAR_FROM_RIGHT } = require('./src/utils/constants/animation.js');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      dancing: 'Dancing Script, cursive',
      pacifico: 'Pacifico, cursive',
      marck: 'Marck Script, cursive',
    },
    extend: {
      keyframes: {
        'appear-from-right': {
          '0%': { transform: 'translate(100%)' },
          '100%': { transform: 'translate(0%)' },
        },
        'leave-to-right': {
          '0%': { transform: 'translate(0%)' },
          '100%': { transform: 'translate(100%)' },
        },
      },
      animation: {
        'appear-from-right': `appear-from-right ${APPEAR_FROM_RIGHT}ms ease-in-out forwards`,
        'leave-to-right': `leave-to-right ${APPEAR_FROM_RIGHT}ms ease-out forwards`,
      },
    },
  },
  plugins: [],
};
