// 소수

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const M = input[0];
  const N = input[1];

  const result = [];

  for (let i = M; i <= N; i++) {
    const nums = [];

    for (let j = 0; j <= i; j++) {
      if (i % j === 0) {
        nums.push(j);
      }
    }
    if (nums.length === 2) result.push(i);
  }

  let sum = result.reduce((a, c) => a + c, 0);

  console.log(sum === 0 ? -1 : sum);
  if (result.length > 0) console.log(result[0]);
  process.exit();
});
