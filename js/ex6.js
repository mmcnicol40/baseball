console.log(" HW 4 ex 6 - Guess the Number");

let lowNum = prompt("Please enter your lower range #:");
let highNum = prompt("Please enter your upper range #"); // input's type is string
//let countNum = prompt("How many random #'s to generate?");
let nlowNum = Number(lowNum);
let nhighNum = Number(highNum);
let ncountNum = 1;
let numAttempts = 0;
let rndnum = 0;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // max and min multiplied times the fraction moves the random # within my range
}

for (numAttempts = 0; numAttempts < ncountNum; numAttempts++) {
  const rndInt = randomIntFromInterval(nlowNum, nhighNum);
  console.log(rndInt, "random");
  rndnum = rndInt;
}
console.log("test");
console.log(`We generated ${ncountNum} random numbers for you.`);
console.log("random # ", rndnum);
let myguess = " ";
let nmyGuess = 0;
let numGuesses = 0;

while (myguess != rndnum) {
  myguess = prompt("Guess the random # I generated");
  nmyGuess = Number(myguess);
  if (nmyGuess > rndnum) {
    console.log("your guess is too high")
  }
  if (nmyGuess < rndnum) {
    console.log("your guess is too low")
  }
numGuesses = numGuesses + 1;
}
//console.log(`guess ${nmyGuess}    rndnum = ${rndnum}`);
//console.log("guess matches", rndnum === nmyGuess);
console.log(`Correct!  It took you ${numGuesses} guesses.`)