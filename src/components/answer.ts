import ViacepAPIResponse from '../types/viacep-api-response';

export function showData(data: ViacepAPIResponse) {
  return console.log({
    cep: data.cep,
    logradouro: data.logradouro,
    bairro: data.bairro,
    localidade: data.localidade,
    uf: data.uf,
    ddd: data.ddd,
  });
}
