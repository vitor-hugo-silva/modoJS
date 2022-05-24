//! Gastos
/*
    ? Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        *receitas: []
        *despesas: []
    ?Agora, crie uma função que irá calcular o total de despesas
    ?e irá mostrar uma mensagem se a familia está com saldo negativo, 
    ?seguido do valor do saldo  
*/

let expenses = {

    receita: [
        4.000,
        530,
        1.200,
        200,
        120.80
    ],
    despesa: [
        350,
        80,
        49,
        356
    ]
}
//Soma receita e soma despesa
//subtrai totalReceita de total despesa
//?Function de soma
function sum(arr){

    let total = 0;
    for(let value of arr){

        total += value

    }

    return total
}

function calcularSaldo(){

     const calcReceita = sum(expenses.receita)
     const calcDespesa = sum(expenses.despesa)

     const total = calcReceita - calcDespesa
     const tudoOk = total >= 0
     let saldoFinal = 'Negativo'

     if(tudoOk){

        saldoFinal = 'Positivo'

    }
    console.log(`Seu saldo é ${saldoFinal}: R$${total.toFixed(2)}!`)

}

calcularSaldo()

