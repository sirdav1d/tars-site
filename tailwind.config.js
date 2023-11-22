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
        'icons': '0px 0px 20px #00A0FF',
        'spanCards': '0px 0px 8px #00A0FF',
        'cards': '0px 0px 40px #00A0FF',
        'btnClose': '0px 0px 12px #F24058',

      },
      boxShadow: {
        'input': '0px 4px 20px -12px #00A0FF'
      },
      backgroundImage: {
        'bgHero': 'url(/images/bgHero.png)',
        'bgCTA': 'linear-gradient(109deg, #F24058 35.99%, rgba(242, 64, 88, 0.00) 90.88%)',
        'bgButton': 'linear-gradient(270deg, hsla(202, 100%, 60%, 1) 0%, hsla(202, 100%, 24%, 1) 100%);',
        'bgButtonHero': 'linear-gradient(270deg, hsla(352, 87%, 70%, 1) 0%, hsla(352, 87%, 40%, 1) 100%);'
      },
      backgroundSize: {
        'btnSize': '180%'
      },
      fontFamily: {
        poppinsBody: 'var(--poppins-body)',
        montserratTitle: 'var(--montserrat-title)',
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
          },
        }
      }
    },
  },
  plugins: []
  ,
}
