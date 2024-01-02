/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {

    colors: {
      yellowlight: '#D6CE15',
      yellowdark: '#A4A71E',
      greenlight: '#53900F',
      greendark: '#1F6521',
      primaryblack: '#1F2605'
      
    },
    extend: {
      fontFamily: {
        outfit: ['Outfit', "sans-serif"],
        inter: ['Inter', "sans-serif"],
        sans: ["Inter", "sans-serif"]
      },

      screens: {
        'xs': '300px',
        'xm': '400px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
