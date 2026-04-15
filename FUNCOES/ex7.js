const prompt = require('prompt-sync')({singint: true})
function texto(){
    const nome = prompt("Qual seu nome: ")
    const animal = prompt("escolha um animal: ")
console.log(`Seu apelido é ${nome} ${animal}!`)
}

texto()