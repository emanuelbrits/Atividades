import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))

    let soma = 0
    
    for(N; N > 0; N--){
        if(eh_par(N)){
            soma -= 1 / N
        }else{
            soma += 1 / N
        }   
    }

    if(eh_par(N)){
            soma -= N
        }else{
            soma += N
        }  

    console.log(`${soma.toFixed(2)}`)
}

function eh_par(valor){
    return valor % 2 === 0
}

main()