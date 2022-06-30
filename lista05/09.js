import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const tamanho = Number(input('Tamnho: '))

    const vetor_a = new Array(tamanho)

    for(let i = 0; i < vetor_a.length; i++){
        vetor_a[i] = Number(input('item vetor a: '))
    }

    vetor_a.sort(function(a, b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;

    })

    console.log(vetor_a)
}


main()