import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const N = 10

    let votos_1 = 0
    let votos_2 = 0
    let votos_3 = 0
    let votos_nulos = 0 
    let votos_brancos = 0

    let mais_votos = 0
    let vencedor = ''

    let contador = 0

    while(contador < 10){
        let voto = Number(input('Digite o número do candidato: '))

        if(voto === 1){
            votos_1++
        }else if(voto === 2){
            votos_2++
        }else if(voto === 3){
            votos_3++
        }else if(voto === 9){
            votos_nulos++
        }else if(voto === 0){
            votos_brancos++
        }

        contador++

    }

    if(votos_1 > votos_2 && votos_1 > votos_3){
        vencedor = 'Candidato 1'
    }else if(votos_2 > votos_1 && votos_2 > votos_3){
        vencedor = 'Candidato 2'
    }else if(votos_3 > votos_1 && votos_3 > votos_2){
        vencedor = 'Candidato 3'
    }else if(votos_1 === votos_2 || votos_1 === votos_3 || votos_2 === votos_3){
        vencedor = 'Empate'
    }

    console.log(`Candidato 1: ${votos_1} votos`)
    console.log(`Candidato 2: ${votos_2} votos`)
    console.log(`Candidato 3: ${votos_3} votos`)
    console.log(`Votos nulos: ${votos_nulos}`)
    console.log(`Votos brancos: ${votos_brancos}`)
    console.log(`Vencedor: ${vencedor}`)

}

main()