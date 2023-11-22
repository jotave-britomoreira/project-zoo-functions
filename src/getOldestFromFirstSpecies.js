const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalManagedByEmployeeId = employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const findAnimalById = species
    .filter((animal) => animal.id === animalManagedByEmployeeId)[0].residents
    .reduce((acc, crr) => (acc.age > crr.age ? acc : crr));
  return Object.values(findAnimalById);
}

module.exports = getOldestFromFirstSpecies;
