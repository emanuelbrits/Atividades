import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))

    let n = N

    let contador = 1

    console.log(`${contador}`)

    while(contador < 150){
       
        contador += n

        console.log(`${contador}`)

        n++

    }

}

main()