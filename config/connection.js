// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();

//connect to db
const sequelize = new Sequelize('fitness_buddy_db', 'root', 'Cena2022!', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;