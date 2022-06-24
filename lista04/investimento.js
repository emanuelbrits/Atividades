import {input} from "./io_utils.js"

function main(){

    const investimento = Number(input("Digite a quantidade investida: "))
    const juros = Number(input("Digite o juro mensal: "))
    const percentual = juros / 100
    
    let saldo = 0
    let opcao = "S"
    let ano = 1
        
    while(opcao === "S"){
        let mes = 0

        while(mes < 12){
            saldo += investimento + (saldo * percentual)
            mes++
        }
            
        console.log(`Rendimento após ${ano} ano: ${saldo.toFixed(2)}`)
    
        opcao = input("Deseja processar mais um ano: S/N: ")
            
        ano++
    }

}
main()