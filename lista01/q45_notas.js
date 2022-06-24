import {print, input} from '../io_utils.js'

function main() {
    const quant = Number(input('digite o valor '))

    var valor = quant

    const n50 = Math.trunc(valor / 50)
    valor = valor % 50

    const n10 = Math.trunc(valor / 10)
    valor = valor % 10

    const n5 = Math.trunc(valor / 5)
    valor = valor % 5

    const n1 = valor

    print(`o valor será de ${n50} notas de 50, ${n10} notas de 10, ${n5} notas de 5 e ${n1} notas de 1 R$`)
}
main()