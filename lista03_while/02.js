import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const N = Number(input('Digite um número: '))
    let contador = 1

    while(contador <= N){
        if(eh_par(contador)){
            console.log(`${contador}`)
        }
        contador++
    }
}

function eh_par(valor){
    return valor % 2 === 0
}

main()