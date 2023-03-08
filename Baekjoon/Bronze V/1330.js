// 두수 비교하기 

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ')

const a = parseInt(input[0])
const b = parseInt(input[1])

if (a > b) {
    console.log('>')
} else if (a < b) {
    console.log('<')
} else if (a === b) {
    console.log('==')
}