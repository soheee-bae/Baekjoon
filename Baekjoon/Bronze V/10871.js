// X보다 작은수 
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line.split(' ').map(el=> parseInt(el)))
}).on("close", function () {
    let first = input[0]
    let target = first[1]
    let array = input[1]

    const result = []
    array.forEach(item => {
        if (item < target) {
            result.push(item)
        }
    })
    console.log(result.join(' '))
    process.exit();
  });