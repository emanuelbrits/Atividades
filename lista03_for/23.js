import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let codigo = Number(input("Digite o código: "))
    let hora_trabalhadas = Number(input("Digite a quantidade de horas trabalhadas: "))
    let dependentes = Number(input("Digite a quantidade de dependentes: "))

    let valor_pago_bruto = (12 * hora_trabalhadas) + (40 * dependentes)
    let valor_pago_liquido = valor_pago_bruto - (valor_pago_bruto * (8.5 / 100)) - (valor_pago_bruto * (5/100))

    let INSS = valor_pago_bruto * (5/100)
    let IR = valor_pago_bruto * (8.5 / 100)

    console.log(`INSS: R$ ${INSS.toFixed(2)}`)
    console.log(`IR: R$ ${IR.toFixed(2)}`)
    console.log(`Salário líquido: R$ ${valor_pago_liquido.toFixed(2)}`)
    console.log('')

    for(codigo; codigo !=0; ){
        codigo = Number(input("Digite o código: "))
        if(codigo !== 0){
            hora_trabalhadas = Number(input("Digite a quantidade de horas trabalhadas: "))
            dependentes = Number(input("Digite a quantidade de dependentes: "))

            valor_pago_bruto = (12 * hora_trabalhadas) + (40 * dependentes)
            valor_pago_liquido = valor_pago_bruto - (valor_pago_bruto * (8.5 / 100)) - (valor_pago_bruto * (5/100))

            INSS = valor_pago_bruto * (5/100)
            IR = valor_pago_bruto * (8.5 / 100)

            console.log(`INSS: R$ ${INSS.toFixed(2)}`)
            console.log(`IR: R$ ${IR.toFixed(2)}`)
            console.log(`Salário líquido: R$ ${valor_pago_liquido.toFixed(2)}`)
            console.log(' ')}

    }
}


main()