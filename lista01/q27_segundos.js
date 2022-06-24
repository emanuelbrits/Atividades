import {print, input} from '../io_utils.js'

function main() {
 
    const segundos = Number(input('digite um valor em segundos: '))

    const h = (Math.trunc(segundos / 3600))
    const m = (Math.trunc((segundos % 3600) / 60))
    const s = (segundos % 3600) % 60
    

    print(`${segundos}s equivalem a ${h}h, ${m}m e ${s}s`)
}
main()