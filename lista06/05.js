import prompt from "prompt-sync"
const input = prompt()

function main(){

    const data = input("digite a data: ").split('/')

    const ano = Number(data[2])
    const ano1 = data[2]
    const milhar_ano = Number(ano1[0])
    const centena_ano = Number(ano1[1])
    const dezena_ano = Number(ano1[2])
    const unidade_ano = Number(ano1[3])

    const mes = Number(data[1])
    const dia = Number(data[0])

    let nova_data = ""
    
    const numeros = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]
    
    const dezenas = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]
    const centenas = ["cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"]

    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

    if(dia <= 20){
        nova_data = numeros[dia] + " de " + meses[mes - 1] + " de "
    }else if(dia < 30){
        nova_data = 'vinte e ' + numeros[dia - 20] + " de " + meses[mes - 1] + " de "
    }else if(dia == 30){
        nova_data = 'trinta de ' + meses[mes - 1] + " de "
    }else{
        nova_data = 'trinta e um de ' + meses[mes - 1] + " de "
    }

    if(ano <= 999){
        nova_data += centenas[centena_ano - 1] + " e " + dezenas[dezena_ano - 1]
        if(unidade_ano != 0){
            nova_data+= " e " + numeros[unidade_ano]
        }
    }else{
        nova_data += numeros[milhar_ano] + " mil "
        if(centena_ano != 0){
            nova_data += "e " + centenas[centena_ano - 1]
        }else if(dezena_ano != 0){
            nova_data += "e " + dezenas[dezena_ano - 1]
        }
        
        if(unidade_ano != 0){
            nova_data += " e " + numeros[unidade_ano]
        }
    }

    console.log(nova_data)
}

main()