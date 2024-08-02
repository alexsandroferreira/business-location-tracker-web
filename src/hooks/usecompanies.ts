import { useEffect, useState } from 'react'

import type { CompanyData } from '../interface'

export function useCompanies() {
  const [companies, setCompanies] = useState<CompanyData[]>([])

  useEffect(() => {
    loadCompaniesFromLocalStorage()
  }, [])

  function loadCompaniesFromLocalStorage() {
    const storedCompanies = JSON.parse(
      localStorage.getItem('companies') || '[]',
    )
    setCompanies(storedCompanies)
  }

  const handleAddCompany = (newCompany: CompanyData) => {
    const updatedCompanies = [...companies, newCompany]
    setCompanies(updatedCompanies)
    localStorage.setItem('companies', JSON.stringify(updatedCompanies))
  }

  return {
    companies,
    handleAddCompany,
  }
}
