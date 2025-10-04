// https://docs.google.com/document/d/1IQNOlXvUKrwdYcr9eI4tOIBXBaj438FB/edit
"use strict";

const calcTip = (amount) => {
  if (amount >= 50 && amount <= 300) {
    return amount * 0.15;
  }
  return amount * 0.2;
};

const tip100 = calcTip(100);
console.log("Tip 100: ", tip100);

const bills = [125, 555, 44, 122, 222, 33, 123, 100, 90, 230];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; ++i) {
  tips[i] = calcTip(bills[i]);
  totals[i] = calcTip(bills[i]) + bills[i];
}

console.log("Tips: ", tips);
console.log("Totals: ", totals);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const avgTotals = calcAverage(totals);
console.log("Avg Totals: ", avgTotals.toFixed(2));
