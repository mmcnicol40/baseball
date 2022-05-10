
console.log(" functions & baseball - dice probability (ex0)");

// REPLACED JSON CALL w/ith IMBEDDED ARRAY FOR EASE OF MANIPULATION & USE
const myArray = {
  "Dodgers": [
    {
      "Name": "Hurley Bender",
      "Image": `<BR>  <img src="../images/players/batter1sm.jpg" width="50%">  `,
      "Num": "50",
      "Position": "Shortstop",
      "Hit_Rating": "Contact",
      "hitop": [
        "0 - line out",
        "0 - ground out",
        "0 - strike out",
        "0 - pop out",
        "1 - single",
        "0 - pop out",
        "1 - single",
        "1 - single",
        "2 - double",
        "2 - double",
        "3 - Triple",
        "4 - HR"
      ]
    },
    {
      "Name": "Ruby Greene",
      "Image": `<BR>  <img src="../images/players/batter2sm.jpg" width="50%">  `,
      "Num": "78",
      "Position": "2nd Base",
      "Hit_Rating": "Contact",
      "hitop": [
        "0 - line out",
        "0 - ground out",
        "0 - strike out",
        "0 - pop out",
        "0 - ground out",
        "1 - single",
        "0 - ground out",
        "1 - single",
        "2 - double",
        "2 - double",
        "3 - Triple",
        "4 - HR"
      ]
    },
    {
      "Name": "Smack Avery",
      "Image": `<BR>  <img src="../images/players/batter3sm.jpg" width="50%">  `,
      "Num": "56",
      "Position": "1st Base",
      "Hit_Rating": "Power",
      "hitop": [
        "0 - line out",
        "0 - ground out",
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - strike out",
        "1 - single",
        "2 - double",
        "4 - HR",
        "0 - Fly out",
        "4 - HR",
        "4 - HR"
      ]
    },
    {
      "Name": "John Swanson",
      "Image": `<BR>  <img src="../images/players/batter4sm.jpg" width="50%">  `,
      "Num": "59",
      "Position": "3rd Base",
      "Hit_Rating": "Power",
      "hitop": [
        "0 - line out",
        "0 - ground out",
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - strike out",
        "1 - single",
        "2 - double",
        "4 - HR",
        "0 - strike out",
        "4 - HR",
        "4 - HR"
      ]
    },
    {
      "Name": "Yo Cooper",
      "Image": `<BR>  <img src="../images/players/batter5sm.jpg" width="50%">  `,
      "Num": "91",
      "Position": "Centerfield",
      "Hit_Rating": "Contact",
      "hitop": [
        "0 - line out",
        "0 - ground out",
        "2 - double",
        "0 - pop out",
        "1 - single",
        "1 - single",
        "0 - line out",
        "1 - single",
        "2 - double",
        "0 - line out",
        "3 - Triple",
        "0 - strike out"
      ]
    },
    {
      "Name": "Ben Rushmore",
      "Image": `<BR>  <img src="../images/players/batter6sm.jpg" width="50%">  `,
      "Num": "45",
      "Position": "DH",
      "Hit_Rating": "Power",
      "hitop": [
        "0 - line out",
        "0 - ground out",
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - strike out",
        "1 - single",
        "2 - double",
        "4 - HR",
        "4 - HR",
        "0 - strike out",
        "4 - HR"
      ]
    },
    {
      "Name": "Revis Ortiz",
      "Image": `<BR>  <img src="../images/players/batter7sm.jpg" width="50%">  `,
      "Num": "17",
      "Position": "Catcher",
      "Hit_Rating": "Weak",
      "hitop": [
        "0 - line out",
        "1 - single",
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - strike out",
        "1 - single",
        "2 - double",
        "0 - pop out",
        "0 - ground out",
        "3 - triple",
        "1 - single"
      ]
    }
    ,
    {
      "Name": "Freddie Knox",
      "Image": `<BR>  <img src="../images/players/batter8sm.jpg" width="50%">  `,
      "Num": "25",
      "Position": "Left Field",
      "Hit_Rating": "Weak",
      "hitop": [
        "0 - line out",
        "0 - ground out",
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - strike out",
        "1 - single",
        "2 - double",
        "0 - pop out",
        "0 - ground out",
        "3 - triple",
        "1 - single"
      ]
    },
    {
      "Name": "Betsy Banks",
      "Image": `<BR>  <img src="../images/players/batter9sm.jpg" width="50%">  `,
      "Num": "55",
      "Position": "Right Field",
      "Hit_Rating": "Weak",
      "hitop": [
        "0 - line out",
        "0 - ground out",
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - strike out",
        "1 - single",
        "2 - double",
        "0 - pop out",
        "0 - ground out",
        "3 - triple",
        "0 - ground out"
      ]
    },
    {
      "Name": "Steve Monstur",
      "Image": `<BR>  <img src="../images/players/batter10sm.jpg" width="50%">  `,
      "Num": "08",
      "Position": "Pitcher",
      "Hit_Rating": "Power Pitcher",
      "pitop": [
        "1 - single",
        "0 - pop out",
        "4 - Home Run",
        "0 - stirke out",
        "0 - strike out",
        "0 - stirke out",
        "0 - line out",
        "0 - foul out",
        "2 - Double",
        "0 - strike out",
        "4 - Home Run",
        "0 - line out"
      ]
    }
  ]
  ,
  "Giants": [
    {
      "Name": "Pres Addonomus",
      "Image": `<BR>  <img src="../images/players/batter11sm.jpg" width="50%">  `,
      "Num": "28",
      "Position": "Shortstop",
      "Hit_Rating": "Contact",
      "hitop": [
        "4 - HR",
        "0 - ground out",
        "1 - single",
        "0 - pop out",
        "0 - ground out",
        "1 - single",
        "0 - pop out",
        "1 - single",
        "0 - pop out",
        "2 - double",
        "3 - Triple",
        "0 - line out"
      ]
    },
    {
      "Name": "Mick Steeyle",
      "Image": `<BR>  <img src="../images/players/batter12sm.jpg" width="50%">  `,
      "Num": "25",
      "Position": "2nd Base",
      "Hit_Rating": "Contact",
      "hitop": [
        "0 - line out",
        "0 - ground out",
        "0 - strike out",
        "0 - pop out",
        "1 - single",
        "0 - ground out",
        "1 - single",
        "0 - ground out",
        "2 - double",
        "0 - ground out",
        "3 - Triple",
        "4 - HR"
      ]
    },
    {
      "Name": "Hammer Longballo",
      "Image": `<BR>  <img src="../images/players/batter13sm.jpg" width="50%">  `,
      "Num": "90",
      "Position": "1st Base",
      "Hit_Rating": "Power",
      "hitop": [
        "0 - line out",
        "0 - ground out",
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - strike out",
        "1 - single",
        "2 - double",
        "4 - HR",
        "0 - fly out",
        "4 - HR",
        "4 - HR"
      ]
    },
    {
      "Name": "Boomer Plattune",
      "Image": `<BR>  <img src="../images/players/batter14sm.jpg" width="50%">  `,
      "Num": "26",
      "Position": "3rd Base",
      "Hit_Rating": "Power",
      "hitop": [
        "0 - line out",
        "1 - single",
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - strike out",
        "4 - HR",
        "2 - double",
        "0 - strike out",
        "4 - HR",
        "0 - strike out",
        "4 - HR"
      ]
    },
    {
      "Name": "Damian Rush",
      "Image": `<BR>  <img src="../images/players/batter15sm.jpg" width="50%">  `,
      "Num": "65",
      "Position": "Centerfield",
      "Hit_Rating": "Contact",
      "hitop": [
        "0 - line out",
        "0 - ground out",
        "0 - strike out",
        "0 - pop out",
        "1 - single",
        "1 - single",
        "0 - ground out",
        "0 - ground out",
        "0 - strike out",
        "0 - pop out",
        "3 - Triple",
        "4 - HR"
      ]
    },
    {
      "Name": "Madoka Hayata",
      "Image": `<BR>  <img src="../images/players/batter16sm.jpg" width="50%">  `,
      "Num": "43",
      "Position": "DH",
      "Hit_Rating": "Power",
      "hitop": [
        "0 - line out",
        "4 - HR",
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - strike out",
        "1 - single",
        "0 - strike out",
        "4 - HR",
        "0 - fly out",
        "4 - HR",
        "4 - HR"
      ]
    },
    {
      "Name": "Tish Ballin",
      "Image": `<BR>  <img src="../images/players/batter17sm.jpg" width="50%">  `,
      "Num": "29",
      "Position": "Catcher",
      "Hit_Rating": "Weak",
      "hitop": [
        "0 - line out",
        "2 - double",
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - strike out",
        "0 - ground out",
        "0 - pop out",
        "0 - ground out",
        "3 - triple",
        "1 - single"
      ]
    },
    {
      "Name": "Lloyd Cook",
      "Image": `<BR>  <img src="../images/players/batter18sm.jpg" width="50%">  `,
      "Num": "10",
      "Position": "Left Field",
      "Hit_Rating": "Weak",
      "hitop": [
        "0 - line out",
        "1 - single",
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - strike out",
        "1 - single",
        "2 - double",
        "0 - pop out",
        "0 - ground out",
        "0 - ground out",
        "1 - single"
      ]
    },
    {
      "Name": "Filet Jones",
      "Image": `<BR>  <img src="../images/players/batter19sm.jpg" width="50%">  `,
      "Num": "16",
      "Position": "Right Field",
      "Hit_Rating": "Weak",
      "hitop": [
        "0 - line out",
        "0 - ground out",
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - strike out",
        "1 - single",
        "2 - double",
        "0 - pop out",
        "0 - ground out",
        "3 - triple",
        "1 - single"
      ]
    },
    {
      "Name": "Linus Digby",
      "Image": `<BR>  <img src="../images/players/batter20sm.jpg" width="50%">  `,
      "Num": "47",
      "Position": "Pitcher",
      "Hit_Rating": "Ground Ball",
      "pitop": [
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - ground out",
        "0 - ground out",
        "0 - stirke out",
        "0 - line out",
        "0 - foul out",
        "1 - single",
        "0 - stirke out",
        "1 - single",
        "2 - Double"
      ]
    }
  ]
}



