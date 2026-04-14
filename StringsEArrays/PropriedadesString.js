// A propriedade length nos diz qual é o tamanho de uma string, incluindo os espaços

// const nome = " João NaoSei Cavaaaloo da Silva "
// console.log(nome.length)

const nome2 = "monkey D. Luffy"
console.log(nome2.length)

//////////////////////////////////////////////////////////////////////////////////////
// Metodo: toLowerCase()
// Transforma todas as letras da string em minuscula
const frase = " O DIa Esta LIndooooooo DeMaIs!"
const fraseMinuscula = frase.toLocaleLowerCase()
console.log(fraseMinuscula)
////////////////////////////////////////////////////////////////////////////////////////
// Metodo: toUpperCase()
// transforma todas as letras da string em maiuscula

const frase2 = " O dia está Terminando"
const fraseMaiuscula = frase2.toUpperCase()
console.log(fraseMaiuscula)
//////////////////////////////////////////////////////////////////////////////////////////////////
// Metodo: trim()
// retira espaços que existem antes e depois de sua string (util em formularios e logins)
const email ='                senquinho@senacrs.com                 '
console.log(email.trim())
////////////////////////////////////////////////////////////////////////////////////////////////////////]
// Metodo: includes(caracteres): determina se um conjunto de caracteres pode ser encontrado dentro
// de uma outra string, retorna um valor booleando true ou false
const frase3 =" hoje comi cenoura"
console.log(frase3.includes("cenoura"))
console.log(frase3.includes("batata"))


const frase4 = " a força de um guerreiro não vem de vencer sozinho, mas de nunca desistir de lutar pelo que acredita"
console.log(frase4.includes("guerreiro"))
console.log(frase4.includes("desiste"))
console.log(frase4.includes("luta"))
console.log(frase4.includes("acreditar"))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Metodo: replaceAll(chars1, chars2): troca todas as ocorrencias de um conjunto de caracteres (chars1) por alguma outra coisa (chars2)
const frase5 = "Hoje comi cenoura, adoro cenoura"
const novaFrase5 = frase5.replaceAll("cenoura", "batata")
console.log(novaFrase5)