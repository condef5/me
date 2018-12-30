import Typography from 'typography'
import noriegaTheme from 'typography-theme-noriega'

noriegaTheme.bodyFontFamily = ['Dosis', 'sans-serif']
noriegaTheme.googleFonts = [
  {
    name: 'Dosis',
    styles: ['300', '400', '700'],
  },
]

const typography = new Typography(noriegaTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
