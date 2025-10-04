// https://docs.google.com/document/d/1CwAqZzcfW9qib3ijT9JzTInW5zKqt2ya/edit
"use strict";

const percentageOfWorld1 = (population) => {
  const totalPopulation = 7900000000;
  return (population / totalPopulation) * 100;
};

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage.toFixed(4)}% of the world.`;
};


const vietnam = describePopulation("VietNam", 100000000);
const usa = describePopulation("USA", 300000000);
const china = describePopulation("China", 1200000000);

console.log(vietnam)
console.log(usa)
console.log(china)