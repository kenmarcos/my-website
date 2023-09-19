import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          primary: "#dfdcd8",
        },
        gray: {
          light: "#6F7180",
          primary: "#212431",
          dark: "#111113",
        },
        blue: {
          light: "#DFF3FC",
          primary: "#4f91f9",
          dark: "#040B14",
        },
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
