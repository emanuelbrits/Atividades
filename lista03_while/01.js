import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const N = Number(input('Digite um número: '))
    let contador = 1

    while(contador <= N){
        console.log(`${contador}`)
        contador++
    }
}
main()