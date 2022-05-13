console.log("BACKUP of ex0 - this is Oa")

console.log(" functions & baseball - dice probability (ex0)");
// array for scoreboard tracking and drawing
const scoreByinn = {
  "visitors": [
    {
      "Runs": 0,
      "Hits": 0,
      "Errors": 0,
      "runbyinn": []
    }
  ],

  "hometeam": [
    {
      "Runs": 0,
      "Hits": 0,
      "Errors": 0,
      "runbyinn": []
    }
  ]
}

// TEAMS/PLAYERS/DETAILS REPLACED JSON CALL w/ith IMBEDDED ARRAY FOR EASE OF MANIPULATION & USE
const myArray = {
  "Dodgers": [
    {
      "Name": "Sidney Speeder",
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
        "0 - strike out",
        "0 - strike out",
        "0 - strike out",
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
      "Name": "Pete Addonomus",
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
      "Name": "Henry Heater",
      "Image": `<BR>  <img src="../images/players/batter20sm.jpg" width="50%">  `,
      "Num": "47",
      "Position": "Pitcher",
      "Hit_Rating": "Fireballer",
      "pitop": [
        "0 - strike out",
        "0 - pop out",
        "0 - strike out",
        "0 - ground out",
        "0 - ground out",
        "0 - strike out",
        "0 - line out",
        "0 - foul out",
        "1 - single",
        "0 - strike out",
        "1 - single",
        "2 - Double"
      ]
    }
  ]
}



// section ONE - initialize variables;
let curPitcher = "";
let curHitter = "";
let curPitName = "";
let curHitName = myArray.Dodgers[0].Name;
 let firstbase = 0;
let secondbase = 0;
let thirdbase = 0;
let inningout = 0;
let arrayScorecard = [];
let inning = 0;
let innhits = 0;
let innruns = 0;
let hits = 0;
let errors = 0;
let runs = 0;
let vttlRuns = 0;
let vttlHits = 0;
let httlRuns = 0;
let httlHits = 0;
let dBases = ' <br> <img src="../images/bases000.jpg" width="80%"  >';
let chgInnDesc = "";
let trackLineupV = 0;
let trackLineupH = 0;
let visitorUp = true;
let visInnsDesc = "";
let homeInnsDesc = "";
 let messages = document.getElementById("messages");
let messages2 = document.getElementById("messages2");
let messages3 = document.getElementById("messages3");
let button1 = document.getElementById("button1");
let outSwitch=true;
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
button0.addEventListener("click", resetGame)

//SECTION ZERO - removed (JSON CALL) - switched to using an array above

//SECTION ONE - Roll the dice to determine  card to use (Pitcher or Batter) AND Results from card chosen
function playBall() {
  const k = Math.floor(Math.random() * 2); //determines card to use (pitcher or hitter)
  const i = Math.floor(Math.random() * 6.5) + Math.floor(Math.random() * 6); //determines which item on selected card

  //write to console
  console.log(`die detail: ${i}  die card: ${k}`);

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
 // const messages = document.getElementById("messages");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = ab_result;
  messages.id = "scrollbox";
  messages.appendChild(newMessage);

  const newMessage2 = document.createElement("li");
  const runresult = ab_result.substring(0, 1);
  const bases2 = calcBases(runresult,k);  //calls MAIN (calcBases) FUNCTION that calcs bases & tracks hits, runs, score
  newMessage2.innerHTML = `${bases2}`;
  messages2.id = "scrollbox";
  messages2.scrollTop = messages2.scrollHeight;
  messages2.appendChild(newMessage2);

  drawHeadline(bases2);


  //SECTION TWOb - increment batter - after EVERYTHING IS WRITTEN TO SCREEN (moves thru lineup)
  if (visitorUp) {
    console.log("visitor is up", trackLineupV);
    trackLineupV = trackLineupV + 1;
    if (trackLineupV === 9) {
      trackLineupV = 0;
    }
    curPitcher = myArray.Giants[9];
    curHitter = myArray.Dodgers[trackLineupV];
    curHitName = myArray.Dodgers[trackLineupV].Name;
  } else {
    console.log("home is up", trackLineupH);
    trackLineupH = trackLineupH + 1;
    curPitcher = myArray.Dodgers[9];
    curHitter = myArray.Giants[trackLineupH];
    curHitName = myArray.Giants[trackLineupH].Name;
    if (trackLineupH === 9) {
      trackLineupH = 0;

    }
  }
  drawBatter(curPitcher, curHitter);
};

//draw headline
function drawHeadline(bases2) {
  console.log("HEADLINE FUNCTION",bases2);
  let newAlert = document.getElementById("theadline");
  const newHeadline = document.createElement("div");
  const oldHeadline = document.getElementById("headline");
  oldHeadline.remove();
  newHeadline.id = "headline";
  newHeadline.className = "headline";
  newHeadline.innerHTML = `<b> ${bases2} </b>`;
  newAlert.appendChild(newHeadline);
}



