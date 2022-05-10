 
 console.log(" functions & baseball - dice probability (ex2)");




 // section I - initialize variables;
let resultcard = "";
let firstbase = 0;
let secondbase = 0;
let thirdbase = 0;
let inningout = 0;
let arrayScorecard = [];
let inning = 0;
let hits = 0;
let errors = 0;
let runs = 0;
let vttlRuns = 0;
let vttlHits = 0;
let httlRuns = 0;
let httlHits = 0;
let dBases = ' <br> <img src="../images/bases000.jpg"  >';
let testinn = 0;
let blah2 = "";
let trackLineupV = 0;
let trackLineupH = 0;
let visitorUp = true;
let bName="";
 let visInnsDesc = "";
 let vinnScore=[];
 let vendofInning = false;
 let hendofInning = false;
const inningdesc = [
  "",
  "first",
  "first",
  "second",
  "second",
  "third",
  "third",
  "fourth",
  "fourth",
  "fifth",
  "fifth",
  "sixth",
  "sixth",
  "seventh",
  "seventh",
  "eighth",
  "eighth",
  "ninth",
  "ninth",
  "Final Score",
];


//section FOUR "listener for ENTER ... calls functions & writes to screen;"
let messages = document.getElementById("messages");
let messages2 = document.getElementById("messages2");
let messages3 = document.getElementById("messages3");
//const textbox = document.getElementById("textbox");
const button = document.getElementById("button");

//writing results to screen
document.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    const newMessage = document.createElement("li");
    const ab_result = batCard.abResult();
    newMessage.innerHTML = `${ab_result},${batCard.player}`;
    messages.id = "scrollbox";
    messages.appendChild(newMessage);

    const newMessage2 = document.createElement("li");
    const runresult = ab_result.substring(0, 1);
    const bases2 = calcBases(runresult);
    newMessage2.innerHTML = `${bases2}`;
    messages2.id = "scrollbox";
    messages2.appendChild(newMessage2);

    /*
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
    */
  }
});

