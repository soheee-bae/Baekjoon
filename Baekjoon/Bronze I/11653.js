// 소인수분해

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  const result = [];
  let num = input;

  for (let i = 2; i <= num; i++) {
    while (true) {
      if (num === 0) {
        break;
      }
      if (num % i === 0) {
        result.push(i);
        num = num / i;
      } else {
        break;
      }
    }
  }

  if (input !== 1) console.log(result.join("\n"));
  process.exit();
});
