import { z } from 'zod'

export const companyFormSchema = z.object({
  companyName: z
    .string()
    .refine((data) => !/\d/.test(data), {
      message: 'O nome da Empresa não pode conter números.',
    })
    .refine((data) => data.length >= 3, {
      message: 'O nome da Empresa deve ter pelo menos 3 caracteres.',
    })
    .refine((data) => data.length <= 80, {
      message: 'O nome da Empresa deve ter no máximo 80 caracteres.',
    })
    .refine((data) => data.trim().length > 0, {
      message: 'O nome da Empresa não pode estar vazio.',
    })
    .refine((value) => /^[a-zA-Z\s]+$/.test(value), {
      message: 'O nome da Empresa deve conter apenas letras e espaços.',
    }),
  businessName: z
    .string()
    .refine((data) => !/\d/.test(data), {
      message: 'O nome Fantasia não pode conter números.',
    })
    .refine((data) => data.length >= 3, {
      message: 'O nome Fantasia deve ter pelo menos 3 caracteres.',
    })
    .refine((data) => data.length <= 80, {
      message: 'O nome Fantasia deve ter no máximo 80 caracteres.',
    })
    .refine((data) => data.trim().length > 0, {
      message: 'O nome Fantasia não pode estar vazio.',
    })
    .refine((value) => /^[a-zA-Z\s]+$/.test(value), {
      message: 'O nome da Empresa deve conter apenas letras e espaços.',
    }),
  cnpj: z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
    message: 'CNPJ deve estar no formato XX.XXX.XXX/XXXX-XX',
  }),
  streetname: z.string().nonempty({ message: 'Rua é obrigatório' }),
  housenumber: z.string().nonempty({ message: 'Numero é obrigatório' }),
  postalcode: z.string().regex(/^\d{5}-?\d{3}$/, {
    message: 'CEP deve estar no formato XXXXX-XXX',
  }),
  city: z
    .string()
    .regex(/^[a-zA-ZáÁâÂàÀãÃéÉêÊíÍóÓôÔõÕúÚçÇ\s]+$/, {
      message: 'O Cidade deve conter apenas letras.',
    })
    .min(2, 'Mínimo de 2 caracteres.')
    .max(20, 'Limite de 20 caracteres.'),
  state: z
    .string()
    .regex(/^[a-zA-ZáÁâÂàÀãÃéÉêÊíÍóÓôÔõÕúÚçÇ\s]+$/, {
      message: 'O estado deve conter apenas letras.',
    })
    .min(2, 'Mínimo de 2 caracteres.')
    .max(20, 'Limite de 20 caracteres.'),
  country: z
    .string()
    .regex(/^[a-zA-ZáÁâÂàÀãÃéÉêÊíÍóÓôÔõÕúÚçÇ\s]+$/, {
      message: 'O País deve conter apenas letras.',
    })
    .min(2, 'Mínimo de 2 caracteres.')
    .max(20, 'Limite de 20 caracteres.'),
  county: z.string().nonempty({ message: 'Bairro é obrigatório' }),
  complement: z.string().optional(),
  lat: z.string().optional(),
  lon: z.string().optional(),
})
