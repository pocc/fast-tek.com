import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#5F0B35",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
