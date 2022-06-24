import {print, input} from '../io_utils.js'

function main() {

    const dias = Number(input('digite quantos dias você tem: '))

    const a = (Math.trunc(dias / 365))
    const m = (Math.trunc((dias % 365) / 30))
    const d = (dias % 365) % 30 

    print(`${dias} dias equivalem a ${a} anos, ${m} meses e ${d} dias`)
}
main()