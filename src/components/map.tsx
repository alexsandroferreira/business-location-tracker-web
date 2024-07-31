import 'leaflet/dist/leaflet.css'

import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import type { CompanyData } from '../interface'

export function Map() {
  const [companies, setCompanies] = useState<CompanyData[]>([])

  function loadCompaniesFromLocalStorage() {
    const storedCompanies = localStorage.getItem('companies')
    if (storedCompanies) {
      setCompanies(JSON.parse(storedCompanies))
    }
  }

  useEffect(() => {
    loadCompaniesFromLocalStorage()
  }, [])
  return (
    <MapContainer
      center={[-30.02768, -51.22864]}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {companies.map((company) => (
        <Marker key={company.place_id} position={[company.lat, company.lon]}>
          <Popup>
            <strong>{company.companyName}</strong>
            <br />
            CNPJ: {company.cnpj}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
