console.log("reading JSON file - two diff poss solutions");
//solution #1
let trackLineupV = 0;
let trackLineupH = 0;
let visitorUp=true;

//function reads JSON file from local drive and present content for use
async function getData2() {
  const fetchedData = await fetch('../data/test2.json')
    .then(results => results.json())
    .then(data => { return data });
  return fetchedData;
}
//reset at start of game


//listening for click then call "getData"
button.addEventListener("click", async function () {
  let username = textbox.value;
  const myArray = await getData2();
  console.log("myArray", myArray);
  let bName = myArray.Dodgers[trackLineupV][0].Name;

//increment batter
if (visitorUp) {
  console.log("visitor is up",trackLineupV);
  trackLineupV = trackLineupV + 1;
  if (trackLineupV ===9) {
    trackLineupV=0
  };
  console.log("bname",trackLineupV,bName);
  bName = myArray.Dodgers[trackLineupV][0].Name;
 
}


  // at bat results based on dice rolls
  let i = (Math.floor(Math.random() * 6.5)) + (Math.floor(Math.random() * 6));
  let k = Math.floor(Math.random() * 2);
  console.log("dice roll - detail#", i)
  console.log("dice roll - card#", k)
  console.log("Pitchers Card - Giants", myArray.Giants[9][4].pitop[i]);
  console.log("Hitters Card - Dodgers",  bName,myArray.Dodgers[trackLineupV][4].hitop[i]);
  //return result;
}
);

// this was ex7 (different approach to accessing JSON file - successful try #2)
// solutions #2
/*

let tname = [];

//function reads JSON file from local drive and present content for use
async function getData2() {
  const fetchedData = await fetch('../test2.json')
    .then(results => results.json())
    .then(data => { return data });
  //return data.Giants.player2.hitop;
  return fetchedData;
}



//function reads JSON file from local drive and present content for use
function getDatae() {
  return new Promise(resolve => {
    resolve(fetch('../test2.json')
      .then(results => results.json())
      .then(data => bill2(data.Giants.player2.hitop)));
  });

  // console.log(data.Giants.player2.hitop);




  //function attempting to read data outside of fetch
  function bill2(name) {
    console.log("test", name);
    const tname = name;
    console.log(tname);
  }
}


//listening for click then call "getData"
button.addEventListener("click", async function () {
  let username = textbox.value;
  const myArray = await getData2();
  console.log("myArray", myArray.Giants.player2.hitop);
});





//const testing

/*
fetch(`https://api.github.com/users/${username}`)
.then((response) => response.json())
.then((user) => {
  const userlogin = user.login;     // userlogins i'm familiar with: ninersontherize, mmcnicol40, bpesquet, ashercsulb
  console.log("user", user);
  */

  // wait for click and then grab value of textbox and call function getUserInfo with value


