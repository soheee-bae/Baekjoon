//벌집

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  let temp = 1;
  let index = 1;

  while (true) {
    if (input <= temp) {
      break;
    }
    temp = temp + index * 6;
    index++;
  }
  console.log(index);
  process.exit();
});