// section ONE - initialize variables;
let resultcard = "";
let curPitcher = "";
let curHitter = "";
let firstbase = 0;
let secondbase = 0;
let thirdbase = 0;
let inningout = 0;
let arrayScorecard = [];
let inning = 0;
let innhits = 0;
let innruns=0;
let hits = 0;
let errors = 0;
let runs = 0;
let vttlRuns = 0;
let vttlHits = 0;
let httlRuns = 0;
let httlHits = 0;
let dBases = ' <br> <img src="../images/bases000.jpg" width="80%"  >';
let testinn = 0;
let blah2 = "";
let trackLineupV = 0;
let trackLineupH = 0;
let visitorUp = true;
let bName = "";
let visInnsDesc = "";
let vinnScore = [];
let vendofInning = false;
let hendofInning = false;
let messages = document.getElementById("messages");
let messages2 = document.getElementById("messages2");
let messages3 = document.getElementById("messages3");
let button1 = document.getElementById("button1");
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


//Click Listener
button1.addEventListener("click", playBall)

//SECTION ZERO - removed (JSON CALL) - switched to using an array above

//SECTION ONE - Roll the dice to determine  card to use (Pitcher or Batter) AND Results from card chosen
function playBall() {
  let k = Math.floor(Math.random() * 2); //determines card to use (pitcher or hitter)
  let i = Math.floor(Math.random() * 6.5) + Math.floor(Math.random() * 6); //determines which item on selected card

  //write to console
  console.log(`die detail: ${i}  die card: ${k}`);

  /*
  if (visitorUp) {
    console.log("Visitor is up");
    console.log("Pitch card (G)", myArray.Giants[9].pitop[i]);
    console.log("Hitr  card (D) ", bName, myArray.Dodgers[trackLineupV].hitop[i]);
  } else {
    console.log("Home is up");
    console.log("Pitch card (D)", myArray.Dodgers[9].pitop[i]);
    console.log("Hitr  card (G) ", bName, myArray.Giants[trackLineupV].hitop[i]);
  }
  */

  //based on dice and player card - THEN determines result (hit/out)
  switch (k) {
    case 0: //Pitchers Card
      if (visitorUp) {
        ab_result = myArray.Giants[9].pitop[i]; // off Giants Pitcher Card
      } else {
        ab_result = myArray.Dodgers[9].pitop[i];
      }
      break;
    case 1: //batters card
      if (visitorUp) {
        ab_result = myArray.Dodgers[trackLineupV].hitop[i]; // off Giants Pitcher Card
      } else {
        ab_result = myArray.Giants[trackLineupV].hitop[i];
      }
      break;
    default:
  }

  //SECTION TWOa - write results of "Pitch" to Message boxes
  const newMessage = document.createElement("li");
  newMessage.innerHTML = ab_result;
  messages.id = "scrollbox";
  messages.appendChild(newMessage);

  const newMessage2 = document.createElement("li");
  const runresult = ab_result.substring(0, 1);
  const bases2 = calcBases(runresult);  //calls MAIN (calcBases) FUNCTION that calcs bases & tracks hits, runs, score
  newMessage2.innerHTML = `${bases2}`;
  messages2.id = "scrollbox";
  messages2.appendChild(newMessage2);


  //SECTION TWOb - increment batter - after EVERYTHING IS WRITTEN TO SCREEN (moves thru lineup)
  if (visitorUp) {
    console.log("visitor is up", trackLineupV);
    trackLineupV = trackLineupV + 1;
    if (trackLineupV === 9) {
      trackLineupV = 0;
    }
    bName = myArray.Dodgers[trackLineupV].Name;
    curPitcher = myArray.Giants[9];
    curHitter = myArray.Dodgers[trackLineupV];
  } else {
    console.log("home is up", trackLineupH);
    trackLineupH = trackLineupH + 1;
    curPitcher = myArray.Dodgers[9];
    curHitter = myArray.Giants[trackLineupH];
    if (trackLineupH === 9) {
      trackLineupH = 0;

    }
  }
  drawBatter(curPitcher, curHitter)

};



