const seedUsers = require('./user-seeds');
const seedBulk = require('./bulk-seeds');
//const seedCut = require('./cut-seeds');
const seedTone = require('./tone-seeds');
const seedExercises = require('./exercises-seeds');
const seedPlan = require('./plan-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    await seedBulk();
    console.log('\n----- BULK PLAN SEEDED -----\n');
  
    //missing cut seeds: 
    //await seedCut();
    //console.log('\n----- CUT PLAN SEEDED -----\n');
    
    await seedTone();
    console.log('\n----- TONE PLAN SEEDED -----\n');
      
    await seedPlan();
    console.log('\n----- PLAN SEEDED -----\n');
  
    await seedExercises();
    console.log('\n----- EXERCISES SEEDED -----\n');

    process.exit(0);
  };
  
  //Halted for api method testing
  //seedAll();