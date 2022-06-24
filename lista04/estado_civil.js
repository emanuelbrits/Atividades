import {input} from "./io_utils.js"

function main(){

    let sexo = Number(input("Digite seu sexo: "))
    let idade = Number(input("Digite sua idade: "))
    let estado_civil = Number(input("Digite seu estado civil: "))

    let homens = 0
    let mulheres = 0

    let casado = 0
    let solteiro = 0
    let divorciado = 0
    let viuvo = 0

    let idade_homens = 0
    let idade_mulheres = 0


    let media_homens = 0
    let media_mulheres = 0

    let homens_solteiros = 0
    let percentual_homens_solteiros = 0
    
    let mulheres_solteiras = 0
    let percentual_mulheres_solteiras = 0
    let divorciadas = 0

    checagem()
    medias()

    while(sexo < 7){
        sexo = Number(input("Digite sua idade: "))
        idade = Number(input("Digite sua idade: "))
        estado_civil = Number(input("Digite seu estado civil: "))
            
        checagem()
        medias()

        }
    
        console.log(`Média de idade dos homens: ${media_homens} anos`)
        console.log(`Média de idade das mulheres: ${media_mulheres} anos`)
        console.log(`Percentual de homens solteiros: ${percentual_homens_solteiros} %`)
        console.log(`Percentual de mulheres solteiras: ${percentual_mulheres_solteiras} %`)
        console.log(`Quantidades de mulheres divorciadas com mais de 30 anos: ${divorciadas}`)

    function checagem(){
        if(sexo === 1){
            homens++
            idade_homens += idade
        }
        
        if(sexo === 1 && estado_civil === 2){
            homens++
            homens_solteiros++
            idade_homens += idade
        }

        if(sexo === 2 && estado_civil !== 3){
            mulheres++
            idade_mulheres += idade
        }
        
        if(sexo === 2 && estado_civil === 3 && idade >= 30){
            mulheres++
            divorciadas++
            idade_mulheres += idade
        }
        
        if(sexo === 2 && estado_civil === 2){
            mulheres++
            mulheres_solteiras++
            idade_mulheres += idade
        }

        if(estado_civil === 1){
            casado++
        }
        
        if(estado_civil === 2){
            solteiro++
        }
        
        if(estado_civil === 3){
            divorciado++
        }
        
        if(estado_civil === 4){
            viuvo++
        }

    }

    function medias(){
        media_homens = idade_homens / homens
        media_mulheres = idade_mulheres / mulheres
    }

    function solteiros(){
        percentual_homens_solteiros = homens_solteiros / homens
    }
    
    function solteiras(){
        percentual_mulheres_solteiras = mulheres_solteiras / mulheres
    }

}
main()