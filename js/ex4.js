console.log(" HW 4 ex 4 - List of Words (Array)");

const myWordlist = [];

//console.log(myWordlist[0]); //11
let newWord = "";
let myCnt = 0;

while (newWord !== "STOP") {
  newWord = prompt("Enter a word or enter STOP to exit:");
  if (newWord !== "STOP") {
    myWordlist.push(newWord);
//    console.log(myWordlist[myCnt]);
  }
  myCnt = myCnt + 1;
}
if (myWordlist.length > 0) {
  console.log(`You entered the following ${myWordlist.length} words:`);
  for (let i = 0; i < myWordlist.length; i++) {
    console.log(myWordlist[i]);
  }
}
if (myCnt === 1) {
  console.log(`You entered stop without entering any words`);
}
