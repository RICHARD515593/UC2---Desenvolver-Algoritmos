const prompt = require("prompt-sync")()
let codigo = Number(prompt("Digite o codigo"))
let acesso = codigo === 777 ? "Acesso liberado" : "ALARME ATIVADO"
console.log(acesso)