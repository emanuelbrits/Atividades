import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const numero_de_itens = Number(input('Número de itens: '))

    const nova_array = new Array(numero_de_itens)

    for(let i = 0; i < numero_de_itens; i++){
        nova_array[i] = Number(input('Valor: '))
    }

    console.log(nova_array)
    
    if(elementos_repetidos(nova_array)){
        console.log('Existem itens repetidos')
    }else{
        console.log('Não existem itens repetidos')
    }
}

function elementos_repetidos(nova_array){

    for(let item of nova_array){
        if(contar_itens(nova_array, item) > 1){
            return true
        }
    }

    return false
}

function contar_itens(nova_array, item){
    let i = 0
    let item_atual

    for(let k = 0; k < nova_array.length; k++){
        item_atual = nova_array[k]
        if(item_atual === item){
            i++
        }
    }

    return i
}

main()