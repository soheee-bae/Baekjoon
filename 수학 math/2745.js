//진법 변환

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
  const N = input[0];
  const B = parseInt(input[1]);

  console.log(parseInt(N, B));
  process.exit();
});
