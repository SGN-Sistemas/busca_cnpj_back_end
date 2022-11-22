import { consultar } from 'consulta-cnpj-br';

const cnpjInova = "07.047.220/0001-10";

consultar(cnpjInova).then(res =>{
  console.log(res)
})