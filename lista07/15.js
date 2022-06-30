import prompt from "prompt-sync"
import { criar_matriz_quadrada, pedir_numero, transpor_matriz, verificar_matriz } from "./utils.js"
const input = prompt()

function main(){

    const ordem = pedir_numero('Ordem: ')
    
    const matriz_quadrada = criar_matriz_quadrada(ordem)
    console.table(matriz_quadrada)

    const matriz_tranposta = transpor_matriz(matriz_quadrada, ordem)
    console.table(matriz_tranposta)

    verificar_matriz(matriz_quadrada)
}

main()