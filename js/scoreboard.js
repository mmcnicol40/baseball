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

//write to a scroll box
function addElement() {
  var scrollbox = document.getElementById('scrollbox');

  // Create some element, e.g. div
  var newElement = document.createElement('div');
  newElement.setAttribute('id', "some-id-for-new-element");
  newElement.innerHTML = 'New element has been added!';
  scrollbox.appendChild(newElement);
}





/*

let messages = document.getElementById("myVideo");
//writing actions to screen
document.addEventListener("keypress", function (event) {

    if (Number(textbox.value) >= 0) {
      
      drawBases(textbox.value);
    
  }
});
*/


/*
//commented out so i can try out scroll box
  let messages = document.getElementById("container");
  const newMessage = document.createElement("Vinn");
  const element = document.getElementById("divInn2");
      element.remove();

      newMessage.id = "divInn2";
      newMessage.innerHTML = '  <div class="top-left">0 &nbsp;   0   &nbsp; 0   &nbsp; &nbsp; 1  &nbsp; 0  &nbsp; 0  &nbsp;   1  &nbsp; 0  &nbsp; 0</div>';
      messages.appendChild(newMessage);

*/
   


