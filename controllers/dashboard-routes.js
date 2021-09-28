const router = require('express').Router();
const sequelize = require('../config/connection');
const { Plan, User, Exercise, Day } = require('../models');
const withAuth = require('../utils/auth');

//took out withAuth for testing
router.get('/',  (req, res) => {
  Plan.findAll({
    //get the plan that matches the user id
    //where: {
      //user_id: req.session.user_id
    //},
    attributes: [
      'plan_name'
    ],
    //include the exercises for that plan
    include: [
      {
        model: Exercise,
        attributes: 
        [
          'exercise_name',
          'setLength',
          'repLength',
          'workout_plan_id',
          'day_id'
        ]
      }
      // ,
      // {
      //   model: Day,
      //   attributes: ['day_name']
      // }
    ]
  })
  .then(dbExerciseData => res.json(dbExerciseData))
    //const plan = dbPlanData.map(post => post.get({ plain: true }));

    // res.render('homepage', {
    //   plan,
    //   loggedIn: req.session.loggedIn
    // });
  //})
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id')

module.exports = router;



