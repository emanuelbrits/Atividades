import {input, print} from "./io_utils.js"

function main(){
    const n1 = Number(input('digite um número:'))
    const n2 = Number(input('digite um número:'))
    const n3 = Number(input('digite um número:'))

    if (n1 == n2 && n2 !== n3){
        print('dois números são iguais')
    }else if (n1 == n3 && n3 !== n2){
        print('dois números são iguais')
    }else if (n2 == n3 && n3 !== n1){
        print('dois números são iguais')
    }else if (n1 === n2 && n2 === n3){
        print('todos os números são iguais')
    }else if(n1 !== n2 !== n3){
        print('todos os números são diferentes')
    }
}

main()