const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return (
    employees.find(
      ({ firstName, lastName }) => employeeName === firstName || employeeName === lastName,
    ) || {}
  );
}

module.exports = getEmployeeByName;
