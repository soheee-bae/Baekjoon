// 팰린드롬인지 확인하기
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input

rl.on('line', function (line) {
    input = line
    rl.close()
}).on("close", function () {
    const reversed = input.split('').reverse().join('')
    if (reversed === input) {
        console.log(1)
    } else {
        console.log(0)
    }
    process.exit();
  });