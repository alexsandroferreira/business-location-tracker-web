import { Box, Container, Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Footer } from '../../components/footer'
import { Navbar } from '../../components/navbar'

export function AppLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  )
}
