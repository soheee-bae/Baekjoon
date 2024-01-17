// 최댓값

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  let max = 0;
  let position = [];
  input.forEach((num1, idx1) =>
    num1.map((num2, idx2) => {
      if (max <= num2) {
        max = num2;
        position = [idx1 + 1, idx2 + 1];
      }
    })
  );
  console.log(max);
  console.log(position.join(" "));
  process.exit();
});
