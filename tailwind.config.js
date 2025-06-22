/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Product Sans', 'sans-serif'], // 👈 Set as default font
      },
      colors: {
        'custom-teal': 'rgba(0, 128, 128, 0.1)',
        'br-color':'#008080'
      },
      animation: {
      marquee: 'marquee 20s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  }
  },
  plugins: [],
}
