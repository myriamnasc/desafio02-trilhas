//Crie um programa utilizando o loop "do...while" para solicitar a senha de acesso ao usuário.
//  O usuário terá um limite de três tentativas para inserir a senha correta.
// a)      Se a senha for inserida corretamente dentro do limite de tentativas, exiba a mensagem: "Acesso concedido!"
// b)  	Caso contrário, exiba a mensagem: "Senha bloqueada!"

const prompt = require('prompt-sync')(); 
const senhaCorreta = 'felicidade';
let tentativas = 0;
let senha;

do {
    senha = prompt('Digite uma senha: ')

    if (senha === senhaCorreta){
        console.log('Acesso concedido!')
        break;
    } else {
        tentativas++;
        console.log(`Senha incorreta. Tentativas restantes: ${3 - tentativas}`)
    }
} while (tentativas < 3);

if (tentativas === 3) {
    console.log('Senha bloqueada!');
}
    
