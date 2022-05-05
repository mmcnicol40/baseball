console.log("test drawing bases");
//let totAb = 0;

function calcAvg(ab, hits) {
  const gameAvg = hits / ab;
  return gameAvg;
}

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

  abResult: function () {
    let i = (Math.floor(Math.random() * 10));
    const cardopt = [
      "line out",
      "ground out",
      "strike out",
      "pop out",
      "single1",
      "double",
      "Triple",
      "single2",
      "single3",
      "HR"
    ];
    return cardopt[i];

  },
};

/*
console.log("TEST");
let c = document.getElementById ("myVideo");
let v = document.createElement ("video");
v.src = "../images/zero to one.mp4";
c.appendChild (v);
*/

console.log("TEST");
//let c = document.getElementById ("myVideo");
/*
document.addEventListener("keyup", function (event) {
  console.log("TEST - stage 2");
  if (event.code === "Enter") {
    console.log("TEST - stage 3");
   newMessage = " ";
    newMessage.innerHTML = '<video id="messages" width= "320" height="240";  autoplay> <source src="../images/zero to one.mp4" type="video/mp4" /> </video>';
    messages.appendChild(newMessage);
  }
});
*/

let messages = document.getElementById("myVideo");
//writing actions to screen
document.addEventListener("keypress", function (event) {

    if (Number(textbox.value) >= 0) {
      
      drawBases(textbox.value);
    
  }
});


let bases = "100";
//drawBases(bases);

function drawBases(bases) {
  let messages = document.getElementById("myVideo");
  const newMessage = document.createElement("div");
  const element = document.getElementById("diamond");
  switch (bases) {
    case "000": // empty bases
      element.remove();

      newMessage.id = "diamond";
      newMessage.innerHTML = ' <br> <img src="../images/bases0.jpg"  >';
      messages.appendChild(newMessage);
      break;

    case "100":
      element.remove();

      newMessage.id = "diamond";
      newMessage.innerHTML = '<video id="messages" width= "320" height="200";  autoplay> <source src="../images/0_single.mp4" type="video/mp4" /> </video>';
      messages.appendChild(newMessage);
      break;

      case "110":
        element.remove();
  
        newMessage.id = "diamond";
        newMessage.innerHTML = '<video id="messages" width= "320" height="240";  autoplay> <source src="../images/1_single.mp4" type="video/mp4" /> </video>';
        messages.appendChild(newMessage);

      break;
      case "111":
        element.remove();
  
        newMessage.id = "diamond";
        newMessage.innerHTML = ' <br> <img src="../images/bases111.jpg"  >';
        messages.appendChild(newMessage);

      break;

      case "011":
        element.remove();
  
        newMessage.id = "diamond";
        newMessage.innerHTML = ' <br> <img src="../images/bases011.jpg"  >';
        messages.appendChild(newMessage);

      break;

      case "010":
        element.remove();
  
        newMessage.id = "diamond";
        newMessage.innerHTML = ' <br> <img src="../images/bases010.jpg"  >';
        messages.appendChild(newMessage);

      break;

      case "001":
        element.remove();
  
        newMessage.id = "diamond";
        newMessage.innerHTML = ' <br> <img src="../images/bases001.jpg"  >';
        messages.appendChild(newMessage);

      break;

      case "101":
        element.remove();
  
        newMessage.id = "diamond";
        newMessage.innerHTML = ' <br> <img src="../images/bases101.jpg"  >';
        messages.appendChild(newMessage);

      break;
    default:
    // code block
  }

}

