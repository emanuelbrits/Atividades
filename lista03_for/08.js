import prompt from "prompt-sync"
const input = prompt()

function main(){

    let N = Number(input("digite o número: "))

    let LimiteSuperior = Number(input("digite o limite superior: "))

    let LimiteInferior = Number(input("digite o limite inferior: "))

    for(let i = LimiteInferior; i < LimiteSuperior; i++){
        
        if(eh_multiplo(N, i)){
            console.log(`${i}`)
        }
        
    }

}

function eh_multiplo(valor1, valor2){
    return valor1 % valor2 === 0
}

main()