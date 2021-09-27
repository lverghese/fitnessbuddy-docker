const router = require('express').Router();
const sequelize = require('../config/connection');
const { Plan, User, Exercise, Day } = require('../models');
const withAuth = require('../utils/auth');

/* redirect to this html path when user selects signup? 
then get all plans...how will user select a plan and how to attatch the plan to that user?
possible solution:
 - add a 'workout_id' attr to user model?
 - problem: how to add the chosen plan name to the newly created user obj?
            - how to grab that attribute from current user session and tell (below)
            router.get to 'findOne({ where: plan_name: req.body.plan_name})
            - how to discerne the exercises from the plan name?
            possible solution: 
                - get exercises where req.body.session.'users plan_id' (not sure how to get this syntax yet)
                - so 'localhost/dashboard' Exercise.findAll where req.body.id.session.user.plan_id
            Question (line 27): 
               - how to get user obj attributes from session?        
*/


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
  .then(dbPlanData => {
    const plan = dbPlanData.map(post => post.get({ plain: true }));

    // res.render('homepage', {
    //   plan,
    //   loggedIn: req.session.loggedIn
    // });
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
