import {input} from "./io_utils.js"

function main(){
    
    let n1 = Number(input("Digite um número: "))
 
    while(!(divisao(n1) < 1)){
        n1 = n1 / 2
        console.log(`${n1}`)
    }

    n1 = n1 / 2

    console.log(`${n1}`)
}

function divisao(valor){
    return valor / 2
}
main()