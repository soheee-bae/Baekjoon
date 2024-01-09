//	알고리즘 수업 - 알고리즘의 수행 시간 5

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
  let num = BigInt(input);

  console.log(`${num * num * num}`);
  console.log(3);
});
