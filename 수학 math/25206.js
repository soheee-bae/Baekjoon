//너의 평점은

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const scores = [
  { str: "A+", score: 4.5 },
  { str: "A0", score: 4.0 },
  { str: "B+", score: 3.5 },
  { str: "B0", score: 3.0 },
  { str: "C+", score: 2.5 },
  { str: "C0", score: 2.0 },
  { str: "D+", score: 1.5 },
  { str: "D0", score: 1.0 },
  { str: "F", score: 0.0 },
  { str: "P", score: 0.0 },
];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => el));
}).on("close", function () {
  let sumOfCredit = input.reduce((a, credit) => {
    if (credit[2] !== "P") {
      return parseInt(credit[1]) + a;
    } else {
      return a;
    }
  }, 0);
  let sumOfScore = input.reduce((a, score) => {
    let scoreNum = scores.find((sc) => sc.str === score[2]);
    return scoreNum.score * parseInt(score[1]) + a;
  }, 0);

  const result = sumOfScore / sumOfCredit;
  console.log(result.toFixed(6));
  process.exit();
});
