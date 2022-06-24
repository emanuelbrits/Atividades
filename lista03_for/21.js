import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N2 = 1

    let soma = 0

    for(let N1 = 1; N1 < 99; N1+= 2){
        soma += N1 / N2
        N2++
    }

    console.log(`${soma.toFixed(2)}`)
}

main()