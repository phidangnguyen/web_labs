// https://docs.google.com/document/d/1cLiKF0XNTNXW_ZMdZpN2q8MdtpgsEEhF/edit
"use strict";

const vietnam_population = 100000000;
const thailan_population = 60000000;
const china_population = 1100000000;
const usa_population = 300000000;

const populations = [
  vietnam_population,
  thailan_population,
  china_population,
  usa_population,
];

console.log("Populations: ", populations);

const percentageOfWorld1 = (population) => {
  const totalPopulation = 7900000000;
  return (population / totalPopulation) * 100;
};

const percentages = [];

for (let i = 0; i < populations.length; i++) {
  percentages[i] = percentageOfWorld1(populations[i]);
}
console.log("Percentages: ", percentages);

const percentages2 = [];

let index = 0;

while (index < populations.length) {
  percentages2[index] = percentageOfWorld1(populations[index]);
  index++;
}

console.log("Percentages2: ", percentages2);
