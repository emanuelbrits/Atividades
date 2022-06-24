import {input, print} from "./io_utils.js"

function main(){

    const hj = input('digite a data atual:')
    const niver = input('digite sua data de nascimento:')

    const d = hj.split("/")
    const n = niver.split("/")

    const d1 = Number(d[0])
    const d2 = Number(d[1])
    const d3 = Number(d[2])
  
    const n1 = Number(n[0])
    const n2 = Number(n[1])
    const n3 = Number(n[2])

    let ano = d3 - n3
    let mes = d2 - n2
    let dia = d1 - n1 

    ano = ano * 365
    mes = mes * 30

    const dias = ano + mes + dia
    let resto = dias

    const a = Math.trunc(resto / 365)
    resto = resto % 365
    const m = Math.trunc(resto / 30)
    resto = resto % 30
    const di = Math.trunc(resto)

    print(`você tem ${a} ano(s), ${m} mes(es) e ${di} dia(s)`)

}

main()