//SECTION FIVE: tracking runners and accumlating runs, hits errors
function calcBases(bases) {
  let bill = "zero";
  let singstat = "";
  switch (bases) {
    case "4": //homerun
      runs = thirdbase + secondbase + firstbase + 1;
      thirdbase = 0;
      secondbase = 0;
      firstbase = 0;
      console.log(`'Homerun' bases are clear. ${runs} runs score.`);
      bill = "cleared the bases";
      incrScore(visitorUp);
      //  ttlHits = ttlHits + 1;
      // ttlRuns = ttlRuns + runs;
      dBases = ' <br> <img src="../images/bases000.jpg"  >';
      break;
    case "3": //triple
      runs = thirdbase + secondbase + firstbase;
      thirdbase = 1;
      secondbase = 0;
      firstbase = 0;
      console.log(`'triple' 3rd base only.  ${runs} runs score.`);
      bill = "runner on third";
      incrScore(visitorUp);

      dBases = ' <br> <img src="../images/bases001.jpg"  >';
      break;
    case "2": //double
      runs = thirdbase + secondbase;
      thirdbase = firstbase;
      let thirdstat = "";
      if (thirdbase === 1) {
        thirdstat = "and third";
      }
      secondbase = 1;
      firstbase = 0;
      console.log(` Double!  ${runs} runs score.`);
      bill = `runner on second ${thirdstat}`;
      incrScore(visitorUp);

      if (secondbase + thirdbase === 2) {
        dBases = ' <br> <img src="../images/bases011.jpg"  >';
      } else {
        dBases = ' <br> <img src="../images/bases010.jpg"  >';
      }
      break;
    case "1": //single
      runs = thirdbase;
      thirdbase = secondbase;
      secondbase = firstbase;
      firstbase = 1;
      singstat = "runner on first";
      if (secondbase === 1) {
        singstat += " and second";
      }
      if (thirdbase === 1) {
        singstat += " and third";
      }
      console.log(`'Single!  ${runs} runs score.`);
      bill = `${singstat}`;
      incrScore(visitorUp);

      if (firstbase + secondbase + thirdbase === 3) {
        dBases = ' <br> <img src="../images/bases111.jpg"  >';
      } else {
        if (firstbase + secondbase === 2)
          dBases = ' <br> <img src="../images/bases110.jpg"  >';
        else {
          dBases = ' <br> <img src="../images/bases101.jpg"  >';
        }
      }
      if (firstbase + secondbase + thirdbase === 1) {
        dBases = ' <br> <img src="../images/bases100.jpg"  >';
      }
      break;
    case "0": // out
      if (inningout === 2) {
        singstat += "half inning over";
        firstbase = 0;
        secondbase = 0;
        thirdbase = 0;
        inningout = 0;
        inning = chginntxt(inning);
             vendofInning = true;
        hendofInning = true;
        if (inning % 2 === 0) {
          blah2 = "End of";
          visitorUp = true;
        } else {
          blah2 = "Middle of ";
          visitorUp = false;
        }
        const newMessage3 = document.createElement("li");
        const innstats = `${blah2} ${inningdesc[inning]}  ${runs} runs    ${hits} hits     ${errors} errors `;
        newMessage3.innerHTML = `${innstats}`;
        messages3.id = "scrollbox";
        messages3.appendChild(newMessage3);

        //why am i doing this - started erring when I added JSON because of call to abResult()
        const newMessage = document.createElement("li");
        newMessage.innerHTML = `<b> ${innstats} </b>`;
        messages.id = "scrollbox";
        messages.appendChild(newMessage);

        hits = 0;
        runs = 0;

        dBases = ' <br> <img src="../images/bases000.jpg"  >';

      } else {

        inningout = ++inningout;
        singstat = `out # ${inningout}`;
      }
      showOuts(inningout);
      console.log(`'out' ${firstbase} ${secondbase} ${thirdbase},${singstat}`);
      bill = `${singstat}`;
      runs = 0;
      // bill = "out. no change on bases";
      break;
    default:
      console.log(`Sorry, something went wrong.`);
  }

  drawBases(`${dBases}`);

  //
  function incrScore(whosup) {
    switch (visitorUp) {
      case true: //increment visitors score
        vttlHits = vttlHits + 1;
        vttlRuns = vttlRuns + runs;
        break;
      case false: //increment home score
        httlHits = httlHits + 1;
        httlRuns = httlRuns + runs;
        break;
      default:
        console.log(`Sorry, something went wrong.`);
        console.log(`visitor runs: ${vttlRuns}   home runs: ${httlRuns}`)
    }
  }



  //REFRESH TOTAL on  scoreboard  ***************************************************************************************
 // let visInnsDesc = ` <div class="top-left">`;
let innArray = [1,0,1,0,1,0,1,0,0];
for (x=0; x<5; ++x) {
visInnsDesc += `${innArray[x]} &nbsp;`;
}
console.log("RUNS", runs);
console.log("VISINNDESC",visInnsDesc);
   // visInnsDesc = ` ${runs} &nbsp;`;

console.log("GOT TO END OF INNING2 ",visInnsDesc)
  const drawVisInn = document.createElement("div");
   const oldVisInn = document.getElementById("visInn");
   oldVisInn.remove();

  drawVisInn.id = "visInn";
  drawVisInn.innerHTML = `<div class="top-left"> ${visInnsDesc} </div>`;
  console.log ("DRAWVISINN",drawVisInn);
  messages.appendChild(drawVisInn);
  visInnsDesc = "";
 

//***********************************************************************************************************************

  //Visitors
  let vscoreDesc = ` <div class="top-right">`;
  vscoreDesc += `${vttlRuns} &nbsp; ${vttlHits}  &nbsp; 0</div>`;
  const drawVisScore = document.createElement("div");
  const oldVisScore = document.getElementById("divInn3");
  oldVisScore.remove();
  drawVisScore.id = "divInn3";
  drawVisScore.innerHTML = vscoreDesc;
  messages.appendChild(drawVisScore);
  vscoreDesc = "";

  //Home
  let hscoreDesc = ` <div class="bottom-right">`;
  hscoreDesc += `${httlRuns} &nbsp; ${httlHits}  &nbsp; 0</div>`;
  const drawHomScore = document.createElement("div");
  const oldHomScore = document.getElementById("hdivInn3");
  oldHomScore.remove();
  drawHomScore.id = "hdivInn3";
  drawHomScore.innerHTML = hscoreDesc;
  messages.appendChild(drawHomScore);
  hscoreDesc = "";


  return bill;
}


function drawBases(bases) {
  let messages = document.getElementById("myField");
  const newBases = document.createElement("div");
  const oldBases = document.getElementById("diamond");
  oldBases.remove();
  newBases.id = "diamond";
  newBases.innerHTML = bases;
  messages.appendChild(newBases);
}


