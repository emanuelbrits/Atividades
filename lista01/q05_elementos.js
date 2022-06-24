import {print, input} from '../io_utils.js'

function main(){

    const numero = (input('Digite um número de 3 dígitos: '))

    const C = Number(numero[0])
    const D = Number(numero[1])
    const U = Number(numero[2])
    
    const soma = C+D+U

    print(`A soma dos elementos de ${numero} é ${soma}`)
}
main()