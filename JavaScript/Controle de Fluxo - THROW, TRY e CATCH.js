// Controle de Fluxo - THROW, TRY e CATCH

function sayMyName(nome){
    if(nome == ''){
        // "throw" é utilizado pelo "catch"
        throw ('Nome não pode ser vazio')
        // throw new Error('Nome não pode ser vazio') -> Outro modo de fazer
    }
    else{
        throw (`Oi, ${nome}!`)
        // throw new Error(`Oi, ${nome}`) -> Outro modo de fazer
    }
}

try{
    // "try" -> TENTA executar a função
    let nomez = prompt('Digite seu nome:')
    sayMyName(nomez)
}
// "catch" -> captura o que é enviado pelo "throw" e exibe
catch(evento){
    alert(evento)
}