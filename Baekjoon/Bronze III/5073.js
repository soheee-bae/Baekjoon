// 삼각형과 세 변

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  input.splice(-1);

  const results = input.map((tri) => {
    const sorted = tri.sort((a, b) => a - b);
    const sum = sorted[0] + sorted[1];
    if (sum <= sorted[2]) return "Invalid";

    const set = new Set(sorted);
    if (set.size === 1) return "Equilateral";
    if (set.size === 2) return "Isosceles";
    if (set.size === 3) return "Scalene";
  });

  results.forEach((r) => console.log(r));

  process.exit();
});
