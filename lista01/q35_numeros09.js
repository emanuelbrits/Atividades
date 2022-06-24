import {print, input} from '../io_utils.js'

function main() {

    const numero = input('digite um número de 4 dígitos: ')

    const M = Number(numero[0])
    const C = Number(numero[1])
    const D = Number(numero[2])
    const U = Number(numero[3])

    const soma = M+C+D+U

    print(`A soma dos elementos de ${numero} é igual a ${soma}`)
}
main()