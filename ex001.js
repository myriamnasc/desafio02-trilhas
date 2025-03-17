// Utilize o comando de repetição “while”, para solicitar que o usuário informe um número.
// O programa deve continuar executando até que o usuário digite o número 3, momento em que deverá se encerrar.

const prompt = require('prompt-sync')(); 

let numero = 0; 

while (numero !== 3) { 
    numero = Number(prompt("Digite um número: ")); 
}
console.log("Fim!");



