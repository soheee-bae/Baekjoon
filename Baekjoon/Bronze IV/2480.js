// 오븐 시계
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input =[]

rl.on('line', function (line) {
    input = line.split(' ').map(el=>parseInt(el))
}).on('close', function () {
    const a = input[0]
    const b = input[1]
    const c = input[2]

    const sortedArray = input.sort((a, b) => { return a - b })

    if (a === b && a === c) {
        console.log(10000 + a * 1000)
    } else if (a === b || a === c || c === b) {
        let value
        for (let i = 0; i < input.length; i++){
            if (sortedArray[i] === sortedArray[i + 1]) {
                value =  sortedArray[i]
            }
        }
        console.log(1000 + (value *100))
    } else {
        console.log(sortedArray[input.length -1]*100)
    }
    process.exit()
})