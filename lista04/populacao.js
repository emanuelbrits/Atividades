import {input} from "./io_utils.js"

function main(){

    let populacao_a = 200000
    const crescimento_a = 3.5 / 100
    let populacao_b = 800000
    const crescimento_b = 1.35 / 100
    let anos = 0

    while(populacao_a < populacao_b){
        crescimento_populacao_a()
        crescimento_populacao_b()
        anos++
        console.log(`${anos} anos`)
    }

    function crescimento_populacao_a(){
        populacao_a = populacao_a + (populacao_a * crescimento_a)
    }
    
    function crescimento_populacao_b(){
        populacao_b = populacao_b + (populacao_b * crescimento_b)
    }
}
main()