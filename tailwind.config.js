/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'icons': '0px 0px 20px #00A0FF'
      },
      colors: {
        brand: {
          red: {
            100: "#F99FAC",
            300: "#F57082",
            500: "#F24058",
            700: "#EF102F",
            900: "#BF0D25"
          },
          blue: {
            100: "#33B3FF",
            300: "#00A0FF",
            500: "#0080CC",
            700: "#0067A3",
            900: "#004E7C"
          },
          neutral: {
            50: "#F0F0F0",
            100: "#E6E6E6",
            200: "#D6D6D6",
            300: "#BDBDBD",
            400: "#A3A3A3",
            500: "#8A8A8A",
            600: "#707070",
            700: "#575757",
            800: "#3D3D3D",
            900: "#242424",
            950: "#1e1e1e"
          }
        }
      }
    },
  },
  plugins: [],
}
