import {input} from "./io_utils.js"

function main(){
    
    const n1 = Number(input("Digite um número: "))

    let n2 = Number(input("Digite outro número: ")) 

    while(n2 !== n1){
        n2 = Number(input("Digite outro número: ")) 
    }

    console.log('Igual.')
}
main()