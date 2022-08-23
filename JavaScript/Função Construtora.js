// Funções Construtoras

// "this" -> referencia a própria função construtora
function Pessoa(nomezinho){
    this.nome = nomezinho
    this.anda = () => {
        return(`${this.nome} está andando`)
    }
}

// "new" -> indica que a função é construtora  e retorna um "object"
const vitu = new Pessoa('vitu')
const jao = new Pessoa('Joãozinho')
console.log(`Nome: ${vitu.nome}, ${vitu.anda()}`)
console.log(jao)