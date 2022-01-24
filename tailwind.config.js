module.exports = {
  content: [
    './*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '0.65rem',
          sm: '0.75rem',
          lg: '1rem',
          xl: '1rem'
        },
        width: '1100px'
      },
      fontFamily: {
        display: ['ITC Avant Garde Gothic', 'sans-serif'],
        body: ['Arial', 'sans-serif'],
        condensed: ['AvantGarde LT Cond', 'sans-serif']
      },
      colors: {
        lite: "rgba(255, 255, 255, 0.95)",
        primary: "#e30613",
        turbolader: "#be9b00",
        antrieb: "#e36302",
        autoglas: "#B8C0D5",
        klima: "#007eb0",
        autofit: "#fbc707",
        autodienst: "#322A75",
        secondary: {
          "1": "#5d686e",
          "2": "#292d30",
          "3": "#222222",
          "4": "#7d7d7d",
          "5": "#697075",
          "6": "#c9c9c9",
          "7": "#d4d4d4",
          "8": "#535e63"
        }
      },
      boxShadow: {
        '1': 'rgba(0,0,0,0.21) 1px 1px 1px 0px',
        '2': 'rgb(0,0,0,0.20) 1px 1px 3px 0px inset'
      }
    }
  },
  variants: {
    extend: {
      // ...
     inset: ['hover', 'focus'],
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '780px',
          },
          '@screen md': {
            maxWidth: '780px',
          },
          '@screen lg': {
            maxWidth: '972px',
          },
          '@screen xl': {
            maxWidth: '1132px',
          },
        }
      })
    }
  ],
}