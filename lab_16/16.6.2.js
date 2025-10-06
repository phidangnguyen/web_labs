// https://docs.google.com/document/d/1tqR_67dmz94pto-5MUvEb8ByInrvq_iz/edit
"use strict";

const tipCalculator = (amount) => {
  return amount > 50 && amount < 300 ? amount * 0.15 : amount * 0.2;
};


const amount1 = 275;
const tip1 = tipCalculator(amount1);
console.log(`Case1: The bill was ${amount1}, the tip was ${tip1}, and the total value ${amount1 + tip1}`)

const amount2 = 40;
const tip2 = tipCalculator(amount2);
console.log(`Case1: The bill was ${amount2}, the tip was ${tip2}, and the total value ${amount2 + tip2}`)

const amount3 = 430;
const tip3 = tipCalculator(amount3);
console.log(`Case1: The bill was ${amount3}, the tip was ${tip3}, and the total value ${amount3 + tip3}`)