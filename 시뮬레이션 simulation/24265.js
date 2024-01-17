//	알고리즘 수업 - 알고리즘의 수행 시간 4

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  let sum = 0;

  for (let i = 1; i <= input - 1; i++) {
    sum += i;
  }
  console.log(sum);
  console.log(2);
});
