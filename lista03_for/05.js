import prompt from "prompt-sync"
const input = prompt()

function main(){

    let N = Number(input("digite o número: "))

    let fatorial = N

    for(let n = 1; n < N; n++){
        fatorial = fatorial * (N - n)
    }
    
    console.log(`${fatorial}`)
}

main()