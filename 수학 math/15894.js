// 수학은 체육과목 입니다

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on("line", function (line) {
  input = parseInt(line);
}).on("close", function () {
  console.log(input * 4);
  process.exit();
});
