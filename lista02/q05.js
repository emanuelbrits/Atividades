import {input, print} from "./io_utils.js"

function main(){

    const n1 = Number(input('digite um número:'))
    const n2 = Number(input('digite um número:'))
    const n3 = Number(input('digite um número:'))

    ordem()
    
    function ordem(){
        if(n1 < n2 && n2 < n3){
            print(`${n1}, ${n2}, ${n3}`)
        }else if(n2 < n3 && n3 < n1){
            print(`${n2}, ${n3}, ${n1}`)
        }else if(n3 < n1 && n1 < n2){
            print(`${n3}, ${n1}, ${n2}`)
        }else if(n1 < n3 && n3 < n2){
            print(`${n1}, ${n3}, ${n2}`)
        }else if(n3 < n2 && n2 < n1){
            print(`${n3}, ${n2}, ${n1}`)
        }else if(n2 < n1 && n1 < n3){
            print(`${n2}, ${n1}, ${n3}`)
        }
    }
}

main()