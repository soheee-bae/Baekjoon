// A/B

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let total = a / b;

console.log(total);
