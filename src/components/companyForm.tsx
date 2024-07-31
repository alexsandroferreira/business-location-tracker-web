import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const companyFormSchema = z.object({
  companyName: z
    .string()
    .nonempty({ message: 'Nome da empresa é obrigatório' }),
  businessName: z
    .string()
    .length(14, { message: 'CNPJ deve ter 14 caracteres' }),
  cnpj: z.string().length(14, { message: 'CNPJ deve ter 14 caracteres' }),
  streetname: z.string().nonempty({ message: 'Rua é obrigatório' }),
  housenumber: z.string().nonempty({ message: 'Numero é obrigatório' }),
  postalcode: z.number({ message: 'Cep é obrigatório' }),
  city: z.string().nonempty({ message: 'Cidade é obrigatória' }),
  state: z.string().nonempty({ message: 'Estado é obrigatório' }),
  country: z.string().nonempty({ message: 'País é obrigatório' }),
  county: z.string().nonempty({ message: 'Bairro é obrigatório' }),
  complement: z.string().optional(),
})

type CompanyFormData = z.infer<typeof companyFormSchema>

export function CompanyForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CompanyFormData>({
    resolver: zodResolver(companyFormSchema),
  })

  async function handleRegisterCompany(data: CompanyFormData) {
    console.log(data)
    toast.success('cadastro com sucesso')
  }
  return (
    <>
      <Typography color="primary" variant="h3">
        Registre sua Empresa
      </Typography>
      <form onSubmit={handleSubmit(handleRegisterCompany)}>
        <Stack spacing={2} width={400}>
          <TextField
            label="Nome da Empresa"
            type="text"
            {...register('companyName')}
            error={!!errors.companyName}
            helperText={errors.companyName?.message}
          />
          <TextField
            label="CNPJ"
            type="text"
            {...register('cnpj')}
            error={!!errors.cnpj}
            helperText={errors.cnpj?.message}
          />
          <TextField
            label="Nome Fantasia"
            type="text"
            {...register('businessName')}
            error={!!errors.businessName}
            helperText={errors.businessName?.message}
          />
          <TextField
            label="Pais"
            type="text"
            {...register('country')}
            error={!!errors.country}
            helperText={errors.country?.message}
          />
          <TextField
            label="Nome da Estado"
            type="text"
            {...register('state')}
            error={!!errors.state}
            helperText={errors.state?.message}
          />
          <TextField
            label="Cidade"
            type="text"
            {...register('city')}
            error={!!errors.city}
            helperText={errors.city?.message}
          />
          <TextField
            label="CEP"
            type="number"
            {...register('postalcode')}
            error={!!errors.postalcode}
            helperText={errors.postalcode?.message}
          />
          <TextField
            label="Bairro"
            type="text"
            {...register('county')}
            error={!!errors.county}
            helperText={errors.county?.message}
          />
          <TextField
            label="Rua"
            type="text"
            {...register('streetname')}
            error={!!errors.streetname}
            helperText={errors.streetname?.message}
          />
          <TextField
            label="Número"
            type="text"
            {...register('housenumber')}
            error={!!errors.housenumber}
            helperText={errors.housenumber?.message}
          />
          <TextField
            label="Complemento"
            type="text"
            {...register('complement')}
            error={!!errors.complement}
            helperText={errors.complement?.message}
          />

          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
          >
            Registre
          </Button>
        </Stack>
      </form>
    </>
  )
}
