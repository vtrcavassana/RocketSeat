// Eventos via JavaScript

const tituloH1 = document.querySelector('h1')

// Adicionando um evento de click (clicar) no elemento
tituloH1.addEventListener('click', clicou)

// Função que será executada quando o evento for disparado
function clicou() {
    console.log('Clicou no título')
}

// Adicionando um evento de mouseover (passar o mouse por cima) no elemento
tituloH1.addEventListener('mouseover', passouMouse)

// Função que será executada quando o evento for disparado
function passouMouse() {
    console.log('Passou o mouse no título')
}