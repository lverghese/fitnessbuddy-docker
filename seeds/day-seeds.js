const { Day } = require('../models');

const dayData = [
  {
    day_name:  'Monday',
  },
  {
    day_name:  'Tuesday',
  },
  {
    day_name:  'Wednesday',
  },
  {
    day_name:  'Thursday',
  },
  {
    day_name:  'Friday',
  }
];

const seedDays = () => Day.bulkCreate(dayData);

module.exports = seedDays;