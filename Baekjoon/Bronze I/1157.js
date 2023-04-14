// 단어공부
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
    const obj = {}
    const upperCased = input.toUpperCase()
    
    for (let i = 0; i < upperCased.length; i++){
        if (!obj[upperCased[i]]) {
            obj[upperCased[i]] = 1
        } else {
            obj[upperCased[i]] += 1
        }
    }

    let result = ''
    let count = 0

    for (const char in obj) {
        if (obj[char] > count) {
            count = obj[char]
            result = char
        } else if (obj[char] === count) {
            result = '?'
        }
    }

    console.log(result)

    process.exit();
  });