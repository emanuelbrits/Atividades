import {print, input} from '../io_utils.js'

function main() {
 
   const km = Number(input('digite um valor em Km: '))

   const m = km * 1000

   print(`${km}Km equivalem a ${m}m`)
}
main()