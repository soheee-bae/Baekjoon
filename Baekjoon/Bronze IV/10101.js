//삼각형 외우기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  input = input.sort((a, b) => a - b);
  const sum = input.reduce((sum, current) => sum + current);
  const dup = input.filter((a, i) => input.indexOf(a) !== i);

  if (sum !== 180) {
    console.log("Error");
  } else {
    if (input[0] === 60 && input[2] === 60) {
      console.log("Equilateral");
    } else if (dup.length === 0) {
      console.log("Scalene");
    } else {
      console.log("Isosceles");
    }
  }

  process.exit();
});
