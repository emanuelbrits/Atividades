import {print, input} from '../io_utils.js'

function main(){

    const numero1 = Number(input('Digite o primeiro número: '))
    const numero2 = Number(input('Digite o segundo número: '))
    const numero3 = Number(input('Digite o terceiro número: '))

    const soma = numero1 + numero2
    const subtracao = numero3 - numero2

    print(`A soma de ${numero1} com ${numero2} é igual a ${soma}.`)
    print(`A subtração de ${numero3} por ${numero2} é igual a ${subtracao}`)
}
main()