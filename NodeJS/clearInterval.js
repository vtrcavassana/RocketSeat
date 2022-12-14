// Cancela o setInterval
const timeOut = 2000
const checando = () => console.log('Verificando...')

// 'checando' será executada a cada 2 segundos (por callback)
const timer = setInterval(checando, timeOut)

// Cancela o setInterval (não executa a função, após 5 segundos)
setTimeout(() => clearInterval(timer), 5000)