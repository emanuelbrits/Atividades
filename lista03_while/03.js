import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let A = Number(input('Digite um número: '))
    let limite = Number(input('Digite o limite: '))
    let R = Number(input('Digite a razão: '))

    while(A <= limite){
        
        console.log(`${A}`)
        
        A += R
    }
}
main()