// Funções:
//Uma função é um bloco de codigo que executa uma tarefa especifica.
//
// recebe algo(entrada ou pâmetros)
//processa algo
//entrega um resultado (saida ou retorno)


//-----------------------------------------
//declarando a função
function imprimirOlamundo(){
    console.log("Olá Mundo!") // ação da função
}

// Chamada da função para executar
imprimirOlamundo()

// 2. Função com parâmetros
// Podemos passar informações para a função. essas informações são os parâmetros que ela vai precisar para executa sua tarefa

// Função que soma dois numeros
function somar(a,b){
    return a + b
}
// Chama a função
let resultado = somar(3256,4839)
console.log(resultado)

//3. Arrow function (Funções de seta =>): possuem uma sintaxe mais curta
const multiplicar = (x,y) => x * y
console.log(multiplicar(4,5))

