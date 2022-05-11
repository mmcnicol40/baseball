console.log("test");
/*
const myList = document.getElementById('myList');
const pearsItem = document.getElementById('pearsItem');

const orangesItem = document.createElement('li');
orangesItem.textContent = 'Oranges';
orangesItem.id = "topitem"
myList.insertBefore(orangesItem, pearsItem);

const orangesItem2 = document.createElement('li');
orangesItem2.textContent = 'Dog';
orangesItem2.id = "topitem2"
myList.insertBefore(orangesItem2, topitem);

const orangesItem3 = document.createElement('li');
orangesItem3.textContent = 'Cat';
myList.insertBefore(orangesItem3, topitem2);

//// playing without any luck
myArray = ["a","b","c","d","e","f","g","h","i","j"];

const myList = document.getElementById('myList');
for (x=1; x<2; ++x) {
writeitout((x).toString().toString(),(x+1).toString(),myArray[x])
}


function writeitout(oid,nid,content) {
console.log(oid,nid,content);
 const content1 = "a";
const orangesItem = document.createElement('li');
orangesItem.textContent = `${content}`;
orangesItem.id = `${nid}`;
myList.insertBefore(orangesItem, a);
 
};
*/

//array stuff

const scoreByinn =  {
    "visitors": [
        {
        "Runs": 0,
        "Hits": 0,
        "Errors":0,
        "runbyinn": [  3,5   ]
    }
],
  
    "hometeam": [
        {
        "Runs": 1,
        "Hits": 4,
        "Errors":0,
        "runbyinn": [1,2  ]
        }
    ]
}
console.log(scoreByinn);
console.log("test");

scoreByinn.visitors[0].runbyinn.push(3);
console.log (scoreByinn.visitors[0].runbyinn   );
scoreByinn.hometeam[0].runbyinn.push(9);
console.log (scoreByinn.hometeam[0].runbyinn   );