import {print, input} from '../io_utils.js'

function main(){

    const numero1 = Number(input('digite o primeiro número: '))
    const numero2 = Number(input('digite o segundo número: ')) 
    
    const divisao = numero1/numero1 - numero1/numero2 + numero2/numero1 - numero2/numero2
    
    print(`A divisão da soma pela subtração é igual a ${divisao}`)
    }
    main()