//SECTION THREE- FUNCTION - Calculates bases, runs, hits, based on BATTER/PITCHER/DICE and current status of Baserunners (had to keep here because of JSON data availability)
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
      hits = 1;
      // incrScore(visitorUp);
      dBases = ' <br> <img src="../images/bases000.jpg" width="80%"  >';
      break;
    case "3": //triple
      runs = thirdbase + secondbase + firstbase;
      thirdbase = 1;
      secondbase = 0;
      firstbase = 0;
      console.log(`'triple' 3rd base only.  ${runs} runs score.`);
      bill = "runner on third";
      hits = 1;
      //incrScore(visitorUp);

      dBases = ' <br> <img src="../images/bases001.jpg" width="80%"  >';
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
      hits = 1;
      //incrScore(visitorUp);

      if (secondbase + thirdbase === 2) {
        dBases = ' <br> <img src="../images/bases011.jpg" width="80%"  >';
      } else {
        dBases = ' <br> <img src="../images/bases010.jpg" width="80%"  >';
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
      hits = 1;
      // incrScore(visitorUp);

      if (firstbase + secondbase + thirdbase === 3) {
        dBases = ' <br> <img src="../images/bases111.jpg" width="80%"  >';
      } else {
        if (firstbase + secondbase === 2)
          dBases = ' <br> <img src="../images/bases110.jpg" width="80%"  >';
        else {
          dBases = ' <br> <img src="../images/bases101.jpg" width="80%"  >';
        }
      }
      if (firstbase + secondbase + thirdbase === 1) {
        dBases = ' <br> <img src="../images/bases100.jpg" width="80%"  >';
      }
      break;
    case "0": // out
      hits = 0;
      if (inningout === 2) {
        singstat += "half inning over";
        firstbase = 0;
        secondbase = 0;
        thirdbase = 0;
        inningout = 0;
       
        //inning = chginntxt(inning);
        if (inning < 19) {
          arrayScorecard.push(inning);
          inning = ++inning;
        } else {
          inning = 0;
        }
 



        const blah = `${blah2} ${inningdesc[inning]}  ${runs} runs    ${innhits} hits     ${errors} errors `;
        visitorUp = !visitorUp;  // toggle who is up
        console.log(`xxEND 1/2 INN:${inning}    ${innruns}IR  ${vttlRuns}VR ${httlRuns}HR  ${innhits}IH   ${vttlHits}VH  ${httlHits}HH VisUp?: ${visitorUp}         `);






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
        const innstats = `${blah2} ${inningdesc[inning]}  ${innruns} runs    ${innhits} hits     ${errors} errors `;
        newMessage3.innerHTML = `${innstats}`;
        messages3.id = "scrollbox";
        messages3.appendChild(newMessage3);

        //why am i doing this - started erring when I added JSON because of call to abResult()
        const newMessage = document.createElement("li");
        newMessage.innerHTML = `<b> ${innstats} </b>`;
        messages.id = "scrollbox";
        messages.appendChild(newMessage);

        console.log("hits and runs B4 zero out", hits, runs)
        hits = 0;
        runs = 0;
innhits=0;
innruns=0;
        dBases = ' <br> <img src="../images/bases000.jpg" width="80%"  >';

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
  innhits = innhits + hits;
  innruns = innruns + runs;
  switch (visitorUp) {
    case true: //increment visitors score
      vttlHits = vttlHits + hits;
      vttlRuns = vttlRuns + runs;

      break;
    case false: //increment home score
      httlHits = httlHits + hits;
      httlRuns = httlRuns + runs;
      break;
    default:
      console.log(`Sorry, something went wrong.`);

  }
  drawBases(`${dBases}`);

  //
  function xxincrScore(whosup) {
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

    }        console.log(`ttl vis R: ${vttlRuns}   ttl home R: ${httlRuns} inn home R ${runs}`)

  }



  //SECTION FOUR - REDRAW SCOREBOARD STUFF (innings, totals *************
  // let visInnsDesc = ` <div class="top-left">`;
  /*
  let innArray = [1, 0, 1, 0, 1, 0, 1, 0, 0];
  for (x = 0; x < 5; ++x) {
    visInnsDesc += `${innArray[x]} &nbsp;`;
  }
  console.log("RUNS", runs);
  console.log("VISINNDESC", visInnsDesc);
  // visInnsDesc = ` ${runs} &nbsp;`;

  console.log("GOT TO END OF INNING2 ", visInnsDesc)
  const drawVisInn = document.createElement("div");
  const oldVisInn = document.getElementById("visInn");
  oldVisInn.remove();

  drawVisInn.id = "visInn";
  drawVisInn.innerHTML = `<div class="top-left"> ${visInnsDesc} </div>`;
  console.log("DRAWVISINN", drawVisInn);
  messages.appendChild(drawVisInn);
  visInnsDesc = "";

  */
  // REDRAW Visitors Total (RHE)
  let vscoreDesc = ` <div class="v_rhe">`;
  vscoreDesc += `${vttlRuns} &nbsp; ${vttlHits}  &nbsp; 0</div>`;
  const drawVisScore = document.createElement("div");
  const oldVisScore = document.getElementById("divInn3");
  oldVisScore.remove();
  drawVisScore.id = "divInn3";
  drawVisScore.innerHTML = vscoreDesc;
  messages.appendChild(drawVisScore);
  vscoreDesc = "";

  //REDRAW Home Total (RHE)
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

//SECTION FIVE - REDRAW NEW BASES IMAGE (with latest results)
function drawBases(bases) {
  let bbdiamond = document.getElementById("myField");
  const newBases = document.createElement("div");
  const oldBases = document.getElementById("diamond");
  oldBases.remove();
  newBases.id = "diamond";
  newBases.className = "field";
  newBases.innerHTML = bases;
  bbdiamond.appendChild(newBases);
}

//SECTION SIX - DRAW OUTS RED CIRCLES (based on latest results)
function showOuts(outs) {
  //console.log("outs:", outs)
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


//SECTION SEVEN:  end of inning - make updates
function chginntxt(inning) {
  if (inning < 19) {
    arrayScorecard.push(inning);
    inning = ++inning;
  } else {
    inning = 0;
  }
  const blah = `${blah2} ${inningdesc[inning]}  ${runs} runs    ${hits} hits     ${errors} errors `;
  visitorUp = !visitorUp;  // toggle who is up
  console.log(`xxEND 1/2 INN:${inning}    ${runs}R   ${hits} H ${vttlRuns} VR  ${vttlHits} VH  VisUp?: ${visitorUp}       ${httlRuns} HR ${httlHits} HH `);


  return inning;
}

function drawBatter() {
  // console.log("CURPIT", curPitcher,"CURHIT", curHitter);
  let Pit_Img = document.getElementById("matchbox");
  const newPit = document.createElement("div");
  const oldPit = document.getElementById("matchup1");
  oldPit.remove();
  newPit.id = "matchup1";
  //newPit.innerHTML = `${myArray.Dodgers[9].Image}`;
  newPit.innerHTML = `${curPitcher.Image}`;
  Pit_Img.appendChild(newPit);

  let tempVal1 = `<table style="padding-top: 0%;"> <tr> <b style="font-size: 30px" ;>PITCHER</b> <BR> </tr> <tr> <b>NAME:</b> ${curPitcher.Name} <BR> </tr> <tr> <B> Pitcher Type:</B> ${curPitcher.Hit_Rating}<BR> </tr> <tr> <b>TODAY:</b> 5 Strike Outs / 2 Homeruns <BR> </tr> </table> </div>`
  let pitTxt = document.getElementById("matchtxt0");
  const newPtext = document.createElement("div");
  const oldPtext = document.getElementById("matchtxt1");
  oldPtext.remove();
  newPtext.id = "matchtxt1";
  newPtext.className = "matchtxt";
  newPtext.innerHTML = `${tempVal1}`;
  pitTxt.appendChild(newPtext);

  let htr_Img = document.getElementById("matchbox");
  const newHtr = document.createElement("div");
  const oldHtr = document.getElementById("matchup2");
  oldHtr.remove();
  newHtr.id = "matchup2";
  newHtr.className = "matchimg";
  newHtr.innerHTML = `${curHitter.Image}`;
  htr_Img.appendChild(newHtr);

  let tempVal2 = `<table style="padding-bottom: 0%;"> <tr> <BR> <b style="font-size: 30px" ;>HITTER</b> <BR> </tr> <tr> <b>NAME:</b> ${curHitter.Name} <BR> </tr> <tr> <B> Hitter Type:</B> ${curHitter.Hit_Rating}<BR> </tr> <tr> <b>TODAY: </b>  2 - 4 (HR, Triple) <BR> </tr> </table> </div>`
  let hitTxt = document.getElementById("matchtxt0");
  const newHtext = document.createElement("div");
  const oldHtext = document.getElementById("matchtxt2");
  oldHtext.remove();
  newHtext.id = "matchtxt2";
  newHtext.className = "matchtxt";
  newHtext.innerHTML = `${tempVal2}`;
  hitTxt.appendChild(newHtext);


}