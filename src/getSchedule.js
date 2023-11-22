const data = require('../data/zoo_data');

let officeHour = '';
let exhibition = '';

const schedule = () => Object.entries(data.hours).reduce((acc, day) => {
  if (day[1].open === 0) {
    officeHour = 'CLOSED';
    exhibition = 'The zoo will be closed!';
  } else {
    officeHour = `Open from ${day[1].open}am until ${day[1].close}pm`;
    exhibition = data.species.filter((specie) => specie.availability.includes(day[0]))
      .map((animal) => animal.name);
  }
  if (!acc[day[0]]) acc[day[0]] = { officeHour, exhibition };
  return acc;
}, {});

const species = data.species.map((specie) => specie.name);
const days = Object.keys(data.hours);

function getSchedule(scheduleTarget) {
  if (days.includes(scheduleTarget)) {
    return Object.entries(data.hours).reduce((acc, day) => {
      if (day[0] === scheduleTarget) {
        acc[scheduleTarget] = Object.values(schedule())[Object
          .keys(schedule()).indexOf(scheduleTarget)];
      }
      return acc;
    }, {});
  }
  if (species.includes(scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return schedule();
}

module.exports = getSchedule;
