import {input} from "./io_utils.js"

function main(){

    const aleatorio = Math.floor(Math.random() * 100)

    let chute = Number(input("Digite um valor: "))

    let chutes = 1

    while(chute !== aleatorio){
        if(chute > aleatorio){
            console.log("Menor")
        }else{
            console.log("Maior")
        }

        chute = Number(input("Digite um valor: "))

        chutes++
    }

    console.log(`Acertou: ${aleatorio}`)
    console.log(`Tentaivas: ${chutes}`)

}
main()