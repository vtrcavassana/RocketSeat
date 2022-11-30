// Eventos via JavaScript (addEventListener)

const tituloH1 = document.querySelector('h1')

// addEventListener(método, função)
tituloH1.addEventListener('click', clicou)

function clicou() {
    console.log('Clicou no título h1')
}

const tituloH2 = document.querySelector('h2')

// addEventListener(método, função anonima)
tituloH2.addEventListener('mouseover', function() {
    console.log('Passou o mouse no título h2')
})