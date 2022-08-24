// Manipulando Arrays

let coisas = ['carro', 'moto', 'caminhão', 'jegue', 'bicicleta']

// Adicionando elementos no final do array
coisas.push('onibus')
console.log(`Adicionando elemento no final (onibus): ${coisas}`)

// Adicionando elementos no início do array
coisas.unshift('carroça')
console.log(`Adicionando elemento no início (carroça): ${coisas}`)

// Removendo elementos do final do array
coisas.pop()
console.log(`Removendo elemento do final: ${coisas}`)

// Removendo elementos do início do array
coisas.shift()
console.log(`Removendo elemento do início: ${coisas}`)

// Pegar alguns elementos do array
console.log(`Pegando alguns elementos do array: ${coisas.slice(2, 4)}`)

// Remover um ou mais elementos do array em qualquer posição
console.log(`Removendo um ou mais elementos do array em qualquer posição: ${coisas.splice(1, 2)} -> ${coisas}`)

// Encontrar o índice de um elemento no array
console.log(`Em qual índice esta o item 'jegue': ${coisas} -> posição: ${coisas.indexOf('jegue')}`)