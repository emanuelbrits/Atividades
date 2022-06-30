import prompt from 'prompt-sync'
const input = prompt()

function main(){

    const tamanho = Number(input('Digite o tamanho do vetor: '))

    const vetor_a = new Array(tamanho)

    for(let i = 0; i < vetor_a.length; i++){
        vetor_a[i] = Number(input("Valor: "))
    }
    
    const vetor_b = new Array(tamanho)

    for(let i = 0; i < vetor_b.length; i++){
        vetor_b[i] = Number(input("Valor: "))
    }

    const vetor_c = new Array(2 * tamanho)

    let i = 0 
    for(let index = 0; index < vetor_c.length; index++){
        if (index < tamanho){
            vetor_c[index] = vetor_a[index]
        }else {
            vetor_c[index] = vetor_b[i]
            i++
        }
    }

    console.log(`Vetor A = ${vetor_a}`)
    console.log(`Vetor B = ${vetor_b}`)
    console.log(`Vetor C = ${vetor_c}`)
}

main()