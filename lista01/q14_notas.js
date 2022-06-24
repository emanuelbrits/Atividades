import {print, input} from '../io_utils.js'

function main(){

    const nota1 = Number(input('digite a primeira nota: '))
    const nota2 = Number(input('digite a segunda nota: '))
    const nota3 = Number(input('digite a terceira nota : '))
    
    const media = (nota1 + nota2 + nota3) / 3

    print(`a média desse aluno é ${media}`)
}
main()