
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito', 'sans-serif'],
        'display': ['Fredoka', 'sans-serif'],
      },
      colors: {
        'ahs-orange': '#F28B2E',
        'ahs-orange-bg': '#FDBA74',
        'ahs-teal': '#084C47',
        'ahs-teal-bg': '#2DD4BF',
        'ahs-cream': '#FFFBF5',
        'ahs-blue-bg': '#F0F9FF',
      }
    },
  },
  plugins: [],
}
