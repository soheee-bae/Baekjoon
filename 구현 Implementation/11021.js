// A+B - 7
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line.split(' ').map(el=>parseInt(el)))
}).on("close", function () {
    const count = parseInt(input[0])
    for (let i = 1; i <= count; i++) {

        let item = input[i]
        console.log(`Case #${i}: ${item[0] + item[1]}`)
    }
    process.exit();
  });