import prompt from "prompt-sync"
const input = prompt()

function main(){
    
    const N = Number(input('Digite o número: '))

    const fibonacci = sequencia_de_fibonacci(N)

    console.log(`${fibonacci}`)
}

function sequencia_de_fibonacci(valor){

    let fibonacci = []

    fibonacci[0] = 0

    fibonacci[1] = 1

    for(let i = 2; i < valor; i++){
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
    }

    return fibonacci

}

main()