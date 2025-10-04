// https://docs.google.com/document/d/15yxPtWA8Pj8oWtpMgtLIhctw-4MKCq40/edit?pli=1
"use strict";

const myCountry = {
  country: "VietNam",
  capital: "HaNoi",
  language: "VietNamese",
  population: 100000000,
  neighbours: ["Lao", "Thai", "Campuchia"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} people, 3 neighbouring countries ${myCountry.neighbours[0]}, ${myCountry.neighbours[1]}, ${myCountry.neighbours[2]} and a capital called ${myCountry.capital}.`
);
console.log("------------------");

myCountry.population += 2000000;

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} people, 3 neighbouring countries ${myCountry.neighbours[0]}, ${myCountry.neighbours[1]}, ${myCountry.neighbours[2]} and a capital called ${myCountry.capital}.`
);
console.log("------------------");

myCountry["population"] -= 2000000;

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} people, 3 neighbouring countries ${myCountry.neighbours[0]}, ${myCountry.neighbours[1]}, ${myCountry.neighbours[2]} and a capital called ${myCountry.capital}.`
);
