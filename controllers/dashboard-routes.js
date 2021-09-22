const router = require('express').Router();
const sequelize = require('../config/connection');
const { Excercises, ser } = require('../models');

// get all workouts for user's dashboard
router.get('/', (req, res) => {
    console.log('======================');
    Excercises.findAll({
      attributes: [
        'id',
        'user_id',
        'goal'
        //seqelize would be here literal to select anything needed
      ]
      /*
      include: [
            //other models to include
      ]
      */
    })
      .then(dbGoalData => {
        const posts = dbGoalData.map(goal => goal.get({ plain: true }));
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

  //need routes to get the weekly calendar/list of workouts to do that week
  router.get('/workouts', (req, res) => {

  });