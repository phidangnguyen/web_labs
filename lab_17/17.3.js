// https://docs.google.com/document/d/1zg0BFCRIiupOHZHvEDH50yK9IupT-v3c/edit
"use strict";

const percentageOfWorld1 = (population) => {
  const totalPopulation = 7900000000;
  return (population / totalPopulation) * 100;
};

const vietnam = percentageOfWorld1(100000000);
const thailan = percentageOfWorld1(600000000);
const usa = percentageOfWorld1(300000000);

console.log(vietnam);
console.log(thailan);
console.log(usa);

console.log("-----------------");

const percentageOfWorld2 = (population) => {
  const totalPopulation = 7900000000;
  return (population / totalPopulation) * 100;
};

const china = percentageOfWorld1(1000000000);
const japan = percentageOfWorld1(600000000);
const uk = percentageOfWorld1(300000000);

console.log(china);
console.log(japan);
console.log(uk);
