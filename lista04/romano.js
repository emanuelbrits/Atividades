import {input} from "./io_utils.js"

function main(){

    const numero = (input("Digite um número: "))

    let inteiro = 0

    if(numero <= 9){
        inteiro = Number(numero[0]) * 1
    }else if(numero >= 10 && numero <= 99){
        inteiro = (Number(numero[0]) * 10 ) + (Number(numero[1]) * 1)
    }else if(numero >= 100 && numero <= 999){
        inteiro = (Number(numero[0]) * 100 ) + (Number(numero[1]) * 10) + (Number(numero[2]) * 1)
    }

    const decimal = numero - inteiro

    console.log(`${decimal}`)
}
main()