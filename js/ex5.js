console.log("jared solution");

function getData() {
  fetch('../test2.json')
      .then(results => results.json())
      .then(data => console.log(data.Giants.player2.hitop));
  return data.Giants.player2.hitop;
}

function doSomethingWithIt(players, username) {
  console.log("here we are")
  console.log(players)
  console.log(username)
}


function getDataJared(username) {
  console.log(username)
  fetch('../test2.json')
      .then(results => results.json())
      .then(data => doSomethingWithIt(data.Giants,username));
  //return data.Giants.player2.hitop;
}

function getData3() {
  var afterPromise = "";
  var test = fetch('test2.json')
      .then(results => results.json())
      .then(data => data.Giants)
  return test;
}

async function getData4() {
  var test = await fetch('test2.json')
      .then(results => results.json())
      .then(data => { return data.Giants })
      .then(function (result) { console.log(result); return result;})
}

async function getAllPlayers() {
  try {
      // GET a list of player IDs 
      var thePlayers = await superagent.getData4()
      // wait for 3 seconds (just for the sake of this example)
      await delay();
      // GET information about each book
      return superagent.getData4()
  } catch (error) {
      // If any of the awaited promises was rejected, this catch block
      // would catch the rejection reason
      return null;
  }
}


//listening for click then call "getData"
button.addEventListener("click", function () {
let username = textbox.value;
  const myArray = getDataJared(username);
  result = getDataJared(username);
  //console.log("myArray", myArray);
  //console.log("result", result);
});
