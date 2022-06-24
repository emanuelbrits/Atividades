import {print, input} from '../io_utils.js'

function main(){

    const lado = Number(input('digite o lado do quadrado: '))

    const area = lado ** 2

    print(`a área do quadrado é ${area}`)
}
main()