// 과제 안 내신 분..?
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(parseInt(line))
}).on("close", function () {
    const array = Array.from({ length: 30 }, (_, i) => i + 1)
    
    const result = []
    array.forEach((item) => { 
        if (!input.includes(item)) result.push(item)
    })
    
    console.log(result.join(' '))

    process.exit();
  });