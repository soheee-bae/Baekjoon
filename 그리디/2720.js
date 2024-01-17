// 세탁소 사장 동혁

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const length = input.shift();

  const result = input.map((coin) => {
    let Q = Math.floor(coin / 25);
    let D = Math.floor((coin - Q * 25) / 10);
    let N = Math.floor((coin - Q * 25 - D * 10) / 5);
    let P = coin - Q * 25 - D * 10 - N * 5;

    return [Q, D, N, P];
  });

  const final = result.map((r) => r.join(" "));
  console.log(final.join("\n"));
  process.exit();
});
