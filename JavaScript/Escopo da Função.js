// Com valor definido
let assunto = 'batata'

function criaAssunto(assunto){
    assunto = 'arroz'
    return assunto
}

console.log(`Valor de 'assunto' dentro do escopo da função 'criaAssunto': ${criaAssunto(assunto)}`)
console.log(`Valor de 'assunto' fora do escopo da função 'criaAssunto': ${assunto}`)

// Sem um valor definido
let assunto1

function criaAssunto1(assunto1){
    assunto1 = 'feijão'
    return assunto1
}

// "Undefined", pois 'assunto1' fora do escopo não tem valor
console.log(`Valor de 'assunto1' fora do escopo da função 'criaAssunto1': ${assunto1}`)

console.log(`Valor de 'assunto1' dentro do escopo da função 'criaAssunto1': ${criaAssunto1()}`)

// "Undefined", pois 'assunto1' fora do escopo não tem valor
console.log(`Valor de 'assunto1' fora do escopo da função 'criaAssunto1': ${assunto1}`)


// Sem valor definido + sem Return
let assunto2

function criaAssunto2(){
    assunto2 = 'bife'
}

// 'assunto2' não tem valor definido, então será "Undefined"
console.log(assunto2)

// 'criaAssunto2' não tem "Return", então terá como resultado "Undefined"
console.log(criaAssunto2())

// 'assunto2' recebe o valor que está definido no escopo da função 'criaAssunto2'
console.log(assunto2)