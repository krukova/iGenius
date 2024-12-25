/** @type {import('tailwindcss').Config} */
tailwind.config = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-300": "var(--gray-300)",
      },
    },
  },
  plugins: [],
};
