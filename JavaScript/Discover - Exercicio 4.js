const biblioteca = [
    {
        categoria: 'Memes',
        livros: [           
            {
                titulo: 'Os memes da Net',
                autor: 'Internet Coisada'
            },
            
            {
               titulo: 'Os memes do Século',
                autor: 'Memerz'
            },

            {
                titulo: 'Memes, são perigosos?',
                autor: 'Companhia dos Memes'
            }
        ]
    },

    {
        categoria: 'Internet',
        livros: [
            {
                titulo: 'Internet das Coisas',
                autor: 'Internetz'
            },

            {
                titulo: 'Internet Evoluída',
                autor: 'Sr. Internet'
            },

            {
                titulo: 'Internetes Agora!',
                autor: 'Internetz'
            }
        ]
    }
]

// Contar o número de categorias e o número de livros em cada categoria
const totalCategorias = biblioteca.length
console.log(totalCategorias)

for(let categoria of biblioteca){
    console.log(`Total de livros da categoria ${categoria.categoria}: ${categoria.livros.length}`)
}

// Contar o número de autores
function contarAutores(){
    let autores = []
    for(let categoria of biblioteca){
        for(let livro of categoria.livros){
            // Se retornar -1, o autor não está no array
            if(autores.indexOf(livro.autor) == -1){
                autores.push(livro.autor)
            }
        }
    }
    console.log(`Total de autores: ${autores.length}`)
}

contarAutores()

// Mostrar livros do autor Internetz
function mostrarLivrosDoAutor(autor){
    let livros = []
    for(let categoria of biblioteca){
        for(let livro of categoria.livros){
            if(livro.autor == autor){
                livros.push(livro.titulo)
            }
        }
    }
    console.log(`Livros do autor ${autor}: ${livros}`)
}

mostrarLivrosDoAutor('Internetz')