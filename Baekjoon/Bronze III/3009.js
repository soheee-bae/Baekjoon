// 네번째점

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  let xs = input.map((x) => x[0]).sort((a, b) => a - b);
  let ys = input.map((y) => y[1]).sort((a, b) => a - b);

  const x = xs[0] === xs[1] ? xs[2] : xs[0];
  const y = ys[0] === ys[1] ? ys[2] : ys[0];

  console.log(x, y);
  process.exit();
});
