import { styled } from '@mui/material'

export const StyledRegister = styled('section')(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
}))

export const BackgroundWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '-4%',
  left: '-31%',
  width: '120%',
  height: '106%',
  zIndex: 1,
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    top: '-1%',
    left: '-31%',
    width: '120%',
    height: '104%',
  },
  [theme.breakpoints.down('sm')]: {
    top: '-1%',
    left: '-5%',
    width: '110%',
    height: '104%',
  },
}))

export const ContentWrapper = styled('div')(() => ({
  position: 'relative',
  zIndex: 2,
}))
