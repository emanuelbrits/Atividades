import prompt from "prompt-sync"
const input = prompt()

function main(){

    let N = Number(input("digite o número: "))

    let soma = 0

    for(let i = 1; i <= N; i++){
        soma += i
    }
    
    console.log(`${soma}`)
}

main()