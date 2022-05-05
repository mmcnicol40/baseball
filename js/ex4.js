console.log(" HW 4 ex 4 - List of Words (Array)");

console.log("reading JSON file - ryan solution");

//function reads JSON file from local drive and present content for use
async function getData2() {
  const fetchedData = await fetch('../test3.json')
    .then(results => results.json())
    .then(data => { return data });
  return fetchedData;
}

//listening for click then call "getData"
button.addEventListener("click",  async function () {
  let username = textbox.value;
  const myArray = await getData2();
  console.log("myArray", myArray.Giants.player2.hitop);
  console.log("myArray", myArray.Giants);
  console.log("myArray", myArray.Dodgers);
  console.log("myArray", myArray);
  //console.log("myArray", myArray.Dodgers);
});

console.log(" functions and baseball hit 2 cards - dice probability");
//let totAb = 0;
let resultcard = "";
let firstbase = 0;
let secondbase = 0;
let thirdbase = 0;
let inningout = 0;
let arrayScorecard =[];
let inning=0;
let hits=0;
let errors=0;
let runs=0;
function calcAvg(ab, hits) {
  const gameAvg = hits / ab;
  return gameAvg;
}

const inningdesc = ["", "first","first", "second","second","third","third","forth","forth","fifth","fifth","sixth","sixth","seventh","seventh","eighth","eighth","ninth","ninth","Final Score"];

console.log(calcAvg(4, 2));
console.log(calcAvg(5, 2));

const myStats = {
  atbats: 4,
  hits: 2,
  player: "Mitch",
  avg: function () {
    return this.hits / this.atbats;
  },
};





const batCard = {
  player: "Mitch",
  hitAvg: 0.333,

  // at bat results based on dice role
  abResult: function () {
    let i = (Math.floor(Math.random() * 6.5)) + (Math.floor(Math.random() * 6.5));  // 6.5 represents the 2 dice rolled
    const hitopt = [
      "0 - line out",
      "0 - ground out",
      "0 - strike out",
      "0 - pop out",
      "1 - single",
      "2 - double",
      "1 - single",
      "1 - single",
      "2 - double",
      "4 - HR",
      "3 - Triple",
      "4 - HR",
    ];
    const pitopt = [
      "0 - strike out5",
      "0 - pop out5",
      "0 - strike out5",
      "0 - stirke out6",
      "0 - strike out7",
      "0 - stirke out8",
      "0 - line out5",
      "0 - foul out5",
      "1 - single6",
      "1 - single7",
      "1 - single8",
      "2 - Double9",
    ];
    console.log("dice roll", i)
   

    let k = Math.floor(Math.random() * 2);  //chooses whose card to use (Pitcher or Batter)
    let result = 0;
    let resultcard = "";
    if (k > 0) {
      result = myArray.Giants.player2.hitop[i];
      resultcard = "hitter";
    } else {
      result = myArray.Dodgers.player10.pitop[10];
      resultcard = "pitcher";
    }
    console.log("dice roll #2", k)
    return result;
  }
};






//writing actions to screen
document.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    const newMessage = document.createElement("li");
    const ab_result = batCard.abResult();
    newMessage.innerHTML = `${ab_result},${batCard.player} "#1"`;
    messages.appendChild(newMessage);

    const newMessage2 = document.createElement("li");
    const runresult = ab_result.substring(0,1);
    const bases2 = bases(runresult);
    newMessage2.innerHTML = `${bases2}`;
    messages2.appendChild(newMessage2);

 

    //type clear - clears messages
    if (textbox.value === "clear") {
      const newTbox = document.getElementById("messages");
      newTbox.innerHTML = "";
      messages.value = newTbox;

      const newTbox2 = document.getElementById("messages2");
      newTbox2.innerHTML = "";
      messages2.value = newTbox2;

      const newTbox3 = document.getElementById("messages3");
      newTbox3.innerHTML = "";
      messages3.value = newTbox3;
    }
  }
});