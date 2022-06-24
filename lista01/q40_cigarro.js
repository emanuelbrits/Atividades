import {print, input} from '../io_utils.js'

function main() {

    const a = Number(input('digite quantos anos fuma: '))
    const c = Number(input('digite quantos cigarros fuma por dia: '))
    const p = Number(input('digite o preço de uma carteira de cigarros: '))

    const d = a * 365
    const q = d * c 
    const car = Math.trunc(q / 20)
    const din = car * p

    print(`você gastaria ${din.toFixed(2)} R$ fumando por ${a} anos`)

}
main()