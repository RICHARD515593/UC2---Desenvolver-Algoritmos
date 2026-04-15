// Importando a biblioteca
const prompt = require('prompt-sync')({sigint: true})

// Função que pede números, calculo e imprime
function calcularEimprimir(){
    const a = Number(prompt("Digite o primeiro número"))
    const b = Number(prompt("Digite o segundo número"))

    soma = a + b
    subtracao = a - b
    multiplicacao = a * b
    divisao = a/b
    modulo = a%b
    console.log("resultado: ")
     console.log("soma: ", soma)
      console.log("subtracao: ", subtracao)
       console.log("multiplicacao: ", multiplicacao)
       console.log("divisão: ", divisao)
       console.log("modulo: ", modulo)
}
calcularEimprimir()