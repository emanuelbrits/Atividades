import {print, input} from '../io_utils.js'

function main() {
 
   const m = Number(input('digite um valor em m: '))

   const km = (Math.trunc(m / 1000))
   const resto = m % 1000

   print(`${m}m equivalem a ${km}Km e ${resto}m`)
}
main()