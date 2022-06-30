import prompt from "prompt-sync"
const input = prompt()

function main(){

    const frase = input("Digite a frase: ")

    const nova_frase = remover_vogais(frase)
    console.log(nova_frase)
}

function remover_vogais(frase){
    let nova_frase = ""

    for(let letra of frase){
        if(!eh_vogal(letra)){
            nova_frase+= letra
        }else{
            nova_frase+= ""
        }
    }

    return nova_frase
}

function eh_vogal(letra){
    const vogais = 'aeiou'

    for(let vogal of vogais){
        if(letra === vogal){
            return true
        }
    }

    return false
}

main()