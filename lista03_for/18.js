import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))

    let soma = 0

    let dividendo = 1
    
    for(let divisor = 0; divisor < N; divisor++){
        soma += dividendo / (N - divisor)

        dividendo++
    }

    soma+= N

    console.log(`${soma.toFixed(2)}`)
}

main()