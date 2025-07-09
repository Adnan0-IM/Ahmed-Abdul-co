/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#052659", // Base blue
          light: "#0A5FDE", // Base blue
          hover: "#3179FF", // Brighter blue on hover
          dark: "#3982f0", // Deeper tone for focus
          'soft-dark': "#0647A6", // Soft Deeper tone for focus
        },
        neutral: {
          100: "#FFFFFF",
          200: "#F5F7FA", // Light gray section
          300: "#E2E8F0", // Border or subtle background
          900: "#1F2937", // Body text
        },
        
        blue: {
          hover: "#2968d4",
          light: "#5ba3f5",
          dark: "#1f5bb8",
        },
        accent: {
          DEFAULT: "#22489e",
          hover: "#1a3a7d",
          light: "#2d5cb3",
        },
        
        dark: "#0d1321",
        mid: "#1a2332",
        light: "#2a3441",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // Headings
        body: ["Open Sans", "sans-serif"], // Paragraphs
      },
    },
  },
  plugins: [],
};
