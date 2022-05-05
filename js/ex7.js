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


