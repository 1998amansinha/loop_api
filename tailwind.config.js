import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import daisyui from "daisyui";
import tailwindScrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
        apple: ["-apple-system", "sans-serif"],
        blinkMac: ["BlinkMacSystemFont", "sans-serif"],
        segoe: ["Segoe UI", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        cantarell: ["Cantarell", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        helvetica: ["Helvetica Neue", "sans-serif"],
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
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        rainbowGlow: {
          "0%": { borderColor: "#ff0000" }, // Red
          "60%": { borderColor: "#00ff00" }, // Green
          "80%": { borderColor: "#0000ff" }, // Blue
          "100%": { borderColor: "#ff0000" }, // Back to Red
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
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
  plugins: [
    daisyui,
    tailwindScrollbarHide,
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default tailwindConfig;
