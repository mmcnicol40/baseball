
console.log(" functions & baseball - dice probability (ex2)");
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

//console.log("giants  card (G) ", myArray.Giants[0][5].hitop[1]   );
//console.log("dodgers  card (d) ", myArray.Dodgers[0][4].hitop[2]   );
console.log("giants ", myArray.Giants.Name);


//***********************************************************************************************************************
/*
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

*/
 drawBatter()

console.log("ttt", myArray.Giants[0].Name);

function drawBatter() {
  let Pit_Img = document.getElementById("matchbox");
  const newPit = document.createElement("div");
  const oldPit = document.getElementById("matchup1");
  oldPit.remove();
  newPit.id = "matchup1";
  newPit.innerHTML = `${myArray.Dodgers[9].Image}`;
  Pit_Img.appendChild(newPit);

  let tempVal1 = `<table style="padding-top: 0%;"> <tr> <b style="font-size: 30px" ;>PITCHER</b> <BR> </tr> <tr> <b>NAME:</b> ${myArray.Dodgers[9].Name} <BR> </tr> <tr> <B> Pitcher Type:</B> ${myArray.Dodgers[9].Hit_Rating}<BR> </tr> <tr> <b>TODAY:</b> 5 Strike Outs / 2 Homeruns <BR> </tr> </table> </div>`
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
  newHtr.innerHTML = `${myArray.Giants[1].Image}`;
  htr_Img.appendChild(newHtr);

  let tempVal2 = `<table style="padding-bottom: 0%;"> <tr> <BR> <b style="font-size: 30px" ;>HITTER</b> <BR> </tr> <tr> <b>NAME:</b> ${myArray.Giants[1].Name} <BR> </tr> <tr> <B> Hitter Type:</B> ${myArray.Giants[1].Hit_Rating}<BR> </tr> <tr> <b>TODAY: </b>  2 - 4 (HR, Triple) <BR> </tr> </table> </div>`
  let hitTxt = document.getElementById("matchtxt0");
  const newHtext = document.createElement("div");
  const oldHtext = document.getElementById("matchtxt2");
  oldHtext.remove();
  newHtext.id = "matchtxt2";
  newHtext.className = "matchtxt";
  newHtext.innerHTML = `${tempVal2}`;
 hitTxt.appendChild(newHtext);

 
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
