// Cancela o Timeout
const timeOut = 3000
const acabou = () => console.log('Após 3s, acabou!')

// 'acabou' será executada após 3 segundos (por callback)
const timer = setTimeout(acabou, timeOut)

// Cancela o Timeout (não executa a função)
clearTimeout(timer)