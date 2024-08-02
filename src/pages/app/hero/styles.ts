import { styled } from '@mui/material'

export const StyledHero = styled('section')(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
}))

export const ContentWrapper = styled('div')(() => ({
  position: 'relative',
  zIndex: 2,
}))

export const BackgroundWrapper = styled('div')(() => ({
  position: 'absolute',
  top: '-50%',
  left: '-25%',
  width: '150%',
  height: '200%',
  zIndex: 1,
  overflow: 'hidden',
}))
