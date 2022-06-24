import {print, input} from '../io_utils.js'

function main() {

    const hora = Number(input('digite um valor em horas: '))

    const s = (Math.trunc(hora / 168))
    const d = (Math.trunc((hora % 168) / 24))
    const h = (hora % 168) % 24

    print(`${hora} horas são ${s} semanas, ${d} dias e ${h} horas.`)
}
main()