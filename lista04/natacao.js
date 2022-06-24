import {input} from "./io_utils.js"

function main(){
    
    let numero_da_prova = Number(input("Digite número da prova: "))
    let qtd = Number(input("Digite a quantidade de nadadores: "))

    let pontos_a = 0
    let pontos_b = 0

    while(qtd > 0){
        const nome = input("Digite seu nome: ")
        const classificacao = Number(input("Digite sua posição: "))
        const tempo = input("Digite o seu tempo: ")
        const clube = input("Digite o seu clube: ")

        if(clube === "a"){
            if(classificacao === 1){
                pontos_a += 9
            }else if(classificacao === 2){
                pontos_a += 6
            }else if(classificacao === 3){
                pontos_a += 4
            }else if(classificacao === 4){
                pontos_a += 3
            }
        }

        if(clube === "b"){
            if(classificacao === 1){
                pontos_b += 9
            }else if(classificacao === 2){
                pontos_b += 6
            }else if(classificacao === 3){
                pontos_b += 4
            }else if(classificacao === 4){
                pontos_b += 3
            }
        }
    qtd--
    }

    if(pontos_a > pontos_b){
        console.log('Vencedor: Time a')
        console.log(`Total de pontos do time a: ${pontos_a}`)
        console.log(`Total de pontos do time b: ${pontos_b}`)
    }else{
        console.log('Vencedor: Time b')
        console.log(`Total de pontos do time b: ${pontos_b}`)
        console.log(`Total de pontos do time a: ${pontos_a}`)
    } 
}

main()