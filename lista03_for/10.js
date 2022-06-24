import prompt from "prompt-sync"
const input = prompt()

function main(){

    const LimiteSuperior = Number(input("digite o limite superior: "))

    const LimiteInferior = Number(input("digite o limite inferior: "))

    for(let i = LimiteInferior; i <= LimiteSuperior; i++){
        
        if(!eh_par(i)){
            console.log(`${i}`)
        }
        
    }

}

function eh_par(valor){
    return valor % 2 === 0
}

main()