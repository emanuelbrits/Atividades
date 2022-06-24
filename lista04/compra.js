import {input} from "./io_utils.js"

function main(){

    let nome = input("Nome do produto: ")
    let preco
    let qtd

    while(nome !== "FIM"){
    
    preco = Number(input("Preço do produto: "))
    qtd = Number(input("Quantidade de itens: "))
    
    if(qtd <= 10){
        preco = qtd * preco
    }else if(qtd > 10 && qtd <= 20){
        preco = qtd * (preco - (preco * (10/100)))
    }else if(qtd > 20 && qtd <= 50){
        preco = qtd * (preco - (preco * (20/100)))
    }else if(qtd > 50){
        preco = qtd * (preco - (preco * (25/100)))
    }

    console.log(`${nome}: R$ ${preco.toFixed(2)}`)

    nome = input("Nome do produto: ")
    }



}
main()