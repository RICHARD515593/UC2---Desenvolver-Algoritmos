function din(a){
    console.log(a)
    
}

function converter(reais, bolivar, dolar ,euro){
const cb = reais * bolivar
din("Reais em bolivia: " + cb)

const cd = reais * dolar
din("Reais em dolar: " + cd)

const ce = reais * euro
din("Reias em euro: " + ce.toFixed(2)) }

converter(3000,95.45,0.20,0.17)
