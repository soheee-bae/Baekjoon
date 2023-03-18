// A+B - 5
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line.split(' ').map(el=>parseInt(el)))
}).on("close", function () {
    for (let i = 0; i < input.length; i++) {
        let item = input[i]
        if (item[0] === 0 && item[1] === 0) break;
        console.log(item[0] + item[1])
    }
    process.exit();
  });