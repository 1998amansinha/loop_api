/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
      boxShadow: {
        soft: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        strong: "0px 15px 50px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        card: "#f6f9ff",
        cardTitle: "#072757",
        cardPara: "#3b5377",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2c5282",
          secondary: "#852000",
          accent: "#3b82f6",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          info: "#009dff",
          success: "#219626",
          warning: "#f4b800",
          error: "#fc2652",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
