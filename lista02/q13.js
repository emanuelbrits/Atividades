import {input, print} from "./io_utils.js"

function main(){

    const n1 = Number(input('digite um número: '))
    const n2 = Number(input('digite um número: '))
    const n3 = Number(input('digite um número: '))
    const n4 = Number(input('digite um número: '))
    const n5 = Number(input('digite um número: '))

    verificar()

    function verificar(){
        if(n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5 ){
            print(`${n1} é o maior`)
        }else if(n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5 ){
            print(`${n2} é o maior`)
        }else if(n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5 ){
            print(`${n3} é o maior`)
        }else if(n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5 ){
            print(`${n4} é o maior`)
        }else if(n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4 ){
            print(`${n5} é o maior`)
        }
        if(n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5){
            print(`${n1} é o menor`)
        }else if(n2 < n1 && n2 < n3 && n2 < n4 && n2 < n5){
            print(`${n2} é o menor`)
        }else if(n3 < n2 && n3 < n1 && n3 < n4 && n3 < n5){
            print(`${n3} é o menor`)
        }else if(n4 < n2 && n4 < n3 && n4 < n1 && n4 < n5){
            print(`${n4} é o menor`)
        }else if(n5 < n2 && n5 < n3 && n5 < n4 && n5 < n1){
            print(`${n5} é o maior`)
        }

}
}

main()