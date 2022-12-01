// Como executar módulos no NodeJS
// console.log(require()) // require() é uma função que recebe um parâmetro, que é o caminho do módulo que queremos executar

// Exemplo de módulo que queremos executar
// console.log(require('path')) // require('path') é um módulo que já vem com o NodeJS

// Exemplo de módulo que queremos executar por uma variável
const path = require('path')

console.log(path.basename(__filename)) // basename() é um método que retorna o nome do arquivo que está sendo executado