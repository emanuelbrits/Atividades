import prompt from "prompt-sync"
import { criar_matriz_quadrada, pedir_numero, somar_diagonal_principal, somar_diagonal_secundaria, somar_fora_matriz, somar_matriz } from "./utils.js"
const input = prompt()

function main(){

    const ordem = pedir_numero("Ordem: ")
    
    const matriz_quadrada = criar_matriz_quadrada(ordem)
    console.table(matriz_quadrada)

    const soma_principal = somar_diagonal_principal(matriz_quadrada)
    console.log(`Soma da diagonal principal: ${soma_principal.toFixed(2)}`)

    const soma_secundaria = somar_diagonal_secundaria(matriz_quadrada, ordem)
    console.log(`Soma da diagonal secundária: ${soma_secundaria.toFixed(2)}`)

    const soma_matriz = somar_matriz(matriz_quadrada)

    const soma_fora_da_matriz = somar_fora_matriz(soma_principal, soma_secundaria, soma_matriz, ordem, matriz_quadrada)
    console.log(`Soma dos elementos fora das diagonais: ${soma_fora_da_matriz.toFixed(2)}`)
}

main()