import prompt from "prompt-sync"
const input = prompt()

function main(){

    let palavra = input("palavra: ")

    let palavra_invertida = inverter_palavra(palavra)
    console.log(palavra_invertida)

    if(verificar_se_eh_palindroma(palavra, palavra_invertida)){
        console.log('É palíndroma')
    }else{
        console.log('Não é palíndroma')
    }

}

function inverter_palavra(palavra){
    let palavra_invertida = ""

    let index = palavra.length - 1

    for(index; index >= 0; index--){
        palavra_invertida += palavra[index]
    }

    return palavra_invertida
}

function verificar_se_eh_palindroma(palavra, palavra_invertida){
    palavra = palavra.toUpperCase()
    palavra_invertida = palavra_invertida.toUpperCase()

    if(palavra_invertida === palavra){
        return true
    }else{
        return false
    }

}

main()