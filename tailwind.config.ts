import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from'tailwindcss/colors'

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
      black: colors.black,
      white: colors.white,
      grey: colors.gray,
      blue: {
        900: '#020311',
        800: '#060A2F',
        700: '#0B114C',
        600: '#121A6A',
        500: '#202A88',
        400: '#3841A6',
        300: '#5A63C3',
        200: '#8B92E1',
        100: '#D2D5FF',
      },
      red: {
        900: '#950719',
        800: '#A1081C',
        700: '#AD0B20',
        600: '#B9152C',
        500: '#C62238',
        400: '#D2364B',
        300: '#DE5C6D',
        200: '#EA9CA6',
        100: '#F6E2E5',
      },
      plum: {
        900: '#2F0620',
        800: '#480A31',
        700: '#601042',
        600: '#791955',
        500: '#922A6B',
        400: '#AA4283',
        300: '#C369A1',
        200: '#DCA2C5',
        100: '#F5E7EF',
      },
      orange: {
        900: '#903614',
        800: '#9F3E17',
        700: '#AD461B',
        600: '#BB5124',
        500: '#C86033',
        400: '#D6764A',
        300: '#E49470',
        200: '#F1BDA4',
        100: '#FFE9DF',
      },
      yellow: {
        900: '#B6A33A',
        800: '#BFAB3C',
        700: '#C8B244',
        600: '#D1BC50',
        500: '#DAC660',
        400: '#E4D37A',
        300: '#EDE099',
        200: '#F6EDC0',
        100: '#FFFBE5',
      },
      green: {
        900: '#00160C',
        800: '#00321C',
        700: '#014D2C',
        600: '#03693B',
        500: '#0A844F',
        400: '#1BA066',
        300: '#39BB81',
        200: '#6AD7A7',
        100: '#B3F2D6',
      },
      pink: {
        900: '#A24772',
        800: '#AD4877',
        700: '#B74D7F',
        600: '#C25487',
        500: '#CC6294',
        400: '#D674A2',
        300: '#E18FB5',
        200: '#EBB4CE',
        100: '#F5EAEF',
      },
      lime: {
        900: '#87B700',
        800: '#8BBD00',
        700: '#8FC201',
        600: '#94C702',
        500: '#9ACD0A',
        400: '#A1D218',
        300: '#ABD72C',
        200: '#B7DD4D',
        100: '#CAE285',
      },
      teal: {
        900: '#20D2BB',
        800: '#23D8C0',
        700: '#28DDC6',
        600: '#34E3CC',
        500: '#41E9D3',
        400: '#59EEDB',
        300: '#7DF4E4',
        200: '#AAF9EF',
        100: '#D6FFFA',
      },
      gold: {
        900: '#E19510',
        800: '#E59813',
        700: '#E99C16',
        600: '#ECA01A',
        500: '#F0A522',
        400: '#F4AF36',
        300: '#F8BC54',
        200: '#FBCF81',
        100: '#FFE4B5',
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
