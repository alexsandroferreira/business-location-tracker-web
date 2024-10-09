import { GitHub, LinkedIn } from '@mui/icons-material'
import { Box, Container, IconButton, Link, Typography } from '@mui/material'

import { bounce } from '../utils/animations'

export function Footer() {
  return (
    <Box
      component="footer"
      py={0.5}
      textAlign="center"
      bgcolor="primary.main"
      color="white"
      data-test="footer"
    >
      <Container maxWidth="xl">
        <Typography variant="body1">
          Copyright © 2024 Designed by Alexsandro Ferreira
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
          data-test="footer-icons"
        >
          <IconButton
            component={Link}
            href="https://github.com/alexsandroferreira"
            sx={{
              color: 'whitesmoke',
              '&:hover': {
                backgroundColor: '#1a1e22',
                animation: `${bounce} 0.4s linear`,
              },
            }}
            data-test="footer-github-link"
          >
            <GitHub data-test="footer-github-icon" />
          </IconButton>

          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/alexsandro-ferreira-dev/"
            sx={{
              color: 'whitesmoke',
              '&:hover': {
                backgroundColor: '#0a66c2',
                animation: `${bounce} 0.4s linear`,
              },
            }}
            data-test="footer-linkedin-link"
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}
