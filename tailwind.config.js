/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  
  content: ['./*.{html,js}'],
  
  theme: {
    extend: {
      
      fontFamily: {
        poppins: ["Poppins", 'serif'],
      },

      colors: {
        "design-background": {
          black: "#111729",
          toggle: "#223344",
          blue: "#2A4DD0",
          white: "#F2F9FE",

        
        },
      },

    },
  },

  variants : {
    extend: {},
  },

  plugins: [],
}

