import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const tamanho = Number(input('Tamanho: '))

    const vetor_a = new Array(tamanho)

    for(let i = 0; i < vetor_a.length; i++){
        vetor_a[i] = Number(input('item vetor a: '))
    }
    
    const vetor_b = new Array(tamanho)

    for(let i = 0; i < vetor_b.length; i++){
        if(eh_par(vetor_a, i)){
            vetor_b[i] = 0
        }else{
            vetor_b[i] = 1
        }
    }

    console.log(vetor_a)
    console.log(vetor_b)
}

function eh_par(vetor_a, i){
    return vetor_a[i] % 2 === 0
}

main()