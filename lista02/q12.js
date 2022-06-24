import {input, print} from "./io_utils.js"

function main(){

    const n = Number(input('digite um número: '))

    const resto = n%2
    verificar()

    function verificar(){
        if(resto === 0){
            print(`${n} é par`)
        }else{print(`${n} é ímpar`)}
    }
}

main()