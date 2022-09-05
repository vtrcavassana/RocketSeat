// textContent -> Retorna o conteúdo textual (sem HTML, mas com formatação) de um elemento
const elementTextContent = document.querySelector('h1');
elementTextContent.textContent = 'Meu blogs';

console.log(`Com textContent: ${elementTextContent.textContent}`);

// innerText -> Retorna o conteúdo textual (sem HTML e sem formatação) de um elemento
const elementInnerText = document.querySelector('h1');
elementInnerText.innerText = 'Meu blogsz';

console.log(`Com innerText: ${elementInnerText.innerText}`);

// innerHTML -> Retorna o conteúdo HTML de um elemento
const elementInnerHTML = document.querySelector('h1');
elementInnerHTML.innerHTML = '<small>Meu blog</small>';

console.log(`Com innerHTML: ${elementInnerHTML.innerHTML}`);

// value -> Retorna/insere o valor de um elemento
const elementValue = document.querySelector('input');
elementValue.value = 'Texto inserido via JS';

console.log(`Com value via JS: ${elementValue.value}`);

const elementValue2 = document.querySelector('.input2');
console.log(`Com value via HTML: ${elementValue2.value}`);

// setAttribute(name, value) -> Insere um atributo em um elemento
// getAttribute(name) -> Retorna o valor de um atributo de um elemento
// removeAttribute(name) -> Remove um atributo de um elemento
const elementAttribute = document.querySelector('header');
elementAttribute.setAttribute('id', 'x1');

console.log(elementAttribute)

const elementAttributeID = document.querySelector('#x1');
console.log(`Pegando o atributo ID: ${elementAttributeID.getAttribute('id')}`);

const elementAttributeClass = document.querySelector('header');
elementAttributeClass.removeAttribute('class');
console.log(elementAttributeClass)