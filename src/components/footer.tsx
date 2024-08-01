import { Box, Container, Typography } from '@mui/material'

export function Footer() {
  return (
    <Box
      component="footer"
      py={3}
      textAlign="center"
      bgcolor="primary.main"
      color="white"
    >
      <Container maxWidth="lg">
        <Typography variant="body1">Rodapé © 2024</Typography>
      </Container>
    </Box>
  )
}
