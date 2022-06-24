import prompt from "prompt-sync"
const input = prompt()

function main(){

    const LimiteSuperior = Number(input("digite o limite superior: "))

    const LimiteInferior = Number(input("digite o limite inferior: "))

    for(let i = LimiteInferior; i <= LimiteSuperior; i++){
        
        if(eh_primo(i) && i !== 1){
            console.log(`${i}`)
        }
        
    }

}

function eh_primo(valor1){
    if((valor1 % 2 === 0 && valor1 !== 2) || (valor1 % 3 === 0 && valor1 !== 3) || (valor1 % 5 === 0 && valor1 !== 5) || (valor1 % 7 === 0 && valor1 !== 7)){
        return false
    }else{
        return true
    }
}

main()