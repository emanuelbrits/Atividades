import {print, input} from '../io_utils.js'

function main() {

    const A = Number(input('digite um número: '))
    const B = Number(input('digite um número: '))
    const C = Number(input('digite um número: '))

    const D = ((A + B)**2)+((B + C)**2) / 2

    print(`${D}`)
}
main()