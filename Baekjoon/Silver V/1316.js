// 그룹 단어 체커

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = input.shift();
  let result = 0;

  for (let i = 0; i < N; i++) {
    const str = input[i].split("");
    const letters = [];
    let isGroupStr = true;

    for (let j = 0; j < str.length; j++) {
      if (!letters.includes(str[j])) {
        letters.push(str[j]);
      } else {
        if (letters.indexOf(str[j]) !== letters.length - 1) {
          isGroupStr = false;
          break;
        }
      }
    }
    if (isGroupStr) result = result + 1;
  }
  console.log(result);
  process.exit();
});
