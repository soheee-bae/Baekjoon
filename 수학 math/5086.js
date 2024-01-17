//배수와 약수

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  const result = input.map((num) => {
    let first = num[0];
    let second = num[1];

    if (second % first === 0) {
      return "factor";
    } else if (first % second === 0) {
      return "multiple";
    } else if (first === 0 && second === 0) {
      return "";
    } else {
      return "neither";
    }
  });

  console.log(result.join("\n"));
  process.exit();
});
