// Crie uma função chamada Subtracao que receba dois números como parâmetros e retorne o resultado da subtração entre eles.
const prompt = require('prompt-sync')();
function Subtracao(numero1,numero2) {
    return numero1 - numero2;
}

let numeroUsuario1 = Number(prompt('Digite um número: '));
let numeroUsuario2 = Number(prompt('Digite um número: '));

console.log(`Resultado da subtração: ${Subtracao(numeroUsuario1, numeroUsuario2)}`)