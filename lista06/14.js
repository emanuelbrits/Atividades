import prompt from "prompt-sync"
const input = prompt()

function main(){

    const nome = input("Nome: ").split(" ")

    const login = gerar_login(nome)
    console.log(`Seu login: ${login}`)

}

function gerar_login(nome){
    let login = ""

    for(let i = 0; i < nome.length; i++){
        login+= nome[i][0]
    }

    return login
}

main()