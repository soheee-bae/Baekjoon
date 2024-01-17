// 공넣기
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line.split(' ').map((el) => parseInt(el)))
}).on("close", function () {
    const overall = input[0]
    let N = overall[0]
    let M = overall[1]

    let I, J, K = 0
    const result = Array.from({ length: N }, () => 0)
    
    for (let i = 1; i <= M; i++){
        const arr = input[i]
        I = parseInt(arr[0]);
        J = parseInt(arr[1]);
        K = parseInt(arr[2]);
        
        for (let i = I; i <= J; i++){
            result[i - 1] = K;
        }
    }

    console.log(result.join(' '))

    process.exit();
  });