function showOuts(outs) {
  console.log("outs:", outs)
  let voutsDesc = ` <div class="circle" <p> &#9679; </p> </div> `;
  if (outs === 2) { voutsDesc = ` <div class="circle" <p> &#9679; &#9679 </p> </div> `; };
  if (outs === 0) { voutsDesc = ` <div class="circle"  </div> `; }
  const newOuts = document.createElement("div");
  const oldOuts = document.getElementById("showOuts");
  oldOuts.remove();
  newOuts.id = "showOuts";
  newOuts.innerHTML = voutsDesc;
  messages.appendChild(newOuts);
}


//SECTION SEVEN:  change innings
function chginntxt(inning) {
  if (inning < 19) {
    arrayScorecard.push(inning);
    inning = ++inning;
  } else {
    inning = 0;
  }
  const blah = `${blah2} ${inningdesc[inning]}  ${runs} runs    ${hits} hits     ${errors} errors `;
  visitorUp = !visitorUp;  // toggle who is up
  console.log(
    `xxEND OF 1/2 INNING:${inning}    ${runs} RUNS  ${vttlRuns} VISruns   ${hits} HITS   ${errors} ERRORS  ${vttlHits} VIS TTLHITS     Visitors Up: ${visitorUp}`
  );
  console.log(
    `xxEND OF 1/2 INNING:${inning}    ${runs} RUNS  ${httlRuns} HOMEruns   ${hits} HITS   ${errors} ERRORS  ${httlHits} HOM TTLHITS     Visitors Up: ${visitorUp}`
  );
  return inning;
}

//function reads JSON file from local drive and present content for use
async function getData2() {
  const fetchedData = await fetch("../data/test2.json")
    .then((results) => results.json())
    .then((data) => {
      return data;
    });
  return fetchedData;
}

//listening for click then call "getData"
button1.addEventListener("click", async function () {
  const myArray = await getData2();
  // console.log("myArray", myArray);
  if (visitorUp) {
 bName = myArray.Dodgers[trackLineupV][0].Name;
  } else {
    bName = myArray.Giants[trackLineupV][0].Name;
  };


  // at bat results based on dice rolls
  let k = Math.floor(Math.random() * 2); //determines card to use (pitcher or hitter)
  let i = Math.floor(Math.random() * 6.5) + Math.floor(Math.random() * 6); //determines which item on selected card

  console.log(`die detail: ${i}  die card: ${k}`);
  if (visitorUp) {
  console.log("Visitor is up");
  console.log("Pitch card (G)", myArray.Giants[9][4].pitop[i]);
  console.log("Hitr  card (D) ", bName, myArray.Dodgers[trackLineupV][4].hitop[i]   );
} else   {
  console.log("Home is up");
  console.log("Pitch card (D)", myArray.Dodgers[9][4].pitop[i]);
  console.log("Hitr  card (G) ", bName, myArray.Giants[trackLineupV][4].hitop[i]   );
  }


  //determine which card to use
  const newMessage = document.createElement("li");

  switch (k) {
    case 0: //Pitchers Card
      if (visitorUp) {
        ab_result = myArray.Giants[9][4].pitop[i]; // off Giants Pitcher Card
      } else {
        ab_result = myArray.Dodgers[9][4].pitop[i];
      }
      break;
    case 1: //batters card
      if (visitorUp) {
        ab_result = myArray.Dodgers[trackLineupV][4].hitop[i]; // off Giants Pitcher Card
      } else {
        ab_result = myArray.Giants[trackLineupV][4].hitop[i];
      }
      break;
    default:
  }
/*
  newMessage.innerHTML = ab_result;
  messages.id = "scrollbox";
  messages.appendChild(newMessage);

  const newMessage2 = document.createElement("li");
  const runresult = ab_result.substring(0, 1);
  const bases2 = calcBases(runresult);
  newMessage2.innerHTML = `${bases2}`;
  messages2.id = "scrollbox";
  messages2.appendChild(newMessage2);

  if (visitorUp) {
    console.log("visitor is up", trackLineupV);
    trackLineupV = trackLineupV + 1;
    if (trackLineupV === 9) {
      trackLineupV = 0;
    }
    console.log("bname", trackLineupV, bName);
    bName = myArray.Dodgers[trackLineupV][0].Name;
  } else {
    console.log("home is up", trackLineupH);
    trackLineupH = trackLineupH + 1;
    if (trackLineupH === 9) {
      trackLineupH = 0;
      console.log("bname", trackLineupH, bName);
    }
  }
*/

}

);


