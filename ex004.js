// Solicite ao usuário cinco números, armazene-os em uma lista e, em seguida, exiba todos os números na tela.

const prompt = require('prompt-sync')(); 
lista = [];

for (let i = 0; i < 5; i++){
    let numero = Number(prompt('Digite um número: '));
    lista.push(numero);
}

console.log('Os números informados são: ')
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}