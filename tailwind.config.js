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
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        30: '30px',
        32: '32px',
        40: '40px',
      },

      lineHeight: {
        24: '24px',
        26: '26px',
        30: '30px',
        32: '32px',
        36: '36px',
        40: '40px',
        42: '42px',
        50: '50px',
      },

      borderRadius: {
        10: '10px',
      },

      width: {
        44: '44px',
        84: '84px',
        368: '368px',
      },

      height: {
        44: '44px',
        84: '84px',
        240: '240px',
        255: '255px',
      },

      gap: {
        64: '64px',
        80: '80px',
        94: '94px',
      },

      colors: {
        black: {
          100: '#2C2C2C',
        },
        blue: {
          100: '#18A5F4',
          200: '#004E7A',
        },
        sky: '#CBFFF3',
        gray: {
          100: '#444444',
          200: '#EEEEEE',
          300: '#707070',
        },
        yellow: {
          100: '#FFC75B',
        },
        green: {
          100: '#00AC83',
          200: '#00674E',
        },
      },
      opacity: {
        '0.99': '0.99',
        1: '1'
      },

      spacing: {
        26: '26px',
        40: '40px',
        20: '20%',
        288: '288px',
      },

      dropShadow: {
        'custom': '0 4px 14px rgba(0, 0, 0, 0.14)',
      },

      boxShadow: {
        'custom': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },

      zIndex: {
        1: '1',
      },

      padding: {
        10: '10px',
        12: '12px',
        15: '15px',
        20: '20px',
        29: '29px',
        30: '30px',
        31: '31px',
        35: '35px',
        36: '36px',
        44: '44px',
        45: '45px',
        48: '48px',
        50: '50px',
        52: '52px',
        53: '53px',
        55: '55px',
        56: '56px',
        60: '60px',
        78: '78px',
        80: '80px',
        100: '100px',
        104: '104px',
        120: '120px',
        127: '127px',
        132: '132px',
        144: '144px',
        262: '262px',
      },
      margin: {
        10: '10px',
        20: '20px',
        40: '40px',
        48: '48px',
        50: '50px',
        60: '60px',
        160: '160px',
      },
    },
  },
  plugins: [],
}
