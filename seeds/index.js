const seedUsers = require('./user-seeds');
const seedExercises = require('./exercises-seeds');
const seedPlan = require('./plan-seeds');
const seedDays = require('./day-seeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedPlan();
    console.log('\n----- PLAN SEEDED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedDays();
    console.log('\n----- DAYS SEEDED -----\n');
  
    await seedExercises();
    console.log('\n----- EXERCISES SEEDED -----\n');

    process.exit(0);
  };
  

  seedAll();