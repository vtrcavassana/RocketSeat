// Emite um evento após o Listener desse evento ser registrado
const EventEmitter = require('events')

const evento = new EventEmitter()
// Mostra todas as propriedades e métodos do objeto 'EventEmitter'
console.log(evento)

// Registra um Listener para o evento 'User logged'
evento.on('User logged', data => {
    console.log('Usuário logado:', data)
})

// Emite um evento 'User logged' após o Listener desse evento ser registrado
evento.emit('User logged', { user: 'Vitu' })
evento.emit('User logged', 'Vitoca')

// Registra um Listener para o evento 'Diga Algo'
evento.on('Diga Algo', nome => {
    console.log('Te escutei:', nome)
})

// Emite um evento 'Diga Algo' após o Listener desse evento ser registrado
evento.emit('Diga Algo', 'Vitola')
evento.emit('Diga Algo', 'Vi')
evento.emit('Diga Algo', 'Victor')