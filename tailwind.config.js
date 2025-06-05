/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        3: "3px", // 3px kalınlığında kenarlık için
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)", // Daha belirgin bir gölge için
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
