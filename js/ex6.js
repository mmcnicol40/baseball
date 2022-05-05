console.log("reading JSON file - ryan solution");
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
  let i = (Math.floor(Math.random() * 6.5)) + (Math.floor(Math.random() * 6.5));
  let k = Math.floor(Math.random() * 2);
  console.log("dice roll - detail#", i)
  console.log("dice roll - card#", k)
  console.log("Pitchers Card - Giants", myArray.Giants[9][4].pitop[i]);
  console.log("Hitters Card - Dodgers",  bName,myArray.Dodgers[trackLineupV][4].hitop[i]);
  //return result;
}
);