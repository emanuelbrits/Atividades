import prompt from "prompt-sync"
import { criar_matriz_quadrada, maior, menor, pedir_numero } from "./utils.js"
const input = prompt()

function main(){

    const ordem = pedir_numero('Ordem: ')
    
    const matriz_quadrada = criar_matriz_quadrada(ordem)
    console.table(matriz_quadrada)

    maior(matriz_quadrada)
    menor(matriz_quadrada)
}

main()