import prompt from "prompt-sync"
const input = prompt()

function main(){

    const frase = input("Frase: ")

    const qtd_palavras = contar_palavras(frase)
    console.log(`${qtd_palavras} palavras`)

}

function contar_palavras(frase){
    const palavras = frase.split(" ")

    const qtd_palavras = palavras.length

    return qtd_palavras
}

main()