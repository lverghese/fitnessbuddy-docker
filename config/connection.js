// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();

//connect to db
const sequelize = new Sequelize('', '', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;