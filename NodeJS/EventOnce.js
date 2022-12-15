// Emite um evento após o Listener desse evento ser registrado
const EventEmitter = require('events')

// Atribui o objeto 'EventEmitter' a uma constante
const evento = new EventEmitter()

// Emite o evento 'Diga Algo' apenas uma vez
evento.once('Diga Algo', nome => {
    console.log('Te escutei:', nome)
})

// 'Diga Algo' é emitido apenas uma vez, mesmo que seja chamado várias vezes
evento.emit('Diga Algo', 'Vitolas')
evento.emit('Diga Algo', 'Vitola')
evento.emit('Diga Algo', 'Vitoca')