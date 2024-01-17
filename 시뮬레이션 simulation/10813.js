// 공바꾸기
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

    const N = overall[0]
    const M = overall[1]

    const result = Array.from({ length : N }, (_, i) => i + 1)
    let I, J = 0

    for (let i = 1; i <= M; i++){
        const arr = input[i]
        I = parseInt(arr[0]) //first index
        J = parseInt(arr[1]) // second index
       
        let Ival = result[I-1]
        let Jval = result[J-1]

        result[I-1] = Jval
        result[J-1] = Ival
       
    }
    console.log(result.join(' '))

    process.exit();
  });