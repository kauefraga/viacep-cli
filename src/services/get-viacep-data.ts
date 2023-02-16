import api from '../axios';

import ViacepAPIResponse from '../types/viacep-api-response';

export async function getViacepData(cep: string) {
  const uri = `/${cep}/json/`;

  const response = await api.get<ViacepAPIResponse>(uri);

  return response.data;
}
