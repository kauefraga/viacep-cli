import { clear } from 'node:console';
import { prompt } from 'enquirer';

import { getViacepData } from './services/get-viacep-data';
import { showLogo } from './components/logo';
import { showData } from './components/answer';

async function main() {
  clear();
  showLogo('Viacep');

  const userAnswer = await prompt({
    type: 'input',
    name: 'cep',
    message: 'Enter a cep:',
    validate: (value) => {
      if (value.length < 8) {
        return 'CEP must be 8 characters long';
      }
      return true;
    },
  })
    .then((answer) => JSON.stringify(answer));

  const { cep } = JSON.parse(userAnswer);

  const data = await getViacepData(cep);

  showData(data);
}

main();
