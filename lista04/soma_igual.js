import {input} from "./io_utils.js"

function main(){
    
    const x = Number(input("Digite um número: "))

    let n1 = Number(input("Digite outro número: "))
    let n2 = Number(input("Digite outro número: "))

    console.log(`${n1} e ${n2}`)

    while(n1 + n2 !== x){
        n1 = n2
        n2 = Number(input("Digite outro número: "))
        console.log(`${n1} e ${n2}`)
    }

    console.log(`Igual a ${x}`)
}
main()