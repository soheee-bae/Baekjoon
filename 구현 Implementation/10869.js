// 사칙연산

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

let a = parseInt(input[0])
let b = parseInt(input[1])

let sum = a + b 
let minus = a - b 
let multiply = a * b 
let div = Math.floor(a / b) 
let mod = a % b 

console.log(`${sum}\n${minus}\n${multiply}\n${div}\n${mod}`)
