// 개수 세기
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line.split(' ').map(el=> parseInt(el)))
}).on("close", function () {
    let total = parseInt(input[0])
    let target = parseInt(input[2])

    let array = input[1]
    let result = 0;
    array.forEach(item => {
        if (item === target) {
            result += 1
        }
    })
    console.log(result)
    process.exit();
  });