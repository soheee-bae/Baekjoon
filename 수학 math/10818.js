// 최소, 최대
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(line.split(' ').map(el=> parseInt(el)))
}).on("close", function () {
    const length = input[0]
    const array = input[1]
    // let min = array[0]
    // let max = array[0]

    // // Using For loop
    // for (let i = 0; i < length; i++){
    //     if (min > array[i]) {
    //          min = array[i]
    //      }else if (max < array[i]) {
    //         max = array[i]
    //     }
    // }

    // // Using ForEach
    // array.forEach(item => {
    //     if (min > item) {
    //         min = item
    //     } else if (max < item) {
    //         max = item
    //     }
    // })

    // Using Math
    let min = Math.min(...array)
    let max = Math.max(...array)

    console.log(`${min} ${max}`)
    process.exit();
  });