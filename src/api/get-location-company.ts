import { GetLocationCompanyResponseArray } from '../interface'
import { api } from '../lib/axios'

export async function getLocationCompany(address: string) {
  const response = await api.get<GetLocationCompanyResponseArray>(
    `/search?q=${address}&format=json&addressdetails=1`,
  )

  return response.data[0]
}
