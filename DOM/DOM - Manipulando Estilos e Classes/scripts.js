// Alterando Estilos com Style
const element = document.querySelector('body')
element.style.backgroundColor = '#7159c1'
console.log(element.style.backgroundColor)

// Alterando Estilos com classList
const element1 = document.querySelector('body')
element1.classList.add('active', 'green')
console.log(element1.classList)

// Removendo Estilos com classList
const element2 = document.querySelector('body')
element2.classList.remove('active')

// Verificando se existe uma classe
const element3 = document.querySelector('body')
console.log(element3.classList.contains('active')) // true se não tiver sido removido

// Alternando classes
const element4 = document.querySelector('body')
element4.classList.toggle('active')