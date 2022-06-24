import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let LimiteSuperior = Number(input('Digite o limite superior: '))
    
    let LimiteInferior = Number(input('Digite o limite inferior: '))

    let contador = LimiteInferior

    while(contador < LimiteSuperior){
    
        if(eh_primo(contador) && contador !== 1){
            console.log(`${contador}`)
        }
        
        contador++

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