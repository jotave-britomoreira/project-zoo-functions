const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species.find((element) => element.name === animal)
  .residents.every((resident) => resident.age >= age);

module.exports = getAnimalsOlderThan;
