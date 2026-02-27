/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
            transform: "scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-out",
      },
    },
  },
  plugins: [],
extend: {
  keyframes: {
    fadeIn: {
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
  },
  animation: {
    fadeIn: "fadeIn 0.6s ease-out",
  },
},
extend: {
  animation: {
    fadeIn: "fadeIn 1s ease-in-out"
  },
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" }
    }
  }
}
}