//SECTION THREE- FUNCTION - Calculates bases, runs, hits, based on BATTER/PITCHER/DICE and current status of Baserunners (had to keep here because of JSON data availability)
function calcBases(bases,k) {
  let abResultDesc = "";
  let singstat = "";
  switch (bases) {
    case "4": //homerun
      runs = thirdbase + secondbase + firstbase + 1;
      thirdbase = 0;
      secondbase = 0;
      firstbase = 0;
      if (k===0) { 
      abResultDesc = `Its a Homerun!!!! ${curHitName} has cleared the bases`;
      } else {
        abResultDesc = `${curHitName} launches a towering Homerun!!!!!`;
      }
      hits = 1;
      dBases = ' <br> <img src="../images/bases000.jpg" width="80%"  >';
      break;
    case "3": //triple
      runs = thirdbase + secondbase + firstbase;
      thirdbase = 1;
      secondbase = 0;
      firstbase = 0;
      if (k===1) { 
      abResultDesc = `TRIPLE! ${curHitName} got ahold of that one!`;
      } else { 
        abResultDesc = `Speedy ${curHitName} gets to 3rd safely with a triple!`;
      }
      hits = 1;
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
      if (k===0) {
      abResultDesc = `${curHitName} DOUBLES to the alley! ${thirdstat}`;
      } else {
        abResultDesc = `${curHitName} turns a single into a double! ${thirdstat}`;
      }
      hits = 1;
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
      abResultDesc = `${curHitName} singles to left!  ${singstat}`;
      hits = 1;
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

        //increment inning
        if (inning < 19) {
          arrayScorecard.push(inning);
          inning = ++inning;
        } else {
          inning = 0;
          drawHeadline(`*******************************************************************GAME OVER - FINAL SCORE is blah blha blah`);
        }
        visitorUp = !visitorUp;  // toggle who is up
        console.log(`xxEND 1/2 INN:${inning}    ${innruns}IR  ${vttlRuns}VR ${httlRuns}HR  ${innhits}IH   ${vttlHits}VH  ${httlHits}HH VisUp?: ${visitorUp}         `);
        if (inning % 2 === 0) {
          chgInnDesc = "End of";
          visitorUp = true;
        } else {
          chgInnDesc = "Middle of ";
          visitorUp = false;
        }

        //writing to message panel
        const newMessage3 = document.createElement("li");
        const innstats = `${chgInnDesc} ${inningdesc[inning]}  ${innruns} runs    ${innhits} hits     ${errors} errors `;
        newMessage3.innerHTML = `${innstats}`;
        messages3.id = "scrollbox";
        messages3.scrollTop = messages3.scrollHeight;
        messages3.appendChild(newMessage3);

        //why am i doing this - started erring when I added JSON because of call to abResult()
        const newMessage = document.createElement("li");
        newMessage.innerHTML = `<b> ${innstats} </b>`;
        messages.id = "scrollbox";
        //test scrolltop
        messages.scrollTop = messages.scrollHeight;
        messages.appendChild(newMessage);

        //update scoreboard array (line 794-ish)
        if (!visitorUp) {
          scoreByinn.visitors[0].runbyinn.push(innruns);
        } else {
          scoreByinn.hometeam[0].runbyinn.push(innruns);
        }

        //reset inning stats
        hits = 0;
        runs = 0;
        innhits = 0;
        innruns = 0;
        dBases = ' <br> <img src="../images/bases000.jpg" width="80%"  >';
      } else {
        inningout = ++inningout;
        if (outSwitch) { 
        singstat = `${curHitName} hits an easy ground out to 1st.  That makes out # ${inningout}`;
        outSwitch= !outSwitch;
        } else {
          singstat = `Its a lazy fly ball to Centerfield - and now there are ${inningout} outs in the inning.`;  
          outSwitch= !outSwitch;
        }
      }
      showOuts(inningout);
      console.log(`'out' ${firstbase} ${secondbase} ${thirdbase},${singstat}`);
      abResultDesc = `${singstat}`;
      runs = 0;
      // abResultDesc = "out. no change on bases";
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


  //SECTION FOUR - REDRAW SCOREBOARD STUFF (innings, totals *************
  const disVinn = document.getElementById("container");
  const drawVisInn = document.createElement("div");
  const oldVisInn = document.getElementById("visInn");
  oldVisInn.remove();
  arrlen = scoreByinn.visitors[0].runbyinn.length;
  for (x = 0; x < arrlen; ++x) {
    visInnsDesc += `${scoreByinn.visitors[0].runbyinn[x]} &nbsp;`;
  }

  drawVisInn.id = "visInn";
  drawVisInn.innerHTML = `<div class="top-left"> ${visInnsDesc} &nbsp; &nbsp; </div>`;
  disVinn.appendChild(drawVisInn);
  visInnsDesc = "";

  // let visInnsDesc = ` <div class="top-left">`;
  const disHinn = document.getElementById("container");
  const drawHomeInn = document.createElement("div");
  const oldHomeInn = document.getElementById("homeInn");
  oldHomeInn.remove();
  arrlen = scoreByinn.hometeam[0].runbyinn.length;
  for (x = 0; x < arrlen; ++x) {
    homeInnsDesc += `${scoreByinn.hometeam[0].runbyinn[x]} &nbsp;`;
  }

  drawHomeInn.id = "homeInn";
  drawHomeInn.innerHTML = `<div class="bottom-left"> ${homeInnsDesc} &nbsp; &nbsp; </div>`;
  disHinn.appendChild(drawHomeInn);
  homeInnsDesc = "";


  // REDRAW Visitors Total (RHE)
  let vscoreDesc = ` <div class="v_rhe">`;
  vscoreDesc += `${vttlRuns} &nbsp; ${vttlHits}  &nbsp; 0</div>`;
  const disVrhe = document.getElementById("container");
  const drawVisScore = document.createElement("div");
  const oldVisScore = document.getElementById("divInn3");
  oldVisScore.remove();
  drawVisScore.id = "divInn3";
  drawVisScore.innerHTML = vscoreDesc;
  disVrhe.appendChild(drawVisScore);
  vscoreDesc = "";

  //REDRAW Home Total (RHE)
  let hscoreDesc = ` <div class="bottom-right">`;
  hscoreDesc += `${httlRuns} &nbsp; ${httlHits}  &nbsp; 0</div>`;
  const disHrhe = document.getElementById("container");
  const drawHomScore = document.createElement("div");
  const oldHomScore = document.getElementById("hdivInn3");
  oldHomScore.remove();
  drawHomScore.id = "hdivInn3";
  drawHomScore.innerHTML = hscoreDesc;
  disHrhe.appendChild(drawHomScore);
  hscoreDesc = "";
  return abResultDesc;
}

