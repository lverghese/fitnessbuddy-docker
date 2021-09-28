const { User } = require('../models');

const userData = [
  {
    username: "Carol",
    password: "password1234",
    workout_plan_id: "1"
  },
  {
    username: "Dave",
    password: "password1234",
    workout_plan_id: "2"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
//CAUTION:
//seeds do NOT hash the password- must be hashed via the update route before the login will work