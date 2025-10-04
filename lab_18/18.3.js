// https://docs.google.com/document/d/1j-B8EwiYoMdS82-9w_JVcq6YF7oD862T/edit
"use strict";

const myCountry = {
  country: "VietNam",
  capital: "HaNoi",
  language: "VietNamese",
  population: 100000000,
  neighbours: ["Lao", "Thai", "Campuchia"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language} people, 3 neighbouring countries ${this.neighbours[0]}, ${this.neighbours[1]}, ${this.neighbours[2]} and a capital called ${this.capital}.`;
  },
  checkIsland: function () {
    if (this.neighbours.length > 0) {
      this.isIsland = false;
    } else {
      this.isIsland = true;
    }
  },
};

myCountry.checkIsland();
console.log(myCountry.isIsland);

