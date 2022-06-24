import {print, input} from '../io_utils.js'

function main(){
    const horas = Number(input('digite a hora: '))

    const minutos = horas * 60

    print (`${horas}h são ${minutos} minutos`)

}
main()