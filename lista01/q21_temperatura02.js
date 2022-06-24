import {print, input} from '../io_utils.js'

function main() {
 
   const F = Number(input('digite um valor em F: '))

   const C = (5 * F - 160) / 9

   print(`essa temperatura equivale a ${C.toFixed(2)}C`)
}
main()