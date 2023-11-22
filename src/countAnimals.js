const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, species) => {
      acc[species.name] = species.residents.length;
      return acc;
    }, {});
  }
  const getSpecie = data.species.find((specie) => specie.name === animal.species);
  if (animal.sex) {
    return getSpecie.residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return getSpecie.residents.length;
};

module.exports = countAnimals;
