import prompt from "prompt-sync"
const input = prompt()

function main(){

    let N = Number(input("Digite um número: "))

    for(let i = 1; i <= N; i++){
        if(eh_par(i)){
            console.log(`${i}`)
        }
    }
}

function eh_par(valor){
    return valor % 2 === 0
}

main()