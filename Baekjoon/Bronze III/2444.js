// 별찍기 7
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let inputList = []
let input;

rl.on('line', function (line) {
    let prev = 0
    input = line
    inputList= new Array(2 * line - 1).fill(1).map((_, i, arr) => {
        if (i < line) {
            prev = (i * 2) + 1
            return (i * 2) + 1
        } else {
            const result = prev - 2
            prev = prev-2
            return result
        }
    })
    rl.close()
}).on("close", function () {
    const length = inputList[input - 1]
    inputList.forEach((_,index ) => {
        let result = ''
        let range = (inputList[index] - 1) / 2

        for (let i = 0; i < length; i++) {
            if (i === (length-1) / 2) {
                result += '*'
            }
            else if (i < ((length - 1) / 2) - range) {
                result +=' '
            }
            else if (i <= ((length - 1) / 2) + range && i >= ((length - 1) / 2) - range) {
                result +='*'
            }
        }
        console.log(result)
    })

    process.exit();
  });