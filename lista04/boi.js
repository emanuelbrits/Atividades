import {input} from "./io_utils.js"

function main(){

    let numero = Number(input("Digite o número de identificação do boi: "))
    let peso = Number(input("Digite o peso do boi: "))

    let mais_gordo = peso
    let numero_mais_gordo = numero

    let mais_magro = peso
    let numero_mais_magro = numero

    pesagem()

    while(numero !== 0){
        numero =  Number(input("Digite o número de identificação do boi: "))

        if(numero !== 0){
            peso = Number(input("Digite o peso do boi: "))
        }else{
            console.log(`Mais gordo: ${numero_mais_gordo}`)
            console.log(`Mais magro: ${numero_mais_magro}`)
        }

        pesagem()
    }

    function pesagem(){
        if(peso > mais_gordo){
            mais_gordo = peso
            numero_mais_gordo = numero
        }

        if(peso < mais_magro){
            mais_magro = peso
            numero_mais_magro = numero
        }
    }
}
main()