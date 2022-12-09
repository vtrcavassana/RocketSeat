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

const respostas = []

// Evento que escuta o input do usuário e exibe no terminal, utilizando o 'process.stdin.on(tipo de dado que espera receber do usuário, função)' e 'process.stdout.write'
process.stdin.on('data', dadinho => {
    // Adiciona a resposta no array de respostas
    respostas.push(dadinho.toString().trim())
    if (respostas.length < perguntas.length) {
        // Chama a função 'pergunta' passando o índice do array de perguntas (já que a função 'pergunta' se iniciou com o índice 0)
        pergunta(respostas.length)
    } else {
        // Exibe no terminal o array de respostas
        console.log(respostas)
        process.exit()
    }
})