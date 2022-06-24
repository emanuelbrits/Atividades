import {print, input} from '../io_utils.js'

function main(){

    const velocidade_kmh = Number(input('Digite a velocidade:'))

    const velocidade_ms = velocidade_kmh / 3.6
    
    print (`${velocidade_kmh} km/h são ${velocidade_ms.toFixed(2)} m/s`)

}
main()