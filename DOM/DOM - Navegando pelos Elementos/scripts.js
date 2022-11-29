// Navegando pelos Elementos com parentNode e parentElement

const elemento = document.querySelector('body'); // -> elemento pai do body é o html

// parentNode - retorna o elemento pai do elemento selecionado
console.log(elemento.parentNode);

// parentElement - retorna o elemento pai do elemento selecionado
console.log(elemento.parentElement);

const elemento2 = document.querySelector('h1'); // -> elemento pai do h1 é o header

// parentNode - retorna o elemento pai do elemento selecionado
console.log(elemento2.parentNode);

// parentElement - retorna o elemento pai do elemento selecionado
console.log(elemento2.parentElement);
