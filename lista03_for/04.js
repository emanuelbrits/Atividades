import prompt from "prompt-sync"
const input = prompt()

function main(){

    const A0 = Number(input('Digite o início da progressão: '))
    const limite = Number(input('Digite o limite da progressão: '))
    const R = Number(input('Digite a razão da progressão: '))

    for(let i = A0; i <= limite; i = i * R){
        console.log(`${i}`)
    }
}

main()