import prompt from "prompt-sync"
const input = prompt()

function main(){
    
    let maior = -9999

    for(let i = 0; i < 7; i ++){
        
        let N = Number(input('Digite um número: '))
        
        if(N > maior){
            maior = N
        }

    }

    console.log(`${maior}`)

}

main()