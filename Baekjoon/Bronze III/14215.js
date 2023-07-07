// 세 막대

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
}).on("close", function () {
  let result = 0;
  const sortedInput = input.sort((a, b) => a - b);

  const [A, B, C] = sortedInput;
  const set = new Set(sortedInput);

  if (set.size === 1 || C < A + B) {
    result = A + B + C;
  } else {
    result = (A + B) * 2 - 1;
  }
  console.log(result);
  process.exit();
});
