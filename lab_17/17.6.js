// https://docs.google.com/document/d/16TKlDGu7YHoO16Osq-sJr5OgVSQdQ0HT/edit
"use strict";

const neighbours = ["Lao", "Thai", "Campuchia"];

console.log(neighbours);
console.log("------------------------------------------");

neighbours.push("Utopia");

console.log(neighbours);
console.log("------------------------------------------");

neighbours.pop();

console.log(neighbours);
console.log("------------------------------------------");

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country.");
  console.log("------------------------------------------");
}

const lao_index = neighbours.indexOf("Lao");

neighbours[lao_index] = "Singapore";

console.log(neighbours);
console.log("------------------------------------------");
