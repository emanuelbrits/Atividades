import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input('Digite um número: '))

    let contador = 0

    let quadrado = 0

    while(quadrado < N){
        contador++

        quadrado = contador ** 2
    }

    if(quadrado > N){
        quadrado = (contador - 1) ** 2
        
        console.log(`${quadrado}`)
    }else{
        console.log(`${quadrado}`)
    }

}

main()