const prompt = require("prompt-sync")()

let portal =prompt("Escolha uma opção \n F - Floresta \n D - Deserto \n G - Gelo \n Escolha uma letra: ")
switch(portal){
    case "F":
        console.log("Você entrou no portal da Floresta")
        break
        case "D":
            console.log("Você entrou no portal do deserto")
            break
            case "G":    
             console.log("Você entrou no portal do Gelo")
             break
             default:
                console.log("Escolha uma letra: ")
            
}