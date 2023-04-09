// 다이얼
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []
const dial = [
    { number: 1, string: '' },
    { number: 2, string: 'ABC' },
    { number: 3, string: 'DEF' },
    { number: 4, string: 'GHI' },
    { number: 5, string: 'JKL' },
    { number: 6, string: 'MNO' },
    { number: 7, string: 'PQRS' },
    { number: 8, string: 'TUV' },
    { number: 9, string: 'WXYZ' },
]

rl.on('line', function (line) {
    input = line.split('')
    rl.close();
}).on("close", function () {  
    let sum = 0;
    input.forEach(char => {
        let dialTarget = dial.find((d) => d.string.includes(char))
        sum += dialTarget.number+1
     })
    
    console.log(sum)
    
    process.exit();
  });