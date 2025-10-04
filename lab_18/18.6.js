// https://docs.google.com/document/d/1HfRj0QusbKe2sPs0KQpynapv6aUchG8A/edit
"use strict";

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  const arrayChild = listOfNeighbours[i];
  if (arrayChild.length >= 2) {
    for (let j = arrayChild.length - 1; j > 0; j--) {
      console.log(arrayChild[j]);
    }
  }
}