import {input} from "./io_utils.js"

function main(){

    let canal = Number(input("Digite o número do canal: "))

    let audiencia_2 = 0
    let audiencia_4 = 0
    let audiencia_5 = 0
    let audiencia_7 = 0
    let audiencia_10 = 0

    audiencia()

    while(canal !== 0){
        canal = Number(input("Digite o número do canal: "))

        if(canal !== 0){
            audiencia()
        }else{
            console.log(`Audiência canal 2: ${audiencia_2}`)
            console.log(`Audiência canal 4: ${audiencia_4}`)
            console.log(`Audiência canal 5: ${audiencia_5}`)
            console.log(`Audiência canal 7: ${audiencia_7}`)
            console.log(`Audiência canal 10: ${audiencia_10}`)
        }

    }

    function audiencia(){
        if(canal === 2){
            audiencia_2++
        }
        if(canal === 4){
            audiencia_4++
        }
        if(canal === 5){
            audiencia_5++
        }
        if(canal === 7){
            audiencia_7++
        }
        if(canal === 10){
            audiencia_10++
        }
    }
}
main()