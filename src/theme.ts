import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#4f8e3e',
    },
    background: {
      default: '#dcdcdc',
    },
  },
  typography: {
    fontFamily: 'Helvetica Neue',
  },
})
theme = responsiveFontSizes(theme)

export default theme
