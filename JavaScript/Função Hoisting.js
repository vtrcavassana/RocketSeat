// Função Hoisting
digaMeuNome()

// "Hoisting" ocorre pois é uma função normal
function digaMeuNome(){
    console.log("Vitu")
}

digaMeuNome1()

// Não sofrera "Hoisting", pois a constante 'digaMeuNome1' não tem valor atribuído
const digaMeuNome1 = function(){
    console.log("Virtu")
}

digaMeuNome2()

// Não soferá "Hoisting", pois a função está sendo tratada com uma "função de expressão" -> "variável = function(){}"
const digaMeuNome2 = function digaMeuNome2(){
    console.log("Vi")
}