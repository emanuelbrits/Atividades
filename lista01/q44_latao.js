import {print, input} from '../io_utils.js'

function main() {
const kg = Number(input('Digite a massa em kg '))

const z = kg * 0.30
const c = kg * 0.70

print(`Para se obter ${kg} Kg de latão será necessário ${c.toFixed(2)} Kg de cobre e ${z.toFixed(2)} de zinco`)
}   
main()