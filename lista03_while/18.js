import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))

    let soma = 0

    let divisor = 0

    let dividendo = 1

    while(divisor < N ){

        soma += dividendo / (N - divisor)

        divisor++

        dividendo++
    }

    soma+= N

    console.log(`${soma.toFixed(2)}`)
}

main()