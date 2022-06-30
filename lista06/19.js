import prompt from "prompt-sync"
const input = prompt()

function main(){

    const binario = input('Número binário: ')

    const valor_decimal = converter_para_decimal(binario)
    console.log(valor_decimal)
}

function converter_para_decimal(binario){
    let valor_decimal = 0
    let expoente = binario.length - 1
    
    for(let i = 0; i < binario.length; i++){
        valor_decimal+= Number(binario[i]) * (2 ** expoente)

        expoente--
    }

    return valor_decimal
}

main()