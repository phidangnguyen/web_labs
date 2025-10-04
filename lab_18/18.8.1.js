// https://docs.google.com/document/d/1IQNOlXvUKrwdYcr9eI4tOIBXBaj438FB/edit
"use strict";

const markObj = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = (this.mass / (this.height * this.height)).toFixed(2);
  },
};

const johnObj = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = (this.mass / (this.height * this.height)).toFixed(2);
  },
};

markObj.calcBMI();
johnObj.calcBMI();

if (markObj.bmi > johnObj.bmi) {
  console.log(
    `${markObj.fullname}'s BMI (${markObj.bmi}) is higher than ${johnObj.fullname}'s (${johnObj.bmi})!`
  );
} else if (johnObj.bmi > markObj.bmi) {
  console.log(
    `${johnObj.fullname}'s BMI (${johnObj.bmi}) is higher than ${markObj.fullname}'s (${markObj.bmi})!`
  );
}
