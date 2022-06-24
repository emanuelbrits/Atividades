import {print, input} from '../io_utils.js'

function main(){

    const C = Number(input('digite a temperatura: '))

    const F = (9 * C + 160) / 5

    print(`a temperatura ${C}C é ${F.toFixed(2)}F`)
}
main()