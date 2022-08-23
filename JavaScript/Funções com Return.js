// Função anonima com Return
const soma = function(n1, n2) {
    total = n1 + n2
    return total
}

const n1 = 20
const n2 = 30


console.log(`Valor de n1: ${n1}`)
console.log(`Valor de n2: ${n2}`)
console.log(`n1 + n2: ${soma(n1, n2)}`)

// Com console.log, o resultado aparece na tela.
console.log(`\nSoma de 2 + 3: ${soma(2, 3)}`)

// Sem 'console.log' (na função), o resultado não aparece na tela.
soma(n1, n2)