/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./context/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        apercu: ["Apercu"],
        sans: ["Source Sans Pro", "Inter", "sans-serif"],
        mono: ["SF Mono", "Roboto Mono", "monospace"],
        nova: ["Nova Black", "sans-serif"],
      },
      backgroundImage: {
        "lightest-white-gradient": "linear-gradient(to top, #FFFFFF, #E5E5E5)",
        "navy-gradient": "linear-gradient(to top, #0E365D, #001F3F)",
        "white-blur-gradient":
          "linear-gradient(to top, rgba(229, 229, 229, 0.8), rgba(229, 229, 229, 0.8))",
        "navy-blur-gradient":
          "linear-gradient(to top, rgba(0, 31, 63, 0.8), rgba(0, 31, 63, 0.8))",
      },
      colors: {
        black: "#000000",
        "light-black": "#4C4C4C",
        white: "#D9D9D9",
        "dark-white": "#ADADAD",
        navy: "#14213D",
        blue: "#1E56A0",
        lime: "#00F0B5",
        "light-lime": "#85FFE0",
      },
      screens: {
        "3xl": "1600px",
      },
      accessibility: ["focus"],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
      textColor: ["responsive", "hover", "focus", "active"],
      borderColor: ["responsive", "hover", "focus", "active"],
      borderWidth: ["responsive", "hover", "focus"],
      margin: ["responsive", "last"],
      padding: ["responsive", "last"],
    },
  },
  plugins: [],
};