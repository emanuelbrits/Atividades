import prompt from "prompt-sync"
const input = prompt()

function main(){
    
    let soma = 0

    for(let N = Number(input('Digite um número: ')); N > 0; N--){
        soma += 1 / N
    }

    console.log(`${soma.toFixed(2)}`)
}



main()