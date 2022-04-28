console.log(" HW 4 ex 5 - Count the vowels");
let myCnt = 0;
let newWord = prompt("Enter a word");

const len = newWord.length;
const originalWord = newWord;

//eliminate case sensitivity
let lowercaseWord = originalWord.toLowerCase();
let uppercaseWord = originalWord.toUpperCase();

const tmpName = newWord;
let myWordlist = [];
let myVowllist = [];
let bkWordlist = [];

//capturing only the vowels from the original word
for (let i = 0; i < lowercaseWord.length; i++) {
  if (
    lowercaseWord[i] === "a" ||
    lowercaseWord[i] === "e" ||
    lowercaseWord[i] === "i" ||
    lowercaseWord[i] === "o" ||
    lowercaseWord[i] === "u" ||
    lowercaseWord[i] === "y"
  ) {
    myVowllist.push(lowercaseWord[i]);
  }
  myWordlist.push(lowercaseWord[i]);
}

//reverse engineering the original word - creating backwards spelling for comparison
for (let i = lowercaseWord.length - 1; i >= 0; i--) {
  {
    bkWordlist.push(lowercaseWord[i]);
  }
}

//determining if this is a palindrome by comparing original word (in an array) to backwards word (in an array)
let isPalin = myWordlist.toString() === bkWordlist.toString();
let palintxt = "";
if (isPalin === false) {
  palintxt = "not";
}

//printing out required message
console.log(
  `"${newWord}" contains ${myVowllist.length} vowel(s) and is ${palintxt} a palindrome.`
);
