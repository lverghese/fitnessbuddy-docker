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

//verify cookies
router.get('/', (req, res) => {
  console.log(req.session);

});

//return to homepage 
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;