//SECTION FIVE - REDRAW NEW BASES IMAGE (with latest results)
function drawBases(bases) {
  const bbdiamond = document.getElementById("myField");
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
  let voutsDesc = ` <div class="circle" <p> &#9679; </p> </div> `;
  if (outs === 2) { voutsDesc = ` <div class="circle" <p> &#9679; &#9679 </p> </div> `; };
  if (outs === 0) { voutsDesc = ` <div class="circle"  </div> `; }
  const disOuts = document.getElementById("container");
  const newOuts = document.createElement("div");
  const oldOuts = document.getElementById("showOuts");
  oldOuts.remove();
  newOuts.id = "showOuts";
  newOuts.innerHTML = voutsDesc;
  disOuts.appendChild(newOuts);
}

//SECTION SIX - DRAW MATCHUP (Batter/Pitcher images and text)
function drawBatter() {
 
  let Pit_Img = document.getElementById("matchbox");
  const newPit = document.createElement("div");
  const oldPit = document.getElementById("matchup1");
  oldPit.remove();
  newPit.id = "matchup1";
  newPit.innerHTML = `${curPitcher.Image}`;
  Pit_Img.appendChild(newPit);
 
  let tempVal1 = `<table style="padding-top: 0%;"> <tr> <b style="font-size: 30px" ;>PITCHER</b> <BR> </tr> <tr> <b>NAME:</b> ${curPitcher.Name} <BR> </tr> <tr> <B> PITCHER TYPE:</B> ${curPitcher.Hit_Rating}<BR> </tr> <tr> <b>TODAY:</b> 0 Earned Runs allowed<BR> </tr> </table> </div>`
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
 
  let tempVal2 = `<table style="padding-bottom: 0%;"> <tr> <BR> <b style="font-size: 30px" ;>HITTER</b> <BR> </tr> <tr> <b>NAME:</b> ${curHitter.Name} <BR> </tr> <tr> <B> HITTER TYPE:</B> ${curHitter.Hit_Rating}<BR> </tr> <tr> <b>TODAY: </b>  0 - 0 <BR> </tr> </table> </div>`
  let hitTxt = document.getElementById("matchtxt0");
  const newHtext = document.createElement("div");
  const oldHtext = document.getElementById("matchtxt2");
  oldHtext.remove();
  newHtext.id = "matchtxt2";
  newHtext.className = "matchtxt";
  newHtext.innerHTML = `${tempVal2}`;
  hitTxt.appendChild(newHtext);

}

//RESET THE GAME - NOT WORKING - HAD ISSUES WITH DRAWING and messages section
function resetGame() {
scoreByinn.visitors[0].runbyinn.length = 0;
scoreByinn.hometeam[0].runbyinn.length = 0;
console.log("RESET");
let curPitcher = "";
let curHitter = "";
let curPitName = "";
let curHitName = "";
let firstbase = 0;
let secondbase = 0;
let thirdbase = 0;
let inningout = 0;
let arrayScorecard = [];
let inning = 0;
let innhits = 0;
let innruns = 0;
let hits = 0;
let errors = 0;
let runs = 0;
let vttlRuns = 0;
let vttlHits = 0;
let httlRuns = 0;
let httlHits = 0;
let dBases = ' <br> <img src="../images/bases000.jpg" width="80%"  >';
let chgInnDesc = "";
let trackLineupV = 0;
let trackLineupH = 0;
let visitorUp = true;
let visInnsDesc = "";
let homeInnsDesc = "";
drawBases(dBases);
showOuts(0);

//can't figure out how to work thru clearing and then reinserting messages into messages ID

       
  
};


