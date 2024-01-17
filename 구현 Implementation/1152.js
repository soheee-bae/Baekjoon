// 단어의 개수
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input = line.split(' ').filter(l=>l !== '')
    rl.close();
}).on("close", function () {  
    console.log(input.length)
    process.exit();
  });