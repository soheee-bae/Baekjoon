// 약수 구하기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
  rl.close();
}).on("close", function () {
  const N = parseInt(input[0]);
  const B = parseInt(input[1]);
  let result = [];

  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      result.push(i);
    }
  }

  console.log(result[B - 1] || 0);
  process.exit();
});
