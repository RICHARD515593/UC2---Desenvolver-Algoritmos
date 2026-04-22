const prompt = require('prompt-sync')({singint: true})
function gritar(){
    let perg1 = prompt("escreva uma mensagem: ")
    let perg2 = perg1.toLocaleUpperCase()
    console.log(perg2)
}
gritar()