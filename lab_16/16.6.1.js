// https://docs.google.com/document/d/1tqR_67dmz94pto-5MUvEb8ByInrvq_iz/edit
"use strict";

const calAvg = (x, y, z) => {
  return (x + y + z) / 3;
};

const calWinner = (dolpins, koalas) => {
  let result;
  if (dolpins > koalas && dolpins > 100) {
    result = "Winner is Dolpins";
  } else if (koalas > dolpins && koalas > 100) {
    result = "Winner is Koalas";
  } else if (koalas == dolpins && koalas > 100) {
    result = "Draw result";
  } else {
    result = "No result";
  }
  return result;
};

const case1 = calWinner(calAvg(96, 108, 89), calAvg(88, 91, 110));
console.log("Case 1: ", case1);

const case2 = calWinner(calAvg(97, 112, 101), calAvg(109, 95, 123));
console.log("Case 2: ", case2);

const case3 = calWinner(calAvg(97, 112, 101), calAvg(109, 95, 106));
console.log("Case 3: ", case3);