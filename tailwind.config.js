module.exports = {
  darkMode: 'class', // ✅ ini penting untuk next-themes
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        "blue-bpp": "#1E88E5",
        "orange-bpp": "#FB8C00",
      },
    },
  },
  plugins: [],
}