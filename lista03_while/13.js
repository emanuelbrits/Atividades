import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))

    let contador = 0

    let maior = N

    while(N !== 0){

        if(N > maior){
            maior = N
        }

        contador++

        N = Number(input('Digite um número: '))
    }

    console.log(`${maior}`)

}

main()