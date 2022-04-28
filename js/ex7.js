//playing with arrays
console.log("testing stuff");

const newdata = ["me", "you", "them", [3, "100"]];
const ydata = [];
let maxno = newdata.length;
for (let i = 0; i < maxno; i++) {
  //console.log(newdata[i]);
  //console.log(newdata[i][0])
  if (newdata[i][0] == "t") {
    ydata.push(newdata[i]);
    //console.log(newdata[i]);
  }
}
console.log(ydata);

//object
const myObject = {
  age: 5,
  name: "mitch"
}
console.log(myObject.age,myObject.name);

//function
function calc10yrs (age) {
  age = age + 10;
  return(age);
}
console.log(calc10yrs(10));
console.log(`${myObject.name}'s age today is ${myObject.age} and in 10 years it will be ${calc10yrs(myObject.age)}`);

//class (blueprint / container)
class Mytools {
  constructor(tool,purpose,cost,amtsold,onhand) {
    this.tool = tool;
    this.purpose = purpose;
    this.cost = cost;
    this.amtsold = amtsold;
    this.onhand = onhand;
  }
  //return tool info (method)
  describe() {
    return `${this.tool} costs ${this.cost} and sold ${this.amtsold} units. Onhand amt is ${this.onhand}`;
  }
  avail() {
    let availinv = "no";    
    let inventoryavail = (this.onhand - this.amtsold);
       if (inventoryavail > 0) {availinv = "yes";};
    return `${this.tool} costs ${this.cost} and sold ${this.amtsold} units. Onhand amt is ${this.onhand}. Is inventory avail? ${availinv}  `;
  }
}
const hammer = new Mytools("hammer","pound","$5 bucks",30,25);
const screwdriver = new Mytools("screwdriver","screw","$2 bucks",5,39);
const pliers = new Mytools("pliers","ply", "$1 dollar",45,53);

hammer.amtsold =99;
pliers.amtsold += 10;

console.log(hammer.describe());
console.log(screwdriver.describe());
console.log(pliers.describe());
console.log(pliers.avail());
console.log(hammer.avail());