// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   });
// };

///hardcode .env for npm run seedsd to work
let sequelize;

 if (process.env.JAWSDB_URL) {
   sequelize = new Sequelize(process.env.JAWSDB_URL);
 } else {
<<<<<<< HEAD
     sequelize = new Sequelize('fitness_buddy_db', 'root', 'Raisin13.sql!', {
=======
     sequelize = new Sequelize('fitness_buddy_db', 'root', 'USCaptain33', {
>>>>>>> ba600cc1662e41260ee298499e0d7d83398805aa
     host: 'localhost',
     dialect: 'mysql',
     port: 3306
   });
 };

module.exports = sequelize;