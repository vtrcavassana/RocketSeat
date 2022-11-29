// Navegando pelos Elementos com childNodes e children

const elemento = document.querySelector('body')

// childNodes - retorna um NodeList com todos os elementos filhos do elemento selecionado (leva em conta os espaços em branco)
console.log(elemento.childNodes)

// children - retorna um HTMLCollection com todos os elementos filhos do elemento selecionado (não leva em conta os espaços em branco)
console.log(elemento.children)

// firstChild - retorna o primeiro elemento filho do elemento selecionado (leva em conta os espaços em branco)
console.log(elemento.firstChild)

// firstElementChild - retorna o primeiro elemento filho do elemento selecionado (não leva em conta os espaços em branco)
console.log(elemento.firstElementChild)

// lastChild - retorna o último elemento filho do elemento selecionado (leva em conta os espaços em branco)
console.log(elemento.lastChild)

// lastElementChild - retorna o último elemento filho do elemento selecionado (não leva em conta os espaços em branco)
console.log(elemento.lastElementChild)