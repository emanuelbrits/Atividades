import {print, input} from '../io_utils.js'

function main() {

    const numero1 = Number(input('digite um número: '))
    const numero2 = Number(input('digite um número: '))
    const numero3 = Number(input('digite um número: '))

    const media = (numero1 + numero2 + numero3) / 3

    print(`A média desses número é ${media}`)
}
main()