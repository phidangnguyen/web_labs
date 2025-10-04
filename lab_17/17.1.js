// https://docs.google.com/document/d/1JQEP1IxBhP5dhPm6j0BfrqD-ODT_rogc/edit
"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const result = describeCountry("Finland", 6, "Helsinki");
const result2 = describeCountry("VietNam", 100, "Hanoi");
const result3 = describeCountry("Thailan", 60, "BangCoc");
console.log(result);
console.log(result2);
console.log(result3);