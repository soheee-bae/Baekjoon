// 오븐 시계
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input =[]

rl.on('line', function (line) {
    input.push(line.split(' ').map(el=>parseInt(el)))
}).on('close', function () {
    const startTime = input[0]
    const startHour = parseInt(startTime[0])
    const startMin = parseInt(startTime[1])

    const duration = parseInt(input[1])

    const mins = startMin + duration;
    const hourToAdd = Math.floor(mins / 60)
    const finalMin = mins > 59 ? mins % 60 : mins 
    const finalHour = startHour + hourToAdd >= 24 ? startHour + hourToAdd - 24 : startHour + hourToAdd

    console.log(`${finalHour} ${finalMin}`)

    process.exit()
})