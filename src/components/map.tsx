import 'leaflet/dist/leaflet.css'

import { Card, CardContent, Typography } from '@mui/material'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { CompanyData } from '../interface'
interface MapProps {
  companies: CompanyData[]
}

export function Map({ companies }: MapProps) {
  return (
    <MapContainer
      center={[-14.235004, -51.925282]}
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {companies.map((company) => (
        <Marker key={company.place_id} position={[company.lat, company.lon]}>
          <Popup>
            <Card>
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  <strong>Nome da Fantasia:</strong> {company.businessName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>CNPJ:</strong> {company.cnpj}
                </Typography>
              </CardContent>
            </Card>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
