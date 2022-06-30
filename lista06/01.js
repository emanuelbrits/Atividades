import prompt from "prompt-sync"
const input = prompt()

function main(){

    const frase = input('Digite uma frase: ')
    console.log(frase)

    const frase_invertida = inverter_frase(frase)
    console.log(frase_invertida)

    const frase_criptografada = criptografia(frase, "$")
    console.log(frase_criptografada)

}

function inverter_frase(frase){
    let invertida = ""

    let i = frase.length - 1

    while(i >= 0){
        invertida = invertida + frase[i]

        i--
    }

    return invertida
}

function criptografia(frase, caracter){
    let frase_criptografada = ""

    let i = 0

    while(i < frase.length){
        if(eh_consoante(frase[i])){
            frase_criptografada += caracter
        }else{
            frase_criptografada += frase[i]
        }

        i++
    }

    return frase_criptografada
}

function eh_consoante(caracter){
    if(eh_letra(caracter) && !eh_vogal(caracter)){
        return true
    }
}

function eh_letra(caracter){
    if(eh_letra_maiuscula(caracter) || eh_letra_minuscula(caracter)){
        return true
    }else{
        return false
    }
}

function eh_letra_maiuscula(letra){
    const codigo = letra.charCodeAt(0)

    return (codigo >= 65) && (codigo <= 90)
}

function eh_letra_minuscula(letra){
    const codigo = letra.charCodeAt(0)

    return (codigo >= 97) && (codigo <= 122)
}

function eh_vogal(caracter){
    const vogais = 'aeiouAEIOU'
    for(let vogal of vogais){
        if(caracter === vogal){
            return true
        }
    }

    return false
}

main()