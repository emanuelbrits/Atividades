import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))

    let soma = 0

    while(N > 0){

        soma += 1 / N

        N--
    }

    console.log(`${soma.toFixed(2)}`)
}

main()