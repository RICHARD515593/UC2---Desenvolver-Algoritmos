const prompt = require("prompt-sync")()
let cardapio =Number(prompt("Cardapio \n 1 - Pizza de sorvete \n 2 - Hamburguer de gelatina \n 3 - Sushi de chocolate \n 4 - batata frita com calda de morango \n 5 - Spaghetti de bala \n Escolha uma opção: "))
switch(cardapio){
    case 1:
        console.log("Você escolheu a opção 1 ")
        break
        case 2:
            console.log("Você escolheu a opção 2")
            break
            case 3:
                console.log("Você escolheu a opção 3")
                break
                case 4:
                    console.log("Você escolheu a opção 4")
                    break 
                    case 5:
                        console.log("Você escolheu a opção 5")
                        break
                        default:
                            console.log("Escolha uma opção: ")
                    
}