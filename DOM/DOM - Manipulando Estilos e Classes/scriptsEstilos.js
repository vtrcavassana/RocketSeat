// Alterando Estilos com JavaScript

// getElementById(id) -> Pega do HTML o elemento com o id especificado
const elementById = document.getElementById('titulo-blog')
console.log(elementById)

// getElementsByClassName(name) -> Pega do HTML todos os elementos com a classe especificada
const elementByClassName = document.getElementsByClassName('post')
console.log(elementByClassName)

// getElementsByTagName(name) -> Pega do HTML todos os elementos com a tag especificada
const elementByTagName = document.getElementsByTagName('meta')
console.log(elementByTagName)

// querySelector(css ou tag) -> Pega do HTML o primeiro elemento que corresponde ao seletor CSS/tag especificado
const elementByQuerySelector = document.querySelector('script')
console.log(elementByQuerySelector)

// querySelectorAll(css ou tag) -> Pega do HTML todos os elementos que correspondem ao seletor CSS/tag especificado
const elementsByQuerySelectorAll = document.querySelectorAll('.post')
console.log(elementsByQuerySelectorAll)