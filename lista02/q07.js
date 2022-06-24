import {input, print} from "./io_utils.js"

function main(){

    const l1 = Number(input('digite o maior lado do triângulo:'))
    const l2 = Number(input('digite o tamanho do lado 2:'))
    const l3 = Number(input('digite o tamanho do lado 3:'))

    if(l2 + l3 >= l1){
        print('é um triângulo')
    }else{
        print('não é triângulo')
    }if(t() && l1 === l2 && l2 === l3){
        print('é equilátero')
    }else if(t() && l1 === l2 && l2 !== l3 || t() && l1 === l3 && l3 !== l2 || t() && l2 === l3 && l3 !== l1){
        print('é isóceles')
    }else if(t() && l1 !== l2 && l2 !== l3){
        print('é escaleno')}

    function t(){
        return l2 + l3 >= l1
    }
}

main()