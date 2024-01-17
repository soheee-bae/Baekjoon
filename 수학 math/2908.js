//상수

const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input = line.split(' ')
    rl.close();
}).on("close", function () {  
    let first = parseInt(input[0].split('').reverse().join(''))
    let second = parseInt(input[1].split('').reverse().join(''))
    
    let result = first > second ? first : second
    console.log(result)
    
    process.exit();
  });