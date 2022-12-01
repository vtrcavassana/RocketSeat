// Criando as querys que serão usadas para manipular o DOM
const clicaButton = document.querySelector('button')
const divModificado = document.querySelector('div')
const teste = document.querySelector('body')

// Criando um EventListener para esperar um click no botão e executar uma função para remover a classe 'invisible' do elemento 'div'
clicaButton.addEventListener('click', function(){
    // const divModificado = document.querySelector('div')
    divModificado.classList.toggle('invisible')
})

// Criando um Event que espera um click da tecla 'ESC' para adicionar a classe 'invisible' ao elemento 'div' novamente
teste.onkeydown = function(evento) {
    if(evento.key === 'Escape') {
        // const divModificado = document.querySelector('div')
        divModificado.classList.toggle('invisible')
    }
}