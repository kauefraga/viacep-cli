/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import api from '../axios';

import ViacepAPIResponse from '../types/ViacepAPIResponse';

// TODO: transform this into a class

let cachedData: any = null;

async function getViacepData(cep: string): Promise<ViacepAPIResponse> {
  if (cachedData) {
    return cachedData;
  }

  const uri = `/${cep}/json/`;

  const response = await api.get(uri);

  cachedData = response.data;

  return response.data;
}

export default getViacepData;
