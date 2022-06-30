import prompt from "prompt-sync"
const input = prompt()

function main(){

    const nome = input("Nome completo: ")

    const nome_no_documento = mostrar_nome(nome)
    console.log(nome_no_documento)

}

function mostrar_nome(nome){
    const nomes = nome.split(' ')
    const ultimo_nome = nomes[nomes.length - 1]
    let nome_no_documento = `${ultimo_nome},`

    for(let i = 0; i < nomes.length - 1; i++){
        nome_no_documento += ` ${nomes[i][0]}.`
    }

    nome_no_documento += "."

    return nome_no_documento
}

main()