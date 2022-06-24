import {print, input} from '../io_utils.js'

function main() {

    const valor = Number(input('digite o valor '))

    const entrada = valor / 2 
    const resto =  valor - entrada
    const prestacao = resto / 2

    print (`A entrada será de ${entrada} e as prestações de ${prestacao}`)
}   
main()