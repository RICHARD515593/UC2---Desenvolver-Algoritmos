// VERIFICANDO SE O NÚMERO É PAR OU IMPAR
const prompt = require("prompt-sync")()

let numero = Number(prompt("Digite um número: "))

// condicionais id/else
    if(numero % 2 === 0){
        console.log( "Esse número é PAR")
    }else{
        console.log(" Esse número é ÌMPAR")
    }