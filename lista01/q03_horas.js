import {print, input} from '../io_utils.js'

function main() {
    const minutos = Number(input('digite um valor em minutos: '))

    const horas = (Math.trunc(minutos/60))
    const resto = minutos % 60

    print (`${minutos} minutos são ${horas}h e ${resto}min`)

}
main()