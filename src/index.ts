/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { clear } from 'node:console';
import { prompt } from 'enquirer';

import getViacepData from './services/getViacepData';
import Logo from './components/logo';
import Answer from './components/answer';

const logo = new Logo('Viacep');

async function init() {
  clear();
  logo.showIt();

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

  // eslint-disable-next-line no-unused-vars
  const [key, value] = userAnswer.split(':');
  const cep = value.replace(/["}]/g, '');

  const data = await getViacepData(cep);

  const answer = new Answer(data);

  answer.showIt();
}

init();
