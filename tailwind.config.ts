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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
        'noto-sans-jp': ['var(--font-noto-sans-jp)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
