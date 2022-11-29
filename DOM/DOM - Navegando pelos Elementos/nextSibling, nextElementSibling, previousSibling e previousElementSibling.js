// Navegando pelos Elementos com nextSibling, nextElementSibling, previousSibling e previousElementSibling

const elemento = document.querySelector('header')

// nextSibling - retorna o próximo elemento irmão do elemento selecionado (incluindo textos e comentários, se houver, considerando o espaço em branco como um elemento)
console.log(elemento.nextSibling)

// nextElementSibling - retorna o próximo elemento irmão do elemento selecionado (não considera textos e comentários, se houver, e não considera o espaço em branco como um elemento)
console.log(elemento.nextElementSibling)

// previousSibling - retorna o elemento irmão anterior do elemento selecionado (incluindo textos e comentários, se houver, considerando o espaço em branco como um elemento)
console.log(elemento.previousSibling)

const elemento2 = document.querySelector('script')

// previousElementSibling - retorna o elemento irmão anterior do elemento selecionado (não considera textos e comentários, se houver, e não considera o espaço em branco como um elemento)
console.log(elemento2.previousElementSibling)