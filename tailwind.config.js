/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  safelist: [
    "h-4",
    "w-4",
    "h-5",
    "w-5",
    "h-6",
    "w-6",
    "h-8",
    "w-8",
    "h-10",
    "w-10",
    "h-12",
    "w-12",
    "text-xs",
    "text-sm",
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-500",
  ],
  plugins: [],
};
