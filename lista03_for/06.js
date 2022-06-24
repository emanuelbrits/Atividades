import prompt from "prompt-sync"
const input = prompt()

function main(){

    let N = Number(input("digite o número: "))

    console.log(`Tabuada de ${N}: `)

    for(let i = 1; i <= 10; i++){
        
        let resultado = N * i

        console.log(`${N} x ${i} = ${resultado}`)

    }

}

main()