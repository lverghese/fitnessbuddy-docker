const router = require('express').Router();
const sequelize = require('../config/connection');
const { Plan, User, Exercise, Day } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Plan.findOne({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'plan_name'
    ],
    include: [
      {
        model: Exercise,
        attributes: [
        'exercise_name',
          'setLength',
          'repLength',
          'workout_plan_id',
          'day_id'
        ]
      },
      {
        model: Day,
        attributes: ['day_name']
      }
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

module.exports = router;
