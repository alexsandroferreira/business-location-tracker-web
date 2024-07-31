import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getLocationCompany } from '../api/get-location-company'
import type { CompanyData } from '../interface'

const companyFormSchema = z.object({
  companyName: z
    .string()
    .nonempty({ message: 'Nome da empresa é obrigatório' }),
  businessName: z.string({ message: 'Nome fantasiaé obrigatório' }),
  cnpj: z.string({ message: 'CNPJ deve ter 14 caracteres' }),
  streetname: z.string().nonempty({ message: 'Rua é obrigatório' }),
  housenumber: z.string().nonempty({ message: 'Numero é obrigatório' }),
  postalcode: z.string({ message: 'Cep é obrigatório' }),
  city: z.string().nonempty({ message: 'Cidade é obrigatória' }),
  state: z.string().nonempty({ message: 'Estado é obrigatório' }),
  country: z.string().nonempty({ message: 'País é obrigatório' }),
  county: z.string().nonempty({ message: 'Bairro é obrigatório' }),
  complement: z.string().optional(),
  lat: z.string().optional(),
  lon: z.string().optional(),
})

type CompanyFormData = z.infer<typeof companyFormSchema>

export function CompanyForm() {
  const isSmallScreen = useMediaQuery('(max-width:600px)')
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<CompanyFormData>({
    resolver: zodResolver(companyFormSchema),
  })

  async function handleRegisterCompany(data: CompanyFormData) {
    try {
      const address = `${data.streetname} ${data.housenumber}, ${data.city}, ${data.state}, ${data.country}`

      const coordinates = await getLocationCompany(address)

      const companyData: CompanyData = {
        ...data,
        place_id: coordinates.place_id,
        lat: coordinates.lat,
        lon: coordinates.lon,
      }

      const storedCompanies = localStorage.getItem('companies')
      const companies = storedCompanies ? JSON.parse(storedCompanies) : []
      companies.push(companyData)
      localStorage.setItem('companies', JSON.stringify(companies))

      reset()
      toast.success('cadastro com sucesso')
    } catch (error) {
      toast.error('Falha ao registrar empresa')
    }
  }
  return (
    <>
      <Typography
        color="primary"
        variant={isSmallScreen ? 'h4' : 'h3'}
        gutterBottom
      >
        Registre sua Empresa
      </Typography>
      <form onSubmit={handleSubmit(handleRegisterCompany)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome da Empresa"
              type="text"
              fullWidth
              {...register('companyName')}
              error={!!errors.companyName}
              helperText={errors.companyName?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="CNPJ"
              type="text"
              fullWidth
              {...register('cnpj')}
              error={!!errors.cnpj}
              helperText={errors.cnpj?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome Fantasia"
              type="text"
              fullWidth
              {...register('businessName')}
              error={!!errors.businessName}
              helperText={errors.businessName?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Pais"
              type="text"
              fullWidth
              {...register('country')}
              error={!!errors.country}
              helperText={errors.country?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Nome da Estado"
              type="text"
              fullWidth
              {...register('state')}
              error={!!errors.state}
              helperText={errors.state?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Cidade"
              type="text"
              fullWidth
              {...register('city')}
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="CEP"
              type="text"
              fullWidth
              {...register('postalcode')}
              error={!!errors.postalcode}
              helperText={errors.postalcode?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Bairro"
              type="text"
              fullWidth
              {...register('county')}
              error={!!errors.county}
              helperText={errors.county?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Rua"
              type="text"
              fullWidth
              {...register('streetname')}
              error={!!errors.streetname}
              helperText={errors.streetname?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Número"
              type="text"
              fullWidth
              {...register('housenumber')}
              error={!!errors.housenumber}
              helperText={errors.housenumber?.message}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Complemento"
              type="text"
              fullWidth
              {...register('complement')}
              error={!!errors.complement}
              helperText={errors.complement?.message}
            />
          </Grid>
          <Grid item xs={12} container justifyContent="center">
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              color="primary"
            >
              Registre
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
