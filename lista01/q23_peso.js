import {print, input} from '../io_utils.js'

function main() {
 
   const kg = Number(input('digite um valor em Kg: '))

   const g = kg * 1000

   print(`${kg}Kg equivalem a ${g}g`)
}
main()