import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        chocolate: {
          DEFAULT: "#5F2C1E", // Primary chocolate color
          hover: "#441E14",  // Hover color
          light: "#7D4433",  // Lighter variant (optional)
          dark: "#3A1710",   // Darker variant (optional)
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
