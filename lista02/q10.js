import {input, print} from "./io_utils.js"

function main(){

    const data = input('digite uma data: (ex.: xx/xx/xxxx)')

    const split = data.split('/')

    const d = Number(split[0])
    const m = Number(split[1])
    const a = Number(split[2])
    
    verificar()

    function verificar(){
        if(m > 12){
            print('data inválida')
        }else if(m === 1, 3, 5, 7, 8, 10, 12 && d > 31){
            print('data inválida')
        }else if(m === 4, 6, 9, 11 && d > 30){
            print('data inválida')
        }else if(m === 2 && d !== 28){
            print('data inválida')
        }else{
            print('data válida')
        }
    }
}

main()