import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const tamanho = Number(input('Tamanho: '))

    const vetor = new Array(tamanho)

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(input('item vetor: '))
    }

    let resultado = 0

    console.log(resultado)

    for(let i = tamanho - 1; i >= (tamanho / 2) + 1; i-- ){
        let j = 0
        resultado+= ((vetor[j] - vetor[i]) ** 2) + ((vetor[j + 1] - vetor[i - 1]) ** 2)
        
        j--
    }

    console.log(resultado)
}

main()