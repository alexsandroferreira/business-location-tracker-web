import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'

import { useRegisterCompany } from '../hooks/useRegisterCompany'
import { CompanyData } from '../interface'
import { insertMaskInCEP, insertMaskInCNPJ } from '../utils/mask'

interface CompanyFormProps {
  onAddCompany: (company: CompanyData) => void
}
export function CompanyForm({ onAddCompany }: CompanyFormProps) {
  const isSmallScreen = useMediaQuery('(max-width:600px)')

  const {
    register,
    handleSubmit,
    handleRegisterCompany,
    isSubmitting,
    errors,
  } = useRegisterCompany({ onAddCompany })

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
          <Grid item xs={12}>
            <TextField
              label="Nome da Empresa"
              type="text"
              fullWidth
              {...register('companyName')}
              error={!!errors.companyName}
              helperText={errors.companyName?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Nome Fantasia"
              type="text"
              fullWidth
              {...register('businessName')}
              error={!!errors.businessName}
              helperText={errors.businessName?.message}
            />
          </Grid>

          <Grid item xs={12} sm={7}>
            <TextField
              label="CNPJ"
              type="text"
              fullWidth
              {...register('cnpj')}
              error={!!errors.cnpj}
              helperText={errors.cnpj?.message}
              onChange={(e) => {
                e.target.value = insertMaskInCNPJ(e.target.value)
              }}
            />
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField
              label="País"
              type="text"
              fullWidth
              {...register('country')}
              error={!!errors.country}
              helperText={errors.country?.message}
              autoComplete="off"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Estado"
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
              onChange={(e) => {
                e.target.value = insertMaskInCEP(e.target.value)
              }}
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

          <Grid item xs={12} sm={8}>
            <TextField
              label="Rua"
              type="text"
              fullWidth
              {...register('streetname')}
              error={!!errors.streetname}
              helperText={errors.streetname?.message}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              label="Número"
              type="text"
              fullWidth
              {...register('housenumber')}
              error={!!errors.housenumber}
              helperText={errors.housenumber?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Complemento"
              type="text"
              fullWidth
              {...register('complement')}
              error={!!errors.complement}
              helperText={errors.complement?.message}
              autoComplete="off"
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
