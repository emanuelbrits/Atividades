import prompt from "prompt-sync"
const input = prompt()

function main(){
    
    let N = Number(input('Digite o número: '))

    let sequencia = 1

    let razao = 2

    console.log(`${sequencia}`)

    for(let i = 0; i < N; i++){
        sequencia += razao

        console.log(`${sequencia}`)

        razao++
    }

}

main()