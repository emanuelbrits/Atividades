import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const numero = new Array(8)

    for(let i = 0; i < numero.length; i++){
        numero[i] = Number(input("Número: "))
    }
    
    const decimal = converter_para_decimal(numero)
    console.log(`Decimal = ${decimal}`)

    const hexadecimal = converter_para_hexadecimal(decimal)
    console.log(`Hexadecimal = ${hexadecimal}`)
}

function converter_para_decimal(numero){
    let valor_decimal = 0
    let expoente = numero.length - 1
    
    for(let i = 0; i < numero.length; i++){
        valor_decimal+= Number(numero[i]) * (2 ** expoente)

        expoente--
    }

    return valor_decimal
}

function converter_para_hexadecimal(decimal){
  if (decimal < 0)
  {
    decimal = 0xFFFFFFFF + decimal + 1;
  }

  return decimal.toString(16).toUpperCase();
}

main()