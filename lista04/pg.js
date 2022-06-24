import {input} from "./io_utils.js"

function main(){

    let n = Number(input("Digite o número inicial: "))
    let razao = Number(input("Digite a razão da PG: "))

    console.log(`${n}`)

    while(n < 1000){
        PG()
        console.log(`${n}`)
    }

    function PG(){
        n = n * razao
    }
}
main()