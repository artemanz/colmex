/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1200px",
      },
      fontFamily: {
        primary: "Lato, sans-serif",
        secondary: "Lexend Variable, sans-serif",
      },
      colors: {
        foreground: "#363636",
        neutral: "#646464",
        accent: "#F6A717",
        accent_focus: "#F2B648",
        accent_1: "#FDE9C5",
        error: "rgb(248 113 113)"
      },
    },
  },
};
