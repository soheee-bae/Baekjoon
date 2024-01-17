// 아스키코드
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = ''

rl.on('line', function (line) {
    input = line
    rl.close();
}).on("close", function () {    
    const result = input.charCodeAt(0);
    console.log(result)
    process.exit();
  });