// 별찍기 I
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    for (let i = 0; i < line; i++){
        input.push(i+1)
    }
    rl.close()
}).on("close", function () {

    for (let i = 0; i < input.length; i++) {
        let stars = ""
        let count = input[i]
        for (let i = 0; i < count; i++) {
            stars += '*'
        }
        console.log(stars)
    }
    process.exit();
  });