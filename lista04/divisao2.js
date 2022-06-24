import {input} from "./io_utils.js"

function main(){

    let n1 = Number(input("Digite um número: ")) 
    let n2 = Number(input("Digite um número: "))
    
    let num = 0
    let resto = 0

    while(!divisao() && num * n2 < n1 ){
        
        if(!divisao() && num * n2 < n1 ){
        num++
    }
        
    }

    if(num * n2 > n1 ){
        num--
    }

    resto = n1 - (num * n2)

    console.log(`Resultado: ${num}`)
    console.log(`Resto: ${resto}`)

    function divisao(){
        return n2 * num === n1
    }


}
main()