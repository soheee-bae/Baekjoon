// 최댓값
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

rl.on('line', function (line) {
    input.push(parseInt(line))
}).on("close", function () {
    // let max = input[0]
    // let index = 0 

    // // // Using For loop
    // for (let i = 0; i < input.length; i++){
    //     if (max < input[i]) {
    //         max = input[i]
    //         index = i
    //     }
    // }
    // console.log(max)
    // console.log(index+1)

    // // Using ForEach
    // let max = input[0]
    // let index = 0 
    // input.forEach((item, i) => {
    //     if (max < item) {
    //         max = item
    //         index = i
    //     }
    // })
    // console.log(max)
    // console.log(index+1)

    // Using Math
    let max = Math.max(...input)
    console.log(max)
    console.log(input.indexOf(max) + 1)
    process.exit();
  });