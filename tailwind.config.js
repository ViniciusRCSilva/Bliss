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
      spin: {
        from: {
          transform: 'rotate(0deg)'
        },
        to: {
          transform: 'rotate(360deg)'
        }
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        }
      },
    },
    animation: {
      screenOpacity: 'screenOpacity 0.5s ease-in-out',
      spin: 'spin 1s linear infinite',
      bounce: 'bounce 1s infinite',
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
