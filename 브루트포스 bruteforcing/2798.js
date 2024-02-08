const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  console.log(input);
  const M = input[0][0];
  const N = input[0][1];

  const cards = input[1];

  process.exit();
});
