// https://docs.google.com/document/d/1aYYSnzsNV-IMF6U8p-kLyC1dqdNfSOSO/edit
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

console.log("Is Array length = 4: ", populations.length === 4);
const percentageOfWorld1 = (population) => {
  const totalPopulation = 7900000000;
  return (population / totalPopulation) * 100;
};

const vietnam_percentage = percentageOfWorld1(vietnam_population);
const thailan_percentage = percentageOfWorld1(thailan_population);
const china_percentage = percentageOfWorld1(china_population);
const usa_percentage = percentageOfWorld1(usa_population);

const percentages = [
  vietnam_percentage,
  thailan_percentage,
  china_percentage,
  usa_percentage,
];

console.log("Percentages: ", percentages);
