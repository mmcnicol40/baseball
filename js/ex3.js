console.log("BACKUP")
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

console.log(myStats.atbats, myStats.hits, myStats.player, myStats.avg());
myStats.atbats = 9;
myStats.hits = 3;
console.log(myStats.atbats, myStats.hits, myStats.player, myStats.avg());
myStats.atbats++;
myStats.hits++;
console.log(myStats.atbats, myStats.hits, myStats.player, myStats.avg());

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
    //return pitopt[i];

    let k = Math.floor(Math.random() * 2);  //chooses whose card to use (Pitcher or Batter)
    let result = 0;
    let resultcard = "";
    if (k > 0) {
      result = hitopt[i];
      resultcard = "hitter";
    } else {
      result = pitopt[i];
      resultcard = "pitcher";
    }
    console.log("dice roll #2", k)
    return result;
  }
};

//const abresult = document.getElementById("abresults");
//abresult.innerHTML = `"test"`;

//initialize variables
let messages = document.getElementById("messages");
let messages2 = document.getElementById("messages2");
let messages3 = document.getElementById("messages3");
const textbox = document.getElementById("textbox");
const button = document.getElementById("button");

/*
// click on button
button.addEventListener("click", function () {
  const newMessage = document.createElement("li");
  newMessage.innerHTML = textbox.value;
  messages.appendChild(newMessage);
  textbox.value = "";
});
*/

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

    /*
    const newMessage3 = document.createElement("li");
    const innstats = scorecard(1,0,2,0);  //inning, runs, hits, errors
    newMessage3.innerHTML = `${innstats}`;
    messages3.appendChild(newMessage3);
    */

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


//tracking runners
function bases(bases) {
  let bill = "zero";
  let singstat = "";

  // console.log("bases", bases);
  switch (bases) {
    case "4":
    runs = thirdbase + secondbase + firstbase + 1;  
     thirdbase = 0;
      secondbase = 0;
      firstbase = 0;
      console.log(`'Homerun' bases are clear ${firstbase} ${secondbase} ${thirdbase}`);
      bill = "cleared the bases";
      hits = ++hits;
      break;
    case "3":
      runs = thirdbase + secondbase + firstbase;  
      thirdbase = 1;
      secondbase = 0;
      firstbase = 0;
      console.log(`'triple' 3rd base only ${firstbase} ${secondbase} ${thirdbase}`);
      bill = "runner on third";
      hits = ++hits;
      break;
    case "2":
      runs = thirdbase + secondbase;  
      thirdbase = firstbase;
      let thirdstat = "";
      if (thirdbase === 1) {
        thirdstat = "and third";
      }
      secondbase = 1;
      firstbase = 0;
      console.log(`'double'  ${firstbase} ${secondbase} ${thirdbase}`);
      bill = `runner on second ${thirdstat}`;
      hits = ++hits;
      break;
    case "1":
      runs = thirdbase;  
      thirdbase = secondbase;
      secondbase = firstbase;
      firstbase = 1;
      singstat = "runner on first";
      if (secondbase === 1) {
        singstat += " and second";
      };
      if (thirdbase === 1) {
        singstat += " and third";
      };
      console.log(`'single' ${firstbase} ${secondbase} ${thirdbase},${singstat}`);
      bill = `${singstat}`;
      hits = ++hits;
      break;
    case "0":
      if (inningout === 2) {
        singstat += "half inning over";
        firstbase = 0;
        secondbase = 0;
        thirdbase = 0;
        inningout = 0;
        

        const newMessage3 = document.createElement("li");
        const innstats = scorecard(0,runs,hits,0);  //inning, runs, hits, errors
        newMessage3.innerHTML = `${innstats}`;
        messages3.appendChild(newMessage3);
        hits = 0;
        runs = 0;



      } else {
        inningout = ++inningout;
        singstat = `out # ${inningout}`;
      };
      console.log(`'out' ${firstbase} ${secondbase} ${thirdbase},${singstat}`);
      bill = `${singstat}`;
     // bill = "out. no change on bases";
      break;
    default:
      console.log(`Sorry, something went wrong.`);

  };
  return (bill);
}


//updating the scorecard
function scorecard(inn,runs,hits,errors) {
  console.log("scorecard",inn,runs,hits,errors);

if (inning<19) { 
   arrayScorecard.push(inning);
    inning = ++inning;
} else {
  inning = 0;
}
console.log(arrayScorecard);
//console.log(`${inningdesc} ${inningdesc[inning]}`);

let blah2 = "test"
if(inning % 2 === 0) {
   blah2 = "Bottom of";
} else {
   blah2 = "Top of";
};

const blah = `${blah2} ${inningdesc[inning]}  ${runs} runs    ${hits} hits     ${errors} errors `;

  return (blah);
}



