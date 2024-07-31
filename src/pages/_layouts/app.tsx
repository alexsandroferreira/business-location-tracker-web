import { Container, Grid, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="h4" component="header" gutterBottom>
            Cabeçalho
          </Typography>
        </Grid>
        <Grid item>
          <Outlet />
        </Grid>
        <Grid item>
          <Typography variant="body1" component="footer">
            Rodapé
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
