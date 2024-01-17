// 바구니 뒤집기
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line.split(' ').map((el) => parseInt(el)))
}).on("close", function () {    
    const info = input[0]
    const N = info[0]
    const M = info[1]

    let array = Array.from({ length: N }, (_, i) => i + 1)

    let I, J = 0

    for (let i = 1; i <= M; i++){
        const arr = input[i]
        I = parseInt(arr[0]) //1
        J = parseInt(arr[1]) //4

        let count = J

        const copiedArray = [...array]
        for (let j = I; j <= J; j++){
            copiedArray[j-1] = array[count-1]
            count -- 
        }
        array = copiedArray  

    }
    console.log(array.join(' '))

    process.exit();
  });