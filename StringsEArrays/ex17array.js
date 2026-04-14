let animais = ["cachorro", "gato", "coelho"]
animais.push("elefante")
console.log(animais)
animais.unshift("leão")
console.log(animais)
animais.shift(0)
console.log(animais)
animais.pop(3)
console.log(animais)
const novo = ["jaguatirica", "capivara"]
const animais2 = animais.concat(novo)
console.log(animais2)