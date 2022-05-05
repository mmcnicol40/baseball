console.log(" BACKUP of drawing diamond");
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



  if (textbox.value === "one") {
    const newMessage = document.createElement("div");
    newMessage.id = "diamond";
   // newMessage.innerHTML = ` "#1"`;
    newMessage.innerHTML = '<video id="messages" width= "320" height="240";  autoplay> <source src="../images/0_single.mp4" type="video/mp4" /> </video>';
    messages.appendChild(newMessage);

  } else {

  if (textbox.value === "two") {
    const element = document.getElementById("diamond");
    console.log(element);
    element.remove();

    const newMessage = document.createElement("div");
    newMessage.id = "diamond";
   // newMessage.innerHTML = ` "#1"`;
    newMessage.innerHTML = '<video id="messages" width= "320" height="240";  autoplay> <source src="../images/1_single.mp4" type="video/mp4" /> </video>';
    messages.appendChild(newMessage);

  }
  if (textbox.value === "three") {
    const element = document.getElementById("diamond");
    console.log(element);
    element.remove();

    const newMessage = document.createElement("div");
    newMessage.id = "diamond";
   // newMessage.innerHTML = ` "#1"`;
    newMessage.innerHTML = '<video id="messages" width= "320" height="240";  autoplay> <source src="../images/2_single.mp4" type="video/mp4" /> </video>';
    messages.appendChild(newMessage);
  }
}
});

