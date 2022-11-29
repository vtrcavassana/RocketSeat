// Criando e Adicionando Elementos na Página (append e prepend)

// Criando um elemento
const divCriada = document.createElement('div')
divCriada.innerText = 'Criando uma div!'

// Adicionando um elemento
const pagina = document.querySelector('body') // Selecionando o elemento pai
pagina.append(divCriada) // Adicionando o elemento filho

// Adicionando um elemento antes de outro
const divCriadaAntes = document.createElement('div')
divCriadaAntes.innerText = 'Criando uma div antes!'
pagina.prepend(divCriadaAntes)