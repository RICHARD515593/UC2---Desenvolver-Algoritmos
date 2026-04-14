let heroi1 = "  naruto"
let heroi2 = "deku"


const heroi11 = heroi1.trim()
const heroi21 = heroi2.trim()
const heroi12 = heroi11.toLocaleUpperCase()
const texto = "Naruto encontra deku no mundo ninja"
const heroi13 = heroi2.toLocaleLowerCase()

const heroi22 = texto.replaceAll("Naruto", "deku")
const hero112 = texto.replaceAll("deku", "Naruto")
const hero14 = heroi22.includes("Naruto")

console.log(heroi11)
console.log(heroi21)
console.log(heroi12)
console.log(heroi13)
console.log(heroi22)
console.log(hero112)
console.log(hero14)