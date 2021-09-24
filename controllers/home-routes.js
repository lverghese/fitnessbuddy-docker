//'HOME' = LOGIN/SINGUP PAGE

const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    console.log('======================');
    User.findAll({
    })
    //TESTING: DISPLAYING SEEDED USER DATA
      .then(dbUserData => {
        const users = dbUserData.map(user => user.get({ plain: true }));
  
        res.render('login', { user, loggedIn: req.session.loggedIn});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // TESTING: get single user by id
  router.get('/user/:id', (req, res) => {
    User.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
  
        const user = dbUserData.get({ plain: true });
        //USING LOGIN PAGE TO RENDER UNTIL THERE ARE MORE TEMPLATES
        res.render('login', {
          user,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;