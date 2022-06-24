import {input, print} from "./io_utils.js"

function main(){
    const n1 = Number(input('digite um número:'))
    const n2 = Number(input('digite um número:'))

    if(n1>n2){
        print(`${n1} é maior`)
    }else if(n2>n1){
        print(`${n2} é maior`)
    }
}

main()