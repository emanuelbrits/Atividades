import {print, input} from '../io_utils.js'

function main() {

    const custo = Number(input('digite o custo de fábrica do carro: '))

    const dis = custo * 0.28
    const imp = custo * 0.45
    const soma = custo + dis + imp

    print(`O custo desse carro seria de ${soma.toFixed(2)} R$`)
}
main()