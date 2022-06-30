import prompt from "prompt-sync"
import {criar_matriz_quadrada, pedir_numero, soma_das_linhas} from "./utils.js"
const input = prompt()

function main(){

    const ordem = pedir_numero('Ordem: ')
    
    const matriz_quadrada = criar_matriz_quadrada(ordem)
    console.table(matriz_quadrada)

    soma_das_linhas(matriz_quadrada)
}   

main()