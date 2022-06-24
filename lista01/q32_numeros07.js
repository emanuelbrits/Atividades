import {print, input} from '../io_utils.js'

function main() {

    const numero = input('digite um número de 3 dígitos: ')

    const UDC = (numero[2])+(numero[1])+(numero[0])

    const sub = numero - Number(UDC)

    print(`${numero} - ${UDC} = ${sub}`)
}
main()