// 크로아티아 알파벳
const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = '';

const alphbets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

rl.on('line', function (line) {
    input = line
    rl.close()
}).on("close", function () {
    
    /** OLD METHOD */
    // let newStr = input;
    // let count = 0;
    // let copiedNewStr = newStr

    // for (let i = 0; i < alphbets.length; i++){
    //     if (newStr.includes(alphbets[i]) ) {
    //         const num = copiedNewStr.split(alphbets[i]).length - 1
    //         console.log(alphbets[i])
    //         console.log(num)
    //         copiedNewStr = copiedNewStr.replaceAll(alphbets[i], '')
    //         console.log(copiedNewStr)
    //         count = count + num
    //     }
    // }

    // console.log(copiedNewStr)
    // if (copiedNewStr.length > 0) {
    //     count = count + copiedNewStr.split('').length
    // }
    
    // console.log(count)


    for (let alphbet of alphbets) {
        input = input.split(alphbet).join("Q")
    }

    console.log(input.length)

    process.exit();
});
  
