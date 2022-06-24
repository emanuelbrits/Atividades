import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))
    
    let n = 0

    let soma = 0

    while(n <= N){
        soma += n
        
        n++
    }
    
    console.log(`${soma}`)
    
}
main()