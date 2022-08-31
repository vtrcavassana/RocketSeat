// Condicional - SWITCH

let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))

if(isNaN(n1)){
    console.log(`${n1}, não é um número!`)
}
else if(isNaN(n2)){
    console.log(`${n2}, não é um número!`)
}
else{
    op = prompt("Digite a operação que deseja realizar: ")
}

function calculadora(num1, num2, ope){
    let resp
    
    switch(ope){
        case '-':
            resp = num1 - num2
            break
        case '+':
            resp = num1 + num2
            break
        case '*':
            resp = num1 * num2
            break
        case '/':
            resp = num1 / num2
            break
    }

    return resp
}

console.log(calculadora(n1,n2,op))