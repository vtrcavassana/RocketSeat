let nota = prompt('Digite: ')
let checkNota = isNaN(nota)
// Debug
// console.log(`Check 1:${checkNota}`)

while(checkNota){
  nota = prompt("Digita: ")
  checkNota = isNaN(nota)
   // Debug
  // console.log(`Check 2:${checkNota}`)
}

function trocaNota(nota){
    let troca
    
    if(nota >= 90){
        troca = 'A'
    }
    else if(nota <= 89 && nota >= 80){
        troca = 'B'
    }
    else if(nota <= 79 && nota >= 70){
        troca = 'C'
    }
    else if(nota <= 69 && nota >= 60){
        troca = 'D'
    }
    else{
        troca = 'F'
    }

    return troca
}

console.log(trocaNota(nota))