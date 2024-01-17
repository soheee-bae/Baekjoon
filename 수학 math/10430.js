// 나머지

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

let A = parseInt(input[0])
let B = parseInt(input[1])
let C = parseInt(input[2])

const first = (A + B) % C
const second = ((A % C) + (B % C)) % C
const third = (A * B) % C
const fourth = ((A % C) * (B % C)) % C

console.log(`${first}\n${second}\n${third}\n${fourth}`)