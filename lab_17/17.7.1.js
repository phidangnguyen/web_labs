// https://docs.google.com/document/d/1pG_6bwA7rVoC5z-w3Ftcoh0QP3Le-_RH/edit
"use strict";

const calcAverage = (points) => {
  return (points[0] + points[1] + points[2]) / 3;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return "The match ended in a draw";
  }
};

const dolphins_1 = [44, 23, 71];
const koalas_1 = [65, 54, 49];
const result_1 = checkWinner(calcAverage(dolphins_1), calcAverage(koalas_1));
console.log("Result 1: ", result_1);

const dolphins_2 = [85, 54, 41];
const koalas_2 = [23, 34, 27];
const result_2 = checkWinner(calcAverage(dolphins_2), calcAverage(koalas_2));
console.log("Result 2: ", result_2);
