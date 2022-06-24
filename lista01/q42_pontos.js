import {print, input} from '../io_utils.js'

function main() {

    const x1 = Number(input('digite o valor de x: '))
    const y1 = Number(input('digite o valor de y: '))
    const x2 = Number(input('digite o valor de x: '))
    const y2 = Number(input('digite o valor de y: '))

    const x3 = ((x2 - x1) ** 2)
    const y3 = ((y2 - y1) ** 2)

    const d = Math.sqrt(x3 + y3)

    print(`A distância entre ${x1}, ${y1} e ${x2}, ${y2} é igual a ${d.toFixed(2)}`)
}
main()