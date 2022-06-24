import prompt from 'prompt-sync'
const input = prompt()

function main(){

    let N = Number(input("Digite o número de identificação do boi: "))
    let peso = Number(input("Digite o peso do boi: "))
    let nome = (input("Digite o nome do boi: "))
    
    let mais_gordo = peso
    let numero_mais_gordo = N

    let mais_magro = peso
    let numero_mais_magro = N

    pesagem()
    
    while(N !== 0){
        
        N = Number(input("Digite o número de identificação do boi: "))

        if(N !== 0){
            peso = Number(input("Digite o peso do boi: "))
            nome = (input("Digite o nome do boi: "))
        }else{
            console.log(`Mais gordo: N: ${numero_mais_gordo}, peso: ${mais_gordo}`)
            console.log(`Mais magro: N: ${numero_mais_magro}, peso: ${mais_magro}`)
        }
        
        pesagem()
        
    }

    function pesagem(){
        if(peso > mais_gordo){
            mais_gordo = peso
            numero_mais_gordo = N
        }
    
        if(peso < mais_magro){
            mais_magro = peso
            numero_mais_magro = N
        }
    }

}

main()