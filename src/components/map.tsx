import 'leaflet/dist/leaflet.css'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
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
          <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
            <Popup>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  image="../../public/logo-web.svg"
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    <strong>Empresa</strong>
                  </Typography>
                  <Typography variant="body2">
                    <strong>Nome da Fantasia: </strong>
                    {company.businessName}
                  </Typography>

                  <Typography variant="body2">
                    <strong>CNPJ:</strong> {company.cnpj}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Popup>
          </Card>
        </Marker>
      ))}
    </MapContainer>
  )
}
