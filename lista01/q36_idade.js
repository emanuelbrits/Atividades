import {print, input} from '../io_utils.js'

function main() {

    const anos = Number(input('digite quantos anos você tem: '))
    const meses = Number(input('digite quantos meses você tem: '))
    const dias = Number(input('digite quantos dias você tem: '))

    const m = meses * 30
    const a = anos * 365

    const d = dias + a + m

    print(`você possui ${d} dias de vida`)
}
main()