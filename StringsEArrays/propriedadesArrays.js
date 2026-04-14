// Arrays são listas de elementos ou uma estrutura de dados maior

const listaCompras = ["batata", "alface", "queijo"]
console.log(listaCompras)

// Arrays armazana elementos de qualquer tipo
const meuArrayDiverso = ["banana", 15, true]
console.log(meuArrayDiverso)

// Arrays tem indices para "endereçar" seu elementos e sempre cpmeça em 0
// const arrayFrutas = ["banana", "maça", "tomate"]
//             indices ->   0        1       2
// Para acessar esse elemento, basta informa o seu enreço/ indice
//const segundoitem = arrayFrutas[2]

arrayFrutas = ["banana", "maça", "tomate"]
const segundoItem = arrayFrutas[2]
console.log(segundoItem)

// Propriedades de array
//
// Propriedades length: nos diz qual é a quantidade de item de um array

const pokemon = ["bulbasauro", "squirtle", "charmander"]
const quantidadeItem = pokemon.length
console.log(quantidadeItem)

//Propriedade ou Método includes(elemento): determinase um array contem um determinado elemento. Sempre retorna um true(se sim) ou false (se não)
const seriesBoas = ["Breaking Bad", "Brooklyn Nine-nine"]
const temBreakingBad = seriesBoas.includes("Breaking Bad")
const temGOT = seriesBoas.includes("Brooklyn Nine-nine")

console.log("Na array seriesBoas, tem GOT? ", temGOT)

// Propriedade ou Método push(elemento): adicionado um ou mais elemento ao FINAL de um array

const numeros =[1, 2, 3]
numeros.push(4)

console.log(numeros)

numeros.push(5, 6, 7, 8)
console.log(numeros)

// Propriedades ou Metodos unshift() : adiciona um novo item no começo do array
let cores = ["azul", "verde"]
cores.unshift('vermelho')
console.log(cores)

// Propriedades ou Métodos shift() - remove do começo (o primeiro item do array)

let frutas = ["maça", "banana", "laranja"]
frutas.shift()
console.log(frutas)

// Propriedade ou Método pop(): remove o último elemento de um array

let meusPeixes = ["palhaço", "mandarim", "esturjão"]
meusPeixes.pop()
console.log(meusPeixes)

// Propriedade ou Método splice(i,n): remove n elemento à partir da posição i do array

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
// índices (i)   0    1    2    3    4    5    6    7 
console.log("Array completa ", letras)

// Aplicando o método splice(i, n)
// da array letras, na posição 2 ("c") remove 1 elemento (o próprio "C")
let letrasSemUmElemento = letras.splice(2, 1)
console.log("Array com splice(2,1):", letrasSemUmElemento)
console.log("Array letras ficou assim:", letras)

// da array letras, na posoção 3 ("D") remove 2 ("E" e "F")
let letrasSemDoisElementos = letras.splice(3, 2)
console.log("Array com splice(3,2: ", letrasSemDoisElementos)
console.log("Array letras ficou assim:", letras)

// Propriedades ou Método concat(): junta dois ou mais arrays para formar um novo array
let frutas2 = ["maçã", "banana"]
let legumes = ["cenoura", "batata"]
let alimentos = frutas2.concat(legumes)
console.log(alimentos)

// Propriedades ou Métodos sort(): ele organiza os itens em ordem crecente (por padrão, ordem alfabetica para strings)

let frutas3 = ["banana", "tangerina do gusta", "bergamota", "laranja"]
frutas. sort()
console.log(frutas3)