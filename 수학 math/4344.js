// 평균은 넘겠지
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = [];

rl.on('line', function (line) {
    input.push(line.split(' ').map(el => parseInt(el)))
}).on("close", function () {
  
    input.forEach((list, index) => { 
        if (index !== 0) {
            let sum = 0;
            for (let i = 1; i <= list[0]; i++){
                sum += list[i]
            }
            let avg = (sum) / list[0]
            
            let count = 0;
            for (let i = 1; i <= list[0]; i++){
                if(list[i] > avg) count += 1
            }
            const result = (100 / list[0]) * count
            console.log(`${result.toFixed(3)}%`)
        }
        
    })

    
    process.exit();
  });