// 소수찾기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  const N = input[0];
  const list = input[1];
  let count = 0;

  for (let i = 0; i < N; i++) {
    let result = [];
    let current = list[i];

    for (let j = 1; j <= current; j++) {
      if (current % j === 0) {
        result.push(j);
      }
    }

    if (result.length === 2) {
      count++;
    }
  }
  console.log(count);

  process.exit();
});
