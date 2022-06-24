import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))

    const fibonacci = sequencia_de_fibonacci(N)

    console.log(`${fibonacci}`)
}

function sequencia_de_fibonacci(valor){

    let i = 2

    let fibonacci = []

    fibonacci[0] = 0
    
    fibonacci[1] = 1

    while(i < valor){

        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]

        i++
    }

    return fibonacci
}

main()