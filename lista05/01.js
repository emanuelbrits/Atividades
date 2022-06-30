import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const A = ['casa', 'carro', 'moto', 'cachorro', 'colher', 'prato']

    let B = []

    for(let i = A.length - 1; i >= 0; i--){
        B += A[i] + ' '
    }

    console.log(B)
}

main()