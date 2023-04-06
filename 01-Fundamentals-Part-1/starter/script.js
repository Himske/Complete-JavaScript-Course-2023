/*
const country = "Sweden";
const continent = "Europe";
let population = 10000000;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "Swedish";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//language = "Skanish";

console.log(population / 2);
population++;
console.log(population);

const finishPopulation = 6000000;
console.log(finishPopulation > population);

const averagePopulation = 33000000;
console.log(population < averagePopulation);

const description =
  country +
  " is in " +
  continent +
  " and it's " +
  Math.round(population / 1000000) +
  " million people speak " +
  language;

console.log(description);
console.log(25 - 10 * 5);
*/

/*
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log("Mark BMI: ", markBMI);
console.log("John BMI: ", johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall
const markMass2 = 95;
const markHeight2 = 1.88;

const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;

console.log("Mark BMI: ", markBMI2);
console.log("John BMI: ", johnBMI2);

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);
*/

/*
const country = "Sweden";
const continent = "Europe";
let population = 10;
const language = "Swedish";

const description = `${country} is in ${continent} and it's ${population} million people speak ${language}`;

console.log(description);

const averagePopulation = 33;

if (population > averagePopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${averagePopulation - population} below average`
  );
}
*/

/*
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;
*/

/*
const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})!`);
}
*/

/*
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
*/

/*
const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;
if (dolphins > koalas) {
  console.log("The winner is the Dolphins");
} else if (koalas > dolphins) {
  console.log("The winner is the Koalas");
} else {
  console.log("It's a draw");
}
*/

// Test for bill values 275, 40 and 430
const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);
