import {input} from "./io_utils.js"

function main(){
    
    let matricula = Number(input("Digite a sua matrícula: "))
    let nota1 = Number(input("Digite a primeira nota: "))
    let nota2 = Number(input("Digite a segunda nota: "))
    let nota3 = Number(input("Digite a terceira nota: "))

    let media = ((2 * nota1) + (3 * nota2) + (5 * nota3)) / 10

    let alunos = 0
    let aprovados = 0
    let reprovados = 0

    if(media >= 7){
        aprovados++
        alunos++
    }

    if(media < 7){
        reprovados++
        alunos++
    }

    while(matricula !== 0){
        matricula = Number(input("Digite a sua matrícula: "))
        
        if(matricula !== 0){
        nota1 = Number(input("Digite a primeira nota: "))
        nota2 = Number(input("Digite a segunda nota: "))
        nota3 = Number(input("Digite a terceira nota: "))}

    }

    console.log(`Total de aprovados: ${aprovados}`)
    console.log(`Total de reprovados: ${reprovados}`)
    console.log(`Total de alunos: ${alunos}`)
}

main()