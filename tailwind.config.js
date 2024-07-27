/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary:'#fafafa',

        dark:'#233844',
        secondary:'#202c36'

      },
      fontFamily:{
       sans:["Nunito Sans",'system-ui']
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true})],
}