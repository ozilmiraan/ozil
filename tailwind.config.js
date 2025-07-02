// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#233D4D',  // Dark Blue
        accent: '#f5b36d',   // Orange
        highlight: '#00bcd4', // Yellow
        neutral: '#ccb297',  // Green
        support: '#9b3d9e',  // Teal
        secondary: '#f53893', // Light pink
        'hover-gradient': '#f53893',
        'rose-gold': {
          light: '#F7CAC9', // Lighter shade for gradients/highlights
          DEFAULT: '#B76E79', // Main reflective cap color (adjust as needed)
          dark: '#A15661',  // Darker shade for contrast/text
        },
        'neon-pink': '#FF1493',
        'neon-cyan': '#00FFFF',
        'pearlescent-white': '#FDFBFB', // Very light off-white
      },
      fontFamily: {
        // sans: ['Montserrat', 'sans-serif'],
                // Add your custom fonts here, mapping them to CSS font-family names
        sans: ['Poppins', ...defaultTheme.fontFamily.sans], // Poppins as primary sans-serif
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        bebas: ['Bebas Neue', 'cursive'], // Cursive is a fallback
        cinzel: ['Cinzel', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(145deg, #e6d1db, #fff8ff);',
      },
      backgroundColor: {
        primary: '#233D4D',  // Dark Blue
        accent: '#f5b36d',   // Orange
        highlight: '#00bcd4', // Yellow
        neutral: '#ccb297',  // Green
        support: '#9b3d9e',  // Teal
        secondary: '#f53893', // Light pink
      },
      boxShadow: {
        custom: '0 4px 15px rgba(0, 0, 0, 0.1)',
        neumorphic: '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff',
        neumorphicInset: 'inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff  ',
        'glow-rose-gold': '0 0 15px 5px rgba(183, 110, 121, 0.4)', // Adjust color and spread
        'glow-white': '0 0 15px 5px rgba(255, 255, 255, 0.5)',

      },
      hover: {
        'bg-hover-gradient': '#f53893',
        
      },
      borderRadius: {
        '50px': '50px',
      },
      
    },
  },
  plugins: [],
};

