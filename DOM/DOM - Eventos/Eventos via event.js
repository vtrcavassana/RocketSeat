// Eventos via event

const digitarNoInput = document.querySelector('input')

// variável.método = função(evento)
digitarNoInput.onkeydown = function(evento) {
    console.log(evento.currentTarget.value)
}