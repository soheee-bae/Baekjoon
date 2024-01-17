// 코딩은 체육과목 입니다
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = 0

rl.on('line', function (line) {
    input = line
    rl.close()
}).on("close", function () {
    const count = input / 4 

    let result = ""
    let long = "long"
    let int = "int"
    for (let i = 0; i < count; i++){
        result = result + long + ' '
        if (i === count - 1) {
            result = result + int
        }
    }
    console.log(result)

    process.exit();
  });