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
        width: '100%',
        backgroundColor: 'background.default',
      }}
    >
      <Navbar />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: { xs: '80px', sm: '88px' },
          paddingBottom: '24px',
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
