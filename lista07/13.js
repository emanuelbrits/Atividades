import prompt from "prompt-sync"
import { criar_matriz_quadrada, determinante_funcao, pedir_numero } from "./utils.js"
const input = prompt()

function main(){

    const ordem = pedir_numero('Ordem: ')
    
    const matriz_quadrada = criar_matriz_quadrada(ordem)
    console.table(matriz_quadrada)

    const determinante = determinante_funcao(matriz_quadrada, ordem)
    console.log(`Determinante = ${determinante.toFixed(2)}`)
}

main()