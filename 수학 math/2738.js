//행렬 덧셈

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  let number = input.shift();
  let arr1 = input.splice(0, number[0]);
  let result = arr1.map((el1, idx1) =>
    el1.map((el2, idx2) => el2 + input[idx1][idx2])
  );
  let value = [];
  result.forEach((el) => {
    value.push(el.join(" "));
  });
  console.log(value.join("\n"));
  process.exit();
});
