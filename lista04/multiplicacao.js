import {input} from "./io_utils.js"

function main(){

    let n1 = Number(input("Digite um número: ")) 
    let n2 = Number(input("Digite um número: ")) 

    let soma = 0
    let num = 0

    while(num < n1){
        soma += n2
        num++
        console.log(`Num: ${num}`)
        console.log(`Soma: ${soma}`)
    }

    console.log(`Soma: ${soma}`)
}
main()