import prompt from "prompt-sync"
const input = prompt()

function main(){

    let N = Number(input("Digite um número: "))

    for(let i = 1; i <= N; i++){
        console.log(`${i}`)
    }
}

main()