import prompt from "prompt-sync"
import { criar_matriz_quadrada, pedir_numero, somar_positivos_negativos } from "./utils.js"
const input = prompt()

function main(){

    const ordem = pedir_numero('Ordem: ')
    
    const matriz_quadrada = criar_matriz_quadrada(ordem)
    console.table(matriz_quadrada)

    somar_positivos_negativos(matriz_quadrada)
}

main()