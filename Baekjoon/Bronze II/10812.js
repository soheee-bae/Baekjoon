//바구니 순서 바꾸기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  const NnM = input.shift();
  const N = NnM[0];
  const M = NnM[1];

  let baskets = Array.from({ length: N }, (_, i) => i + 1);

  for (let i = 0; i < M; i++) {
    let current = input[i];

    let I = current[0] - 1;
    let J = current[1] - 1;
    let K = current[2];

    let stop = baskets[K];

    baskets = baskets.concat(baskets.splice(I, baskets.indexOf(K)));
    console.log(baskets);
  }

  process.exit();
});
