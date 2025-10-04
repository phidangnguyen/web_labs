// https://docs.google.com/document/d/1pG_6bwA7rVoC5z-w3Ftcoh0QP3Le-_RH/edit
"use strict";

const calcTip = (amount) => {
  if (amount >= 50 && amount <= 300) {
    return amount * 0.15;
  }
  return amount * 0.2;
};

const tip100 = calcTip(100);
console.log("Tip 100: ", tip100);

const bills = [125, 555, 44];
let tips = [];

for (let i = 0; i < bills.length; ++i) {
  tips[i] = calcTip(bills[i]);
}

console.log("Tips: ", tips);
