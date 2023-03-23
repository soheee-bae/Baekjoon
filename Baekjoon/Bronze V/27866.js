// 문자와 문자열
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line)
}).on("close", function () {    
    const str = input[0]
    const index  = parseInt(input[1])
    const arr = str.split('')
    console.log(arr[index-1])
    process.exit();
  });