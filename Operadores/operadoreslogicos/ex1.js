//operadores logicos - ultilizados geralmente para testa

/* - Operador E ( tudo deve ser verdadeiro).
Representamos com: &&

- Operador OU (Uma condição sendo verdadeira já basta). Representamos com: ||

- Operador NAO (Inverte o valor). Representamos com: ! */


const idade = 44 // idade da pessoa
const temAssinatura = true // idica se a pessoa tem assinatura ativa

//Verificando se a pessoa pode acessar:
// Condições:
// - Precisa ser maior ou igual a 18 anos (>= 18)
// - E - &&
// - Ter assinatura (true)

const podeAcessar = idade >= 18 && temAssinatura

console.log(podeAcessar)
