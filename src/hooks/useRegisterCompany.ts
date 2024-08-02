import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { getLocationCompany } from '../api/get-location-company'
import { CompanyData } from '../interface'
import { companyFormSchema } from '../validators/schemas'
import { CompanyFormData } from '../validators/types'

interface UseRegisterCompanyProps {
  onAddCompany: (company: CompanyData) => void
}

export function useRegisterCompany({ onAddCompany }: UseRegisterCompanyProps) {
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

      onAddCompany(companyData)
      reset()

      toast.success('Cadastro com sucesso')
    } catch (error) {
      toast.error(
        'Houve uma falha ao registrar a empresa. Por favor, verifique o endereço informado.',
      )
    }
  }

  return {
    register,
    handleSubmit,
    handleRegisterCompany,
    isSubmitting,
    errors,
    reset,
  }
}
