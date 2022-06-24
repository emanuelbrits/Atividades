import {print, input} from '../io_utils.js'

function main(){

    const base = Number(input('digite o valor da base: '))
    const altura = Number(input('digite o valor da altura: '))

    const area = (base * altura) / 2

    print(`a área do triângulo é ${area}`)
}
main()