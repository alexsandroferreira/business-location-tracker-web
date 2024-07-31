import type { z } from 'zod'

import type { companyFormSchema } from './schemas'

export type CompanyFormData = z.infer<typeof companyFormSchema>
