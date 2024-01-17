// 문자열 반복
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line.split(' ').map(el=>el))
}).on("close", function () {    

    let result = []
    for (let i = 1; i <= input[0]; i++) {
        let item = input[i]
        let count = parseInt(item[0])
        let string = item[1].split('')
        let subresult = string.map(char => { 
            let arr = new Array(count).fill(char)
            return arr.join('')
        }).join('')

        result.push(subresult)
     }

    result.forEach(r=> console.log(r))
    process.exit();
  });