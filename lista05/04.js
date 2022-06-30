import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const tamanho = Number(input('Tamnho: '))

    const vetor_a = new Array(tamanho)

    for(let i = 0; i < vetor_a.length; i++){
        vetor_a[i] = Number(input('item vetor a: '))
    }
    
    const vetor_b = new Array(tamanho)

    for(let i = 0; i < vetor_b.length; i++){
        vetor_b[i] = Number(input('item vetor b: '))
    }

    const uniao = vetor_b
    const intersecao = []

    vetor_a.forEach(function(item){
        if(vetor_b.indexOf(item) != - 1){
            intersecao.push(item)
        }else{
            uniao.push(item)
        }
    })

    console.log(uniao)
    console.log(intersecao)
}

main()