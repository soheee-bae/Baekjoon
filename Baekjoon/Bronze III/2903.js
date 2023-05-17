//중앙 이동 알고리즘

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  let boxCount = Math.pow(2, input) + 1;
  console.log(Math.pow(boxCount, 2));

  process.exit();
});
