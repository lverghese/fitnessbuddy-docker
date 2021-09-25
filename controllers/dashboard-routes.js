const router = require('express').Router();
const sequelize = require('../config/connection');
const { Bulk } = require('../models');
const withAuth = require('../utils/auth');

//how to determine which model to search from?
//ask about a variable based route that gets from model designated by varuable


// get all workouts for user's dashboard
router.get('/', withAuth, (req, res) => {  
    console.log('======================');
    Plan.findAll({
      attributes: [
       //get plan_id from user obj
      ]
    })
      .then(dbBulkData => {
        const posts = dbBulkData.map(goal => goal.get({ plain: true }));
        //on login start session render user's dashboard once we get user's data (goals > plan )
        res.render('dashboard', {
          posts,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;