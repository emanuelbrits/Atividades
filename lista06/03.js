import prompt from "prompt-sync"
const input = prompt()

function main(){

    const frase = input("Frase: ")

    const nova_frase = retirar_espaco(frase)
    console.log(nova_frase)

}

function retirar_espaco(frase){
    let nova_frase = ""
    
    let i = 0

    for(i; i < frase.length; i++){
        if(!eh_espaco(frase[i])){
            nova_frase += frase[i]
        }
    }

    return nova_frase
}

function eh_espaco(letra){
    const codigo = letra.charCodeAt(0)

    return codigo === 32
}

main()