// 세로읽기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split("").map((el) => el));
}).on("close", function () {
  let result = "";
  const maxLength = Math.max(...input.map((i) => i.length));

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < 5; j++) {
      result += input[j][i] || "";
    }
  }

  console.log(result);
  process.exit();
});
