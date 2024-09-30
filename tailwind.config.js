/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/assets/images/back.jpg')",
      },
      colors: {
        'custom-blue': '#1e3a8a',
        'custom-purple': '#6b21a8',
        'custom-pink': '#ec4899',
        'custom-yellow': '#facc15',
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

