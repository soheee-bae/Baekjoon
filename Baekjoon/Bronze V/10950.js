// A + B - 3 
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line.split(' ').map((el) => parseInt(el)))

}).on("close", function () {
    const length = input[0]
    for (let i = 1; i <= length; i++){
        const array = input[i]
        console.log(array[0]+array[1])
    }
    process.exit();
  });