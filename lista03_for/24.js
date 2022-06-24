import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let salario = Number(input('Digite o seu salário: '))
    let qtd_filhos = Number(input('Digite a quantidade de filhos: '))
    let habitantes = 0

    let total_salario = salario
    let total_filhos = qtd_filhos

    let qtd_mais_de_1000 = 0

    if(salario >= 1000){
        qtd_mais_de_1000++
    }

    for(salario; salario != 0; ){
        salario = Number(input('Digite o seu salário: '))
        qtd_filhos = Number(input('Digite a quantidade de filhos: '))

        total_salario += salario
        total_filhos += qtd_filhos
        habitantes++

        if(salario >= 1000){
            qtd_mais_de_1000++
        }
    }

    let media_salarial = total_salario / habitantes
    let media_filhos = total_filhos / habitantes
    let percentual_mais_de_1000 = (qtd_mais_de_1000 / habitantes) * 100

    console.log("")
    console.log(`média de salário: R$ ${media_salarial.toFixed(2)}`)
    console.log(`média de filhos: ${media_filhos}`)
    console.log(`porcentagem de habitantes que ganham mais que R$ 1000: ${percentual_mais_de_1000} %`)
}

main()