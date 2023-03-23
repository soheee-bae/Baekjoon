// 평균
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line.split(' ').map((el) => parseInt(el)))
}).on("close", function () {    
    const count = input[0]
    const scores = input[1]

    const M = scores.sort((a,b) => b-a)[0]

    let sum = 0
    const fixedScores = scores.map(score => {
        const fixed = score / M * 100
        sum += fixed
        return fixed
    })
    

    console.log( sum/count)
    process.exit();
  });