// Crie uma função que receba um nome como parâmetro e retorne uma mensagem personalizada no seguinte formato: "Olá, (nome), que bom ter você no programa Trilhas."

const prompt = require('prompt-sync')();
function mensagem(nome){
    return `Olá, ${nome}, que bom ter você no programa Trilhas.`;
}

let nomeUsuario = prompt('Digite seu nome: ')

console.log(mensagem(nomeUsuario));