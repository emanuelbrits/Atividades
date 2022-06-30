import prompt from "prompt-sync"
import { criar_matriz_crescente } from "./utils.js"
const input = prompt()

function main(){

    const matriz_crescente = criar_matriz_crescente()
    console.table(matriz_crescente)

}

main()