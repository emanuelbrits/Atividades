import {input} from "./io_utils.js"

function main(){

    let n = Number(input("Digite o número inicial: "))
    let razao = Number(input("Digite a razão da PG: "))

    console.log(`${n}`)

    while(n < 100){
        PA()
        console.log(`${n}`)
    }

    function PA(){
        n += razao
    }
}
main()