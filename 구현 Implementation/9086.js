// 문자열
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line)
}).on("close", function () {    
    const count = parseInt(input[0])

    let result = []
    for (let i = 1; i <= count; i++){
        const str = input[i]
        const arr = str.split('')
        result.push(`${arr[0]}${arr[arr.length-1]}`)
    }

    result.forEach(item => console.log(item))
    

    process.exit();
});