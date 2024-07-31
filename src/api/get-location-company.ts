import { api } from '../lib/axios'

export async function getLocationCompany(address: string) {
  const response = await api.get(
    `/search?q=${address}&format=json&addressdetails=1`,
  )

  return response.data[0]
}
