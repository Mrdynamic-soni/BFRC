import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Dark Blue
        secondary: "#10B981", // Green
        accent: "#F59E0B", // Amber
        light: "#F3F4F6", // Light Gray
        dark: "#1F2937", // Dark Gray
      },
    },
  },
  plugins: [],
} satisfies Config;
