import prompt from "prompt-sync"
const input = prompt()

function main(){

    const frase = input("Frase: ")

    const nova_frase = duplicar_frase(frase)
    console.log(nova_frase)

}

function duplicar_frase(frase){

    let nova_frase = ""

    let i = 0

    for(i; i < frase.length; i++){
        nova_frase += frase[i] + frase[i]
    }

    return nova_frase
}

main()