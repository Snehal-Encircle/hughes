/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        midscreen: {max: '1400px'},
        xlscreen: {max: '1279px'},
        lgscreen: {max: '1024px'},
        smscreen: {max: '425px'},
      },
      fontFamily: {
        roboto: 'Roboto',
        rubic: 'Rubik'
      },

      fontSize: {
        16: '16px',
        18: '18px',
        20: '20px',
        30: '30px',
        32: '32px',
        40: '40px',
      },

      lineHeight: {
        26: '26px',
        30: '30px',
        40: '40px',
        42: '42px',
        50: '50px',
      },

      borderRadius: {
        10: '10px',
      },

      colors: {
        black: {
          100: '#2C2C2C',
        },
        blue: {
          100: '#18A5F4',
          200: '#004E7A',
        },
        gray: {
          100: '#444444',
        },
        yellow: {
          100: '#FFC75B',
        },
        green: {
          100: '#00AC83',
        },
      },
      opacity: {
        1: '1'
      },
      padding: {
        10: '10px',
        12: '12px',
        15: '15px',
        20: '20px',
        29: '29px',
        30: '30px',
        31: '31px',
        127: '127px',
      },
      margin: {
        10: '10px',
        20: '20px',
        40: '40px',
      },
    },
  },
  plugins: [],
}
