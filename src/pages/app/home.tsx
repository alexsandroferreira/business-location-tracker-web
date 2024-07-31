import { Container, Grid, Paper } from '@mui/material'

import { CompanyForm } from '../../components/companyForm'

export function Home() {
  return (
    <section>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <CompanyForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
