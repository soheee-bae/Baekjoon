//	킹, 퀸, 룩, 비숍, 나이트, 폰

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

let king = 1 - input[0]
let queen = 1 - input[1]
let rook = 2 - input[2]
let bishop = 2 - input[3]
let knight = 2 - input[4]
let pawn = 8 - input[5]

console.log(`${king} ${queen} ${rook} ${bishop} ${knight} ${pawn}`)


