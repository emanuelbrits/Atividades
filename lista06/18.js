import prompt from "prompt-sync"
const input = prompt()

function main(){

    const frase = input('Digite a frase: ')

    const nova_frase = substituir(frase)
    console.log(nova_frase)
}

function substituir(frase){
    const parte_removida = input("Parte a se alterar: ")
    const parte_adicionada = input("Parte adicionada: ")
    
    const nova_frase = frase.replace(parte_removida, parte_adicionada)

    return nova_frase
}

main()