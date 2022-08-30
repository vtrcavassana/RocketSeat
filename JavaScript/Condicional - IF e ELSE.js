// Condicional - IF e ELSE

let temp = prompt("Digite a temperatura: ")
let r = isNaN(temp)

if(temp < 36 || r){
    console.log(`${temp} inválida e/ou ta congelado XD`)
}
else if(temp == 37.5){
    console.log(`${temp}, febre`)
}
else if(temp > 39.5){
    console.log(`${temp}, febre alta`)
}
else if(temp > 37.5 && temp < 39.4){
    console.log(`${temp}, febre moderada`)
}
else{
    console.log(`${temp}, saudável`)
}