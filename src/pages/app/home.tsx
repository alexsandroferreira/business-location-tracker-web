import { Container, Grid, Paper } from '@mui/material'

import { CompanyForm } from '../../components/companyForm'
import { Map } from '../../components/map'

export function Home() {
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} style={{ padding: '12px' }}>
              <CompanyForm />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} style={{ height: '600px', padding: '16px' }}>
              <Map />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
