let somaDespesas = 0
let somaReceitas = 0
let saldo = 0

const statusDoSaldo = ['positivo', 'negativo']

const nSei = {
    receitas: [277.42, 869.12, 926.44, 12.98],
    despesas: [1.44, 178.96, 938.457, 823.41]
}

function exibeSaldo(){
    for(let elemento of nSei.receitas){
        somaReceitas += elemento
    }

    for(let elemento of nSei.despesas){
        somaDespesas += elemento
    }

    if(somaReceitas >= somaDespesas){
        saldoStatus = statusDoSaldo[0]
        // saldoStatus = 'positivo'
        saldo = somaReceitas - somaDespesas
        return(`Saldo ${saldoStatus}: ${saldo.toFixed(2)}`)
    }
    else{
        saldoStatus = statusDoSaldo[1]
        // saldoStatus = 'negativo'
        saldo = somaDespesas - somaReceitas
        return(`Saldo ${saldoStatus}: ${saldo.toFixed(2)}`)
    }
}

console.log(exibeSaldo())