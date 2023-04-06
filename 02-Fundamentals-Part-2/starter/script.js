"use strict";

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

// GOOD LUCK 😀

/*
const calcAverage = (i, x, y) => (i + x + y) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("Nobody wins");
  }
}

// Data 1
let dolphinAvg = calcAverage(44, 23, 71);
let koalaAvg = calcAverage(65, 54, 49);

console.log(dolphinAvg, koalaAvg);

checkWinner(dolphinAvg, koalaAvg);

// Data 2
dolphinAvg = calcAverage(85, 54, 41);
koalaAvg = calcAverage(23, 34, 27);

console.log(dolphinAvg, koalaAvg);

checkWinner(dolphinAvg, koalaAvg);
*/

/*
const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

console.log(calcTip(100));

const bills = [125, 555, 44];
console.log(bills);

const tips = [];
for (const bill of bills) {
  tips.push(calcTip(bill));
}
console.log(tips);

const totals = [];
for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}

console.log(totals);
*/

const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  mass: 78,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  height: 1.95,
  mass: 92,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${mark.fullName}'s BMI (${mark.bmi.toFixed(2)})`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullName}'s BMI (${john.bmi.toFixed(2)})`
  );
}
