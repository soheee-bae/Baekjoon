// 약수들의 합

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  input.pop();
  for (let i = 0; i < input.length; i++) {
    const N = input[i];
    let result = [];

    for (let i = 1; i < N; i++) {
      if (N % i === 0) {
        result.push(i);
      }
    }

    const sum = result.reduce((past, current) => past + current, 0);

    if (sum === N) {
      const str = result.reduce((past, current, idx) => {
        if (idx === 0) {
          return past + `${current} `;
        } else {
          return past + `+ ${current} `;
        }
      }, `${N} = `);
      console.log(str);
    } else {
      console.log(`${N} is NOT perfect.`);
    }
  }

  process.exit();
});
