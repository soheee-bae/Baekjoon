// 직사각형에서 탈출

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map((el) => parseInt(el));
  rl.close();
}).on("close", function () {
  const [x, y, w, h] = input;
  const newstr = [x, y, h - y, w - x];

  let min = Math.min(...newstr);
  console.log(min);
  process.exit();
});
