import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))

    let soma = 0

    let contador = 0

    while(N !== 0){
        soma+= N
        
        contador++

        N = Number(input('Digite um número: '))
    }

    const media = soma / contador

    console.log(`${soma.toFixed(1)}`)
    console.log(`${media.toFixed(1)}`)

}

main()