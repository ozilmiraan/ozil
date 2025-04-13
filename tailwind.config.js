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
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
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

