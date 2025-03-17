// Crie uma função chamada calcularQuadrado que receba um número como parâmetro e retorne o quadrado desse número.

const prompt = require('prompt-sync')();
function calcularQuadrado(numero){
    return numero ** 2;
}

let numeroUsuario = Number(prompt('Digite um número: '));

console.log(`O quadrado desse número equivale a : ${calcularQuadrado(numeroUsuario)}`)