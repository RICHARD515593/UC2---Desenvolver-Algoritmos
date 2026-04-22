// function conta(b,h){
    
// return b * h

// }
// let resultado =conta(2,7)
// console.log(resultado)


const prompt = require('prompt-sync')({singint: true})
function conta(){
    let b = prompt("escolha o primeiro numero: ")
    let h = prompt("escolha o segundo numero: ")
    let a = b * h
console.log(`A area é ${a} `)
}
conta()
