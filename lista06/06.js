import prompt from "prompt-sync"
const input = prompt()

function main(){

    const frase = input('Frase: ')

    const nova_frase = numero_por_extenso(frase)
    console.log(nova_frase)
}

function numero_por_extenso(frase){
    const numeros = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"]

    let nova_frase = ""

    let i = 0

    while(i < frase.length){
        if(!eh_numero(frase[i])){
            nova_frase+= frase[i]
        }else{
            nova_frase+= numeros[Number(frase[i])] + " "
        }

        i++
    }

    return nova_frase
}

function eh_numero(frase){
    
    for(let letra of frase){
        if(letra.charCodeAt(0) >= 48 && letra.charCodeAt(0) <= 57){
            return true
        }else{
            return false
        }
    }
}

main()