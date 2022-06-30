import prompt from "prompt-sync"
const input = prompt()

function main(){

    const frase = input("Frase: ")

    const separar = mostrar_palavra(frase)
    console.log(separar)

}

function mostrar_palavra(frase){
    let i = 0

    while(i < frase.length){
        console.log(`${frase[i]}`)

        i++
    }
}

main()