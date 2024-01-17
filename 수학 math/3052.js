// 나머지
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(parseInt(line))
}).on("close", function () {    
    const divided = input.map((number) => number % 42)
    
    const result = []
    divided.forEach(number => {
        if (!result.includes(number)){
            result.push(number)
        }
    })

    console.log(result.length)

    process.exit();
  });