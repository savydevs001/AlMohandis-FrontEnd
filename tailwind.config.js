const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3E8982',
        'secondary': '#FEB705',
        'tertiary': '#333',
        'txtColor': '#fff',
        'paraColor': '#717171'
      }
    },
    noScrollBar: {
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '&': {
        '-ms-overflow-style': 'none',  // IE and Edge
        'scrollbar-width': 'none',  // Firefox
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}