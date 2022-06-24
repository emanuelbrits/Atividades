import {input, print} from "./io_utils.js"

function main(){

    const opcao = Number(input('digite um valor entre 1 e 3: '))
    const num1 = Number(input('digite um número: '))
    const num2 = Number(input('digite um número: '))
    const num3 = Number(input('digite um número: '))

    verificar()

    function verificar(){
        if(opcao === 1){
            print(`${num1}`)
        }else if (opcao === 2){
            print(`${num2}`)
        }else if (opcao === 3){
            print(`${num3}`)
        }
    }
}

main()