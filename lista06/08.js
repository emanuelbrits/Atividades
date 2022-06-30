import prompt from "prompt-sync"
const input = prompt()

function main(){

    const hora = input("Hora: ").split(":").map(Number)

    const frase = mostrar_hora(hora)
    console.log(frase)

}

function mostrar_hora(hora){
    const h = hora[0]
    const m = hora[1]
    const s = hora[2]

    let frase = ""

    if(h > 1){
        frase += hora[0] + " horas "
    }else{
        frase += hora[0] + " hora "
    }

    if(m > 1){
        frase += hora[1] + " minutos "
    }else{
        frase += hora[1] + " minuto "
    }

    if(s > 1){
        frase += hora[2] + " segundos "
    }else{
        frase += hora[2] + " segundo "
    }

    return frase
}

main()