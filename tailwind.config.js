/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006400',  // Dark Green
        secondary: '#004d00',  // Deep Green
        primaryDark: '#002200',  // Even Darker Green for background
      },
    },
  },
  plugins: [],
}
