import {input, print} from "./io_utils.js"

function main(){

    const a1 = Number(input('digite um ângulo do triângulo:'))
    const a2 = Number(input('digite um ângulo do triângulo:'))
    const a3 = Number(input('digite um ângulo do triângulo:'))

    if(soma() === 180){
        print('é um triângulo')
        if(a1 < 90 && a2 < 90 && a3 < 90){
            print('é acutângulo')
        }else if (a1 === 90 || a2 === 90 || a3 === 90){
            print('é retângulo')
        }else if (a1 > 90 || a2 > 90 || a3 > 90){
            print('é obtusângulo')
        }
    }else{
        print('Não é um triângulo')
    }

    
    
    function soma(){
        return a1 + a2 + a3
    }

}

main()