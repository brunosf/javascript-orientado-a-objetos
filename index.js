import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const fulano = new Cliente("Fulano da Silva", 11122233309);
const siclano = new Cliente("Siclano da Silva", 33322233309);

const contaCorrente1 = new ContaCorrente(123, fulano, 500);
const contaCorrente2 = new ContaCorrente(321, siclano);

console.log(contaCorrente1);
console.log(contaCorrente2);

contaCorrente1.transferir(200, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);

console.log(ContaCorrente.numeroDeContas);
