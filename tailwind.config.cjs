/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    },
    extend: {
      fontFamily: {
        "abril-fatface": ['"Abril Fatface"', "cursive"],
        Poppins: ["Poppins, sans-serif"]
      },
      colors: {
        bbyViolet: {
          50: "#d6d6fe",
          100: "#7885f7"
        },
        bbyGreen: "#dbffb4",
        bby1: "#6d6d6d",
        bby2: "#fdbb61",
        bby3: "#1f2126",
        bby4: "#95a1fe",
        bby5: "#feedda",
        bby6: "#dbffb4"
      }
    }
  },
  plugins: []
}
