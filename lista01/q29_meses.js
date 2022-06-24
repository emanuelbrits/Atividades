import {print, input} from '../io_utils.js'

function main() {

    const meses = Number(input('digite um número de meses: '))

    const a = (Math.trunc(meses / 12))
    const m = (meses % 12) % 12

    print(`${meses} equivalem a ${a} anos e ${m} meses`)
}
main()