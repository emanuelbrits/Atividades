import {input} from "./io_utils.js"

function main(){
    
    let salario = Number(input('Digite o salário: '))
    let novo_salario = 0
    let salario_atual = 0
    let reajuste = 0

    calculo()

    soma_atual()

    soma_reajuste()

    console.log(`Novo salário: R$ ${novo_salario.toFixed(2)}`)

    while(salario !== 0){
        salario = Number(input('Digite o salário: '))

        calculo()

        console.log(`Novo salário: R$ ${novo_salario.toFixed(2)}`)

        soma_atual()

        soma_reajuste()

    }

    let diferenca = reajuste - salario_atual

    console.log(`Soma dos salários atuais: R$ ${salario_atual.toFixed(2)}`)
    console.log(`Soma dos salários reajustados: R$ ${reajuste.toFixed(2)}`)
    console.log(`Diferença entre os salários: R$ ${diferenca.toFixed(2)}`)

    function calculo(){
        if(salario >= 0 && salario <= 2999){
            novo_salario = salario + (salario * 0.25)
        }else if(salario >= 3000 && salario <= 5999){
            novo_salario = salario + (salario * 0.2)
        }else if(salario >= 6000 && salario <= 9999){
            novo_salario = salario + (salario * 0.15)
        }else if(salario >= 10000){
            novo_salario = salario + (salario * 0.1)
        }
    }

    function soma_atual(){
        salario_atual = salario_atual + salario
    }

    function soma_reajuste(){
        reajuste = reajuste + novo_salario
    }
}

main()