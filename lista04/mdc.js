import {input} from "./io_utils.js"

function main(){
    
    const n1 = Number(input("Digite um número: "))
    const n2 = Number(input("Digite outro número: "))

    let mdc = 99999

    while(!(divisor(n1, mdc) && divisor(n2, mdc))){
        mdc--
    }

    console.log(`O MDC de ${n1} e ${n2} é ${mdc}`)
}

function divisor(valor1, valor2){
    return valor1 % valor2 === 0
}

main()