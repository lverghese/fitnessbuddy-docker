const router = require('express').Router();
const sequelize = require('../config/connection');
const { Plan, User, Exercise, Day } = require('../models');
const withAuth = require('../utils/auth');

//took out withAuth for testing
//user/:id
router.get('/',  (req, res) => {
  // Dashboard should get one user's profile
  // user's profile should have one plan associated with it
  // plans will have multiple exercises spanning across days
  Plan.findOne({
    where: {
      id: req.session.plan_id
    },
    include: [
      {
        model: Exercise,
        attributes: [
        'exercise_name', 
        'day_id'
         , 
         'setLength', 
         'repLength'
      ],
        include: [
          {
            model: Day,
            attributes: ['day_name']
          }
        ]
      }
    ]
  })
  .then((dbPlanData) => {
    if (!dbPlanData) {
      res.status(404).json({ message: 'No plan data for this user' });
      return;
    }
    // const plan = dbPlanData.map(post => post.get({ plain: true }));
    // console.log(setLength);
    // console.log(repLength);
    const { exercises } = dbPlanData.get({ plain: true });

    const dayOne = exercises.filter(
      (exercise) => exercise.day_id === 1
    );
    const dayTwo = exercises.filter(
      (exercise) => exercise.day_id === 2
    );
    const dayThree = exercises.filter(
      (exercise) => exercise.day_id === 3
    );
    const dayFour = exercises.filter(
      (exercise) => exercise.day_id === 4
    );
    const dayFive = exercises.filter(
      (exercise) => exercise.day_id === 5
    );
    res.render('dashboard', {
      dayOne,
      dayTwo,
      dayThree,
      dayFour,
      dayFive,
      loggedIn: true,
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
  module.exports = router;