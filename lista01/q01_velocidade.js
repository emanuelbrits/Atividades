import {print, input} from '../io_utils.js'

function main(){

    const velocidade_ms = Number(input('digite a velocide em m/s: '))

    const velocidade_kmh = velocidade_ms * 3.6

    print (`A velocidade é ${velocidade_kmh} em km/h`)

}
main()