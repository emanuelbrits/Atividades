import prompt from "prompt-sync"
import {criar_matriz_identidade, pedir_numero} from "./utils.js"
const input = prompt()

function main(){

    const ordem = pedir_numero('Ordem: ')
    
    const matriz_identidade = criar_matriz_identidade(ordem)
    console.table(matriz_identidade)
}

main()