import {input} from "./io_utils.js"

function main(){

    let idade = Number(input("Digite sua idade: "))
    let opiniao = Number(input("Digite sua opinião: "))

    let espectadores = 0

    let otimo = 0
    let bom = 0
    let regular = 0
    let pessimo = 0

    let idade_otimo = 0
    let media_idade_otimo = 0

    let nota_otimo = 0
    let nota_bom = 0
    let nota_regular = 0
    let nota_pessimo = 0

    aprovacao()
    nota()
    media_otimo()

    while(idade !== -1){
        idade = Number(input("Digite sua idade: "))

        if(idade !== -1){
            opiniao = Number(input("Digite sua opinião: "))
            aprovacao()
            nota()
            media_otimo()
        }else{
            console.log(`Média de idade de quem acha ótimo: ${media_idade_otimo.toFixed(1)} anos`)
            console.log(`Quantidade de pessoas que responderam regular: ${regular}`)
            console.log(`Percentual de pessoas que responderam bom: ${nota_bom.toFixed(2)} %`)
        }
    }

    function aprovacao(){
        if(opiniao === 1){
            otimo++
            espectadores++
            idade_otimo += idade
        }
        if(opiniao === 2){
            bom++
            espectadores++
        }
        if(opiniao === 3){
            regular++
            espectadores++
        }
        if(opiniao === 4){
            pessimo++
            espectadores++
        }
    }

    function nota(){
        nota_otimo = (otimo / espectadores ) * 100
        nota_bom = (bom / espectadores ) * 100
        nota_regular = (regular / espectadores ) * 100
        nota_pessimo = (pessimo / espectadores ) * 100
    }

    function media_otimo(){
        media_idade_otimo = idade_otimo / otimo
    }

}
main()