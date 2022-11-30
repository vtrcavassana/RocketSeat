// Alterando com classList

const elementMaster = document.querySelector('body')

// Exibe a lista de classes do elemento
console.log(elementMaster.classList)

// Adiciona uma classe ao elemento
elementMaster.classList.add('active')

// Remove uma classe do elemento
elementMaster.classList.remove('active')

// É possível adicionar e remover mais de uma classe ao mesmo tempo (comentado para não dar erro, caso queira testar, descomente)
elementMaster.classList.add('active', 'green')
// elementMaster.classList.remove('active', 'green')

// Alternar uma classe (se ela existir, remove, se não existir, adiciona)
elementMaster.classList.toggle('active') // -> remove, pois já existe a classe (linha 15)