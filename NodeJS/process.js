// Processando arquivos com NodeJS

// Exibindo todos as informações do módulo process
console.log(process)

// Exibindo os argumentos do módulo process (aceita parâmetros e os coloca em um array)
console.log(process.argv)

// Exibindo o primeiro argumento do módulo process
console.log(`Exibindo o primeiro argumento: ${process.argv[0]}`)

// Exibindo um terceiro e quarto argumento do módulo process (deve ser passado como parâmetro no terminal)
console.log(`Exibindo um terceiro e quarto argumento: ${process.argv[2]} ${process.argv[3]}`)

// Exibindo valores em variáveis
const primeiroNome = 'Vitus'
const ultimoNome = 'Von'
console.log(`Exibindo valores em variáveis: ${primeiroNome} ${ultimoNome}`)