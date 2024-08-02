import { Container, Grid, Paper, styled } from '@mui/material'
import { useEffect, useState } from 'react'

import { CompanyForm } from '../../components/companyForm'
import { Map } from '../../components/map'
import type { CompanyData } from '../../interface'

export function Home() {
  const [companies, setCompanies] = useState<CompanyData[]>([])

  function loadCompaniesFromLocalStorage() {
    const storedCompanies = JSON.parse(
      localStorage.getItem('companies') || '[]',
    )
    setCompanies(storedCompanies)
  }
  useEffect(() => {
    loadCompaniesFromLocalStorage()
  }, [])

  const handleAddCompany = (newCompany: CompanyData) => {
    const updatedCompanies = [...companies, newCompany]
    setCompanies(updatedCompanies)
    localStorage.setItem('companies', JSON.stringify(updatedCompanies))
  }

  const StyledHome = styled('section')(() => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  }))

  return (
    <StyledHome>
      <Container maxWidth="xl" component="div">
        <Grid container spacing={4} alignItems="center">
          <Grid id="gid-item-form" item xs={12} md={6} lg={5}>
            <Paper id="paper" elevation={3} style={{ padding: '12px' }}>
              <CompanyForm onAddCompany={handleAddCompany} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={7}>
            <Paper elevation={3} style={{ height: '78vh', padding: '4px' }}>
              <Map companies={companies} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </StyledHome>
  )
}
