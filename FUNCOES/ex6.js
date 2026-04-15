const prompt = require('prompt-sync')({singint: true})
function poder(){
    const nome = prompt("Qual seu superpoder favorito:")
console.log(`Seu poder favorito é ${nome}!`)
}

poder()