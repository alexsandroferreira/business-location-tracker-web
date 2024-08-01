import { Container, Grid, Paper } from '@mui/material'
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
  return (
    <section>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} style={{ padding: '12px' }}>
              <CompanyForm onAddCompany={handleAddCompany} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} style={{ height: '600px', padding: '16px' }}>
              <Map companies={companies} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
