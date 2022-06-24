import prompt from "prompt-sync"
const input = prompt()

function main(){
    
    let soma = 0

    let i = 0

    for(i; i < 5; i ++){
        
        let N = Number(input('Digite um número: '))
        
        soma += N

    }

    const media = soma / i

    console.log(`${media.toFixed(1)}`)

}

main()