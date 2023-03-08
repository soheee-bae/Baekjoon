//시험 성적

let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()

const score = parseInt(input)

let result;

if (score <= 100 && score >= 90) {
    result='A'
} else if (score <= 89 && score >= 80) {
    result='B'
} else if (score <= 79 && score >= 70) {
    result='C'
} else if (score <= 69 && score >= 60) {
    result='D'
} else {
    result='F'
}

console.log(result)