export interface CompanyData {
  place_id: number
  companyName: string
  businessName: string
  cnpj: string
  streetname: string
  housenumber: string
  postalcode: string
  city: string
  state: string
  country: string
  county: string
  complement?: string
  lat: number
  lon: number
}

export interface GetLocationCompanyResponse {
  place_id: number
  licence: string
  osm_type: string
  osm_id: number
  lat: number
  lon: number
  category: string
  type: string
  place_rank: number
  importance: number
  addresstype: string
  name: string
  display_name: string
  boundingbox: string[]
}
export type GetLocationCompanyResponseArray = GetLocationCompanyResponse[]
