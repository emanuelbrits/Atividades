import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let LimiteSuperior = Number(input('Digite o limite superior: '))
    
    let LimiteInferior = Number(input('Digite o limite inferior: '))

    let contador = LimiteInferior

    while(contador < LimiteSuperior){
    
        if(eh_par(contador)){
            console.log(`${contador}`)
        }
        
        contador++

    }

}

function eh_par(valor1){
    return valor1 % 2 === 0
}

main()