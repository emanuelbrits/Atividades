import prompt from "prompt-sync"
const input = prompt()

function main(){
    
    let N = Number(input('Digite o número: '))

    let quadrado = 0

    let i = 0

    for(i; quadrado < N; i++){
        quadrado = i ** 2
    }

    if(quadrado > N){
        quadrado = (i - 2) ** 2
    }

    console.log(`${quadrado}`)

}

main()