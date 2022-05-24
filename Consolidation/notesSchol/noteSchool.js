//! ##Transformar notas escolares numericas em cadeia de caracteres A (acima de 90), B,C ... F\
//! >= 90 = A
//! Entre 80 e 89 = B 
//! Entre 70 e 79 = C
//! Entre 60 e 69 = D
//! Menor que 60  = F

let nota 
const pegaNotaFinal = (nota) => {

    let A = nota >= 90
    let B = nota >= 80 && nota <= 89
    let C = nota >= 70 && nota <= 79
    let D = nota >= 60 && nota <= 69
    let F = nota < 60

    let notaFinal;

    if(A) {

        notaFinal = 'A'

    } else if (B){

        notaFinal = 'B'

    }else if (C){   

        notaFinal = 'C'

    }else if (D){   

        notaFinal = 'D'

    }else if (F){   

        notaFinal = 'F'

    }
    return notaFinal
}

console.log(pegaNotaFinal(85))
console.log(pegaNotaFinal(100))
console.log(pegaNotaFinal(75))
console.log(pegaNotaFinal(65))
console.log(pegaNotaFinal(55))
console.log(pegaNotaFinal(40))


