// 최댓값

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  const length = input.shift();

  const paper = Array.from({ length: 100 }, () =>
    Array.from({ length: 100 }, () => false)
  );

  for (let i = 0; i < length; i++) {
    let lbx = input[i][0];
    let lby = input[i][1];

    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        paper[j + lbx][k + lby] = true;
      }
    }
  }

  let result = paper.reduce((past, current) => {
    for (let item of current) {
      if (item) past++;
    }

    return past;
  }, 0);
  console.log(result);
  process.exit();
});
