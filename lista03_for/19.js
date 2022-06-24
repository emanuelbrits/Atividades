import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))

    let soma = 0

    let dividendo = 0

    let divisor = 1

    for(divisor; !eh_par(divisor); divisor++){
        soma += divisor / (N - dividendo)
        dividendo++
    }

    for(divisor; eh_par(divisor); divisor++){
        soma -= (N - dividendo) / divisor
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