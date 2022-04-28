console.log(" functions and baseball hit 1 card");
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
    let i = (Math.floor(Math.random()*10));
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

console.log(batCard.player, batCard.hitAvg, batCard.abResult());
