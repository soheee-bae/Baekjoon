// 알파벳 찾기
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let input = '';

rl.on('line', function (line) {
    input = line;
    rl.close();
}).on("close", function () {    
    let result = alphabet.map(char => {
        if (input.includes(char)) {
            return input.indexOf(char)
        }
        else {
            return -1
        }
    })
    console.log(result.join(' '))
    process.exit();
  });