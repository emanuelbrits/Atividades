import {input, print} from "./io_utils.js"

function main(){
 
    const n = input('digite um número:')
    
    const n1 = n[0]
    const n2 = n[1]

    if(n2 == n1){
        print(`algarismos iguais`)
    }else{
        print('algarismos diferentes')}
}
main()