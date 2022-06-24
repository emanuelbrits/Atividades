import {print, input} from '../io_utils.js'

function main(){

    const raio = Number(input('digite o raio: '))
    
    const comprimento = 2 * 3.14 * raio

    print(`o comprimento da circunferência é ${comprimento.toFixed(2)}`)
}
main()