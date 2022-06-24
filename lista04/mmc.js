import {input} from "./io_utils.js"

function main(){
    
    const n1 = Number(input("Digite um número: "))
    const n2 = Number(input("Digite outro número: "))

    let mmc = 1

    while(!(multiplo(mmc, n1) && multiplo(mmc, n2))){
        mmc++
    }

    console.log(`O MMC de ${n1} e ${n2} é ${mmc}`)
}

function multiplo(valor1, valor2){
    return valor1 % valor2 === 0
}

main()