// 숫자의 합
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line)
}).on("close", function () {    
    // const count = parseInt(input[0])
    const numbers = input[1].split('')

    let sum = 0;
    numbers.forEach(num => sum += parseInt(num))
    console.log(sum)
    process.exit();
  });