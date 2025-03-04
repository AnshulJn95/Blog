/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-400': '#your-new-color-code', // Replace with your desired color
      },
    },
  },
  plugins: [],
}

