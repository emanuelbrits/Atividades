import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))
    
    let n = 1

    let tabuada = N

    while(n <= 10){
        tabuada = N * n
        console.log(`${N} x ${n} = ${tabuada}`)
        n++       
    }
}
main()