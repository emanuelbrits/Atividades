import prompt from "prompt-sync"
const input = prompt()

function main(){

    const nome = input("Nome completo: ")

    const nome_no_documento = mostrar_nome(nome)
    console.log(nome_no_documento)

}

function mostrar_nome(nome){
    const nomes = nome.split(' ')

    const primeiro_nome = nomes[0]
    const ultimo_nome = nomes[nomes.length - 1]

    const nome_no_documento = `${ultimo_nome}/${primeiro_nome}`

    return nome_no_documento
}

main()