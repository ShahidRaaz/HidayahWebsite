/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Product Sans', 'sans-serif'],
      },
      colors: {
        'custom-teal': 'rgba(0, 128, 128, 0.1)',
        'br-color': '#008080',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }, // move up a bit
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        float: 'float 1.5s ease infinite',
      },
      
    },
  },
 plugins: [],
}
