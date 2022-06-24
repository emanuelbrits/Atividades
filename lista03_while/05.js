import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))
    
    let n = 1

    let fatorial = N

    while(n < N){
        fatorial = fatorial * (N - n)
        n++
    }
    
    console.log(`${fatorial}`)
}
main()