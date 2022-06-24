import {input} from "./io_utils.js"

function main(){

    let n = Number(input("Digite um número: "))
    let divisor = 0

    while(n !== 0){
        divisao()
    }

    function divisao(){
        while(divisor < n ){
            divisor++
            if(n % divisor === 0){
                console.log(`${divisor} é divisor de ${n}`)
            }
        }

        n = Number(input("Digite outro número: "))
        divisor = 0
    }
}
main()