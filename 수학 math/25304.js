// 합
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line.split(' ').map(el => parseInt(el)))
}).on("close", function () {
    const billPrice = parseInt(input[0])
    const typeNumber = parseInt(input[1])
   
    let sum = 0
    for (let i = 2; i <= typeNumber+1; i++){
        let product = input[i]
        sum  = sum + (product[0] * product[1])
    }

    console.log(sum === billPrice ? 'Yes' : 'No')
    process.exit();
  });