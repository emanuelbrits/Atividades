import prompt from "prompt-sync"
const input = prompt()

function main(){

    const verbo = input("Verbo: ")

    const pessoa_1_singular = primeira_pessoa_singular(verbo)
    console.log(`Eu ${pessoa_1_singular}`)

    const pessoa_2_singular = segunda_pessoa_singular(verbo)
    console.log(`Tu ${pessoa_2_singular}`)

    const pessoa_3_singular = terceira_pessoa_singular(verbo)
    console.log(`Ele ${pessoa_3_singular}`)

    const pessoa_1_plural = primeira_pessoa_plural(verbo)
    console.log(`Nós ${pessoa_1_plural}`)

    const pessoa_2_plural = segunda_pessoa_plural(verbo)
    console.log(`Vós ${pessoa_2_plural}`)

    const pessoa_3_plural = terceira_pessoa_plural(verbo)
    console.log(`Eles ${pessoa_3_plural}`)

}

function primeira_pessoa_singular(verbo){

    let novo_verbo = ""

    let i = 0

    for(i; i < verbo.length - 2; i++){
        novo_verbo += verbo[i]
    }

    novo_verbo += "o"

    return novo_verbo
}

function segunda_pessoa_singular(verbo){

    let novo_verbo = ""

    let i = 0

    for(i; i < verbo.length - 2; i++){
        novo_verbo += verbo[i]
    }

    novo_verbo += "es"

    return novo_verbo
}

function terceira_pessoa_singular(verbo){

    let novo_verbo = ""

    let i = 0

    for(i; i < verbo.length - 2; i++){
        novo_verbo += verbo[i]
    }

    novo_verbo += "e"

    return novo_verbo
}

function primeira_pessoa_plural(verbo){

    let novo_verbo = ""

    let i = 0

    for(i; i < verbo.length - 2; i++){
        novo_verbo += verbo[i]
    }

    novo_verbo += "emos"

    return novo_verbo
}

function segunda_pessoa_plural(verbo){

    let novo_verbo = ""

    let i = 0

    for(i; i < verbo.length - 2; i++){
        novo_verbo += verbo[i]
    }

    novo_verbo += "eis"

    return novo_verbo
}

function terceira_pessoa_plural(verbo){

    let novo_verbo = ""

    let i = 0

    for(i; i < verbo.length - 2; i++){
        novo_verbo += verbo[i]
    }

    novo_verbo += "em"

    return novo_verbo
}

main()