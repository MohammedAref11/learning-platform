/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077BC",
        secondary: "#009866",
        success: "#16A34A",
        warning: "#D97706",
        danger: "#DC2626",
        surface: "#111111",
        text: "#111827",
        neutral: "#111111",
      },
      fontFamily: {
        display: ["Archivo Black", "sans-serif"],
        body: ["Archivo Black", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        h1: "3rem",
        "body-md": "1rem",
        "label-caps": "0.75rem",
      },
      spacing: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
    },
  },
  plugins: [],
}
