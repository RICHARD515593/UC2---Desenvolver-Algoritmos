//verificado se a pessoa pode usar o cupom:
// condições:
// OU - ||
// - Ser cliente VIP (true)
const valorCompra = 200
const clienteVIP = false

const podeUsarCupom = valorCompra > 100 || clienteVIP

console.log(podeUsarCupom)