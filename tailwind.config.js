/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        borderColor: "#e1e1e1",
        blueBorder: '#3f51b5',
        primarySoft: '#eef4ff',
        text: "#242424"
      }
    },
  },
  plugins: [],
}

