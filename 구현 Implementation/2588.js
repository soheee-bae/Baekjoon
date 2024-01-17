// 곱셈

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let firstNum = parseInt(input[0])
let secondNum = input[1]

let splitedSecond = secondNum.split('')

const firstMultiply = firstNum * splitedSecond[2]
const secondMultiply = firstNum * splitedSecond[1]
const thirdMultiply = firstNum * splitedSecond[0]

const sum = firstMultiply + parseInt(`${secondMultiply}0`) + parseInt(`${thirdMultiply}00`)

console.log(`${firstMultiply}\n${secondMultiply}\n${thirdMultiply}\n${sum}`)

