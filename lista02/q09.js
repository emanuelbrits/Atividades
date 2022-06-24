import {input, print} from "./io_utils.js"

function main(){

    const n = Number(input('digite um número entre 0 e 100: '))

    const resto = n%2
    const resto2 = n%5
    const resto3 = n%3

    verificar()
    
    function verificar(){
        if(n === 1){
            print('não é primo')
        }else if(n === 2){
            print('é primo')
        }else if(n === 5){
            print('é primo')
        }else if(n === 3){
            print('é primo')
        }else if(resto === 0 || resto2 === 0 || resto3 ===0){
            print('não é primo')
        }else{
            print('é primo')
        }
}
}
main()