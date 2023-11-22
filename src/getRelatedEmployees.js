const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.some((idManage) => id === idManage));
}

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const newManegers = employees.filter((employee) => employee.managers.includes(managerId));
  const result = newManegers.map((employee) => `${employee.firstName} ${employee.lastName}`);
  return result;
};

module.exports = { isManager, getRelatedEmployees };
