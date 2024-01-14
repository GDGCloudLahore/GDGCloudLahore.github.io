/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#282828",
        red: "#f74424",
        yellow: "#ffd991",
        blue: "#096dd9",
        ghost: "#e9e9e9",
        green: "#0F9D58",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
