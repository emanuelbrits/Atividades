import prompt from "prompt-sync"
let input = prompt()

function main(){
    const posicao_e_palavra = input('Digite a posição e a palavra: ').split(',')

    const colunas  = vertical(posicao_e_palavra)
    console.log(colunas)

}

function vertical(posicao_e_palavra){
    let linha = ""

    let posicao = Number(posicao_e_palavra[0])
    
    let palavra = posicao_e_palavra[1]

    let i = 0
    let pos = 0

    while(i < palavra.length){
        let k = 0

        while(k < posicao - 1){
            linha+= "-"
            
            k++

        }
        
        linha+= palavra[pos++] + '\n'
        
        i++

    }

    return linha
}

main()