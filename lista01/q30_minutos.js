import {print, input} from '../io_utils.js'

function main() {

    const minutos = Number(input('digite um valor em minutos: '))

    const d = (Math.trunc(minutos / 1440)) 
    const h = (Math.trunc((minutos % 1440) / 60))
    const m = (minutos % 1440) % 60

    print(`${minutos} minutos equivalem a ${d} dias, ${h} horas e ${m} minutos`)
}
main()