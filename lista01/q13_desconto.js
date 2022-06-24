import {print, input} from '../io_utils.js'

function main(){

    const preço = Number(input('digite um valor em R$: '))

    const desconto = preço * 0.70

    print(`O novo preço será de ${desconto.toFixed(2)}R$`)
}
main()