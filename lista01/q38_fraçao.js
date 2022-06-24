import {print, input} from '../io_utils.js'

function main() {

    const numerador1 = Number(input('digite o numerador do primeiro número: '))
    const denominador1 = Number(input('digite o denominador do primeiro número: '))
    const numerador2 = Number(input('digite o numerador do segundo número: '))
    const denominador2 = Number(input('digite o denominador do segundo número: '))

    const fracao1 = numerador1 / denominador1
    const fracao2 = numerador2 / denominador2

    const soma = fracao1 + fracao2

    print(`A soma de ${numerador1}/${denominador1} com ${numerador2}/${denominador2} é igual a ${soma.toFixed(2)}`)
}
main()