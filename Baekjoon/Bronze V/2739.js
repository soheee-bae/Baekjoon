// 구구단
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = 0 

rl.on('line', function(line){
    input = line;
    rl.close(); 
}).on("close", function () {
    for (let i = 0; i < 9; i++){
        console.log(`${input} * ${i+1} = ${input*(i+1)}`)
    }
    process.exit();
  });