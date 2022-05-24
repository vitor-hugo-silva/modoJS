function transformDegree(degree){
    //?Verifica o sinal C or F
    const celsiusExists = degree.includes('C')
    const fahrenreitExists = degree.includes('F')

    //? Simbolo nao identificado gera erro
    if(!celsiusExists && !fahrenreitExists){
        throw new Error('Grau não identificado')
    }

    //? Fluxo ideal, F->C
    //? Formula que transforma Fahrenreit em Celsius
    let updatedDegree = Number(degree.toUpperCase().replace("F", "")).toFixed(2) ;
    let formula = (fahrenreit) => (fahrenreit - 32)* 5/9
    let degreeSign = 'C'


    //? Fluxo alternativo C-> F
     //? Formula que transforma Celsius em Fahrenreit
     if(celsiusExists) {

        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'

     }

    return formula(updatedDegree) + degreeSign
}
try{

    console.log(transformDegree('100F'))
    console.log(transformDegree('10C'))
    console.log(transformDegree('45F'))
    console.log(transformDegree('16C'))
    console.log(transformDegree('45C'))
    

} catch(error){

    console.log(error.message)

}