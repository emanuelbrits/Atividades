import {print, input} from '../io_utils.js'

function main(){

    const numero1 = Number(input('digite um número: '))
    const numero2 = Number(input('digite outro número: '))

    const quociente = numero1 / numero2 
    const resto = numero1 % numero2

    print(`A divisão de ${numero1} por ${numero2} tem como quociente ${quociente} e resto ${resto}.`)
}
main()