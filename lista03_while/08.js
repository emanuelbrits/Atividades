import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))
    
    let LimiteSuperior = Number(input('Digite o limite superior: '))
    
    let LimiteInferior = Number(input('Digite o limite inferior: '))

    let contador = LimiteInferior

    while(contador < LimiteSuperior){
        
        if(eh_multiplo(N, contador)){
            console.log(`${N} é múltiplo de ${contador}`)
        }

        contador++
    }

}

function eh_multiplo(valor1, valor2){
    return valor1 % valor2 === 0
}

main()