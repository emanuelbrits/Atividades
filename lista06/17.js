import prompt from "prompt-sync"
const input = prompt()

function main(){

    const frase = input('Digite a frase: ')

    const nova_frase = extrair_cadeias(frase)
    console.log(nova_frase)
}

function extrair_cadeias(frase){
    const i = Number(input("A partir de: "))
    const N = Number(input("Quantos caracteres: "))
    let nova_frase = frase.substring(i, i + N)

    return nova_frase
}

main()