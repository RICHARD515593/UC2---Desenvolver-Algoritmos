// Maior ou menor de idade com operador ternario
const prompt = require("prompt-sync")()

// pede a idade do usuario
let idade = Number(prompt("Digite sua idade "))
// usa o operador ternario
let resultado = idade >= 18 ? "maior de idade" : "Menor de idade"
console.log(resultado)