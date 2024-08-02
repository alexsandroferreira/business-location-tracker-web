import { z } from 'zod'

export const companyFormSchema = z.object({
  companyName: z
    .string()
    .min(1, 'O nome da Empresa é obrigatório')
    .min(3, 'O nome da Empresa deve ter pelo menos 3 caracteres')
    .max(80, 'O nome da Empresa deve ter no máximo 80 caracteres')
    .regex(
      /^[a-zA-Z\s]+$/,
      'O nome da Empresa deve conter apenas letras e espaços',
    )
    .refine((data) => !/\d/.test(data), {
      message: 'O nome da Empresa não pode conter números.',
    }),
  businessName: z
    .string()
    .min(1, 'O nome Fantasia é obrigatório')
    .min(3, 'O nome Fantasia deve ter pelo menos 3 caracteres')
    .max(80, 'O nome Fantasia deve ter no máximo 80 caracteres')
    .regex(
      /^[a-zA-Z\s.]+$/,
      'O nome Fantasia deve conter apenas letras, espaços e pontos',
    )
    .refine((data) => !/\d/.test(data), {
      message: 'O nome Fantasia não pode conter números.',
    }),
  cnpj: z
    .string()
    .min(1, 'CNPJ é obrigatório')
    .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
      message: 'CNPJ deve estar no formato XX.XXX.XXX/XXXX-XX',
    }),
  streetname: z.string().min(1, 'Rua é obrigatório'),
  housenumber: z
    .string()
    .min(1, 'Número é obrigatório')
    .regex(/^\d+$/, 'Número deve conter apenas dígitos'),
  postalcode: z
    .string()
    .min(1, 'Cep é obrigatório')
    .regex(/^\d{5}-?\d{3}$/, {
      message: 'CEP deve estar no formato XXXXX-XXX',
    }),
  city: z
    .string()
    .min(1, 'Cidade é obrigatório.')
    .regex(/^[a-zA-ZáÁâÂàÀãÃéÉêÊíÍóÓôÔõÕúÚçÇ\s]+$/, {
      message: 'Cidade deve conter apenas letras.',
    })
    .max(80, 'Limite de 80 caracteres.'),
  state: z
    .string()
    .min(1, 'Estado é obrigatório.')
    .max(80, 'Limite de 80 caracteres.')
    .regex(/^[a-zA-ZáÁâÂàÀãÃéÉêÊíÍóÓôÔõÕúÚçÇ\s]+$/, {
      message: 'Estado deve conter apenas letras.',
    }),
  country: z
    .string()
    .min(1, 'País é obrigatório.')
    .max(80, 'Limite de 80 caracteres.')
    .regex(/^[a-zA-ZáÁâÂàÀãÃéÉêÊíÍóÓôÔõÕúÚçÇ\s]+$/, {
      message: 'País deve conter apenas letras.',
    }),
  county: z
    .string()
    .min(1, 'Bairro é obrigatório.')
    .max(80, 'Limite de 80 caracteres.')
    .regex(/^[a-zA-ZáÁâÂàÀãÃéÉêÊíÍóÓôÔõÕúÚçÇ\s]+$/, {
      message: 'Estado deve conter apenas letras.',
    }),
  complement: z.string().optional(),
  lat: z.string().optional(),
  lon: z.string().optional(),
})
