import prompt from "prompt-sync"
const input = prompt()

export function criar_matriz_quadrada(ordem){

    const matriz_quadrada = new Array(ordem)

    for(let i = 0; i < matriz_quadrada.length; i++){
        matriz_quadrada[i] = new Array(ordem)

        for(let j = 0; j < matriz_quadrada[i].length; j++){
            matriz_quadrada[i][j] = Number((Math.random() * (10 - (-10)) + (-10)).toFixed(1))
        }
    }

    return matriz_quadrada
}


export function transpor_matriz(matriz_quadrada, ordem){

    const matriz_tranposta = new Array(ordem)

    for(let i = 0; i < ordem; i++){
        matriz_tranposta[i] = new Array(ordem)

        for(let j = 0; j < matriz_tranposta[i].length; j++){
            matriz_tranposta[i][j] = matriz_quadrada[j][i]
        }
    }

    return matriz_tranposta
}


export function somar_diagonal_principal(matriz_quadrada){

    let soma = 0

    for(let i = 0; i < matriz_quadrada.length; i++){
        for(let j = 0; j < matriz_quadrada[i].length; j++){
            if(i === j){
                soma += matriz_quadrada[i][j]
            }
        }
    }

    return soma
}


export function somar_diagonal_secundaria(matriz_quadrada, ordem){

    let soma = 0

    let x = 0
    let y = matriz_quadrada.length - 1
    
    for(let i = 0; i < ordem; i++){
        soma += matriz_quadrada[x][y]
        x++
        y--
    }

    return soma
}

export function somar_matriz(matriz_quadrada){
    let soma = 0
    
    for (let i = 0; i < matriz_quadrada.length; i++){
        for (let j = 0; j < matriz_quadrada[i].length; j++){
            soma += matriz_quadrada[i][j]
        }
    }

    return soma
}


export function somar_fora_matriz(soma_principal, soma_secundaria, soma_matriz, ordem, matriz_quadrada){
    let soma = 0

    if(eh_par(ordem)){
        soma = soma_matriz - soma_principal - soma_secundaria
    }else{
        soma = soma_matriz - soma_principal - soma_secundaria + matriz_quadrada[(ordem - 1) / 2][(ordem - 1) / 2]
    }

    return soma
}


export function determinante_funcao(matriz_quadrada, ordem){

    let determinante = 0  

    if(ordem === 2){
        determinante = matriz_quadrada[0][0] * matriz_quadrada[1][1] - matriz_quadrada[0][1] * matriz_quadrada[1][0]
    }else{

    }

    return determinante
}


export function maior(matriz_quadrada){

    let maior = matriz_quadrada[0][0]
    let linha_maior = 0
    let coluna_maior = 0

    for (let i = 0; i < matriz_quadrada.length; i++){
        for (let j = 0; j < matriz_quadrada[i].length; j++){
            if(matriz_quadrada[i][j] > maior){
                maior = matriz_quadrada[i][j]
                linha_maior = i
                coluna_maior = j
            }
        }
    }

    console.log(`Maior valor: ${maior} na linha ${linha_maior + 1}, coluna ${coluna_maior + 1}`)
}


export function menor(matriz_quadrada){

    let menor = matriz_quadrada[0][0]
    let linha_menor = 0
    let coluna_menor = 0

    for (let i = 0; i < matriz_quadrada.length; i++){
        for (let j = 0; j < matriz_quadrada[i].length; j++){
            if(matriz_quadrada[i][j] < menor){
                menor = matriz_quadrada[i][j]
                linha_menor = i
                coluna_menor = j
            }
        }
    }

    console.log(`Menor valor: ${menor} na linha ${linha_menor + 1}, coluna ${coluna_menor + 1}`)
}


export function pedir_numero(msg){

    let numero = Number(input(msg))

    while(isNaN(numero)){
        console.log('Por favor, digite um número: ')
        numero = Number(input(': '))
    }

    return numero
}


export function verificar_matriz(matriz_quadrada){

    let k = 0

    for (let i = 0; i < matriz_quadrada.length; i++){
        for (let j = 0; j < matriz_quadrada[i].length; j++){
            if(matriz_quadrada[i][j] === matriz_quadrada[j][i]){
                k ++
            }
        }
    }

    if(k === matriz_quadrada.length ** 2){
        console.log('Matriz simétrica')
    }else{
        console.log('Matriz assimétrica')
    }
}


export function criar_matriz_identidade(ordem){

    const matriz_identidade = new Array(ordem)

    for(let i = 0; i < matriz_identidade.length; i++){
        matriz_identidade[i] = new Array(ordem)

        for(let j = 0; j < matriz_identidade[i].length; j++){
            if(i === j){
                matriz_identidade[i][j] = 1
            }else{
                matriz_identidade[i][j] = 0
            }
        }
    }

    return matriz_identidade
}


export function soma_das_linhas(matriz_quadrada){

    let maior = 0
    let maior_linha = 0

    let menor = 9999999
    let menor_linha = 0

    let soma = 0

    for(let i = 0; i< matriz_quadrada.length; i++){
        for(let j = 0; j < matriz_quadrada[i].length; j++){
            soma += matriz_quadrada[i][j]
        }
        
        if(soma > maior){
            maior = soma
            maior_linha = i + 1
        }else if(soma < menor){
            menor = soma
            menor_linha = i + 1
        }

        soma = 0
    }

    console.log(`Maior linha: ${maior_linha} = ${maior}`)
    console.log(`Menor linha: ${menor_linha} = ${menor}`)
}

export function somar_positivos_negativos(matriz_quadrada){

    let soma_positivos = 0
    let soma_negativos = 0

    for(let i = 0; i< matriz_quadrada.length; i++){
        for(let j = 0; j < matriz_quadrada[i].length; j++){
            if(matriz_quadrada[i][j] > 0){
                soma_positivos+= matriz_quadrada[i][j]
            }else{
                soma_negativos+= matriz_quadrada[i][j]
            }
        }
    }

    console.log(`Soma dos positivos = ${soma_positivos}`)
    console.log(`Soma dos negativos = ${soma_negativos}`)
}


export function criar_matriz_esquisita(){
    const matriz_esquisita = new Array(6)

    for(let i = 0; i < matriz_esquisita.length; i++){
        matriz_esquisita[i] = new Array(6)

        for(let j = 0; j < matriz_esquisita[i].length; j++){
            if(i === 0 || i ===5){
                matriz_esquisita[i][j] = 1
            }else if(j === 0 || j === 5){
                matriz_esquisita[i][j] = 1
            }else if((i > 0 && i < 5) && (i !== 2 && i !== 3) && (j > 0 && j < 5)){
                matriz_esquisita[i][j] = 2
            }else if((i === 2 || i === 3) && (j === 4 || j ===1)){
                matriz_esquisita[i][j] = 2
            }else{
                matriz_esquisita[i][j] = 3
            }
        }
    }

    return matriz_esquisita
}


export function criar_matriz_crescente(){
    
    const matriz_crescente = new Array(5)

    let contador = 1

    for(let i = 0; i < matriz_crescente.length; i++){
        matriz_crescente[i] = new Array(5)

        for(let j = 0; j < matriz_crescente[i].length; j++){
            if(contador < 10){
                matriz_crescente[i][j] = contador
            }else{
                matriz_crescente[i][j] = contador
            }

            contador++
        }
    }

    return matriz_crescente
}


function eh_par(ordem){
    return ordem % 2 === 0
}