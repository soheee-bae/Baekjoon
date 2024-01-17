// 윤년

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()

const year = parseInt(input)

let check = (year % 4 === 0  && year % 100 !== 0) || year % 400 === 0

if (check) {
    console.log(1)
} else {
    console.log(0)
}