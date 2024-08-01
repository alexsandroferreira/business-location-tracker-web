export function insertMaskInCEP(cep: string) {
  return cep.replace(/(\d{5})(\d)/, '$1-$2').slice(0, 9)
}

export function insertMaskInCNPJ(cnpj: string) {
  return cnpj
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .slice(0, 18)
}
