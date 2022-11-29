// Criando e Adicionando Elementos na Página (insertBefore)

// Criando um elemento
const divCriada = document.createElement('div')
divCriada.innerText = 'Criando uma div!'

// Adicionando um elemento
const pagina = document.querySelector('body') // Selecionando o elemento pai
const lugarInsercao = pagina.querySelector('script') // Selecionando o elemento antes do qual o elemento filho será inserido

pagina.insertBefore(divCriada, lugarInsercao) // Adicionando o elemento filho antes do elemento selecionado