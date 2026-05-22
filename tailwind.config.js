/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'Satoshi'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        cream: "#FAF8F4",
        ink: "#0F0F0F",
        mist: "#F0EDE8",
        sage: "#8FAF8F",
        clay: "#C4956A",
        slate: "#64748B",
      },
    },
  },
  plugins: [],
}
