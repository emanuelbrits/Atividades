import {print, input} from '../io_utils.js'

function main() {
    const a = Number(input('digite o valor de a: '))
    const b = Number(input('digite o valor de b: '))
    const c = Number(input('digite o valor de c: '))
    const d = Number(input('digite o valor de d: '))
    const e = Number(input('digite o valor de e: '))
    const f = Number(input('digite o valor de f: '))

const calcx = (c*e - b*f) / (a*e - b*d)
const calcy = (a*f - c*d) / (a*e - b*d)
const calcc = a*calcx + b*calcy
const calcf = d*calcx + e*calcy

print(`O valor de x é ${calcx.toFixed(2)} e y ${calcy.toFixed(2)}`)
}   
main()