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
      colors: {
        primary: "#e85b5b",
        background: "#121212",
        background2: "#12121200",
        secondary: "#2d3748",
        accent: "#ed8936",
        "accent-light": "#f6ad55",
      },
    },
  },
  plugins: [],
};
