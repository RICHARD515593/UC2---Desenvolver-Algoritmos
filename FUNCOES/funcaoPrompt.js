// importar a biblioteca
const prompt = require('prompt-sync')({singint: true})
// Função simples para cumprimentar o usuario
function cumprimentarUsuario(){
    //pede o nome do usuario
    const nome = prompt("Digite seu nome:")

    // Mostra uma saudação personalizada
    console.log(`olá, ${nome}! Seja bem-vindo(a) a Turma TDS261T!`)

}
// Chamada da função
cumprimentarUsuario()