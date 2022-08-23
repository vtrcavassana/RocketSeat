// Callback Function

// Função anonima
function sayMyName(nome){
    console.log("Antes do callback")

    nome()

    console.log("Depois do callback")
}

// Função pode ser anonima no "callback"
sayMyName(
    () => {
        console.log("Durante callback")
    }
)

// Função anonima + argumentos
const sayMyName = (nome, callbackzin) => {
    console.log(nome)
    callbackzin()
}

// chamar a função 'sayMyName' passando o nome e a callback function
sayMyName('Vitu', () => {
    console.log('Callback Function')
} )