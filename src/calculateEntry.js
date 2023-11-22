const data = require('../data/zoo_data');

const countEntrants = (entrants) => ({
  child: entrants.filter((entrant) => entrant.age < 18).length,
  adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
  senior: entrants.filter((entrant) => entrant.age >= 50).length,
});

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const objectEntrants = countEntrants(entrants);
  const numbers = Object.values(objectEntrants);
  const prices = [20.99, 49.99, 24.99];
  const total = numbers.reduce((acc, number, index) => acc + (number * prices[index]), 0);
  return parseFloat(total.toFixed(2));
}

module.exports = { calculateEntry, countEntrants };
