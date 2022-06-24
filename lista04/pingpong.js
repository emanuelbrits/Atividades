import {input} from "./io_utils.js"

function main(){
    
    let ponto = Number(input("Quem marcou ? "))

    
    let ponto_1 = 0
    let ponto_2 = 0
    
    somar()

    console.log(`Jogador 1: ${ponto_1}- Jogador 2: ${ponto_2}`)

    let maior = 0
    let menor = 0

    maior_menor()

    let diferenca = 0

    while(ponto_1 < 21 && ponto_2 < 21){
        ponto = Number(input("Quem marcou ? "))

        somar()

        maior_menor()

        diferenca = maior - menor

        console.log(`Jogador 1: ${ponto_1}- Jogador 2: ${ponto_2}`)

    }

    while(ponto_1 >= 20 && ponto_2 >= 20 && diferenca < 2){
        ponto = Number(input("Quem marcou ? "))

        somar()

        maior_menor()

        diferenca = maior - menor

        console.log(`Jogador 1: ${ponto_1}- Jogador 2: ${ponto_2}`)
    }

    if(ponto_1 > ponto_2){
        console.log('Vencedor: Jogador 1')
    }else{
        console.log('Vencedor: Jogador 2')
    }

    function somar(){
        if(ponto === 1){
            ponto_1++
        }
    
        if(ponto === 2){
            ponto_2++
        }
    }

    function maior_menor(){
        if(ponto_1 > ponto_2){
            maior = ponto_1
            menor = ponto_2
        }else if(ponto_2 > ponto_1){
            maior = ponto_2
            menor = ponto_1
        }else{
            maior = ponto_1
            menor = ponto_2
        }
    }

}

main()