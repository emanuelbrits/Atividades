import {input} from "./io_utils.js"

function main(){
    
    let candidato = Number(input("Digite o número do candidato: "))
    
    let numero_de_votos = 0
    let serra = 0
    let dilma = 0
    let ciro = 0
    let indeciso = 0
    let outros = 0
    let nulo = 0

    voto()

    while(candidato !== -1){
        candidato = Number(input("Digite o número do candidato: "))
        voto()
    }

    const pserra = porcentagem(serra, numero_de_votos)
    const pdilma = porcentagem(dilma, numero_de_votos)
    const pciro = porcentagem(ciro, numero_de_votos)
    const pindeciso = porcentagem(indeciso, numero_de_votos)
    const poutros = porcentagem(outros, numero_de_votos)
    const pnulo = porcentagem(nulo, numero_de_votos)

    console.log(`Serra: ${pserra.toFixed(1)} %`)
    console.log(`Dilma: ${pdilma.toFixed(1)} %`)
    console.log(`Ciro: ${pciro.toFixed(1)} %`)
    console.log(`Indeciso: ${pindeciso.toFixed(1)} %`)
    console.log(`Outros: ${poutros.toFixed(1)} %`)
    console.log(`Nulo: ${pnulo.toFixed(1)} %`)

    function voto(){
        if(candidato === 45){
            serra++
            numero_de_votos++
        }else if(candidato === 13){
            dilma++
            numero_de_votos++
        }else if(candidato === 23){
            ciro++
            numero_de_votos++
        }else if(candidato === 99){
            indeciso++
            numero_de_votos++
        }else if(candidato === 98){
            outros++
            numero_de_votos++
        }else if(candidato === 0){
            nulo++
            numero_de_votos++
        }
    }

    function porcentagem(valor1, valor2){
        return (valor1 / valor2) * 100
    }

}

main()