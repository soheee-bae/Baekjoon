//꼬마 정민

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split(' ')

let sum = 0

for (let i = 0; i < input.length; i++){
    sum = sum + parseInt(input[i])
}

console.log(sum)