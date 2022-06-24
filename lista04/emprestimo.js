import {input} from "./io_utils.js"

function main(){
    
    let deve = 3000
    let dias = 0
    let juro = deve * (0.85 / 100)
    const pagamento = 200
    let dia = 2


    
        
        while((dia >= 2 && dia <= 6) && deve > 0){
            cobranca_dia_util()
            dia++
            dias++
            console.log(`${dias} dias`)
            console.log(`${dia} dia`)
            console.log(`Deve: R$ ${deve}`)

            while(dia === 7 && deve > 0){
                cobranca()
                dia = dia - 6
                dias++
                console.log(`${dias} dias`)
                console.log(`${dia} dia`)
                console.log(`Deve: R$ ${deve}`)
            }

            while(dia === 1 && deve > 0){
                cobranca()
                dia++
                dias++
                console.log(`${dias} dias`)
                console.log(`${dia} dia`)
                console.log(`Deve: R$ ${deve}`)
            }
            
        }
        
        
        

    function cobranca_dia_util(){
        deve = (deve + juro) - pagamento
    }
    
    function cobranca(){
        deve = deve + juro
    }
}

main()