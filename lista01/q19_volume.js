import {print, input} from '../io_utils.js'

function main(){

    const raio = Number(input('digite o valor do raio: '))

    const volume = (4 * 3.14 * raio**3) / 3

    print(`O volume é igual a ${volume.toFixed(2)}`)
}
main()