import {input} from "./io_utils.js"

function main(){

    let nome = input("Digite o nome: ")
    let altura = Number(input("Digite a altura: "))
    let peso = Number(input("Digite o peso: "))

    let mais_alta = altura
    let nome_mais_alta = nome

    let mais_baixa = altura
    let nome_mais_baixa = nome

    let mais_pesada = peso
    let nome_mais_pesada = nome

    let mais_leve = peso
    let nome_mais_leve = nome

    while(nome !== "FIM"){
        
        nome = input("Digite o nome: ")
        
        if(nome !== "FIM"){
            altura = Number(input("Digite a altura: "))
            peso = Number(input("Digite o peso: "))
        }else{
            console.log(`Mais alta: ${nome_mais_alta}`)
            console.log(`Mais baixa: ${nome_mais_baixa}`)
            console.log(`Mais pesada: ${nome_mais_pesada}`)
            console.log(`Mais leve: ${nome_mais_leve}`)
        }

        if(altura > mais_alta){
            mais_alta = altura
            nome_mais_alta = nome
        }
        
        if(altura < mais_baixa){
            mais_baixa = altura
            nome_mais_baixa = nome
        }
        
        if(peso > mais_pesada){
            mais_pesada = peso
            nome_mais_pesada = nome
        }
        
        if(peso < mais_leve){
            mais_leve = peso
            nome_mais_leve = nome
        }

        
    }


}
main()