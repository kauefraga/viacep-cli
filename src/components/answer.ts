/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import ViacepAPIResponse from '../types/ViacepAPIResponse';

class Answer {
  constructor(
    public data: ViacepAPIResponse,
  ) {
    this.data = data;
  }

  // TODO: for...in loop
  showIt() {
    // eslint-disable-next-line no-console
    console.log({
      cep: this.data.cep,
      logradouro: this.data.logradouro,
      bairro: this.data.bairro,
      localidade: this.data.localidade,
      uf: this.data.uf,
      ddd: this.data.ddd,
    });
  }
}

export default Answer;
