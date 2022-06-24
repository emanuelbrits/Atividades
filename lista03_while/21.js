import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N1 = 1

    let N2 = 1

    let soma = 0

    while(N1 < 99){

        soma += N1 / N2

        N1+= 2
        N2++
    }

    console.log(`${soma.toFixed(2)}`)
}

main()