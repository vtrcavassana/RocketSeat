// process.stdout.write('Está gostando do curso?')

// Array de perguntas
const perguntas = [
    'Está gostando do curso?',
    'Está curtindo o NodeJS?',
    'Acha que vai conseguir aprender?',
    'O que aprendeu até agora?'
]

// Função que recebe o array de perguntas e exibe no terminal, utilizando o 'process.stdout.write'
function pergunta(i) {
    return process.stdout.write(`${perguntas[i]} -> `)
}

pergunta(0)

// Evento que escuta o input do usuário e exibe no terminal, utilizando o 'process.stdin.on(tipo de dado que espera receber do usuário, função)' e 'process.stdout.write'
process.stdin.on('data', dadinho => {
    // console.log(`Resposta: ${data.toString().trim()}`)
    process.stdout.write(`Resposta: ${dadinho.toString().trim()}` + '\n')
    process.exit() // Encerra o processo
})

// Laço de repetição que percorre o array de perguntas e executa a função 'pergunta'
// for(let i=0; i<perguntas.length; i++) {
//     pergunta(i)
// }