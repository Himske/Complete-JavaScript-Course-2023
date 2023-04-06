'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/

/*
Coding Challenge #1 

We're building a football betting app (soccer for my American friends 😅)! 
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data. 

Your tasks: 
1. Create one player array for each team (variables 'players1' and 
'players2') 
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players 
3. Create an array 'allPlayers' containing all players of both teams (22 
players) 
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic' 
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2') 
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in) 
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator. 

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...players) {
    const goals = {};
    for (const player of this.scored) {
      goals[player] = goals[player] ? goals[player] + 1 : 1;
    }
    for (let i = 0; i < players.length; i++) {
      console.log(players[i], goals[players[i]] || 0);
    }
  },
};

const [players1, players2] = game.players;
// console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.printGoals(...game.scored);

// team1 < team2 && console.log('Team1');
// team1 > team2 && console.log('Team2');

// Challenge 2
/*
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski") 

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

/*
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember) 

let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average.toFixed(2));

/*
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
 Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 😉 

for (const [key, value] of Object.entries(game.odds)) {
  const str = game[key] ? `victory ${game[key]}` : 'draw';
  console.log(`Odd of ${str}: ${value}`);
}

/*
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this: 
{ 
  Gnarby: 1, 
  Hummels: 1, 
  Lewandowski: 2 
}

const playerGoals = {};
for (const player of game.scored) {
  playerGoals[player] = playerGoals[player] + 1 || 1;
}
console.log(playerGoals);

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);
console.log(gameEvents);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

for (const [key, value] of gameEvents) {
  console.log(`[${key <= 45 ? 'FIRST' : 'SECOND'} HALF] ${key}: ${value}`);
}
*/

/*
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
*/
const title = str => {
  return str.replace(str[0], str[0].toUpperCase());
};

const toCamelCase = str => {
  const strings = str.trim().toLowerCase().split('_');
  return strings[0] + title(strings[1]);
};

const convertTextarea = ta => {
  const lines = ta.split('\n');
  for (const [i, value] of lines.entries()) {
    if (value.length > 0) console.log(toCamelCase(value).padEnd(20, ' ') + '✅'.repeat(i + 1));
  }
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  convertTextarea(text);
});
