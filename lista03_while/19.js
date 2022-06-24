import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))

    let soma = 0

    let divisor = 1

    let dividendo = 0

    while(!eh_par(divisor)){
        
        soma += divisor / (N - dividendo)

        divisor++

        dividendo ++
    }

    while(eh_par(divisor)){

        soma -= (N - dividendo) / divisor

        divisor++

        dividendo++
    }

    if(eh_par(N)){
        soma -= N
    }else{
        soma += N
    }

    console.log(`${soma.toFixed(2)}`)
}

function eh_par(valor){
    return valor % 2 === 0
}

main()