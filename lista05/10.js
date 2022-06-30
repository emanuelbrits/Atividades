import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const N = Number(input('Até que termo: '))

    const fibonacci = sequencia_de_fibonacci(N)
    console.log(fibonacci)
}

function sequencia_de_fibonacci(vetor_a){

    let i = 2

    let fibonacci = []

    fibonacci[0] = 0
    
    fibonacci[1] = 1

    while(i < vetor_a){

        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]

        i++
    }

    return fibonacci
}


main()