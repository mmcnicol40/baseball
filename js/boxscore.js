console.log(" midterm - Q2");

//Given the following Array with employee objects

const employeeList = [
  {
    name: "Amy",
    scores: [],
  },

  {
    name: "Beth",
    scores: [],
  },

  {
    name: "Chuck",
    scores: [],
  },

  {
    name: "Dave",
    scores: [],
  },

  {
    name: "Eric",
    scores: [],
  },

  {
    name: "Fran",
    scores: [],
  },

  {
    name: "Gina",
    scores: [],
  },

  {
    name: "Henry",
    scores: [],
  },
];
const newList = []; //newarray for

// PART I:  code that populates scores based on random #s against certain rules
let min = 3;
let max = 7;
let arrlen = employeeList.length;
for (let x = 0; x < arrlen; ++x) {
  let numtests = Math.floor(Math.random() * (max - min + 1) + min);
  let scoremin = 61;
  let scoremax = 100;
  for (y = 0; y < numtests; ++y) {
    employeeList[x].scores.push(
      Math.floor(Math.random() * (scoremax - scoremin + 1) + scoremin)
    );
  }
}

//Part II:  Function that uses calculated scores from above to create an array that houses min, max, cnt, scores and avg scores by student
function calcGrades(z) {
  const ln = employeeList[z].name;
  const minscore = Math.min(...employeeList[z].scores);
  const maxscore = Math.max(...employeeList[z].scores);
  const avgscore =
    employeeList[z].scores.reduce((acc, val) => acc + val) /
    employeeList[z].scores.length;
  const accumscore = employeeList[z].scores;
  const scorecnt = accumscore.length;
  newList.push({
    ln: ln,
    mins: minscore,
    maxs: maxscore,
    avgs: avgscore,
    scoredet: accumscore,
    scnt: scorecnt,
  });
  return newList;
}

arrlen = employeeList.length;
for (let z = 0; z < arrlen; z++) {
  calcGrades(z);
}

function stext(k) {
  let test = "";
  let arrlen3 = newList[k].scoredet.length;
  for (let q = 0; q < arrlen3; ++q) {
    if (q < arrlen3 - 1) {
      testcomma = ",";
    } else {
      testcomma = "";
    }
    test = test + newList[k].scoredet[q] + testcomma;
  }
  return test;
}

//for testing
console.log("Completed Score Calcs", employeeList);
console.log("calcs complete", newList);

//PART III - Outputing results scores call a function to get the right format to appear
let arrlen2 = newList.length;
for (let k = 0; k < arrlen2; ++k) {
  console.log(`Name: ${newList[k].ln}`);
  console.log(`Scores: ${stext(k)}`);
  console.log(`Number of tests: ${newList[k].scnt}`);
  console.log(`Avg score: ${Math.floor(newList[k].avgs)}`);
  console.log(`Min score: ${newList[k].mins}`);
  console.log(" ");
}
