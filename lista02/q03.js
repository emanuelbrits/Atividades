import {input, print} from "./io_utils.js"

function main(){
    const n1 = Number(input('digite um número:'))
    const n2 = Number(input('digite um número:'))
    const n3 = Number(input('digite um número:'))
    
    let maior = n1

    if(n2 > n1){
        maior = n2
    }if(n3 > maior){
        maior = n3
    }
    print(`${maior} é maior`)
}

main()