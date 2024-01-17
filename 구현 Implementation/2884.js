// 알람 시계
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input;

rl.on('line', function (line) {
    input = line.split(' ').map(el => parseInt(el));
    rl.close(); 
}).on('close', function () {
    let h = input[0]
    let m = input[1]
  
    const convertToMin = h * 60 + m 
    const earlierTime = convertToMin - 45

    const finalHour = Math.floor(earlierTime / 60)
    const finalMin = earlierTime - (finalHour * 60)
    const hourTo24 = finalHour < 0 ? 24 + finalHour : finalHour

    console.log(`${hourTo24} ${finalMin}`)
    process.exit()
})