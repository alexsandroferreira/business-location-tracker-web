import { Box, Container, Grid, Paper } from '@mui/material'
import { Helmet } from 'react-helmet-async'

import { AnimatedBackground } from '../../../components/AnimatedBackground'
import { CompanyForm } from '../../../components/companyForm'
import { Map } from '../../../components/map'
import { useCompanies } from '../../../hooks/usecompanies'
import { BackgroundWrapper, ContentWrapper, StyledRegister } from './styles'

export function Register() {
  const { companies, handleAddCompany } = useCompanies()

  return (
    <StyledRegister>
      <Helmet title="Register" />
      <Container maxWidth="xl" component="div">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} lg={5}>
            <Box id="box-wrapper" position="relative">
              <BackgroundWrapper>
                <AnimatedBackground />
              </BackgroundWrapper>
              <ContentWrapper>
                <Paper elevation={3} style={{ padding: '12px' }}>
                  <CompanyForm onAddCompany={handleAddCompany} />
                </Paper>
              </ContentWrapper>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={7}>
            <Paper elevation={3} style={{ height: '600px', padding: '4px' }}>
              <Map companies={companies} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </StyledRegister>
  )
}
