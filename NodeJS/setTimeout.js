// Executar uma função após um tempo determinado
const timeOut = 3000
const acabou = () => console.log('Após 3s, acabou!')

// 'acabou' será executada após 3 segundos (por callback)
setTimeout(acabou, timeOut)