import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const tamanho = Number(input('Tamnho: '))

    const vetor_a = new Array(tamanho)

    let maior = 0
    let posicao_maior = 0

    let menor = 99999
    let posicao_menor = 0


    for(let i = 0; i < vetor_a.length; i++){
        vetor_a[i] = Number(input('item vetor a: '))

        if(vetor_a[i] > maior){
            maior = vetor_a[i]
            posicao_maior = i + 1
        }

        if(vetor_a[i] < menor){
            menor = vetor_a[i]
            posicao_menor = i + 1
        }

    }
    
    console.log(`Maior: ${maior}, posição: ${posicao_maior}`)
    console.log(`Menor: ${menor}, posição: ${posicao_menor}`)
}

main()