import {print, input} from '../io_utils.js'

function main(){

    const salario = Number(input('digite o salário: '))

    const aumento = salario * 1.25

    print(`o novo salário será de ${aumento.toFixed(2)}`)
}
main()