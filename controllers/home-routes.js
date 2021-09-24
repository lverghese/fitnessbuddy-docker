const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

//display possible workouts on homepage
router.get('/', (req, res) => {
  res.render('homepage'
  //,
  //list workouts or images or somehting random for homepage - no functionality aside from login buttons)
  )
});

module.exports = router;
  
