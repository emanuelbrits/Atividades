import {print, input} from '../io_utils.js'

function main() {

    const numero = input('digite um valor de 4 dígitos em binário: ')

    const M = Number(numero[0]) * 8
    const C = Number(numero[1]) * 4
    const D = Number(numero[2]) * 2
    const U = Number(numero[3]) * 1

    const decimal = M+C+D+U

    print(`${numero} em binário equivale a ${decimal} em decimal`)

}
main()