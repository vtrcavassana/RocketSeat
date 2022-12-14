// Executar uma função a cada intervalo de tempo
const timeOut = 2000
const checando = () => console.log('Verificando...')

// 'checando' será executada a cada 2 segundos (por callback)
setInterval(checando, timeOut)