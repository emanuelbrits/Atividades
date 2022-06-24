import {print, input} from '../io_utils.js'

function main(){

    const base = Number(input('digite o tamanho da base: '))
    const altura = Number (input('digite o tamanho da altura: '))

    const area = base * altura

    print(`a área do retângulo é ${area}`)
}
main()