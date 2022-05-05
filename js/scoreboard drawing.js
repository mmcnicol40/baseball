console.log(" midterm - Q5");

//Given the following Array with employee objects

const scoreboard = [
  {
    name: "Visitor",
    hits: [],
    runs: [],
    error: []
  },

  {
    name: "Home",
    hits: [],
    runs: [],
    error: []
  }
];

// PART I:  code that populates scores based on random #s against certain rules
let min = 0;
let max = 9;
let arrlen = 9;


let numinning = Math.floor(Math.random() * (max - min + 1) + min);
let scoremin = 0;
let scoremax = 3;
let rscoremin = 0;
let rscoremax = 2;
let escoremin = 0;
let escoremax = 1;

console.log("newinning", numinning);
for (y = 0; y < numinning; ++y) {
  scoreboard[0].hits.push
    (
      Math.floor(Math.random() * (scoremax - scoremin + 1) + scoremin)
    );
}
for (y = 0; y < numinning; ++y) {
  scoreboard[1].hits.push
    (
      Math.floor(Math.random() * (scoremax - scoremin + 1) + scoremin)
    );
}

for (y = 0; y < numinning; ++y) {
  scoreboard[0].runs.push
    (
      Math.floor(Math.random() * (rscoremax - rscoremin + 1) + rscoremin)
    );
}
for (y = 0; y < numinning; ++y) {
  scoreboard[1].runs.push
    (
      Math.floor(Math.random() * (rscoremax - rscoremin + 1) + rscoremin)
    );
}

for (y = 0; y < numinning; ++y) {
  scoreboard[0].error.push
    (
      Math.floor(Math.random() * (escoremax - escoremin + 1) + escoremin)
    );
}
for (y = 0; y < numinning; ++y) {
  scoreboard[1].error.push
    (
      Math.floor(Math.random() * (escoremax - escoremin + 1) + escoremin)
    );
}


const sumHits = scoreboard[0].hits.reduce((acc, value) => acc + value, 0);
const sumRuns = scoreboard[0].runs.reduce((acc, value) => acc + value, 0);
const sumErrs = scoreboard[0].error.reduce((acc, value) => acc + value, 0);
const visSumHits = scoreboard[1].hits.reduce((acc, value) => acc + value, 0);
const visSumRuns = scoreboard[1].runs.reduce((acc, value) => acc + value, 0);
const visSumErrs = scoreboard[1].error.reduce((acc, value) => acc + value, 0);

console.log("hits", scoreboard[0].name, scoreboard[0].hits);
console.log(sumHits);
console.log("hits", scoreboard[1].name, scoreboard[1].hits);
console.log(visSumHits);

console.log("runs", scoreboard[0].name, scoreboard[0].runs);
console.log(sumRuns);
console.log("runs", scoreboard[1].name, scoreboard[1].runs);
console.log(visSumRuns);

console.log("Errors", scoreboard[0].name, scoreboard[0].error);
console.log(sumErrs);
console.log("Errors", scoreboard[1].name, scoreboard[1].error);
console.log(visSumErrs);

//using "Write" and manual method - found a number of versions similar to this on the internet... I absolutely can follow the logic... but not my strength figure out how to translate
let rows = 2;
let columns = scoreboard[0].hits.length;

document.write(
  "<p> a poor mans - totally manually built version - could not translate this logic to JSWAY approach </p> <br>"
);
let output = "<table>";
let x = 1;

for (i = 1; i <= rows; i++) {
  output = output + "<tr>";
  while (x <= columns) {
    output = output + "<td>" + i * x + "</td>";
    x = x + 1;
  }

  output = output + "</tr>";
  x = 1;
}
output = output + "</table>";
document.write(output);