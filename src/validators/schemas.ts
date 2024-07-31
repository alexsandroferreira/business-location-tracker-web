import { z } from 'zod'

export const companyFormSchema = z.object({
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
