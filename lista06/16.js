import prompt from "prompt-sync"
let input = prompt()

function main(){
    const palavra = input('Digite a posição e a palavra: ')

    const escrever  = diagonal(palavra)
    console.log(escrever)

}

function diagonal(palavra){
    let linha = ""

    let i = 0

    let pos = 0

    while(i < palavra.length){
        let k = 0

        while(k < i){
            linha += " "

            k++
        }

        linha+= palavra[pos++] + '\n'

        i++
    }

    return linha
}

main()