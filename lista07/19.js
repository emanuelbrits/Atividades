import prompt from "prompt-sync"
import { criar_matriz_esquisita} from "./utils.js"
const input = prompt()

function main(){

    const matriz_esquisita = criar_matriz_esquisita()
    console.table(matriz_esquisita)

}

main()