/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green-blue": "#37c8abff",
        "green-dark": "#1c241fff",
        "gray": "#a1a1a1",
      },
    },
    keyframes: {
      screenOpacity: {
        '0%': { opacity: '0' },
        '100%': { opacity: '100' },
      },
    },
    animation: {
      screenOpacity: 'screenOpacity 0.5s ease-in-out',
    }
  },
  plugins: [],
}
