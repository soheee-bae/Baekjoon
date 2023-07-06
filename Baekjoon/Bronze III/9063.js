// 대지

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  const N = input.shift()[0];

  const xs = input.map((x) => x[0]).sort((a, b) => a - b);
  const ys = input.map((y) => y[1]).sort((a, b) => a - b);

  const width = xs[N - 1] - xs[0];
  const height = ys[N - 1] - ys[0];

  if (N === 1) {
    console.log(0);
  } else {
    console.log(width * height);
  }

  process.exit();
});
