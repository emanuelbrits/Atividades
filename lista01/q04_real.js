import {print, input} from '../io_utils.js'

function main(){
    //considerando o dólar 4,75
    const dollar = Number(input('digite um valor em dollar: '))

    const real = dollar * 4.75

    print (`${dollar.toFixed(2)}U$ são ${real.toFixed(2)}R$`)

}
main()