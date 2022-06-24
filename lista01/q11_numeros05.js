import {print, input} from '../io_utils.js'

function main(){

    const numero = String(input('digite um número de 3 dígitos : '))

    const C = (numero[0])
    const D = (numero[1])
    const U = (numero[2])

    const inverso = U+D+C

    print (`o inverso de ${numero} é ${inverso}`)
}
main()