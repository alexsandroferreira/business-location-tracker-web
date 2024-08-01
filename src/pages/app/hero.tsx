import { Container, Grid, Paper, Typography } from '@mui/material'

import { Logo } from '../../components/logo' // Substitua pelo caminho correto do seu SVG

export function Hero() {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '8px' }}>
              <Logo />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: '12px' }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Explicação da Aplicação
              </Typography>
              <Typography variant="body1">
                Aqui você pode colocar uma explicação detalhada sobre a
                aplicação, seus benefícios, como funciona, etc.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
