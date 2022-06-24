import {print, input} from '../io_utils.js'

function main() {
 
    const dias = Number(input('digite uma quantidade de dias: '))

    const semanas = (Math.trunc(dias / 7))
    const resto = dias % 7

    print(`${dias} dias equivalem a ${semanas} semanas e ${resto} dias.`)

}
main()