import {input} from "./io_utils.js"

function main(){
    
    let x = Number(input("Digite um número: "))
    let n = Number(input("Digite outro número: "))

    let div = x / n

    console.log(`${div}`)

    while(div > 2){
        x = div
        n--
        div = x / n
        console.log(`${div}`)
    }
}
main()