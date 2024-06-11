import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        heading: 'var(--font-oswald), ui-serif',
        sans: ['var(--font-lato)', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      blue: {
        100: '#020311',
        200: '#060A2F',
        300: '#0B114C',
        400: '#121A6A',
        500: '#202A88',
        600: '#3841A6',
        700: '#5A63C3',
        800: '#8B92E1',
        900: '#D2D5FF',
      },
      red: {
        100: '#950719',
        200: '#A1081C',
        300: '#AD0B20',
        400: '#B9152C',
        500: '#C62238',
        600: '#D2364B',
        700: '#DE5C6D',
        800: '#EA9CA6',
        900: '#F6E2E5',
      },
      plum: {
        100: '#2F0620',
        200: '#480A31',
        300: '#601042',
        400: '#791955',
        500: '#922A6B',
        600: '#AA4283',
        700: '#C369A1',
        800: '#DCA2C5',
        900: '#F5E7EF',
      },
      orange: {
        100: '#903614',
        200: '#9F3E17',
        300: '#AD461B',
        400: '#BB5124',
        500: '#C86033',
        600: '#D6764A',
        700: '#E49470',
        800: '#F1BDA4',
        900: '#FFE9DF',
      },
      yellow: {
        100: '#B6A33A',
        200: '#BFAB3C',
        300: '#C8B244',
        400: '#D1BC50',
        500: '#DAC660',
        600: '#E4D37A',
        700: '#EDE099',
        800: '#F6EDC0',
        900: '#FFFBE5',
      },
      green: {
        100: '#00160C',
        200: '#00321C',
        300: '#014D2C',
        400: '#03693B',
        500: '#0A844F',
        600: '#1BA066',
        700: '#39BB81',
        800: '#6AD7A7',
        900: '#B3F2D6',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }: any) {
      function extractColorVars(colorObj: any, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]

          const newVars: any =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      })
    },
  ],
}
export default config
