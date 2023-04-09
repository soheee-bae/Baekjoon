// 그대로 출력하기
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line)
}).on("close", function () {  
    input.forEach(line=> console.log(line))    
    process.exit();
  });